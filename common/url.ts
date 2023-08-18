const baseUrl = "http://www.cgv.co.kr"


const getUrl = {}

type MovieId = string; // 오펜하이머: 87175
type MovieTypeCode = string; // 오펜하이머 IMAX LASER 2D: 20033407
type AreaCode = string; // 서울: 13
type DateString = string; // 20230816

/**
 * 1.영화 상세페이지
 * - midx: 영화id
 * e.g. http://www.cgv.co.kr/movies/detail-view/?midx=87175
 */

getUrl["상세페이지"] = (midx: MovieId) => `${baseUrl}/movies/detail-view/?midx=${midx}`

/**
 * 2.영화 상세페이지 > 상영시간표
 * - midx: 영화id
 * e.g. http://www.cgv.co.kr/movies/detail-view/show-times.aspx?midx=87175#menu
 */

getUrl["상세페이지_상영시간표"] = (midx: MovieId) => `${baseUrl}/movies/detail-view/show-times.aspx?midx=${midx}`

/**
 * 3.영화타입별 상영시간표
 * 
 * -e.g. http://www.cgv.co.kr/common/showtimes/iframeMovie.aspx?midx=87175&mcode=20033398#menu
 */

getUrl["영화타입별_상영시간표"] = (midx: MovieId, mcode: MovieTypeCode) =>
    `${baseUrl}/common/showtimes/iframeMovie.aspx?midx=${midx}&mcode=${mcode}`

getUrl["영화타입날짜별_상영시간표"] = (midx: MovieId, mcode: MovieTypeCode, areacode: AreaCode, date: DateString) =>
    `${baseUrl}/common/showtimes/iframeMovie.aspx?midx=${midx}&mcode=${mcode}&areacode=${areacode}&date=${date}`

getUrl["미니맵"] = () =>
    `${baseUrl}/common/showtimes/iframeTheater.aspx/GetSeatList`
/**
{
    "theatercode": "0013",
    "palyymd": "20230815",
    "screencode": "018",
    "playnum": "1",
    "starttime": "1234",
    "endtime": "1234",
    "theatername": "CGV 용산아이파크몰",
    "cnt": "1234",
    "screenname": "IMAX관"
}
- 모든 키-값 필수.
- 값으로 "" 불가
- 위 4개는 필수.
*/
