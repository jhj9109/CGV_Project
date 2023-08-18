import type { Options } from "./getSeatList";
import getSeatList from "./getSeatList";
import soundPlay from "./soundPlay";
import notice from "./notice";
import { getSeatInfosFromHtml } from "./getSeatInfos";
import { loadJsonFile } from "./utils";

const MAX_PLAYNUM = 8; // 3시간 * 8타임
const ONE_SECOND = 1000;

const defaultOption = {
  theatercode: '0013',
  palyymd: '20230512',
  screencode: '018',
  playnum: '5',
}

async function main(option: Options) {
  let html = '[]';

  // 2. 옵션을 바탕으로 url, payload, 헤더 세팅하여 요청 보내기 => 요청 성공 확인
  try {
    html = await getSeatList(option);
  } catch (error) {
    console.error(error);
    console.log(new Date().toLocaleString('ko-kr') + " getSeatList에서 에러 발생");
  }

  // 4. 성공적인 응답인지 확인
  const dataStr = new Date().toLocaleString('ko-kr');
  if (html === "[]") {
    console.log(dataStr + " 일정 X");
    setTimeout(() => main(option), 10 * ONE_SECOND);
  } else {
    console.log(dataStr + " 새로운 일정 등장");
    // 5. 성공적인 응답 html 파싱하여 구체적인 좌석 정보 추출
    
    const seatInfos = getSeatInfosFromHtml(html);

    console.log(seatInfos);

    try {
      // soundPlay(); // codespaces에서 실행중에는 에러 발생.
      notice("새로운 일정 등장")
      console.log("알림 생성")
    } catch (error) {
      console.log(error)
    }
  }
}

(function () {
  // 1. option 생성
  const config = loadJsonFile('./movie.conf.json')
  // console.log(config)
  
  const { theatercode, screencodes } = config["상영관"]["용산아이파크몰"]
  console.log(theatercode, screencodes)
  const screencode = screencodes["IMAX_LASER_2D"];
  console.log(screencode);

  (["20230830"] as string[]).forEach((palyymd: string) => main({
    theatercode,
    palyymd,
    screencode,
    playnum: '1',
  }))
}());
