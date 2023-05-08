import * as cheerio from 'cheerio';

interface SeatInfo {
  seatElement: cheerio.Element;
  left: number;
  top: number;
  row: number;
  col: number;
  seatNumber: string,
  reversed: boolean,
}

const pxNum = (s: string) => Number(s.substring(0, s.length - 2)); // '12px' 꼴

const newSeatInfo = (seatElement:cheerio.Element, $:cheerio.CheerioAPI): SeatInfo => ({
  seatElement,
  left: pxNum($(seatElement).css('left') as string),
  top: pxNum($(seatElement).css('top') as string),
  reversed: $(seatElement).hasClass('reversed'),
  row: 0,
  col: 0,
  seatNumber: '',
})

const uniqueArr= <T,>(arr: T[]) => Array.from(new Set(arr));

const LOWER_ALPHA = 'abcdefghijklmnopqrstuvwxyz';
const UPPER_ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const indexToAlpha = (i:number, isUpper = true) => (isUpper ? UPPER_ALPHA : LOWER_ALPHA)[i - 1];

const testOne = (html: string) => {
  // 하나짜리로 테스트

  const $ = cheerio.load(html);

  const mini_seat_selector = 'div.mini_seat';

  const mini_seats = $(mini_seat_selector).toArray();
  const sample = mini_seats[0];

  // console.log(sample);
  console.log(sample.attribs.style);
  console.log(sample.attribs.class);

  const left = $(sample).css('left');
  const top = $(sample).css('top');

  if (!left || !top) {
    throw new Error('mini_seat 엘레먼트에서 css 속성 left | top이 존재하지 않았습니다.');
  }

  const leftNum = pxNum(left);
  const topNum = pxNum(top);

  console.log(leftNum, topNum);

  const reversed = $(sample).hasClass('reversed');
  console.log(reversed)
}

export const getSeatInfosFromHtml = (html: string) => {
  const $ = cheerio.load(html);

  const mini_seat_selector = 'div.mini_seat';

  const miniSeatElements = $(mini_seat_selector).toArray(); // seat: <div class="mini_seat" style="left:12px; top:0px;"><span></span></div>

  const seatInfos = miniSeatElements.map(seatElement => newSeatInfo(seatElement, $));

  const top_keys = uniqueArr(seatInfos.map(seatInfo => seatInfo.top)).sort((a, b) => a - b);
  const left_keys = uniqueArr(seatInfos.map(seatInfo => seatInfo.left)).sort((a, b) => a - b);

  // console.log(left_keys, top_keys)

  const topKey_to_idx = Object.fromEntries(top_keys.map((key, idx) => [key, idx + 1]));
  const leftKey_to_idx = Object.fromEntries(left_keys.map((key, idx) => [key, idx + 1]));

  // console.log(leftKey_to_idx, topKey_to_idx);

  seatInfos.forEach(seatInfo => {
    seatInfo.row = topKey_to_idx[seatInfo.top];
    seatInfo.col = leftKey_to_idx[seatInfo.left];
    seatInfo.seatNumber = `${indexToAlpha(seatInfo.row)}${seatInfo.col}`
  })

  seatInfos.sort((a, b) => a.top !== b.top ? a.top - b.top : a.left - b.left)

  // seatInfos.filter(seatInfo => seatInfo.row === 1).forEach(seatInfo => {
  //   console.log(seatInfo.seatNumber)
  // })

  return seatInfos;
}
