import type { Options } from "./getSeatList";
import getSeatList from "./getSeatList";
import soundPlay from "./soundPlay";
import notice from "./notice";
import { theaterScreenCode } from "./payload_code_info";
import { getSeatInfosFromHtml } from "./getSeatInfos";

const days = [
  '20230830', '20230831', '20230901', '20230902',
  // '20230903', '20230904', '20230905', '20230906',
  // '20230907', '20230908', '20230909', '20230910',
  // '20230911'
]

// const blessed = require('blessed');

// const screen = blessed.screen();

// const lines = Array.from({length: days.length}).map(i => blessed.text({top: i}))
const lines = Array.from({length: days.length}).map(i => '')

// const updateLine = (line: any, newContent: string) => {
//   line.setContent(newContent);
//   screen.render();
// }

const MAX_PLAYNUM = 8; // 3시간 * 8타임 

const defaultOption = {
  theatercode: '0013',
  screencode: '018',
  palyymd: '20230517',
  playnum: '1',
}

async function main(option: Options, line: any) {
  let html = '[]';

  // 2. 옵션을 바탕으로 url, payload, 헤더 세팅하여 요청 보내기 => 요청 성공 확인
  try {
    html = await getSeatList(option);
  } catch (error) {
    console.error(error);
    console.log(new Date().toLocaleString('ko-kr') + " getSeatList에서 에러 발생");
  }

  // 4. 성공적인 응답인지 확인
  let newContent: string;
  if (html === "[]") {
    
    newContent = new Date().toLocaleTimeString('ko-kr') + ": " + option.palyymd + " None";
    // updateLine(line, newContent)
    console.log(newContent);
    
    setTimeout(() => main(option, line), 10 * 1000);

  } else {
    
    newContent = new Date().toLocaleString('ko-kr') + `새로운 일정 ${option.palyymd} 등장`;
    // updateLine(line, newContent)
    console.log(newContent);
    
    // 5. 성공적인 응답 html 파싱하여 구체적인 좌석 정보 추출

    const seatInfos = getSeatInfosFromHtml(html);

    // console.log(seatInfos);

    try {
      // soundPlay(); // codespaces에서 실행중에는 에러 발생.
      notice("새로운 일정 등장")
      // console.log("알림 생성")
    } catch (error) {
      console.log(error)
    }
  }
}

(function () {
  // 1. 옵션 생성
  // 1-1. 타겟 설정(영화관 & 스크린)
  const { theatercode, screencode } = theaterScreenCode.IMAX_용산_2D;
  // 1-2. 타임 설정(날짜 & 시간)
  const { palyymd, playnum } = defaultOption;
  days.forEach((palyymd, i) => main({
    theatercode,
    screencode,
    palyymd,
    playnum
  }, lines[i]));
  // screen.render();
}());
