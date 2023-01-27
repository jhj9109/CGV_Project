const axios = require('axios').default;

interface Options {
    theatercode: string;
    palyymd: string;
    screencode: string;
    playnum: string;
}

const samplePayload = {
    theatercode: '0013',//용아맥: 0013
    palyymd: '20230129',//yyyymmdd
    screencode: '018',//용아맥-IMAX관 018
    playnum: '6',// 1~6
    starttime: '9999',// 2605
    endtime: '9999',// 2927
    theatername: '',// CGV 용산아이파크몰
    cnt: '',// 123
    screenname: ''// IMAX관
}

export default async function getSeatList(obj: Options) {

    if (obj.theatercode === undefined ||
        obj.palyymd === undefined ||
        obj.screencode === undefined ||
        obj.playnum === undefined)
        throw "getSeatList에 필수 인자가 입력되지 않았습니다."

    const payload = {
        theatercode: obj.theatercode,
        palyymd: obj.palyymd,
        screencode: obj.screencode,
        playnum: obj.playnum,
        starttime: '9999',
        endtime: '9999',
        theatername: '',
        cnt: '',
        screenname: ''
    }

    /**
     * 헤더에 저게 있어야 응답이 온다.
     */
    const headers = {
        Host: "www.cgv.co.kr",
        Origin: "http://www.cgv.co.kr"
    }

    const GET_SEAT_LIST_URL = "http://www.cgv.co.kr/common/showtimes/iframeTheater.aspx/GetSeatList";

    try {
        const res = await axios({
            url: GET_SEAT_LIST_URL,
            method: 'post',
            headers,
            data: payload,
        });
        const data = res.data;//{d: "html 구조" || "[]""}
        const d = data.d;
        return d;
    } catch (error) {
        throw error;
    }
}