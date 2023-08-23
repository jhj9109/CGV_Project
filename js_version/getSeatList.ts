import axios from 'axios';
import { getHtmlString } from './api';

export interface Options {
  theatercode: string;
  palyymd: string;
  screencode: string;
  playnum: string;
}

interface SeatListRequestPayload {
  theatercode: string;
  palyymd: string;
  screencode: string;
  playnum: string;
  starttime: string;
  endtime: string;
  theatername: string;
  cnt: string;
  screenname: string;
}

const GET_SEAT_LIST_URL = "http://www.cgv.co.kr/common/showtimes/iframeTheater.aspx/GetSeatList";

const newPayload = (option: Options): SeatListRequestPayload => ({
  theatercode: option.theatercode,
  palyymd: option.palyymd,
  screencode: option.screencode,
  playnum: option.playnum,
  starttime: '9999',
  endtime: '9999',
  theatername: '',
  cnt: '',
  screenname: ''
})

/**
 * 헤더에 저게 있어야 응답이 온다.
 * GetSeatList가 올바르게 동작하기 위해선 Content-Type도 추가해야 되더라.
 */
const DEFAULT_HEADERS = {
  Host: "www.cgv.co.kr",
  Origin: "http://www.cgv.co.kr",
  "Content-Type": "application/json; charset=UTF-8"
}

// (theatercode & screencode) & (palyymd & playnum) 조합으로 특정 테이블 조회
const samplePayload = {
  theatercode: '0013',//용아맥: 0013
  screencode: '018',//용아맥-IMAX관 018
  palyymd: '20230129',//yyyymmdd
  playnum: '6',// 1~6
  starttime: '9999',// 2605
  endtime: '9999',// 2927
  theatername: '',// CGV 용산아이파크몰
  cnt: '',// 123
  screenname: ''// IMAX관
}

export default async function getSeatList(obj: Options) {

  const payload = newPayload(obj);

  try {

    const htmlString = getHtmlString({
      url: GET_SEAT_LIST_URL,
      method: 'post',
      headers: DEFAULT_HEADERS,
      payload,
      params: {}
    });

    return htmlString;

  } catch (error) {
    
    return '';
    
    // throw error;

  }
}
