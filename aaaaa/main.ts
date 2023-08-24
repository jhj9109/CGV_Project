import test from "node:test";
import type { Options } from "./getSeatList";
import getSeatList from "./getSeatList";
import { sendEmail } from "./sendEmail";

const MAX_PLAYNUM = 8; // 3시간 * 8타임
const ONE_SECOND = 1000;

const TO_EMAIL = "jhj91_09@naver.com";

const defaultOption = {
  theatercode: '0013',
  palyymd: '20230512',
  screencode: '018',
  playnum: '5',
}

const confData = {
  "영화": {
    "오펜하이머": {
      "midx": "87175",
      "mocodes": {
        "기본": "20033175",
        "IMAX_LASER_2D": "20033398"
      }
    }
  },
  "상영관": {
    "용산아이파크몰": {
      "theatercode": "0013",
      "screencodes": {
        "IMAX_LASER_2D": "018"
      }
    }
  }
}

const setTitle = (palyymd: string) => {
  const yy = parseInt(palyymd.substring(0, 4), 10);
  const mm = parseInt(palyymd.substring(4, 6), 10);
  const dd = parseInt(palyymd.substring(6), 10);

  const date = new Date(yy, mm, dd);

  const dayOfWeek = date.toLocaleString('ko-KR', { weekday: 'long' });
  
  const title = `${mm}월 ${dd}일 ${dayOfWeek} 영화 오픈`

  return title
}

// 시작시간은 아직 알기 어렵다
const t = `http://www.cgv.co.kr/ticket/?MOVIE_CD=20033440&MOVIE_CD_GROUP=20033175&PLAY_YMD=20230824&THEATER_CD=0013&PLAY_START_TM=2645&AREA_CD=13&SCREEN_CD=045`
// play_ymd === palyymd
const getQuickUrl = (play_ymd: string) => `http://www.cgv.co.kr/ticket/?MOVIE_CD=20033440&MOVIE_CD_GROUP=20033175&PLAY_YMD=${play_ymd}&THEATER_CD=0013&PLAY_START_TM=2645&AREA_CD=13&SCREEN_CD=045`

const setText = (palyymd: string) => {
  const ticketSite = `http://www.cgv.co.kr/ticket/`;
  const quickUrl = getQuickUrl(palyymd);
  const ticketSite2 = `http://www.cgv.co.kr/ticket/?MOVIE_CD=20033397&MOVIE_CD_GROUP=20033175`;
  const text = `
  빠르게가기: ${quickUrl}


  티켓사이트: ${ticketSite}
  `
  return text;
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
  if (html !== "[]") {
    console.log(dataStr + " 새로운 일정 등장");

    const subject = setTitle(option.palyymd);
    const text = setText(option.palyymd);
    sendEmail(TO_EMAIL, subject, text);
    
    return ;
  }

  console.log(dataStr + " 일정 X");
  setTimeout(() => main(option), 10 * ONE_SECOND);
}

(function () {
  // 1. option 생성
  const { theatercode, screencodes } = confData["상영관"]["용산아이파크몰"]
  const screencode = screencodes["IMAX_LASER_2D"];
  
  (["20230830", "20230831", "20230901", "20230902", "20230903"] as string[]).forEach((palyymd: string) => main({
    theatercode,
    palyymd,
    screencode,
    playnum: '1',
  }))
}());
