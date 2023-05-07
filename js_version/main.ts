import type { Options } from "./getSeatList";
import getSeatList from "./getSeatList";
import soundPlay from "./soundPlay";
import notice from "./notice";
import { theaterScreenCode } from "./payload_code_info";

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
  if (html === "[]") {
    console.log(new Date().toLocaleString('ko-kr') + " None");
  } else {
    // 5. 성공적인 응답이였다면 알림
    console.log(new Date().toLocaleString('ko-kr') + " 새로운 일정 등장");
    try {
      soundPlay();
      notice("새로운 일정 등장")
      console.log("알림 생성")
    } catch (error) {
      console.log(error)
      console.log("사운드 출력 에러 발생");
    }
  }
  setTimeout(() => main(option), 10 * 1000);
}

(function () {
  // 1. 옵션 생성
  // 1-1. 타겟 설정(영화관 & 스크린)
  const { theatercode, screencode } = theaterScreenCode.가오갤_IMAX_용산_2D;
  // 1-2. 타임 설정(날짜 & 시간)
  const { palyymd, playnum } = defaultOption;
  const option: Options = {
    theatercode,
    screencode,
    palyymd,
    playnum
  };
  main(option);
}());