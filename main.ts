import getSeatList from "./getSeatList";
import soundPlay from "./soundPlay";
import notice from "./notice";

async function check() {
    let html = '[]';
    
    try {
        html = await getSeatList({
            theatercode: '0013',//용아맥: 0013
            palyymd: '20230202',//yyyymmdd
            screencode: '018',//용아맥-IMAX관 018
            playnum: '5',// 1~6
        });
    } catch (error) {
        console.error(error);
        console.log(new Date().toLocaleString('ko-kr') + " getSeatList에서 에러 발생");
    }

    if (html === "[]") {
        console.log(new Date().toLocaleString('ko-kr') + " None");
    } else {
        console.log(new Date().toLocaleString('ko-kr') + " 새로운 일정 등장");
        try {
            soundPlay();
            notice("새로운 일정 등장")
        } catch (error) {
            console.log(error)
            console.log("사운드 출력 에러 발생");
        }
    }
    setTimeout(check, 10 * 1000);
}
(async function main() {
    check();
}())
