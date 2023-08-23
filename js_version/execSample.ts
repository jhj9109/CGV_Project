// import axios from 'axios';
import { newCityInfoMap, newDates } from "./dayList/dayListParse";
import { newMovieTypeMap, movieInfoHtmlString, MOVIE_TYPE_NAME } from "./movie/movieInfo";

/*

1. midx => 영화타입별 스케줄
- http://www.cgv.co.kr/movies/detail-view/show-times.aspx?midx=86996

2. midx && mcode => 영화타입별 지역 스케줄
- http://www.cgv.co.kr/common/showtimes/iframeMovie.aspx?midx=86996&mcode=20032571

3. midx && mcode && areacode (&& date: 지역별 탭 atag의 href에 포함되어있음) => 영화타입지역별 날짜 스케줄
- http://www.cgv.co.kr/common/showtimes/iframeMovie.aspx?midx=86996&mcode=20032571&areacode=15,04,05&date=20230517

4. midx && mcode && areacode && date => 영화타입지역날짜별 스케줄
- 3과 동일
- 상영관별 스케줄 확보 가능.
*/

async function main(midx: string) {
  // 1. (영화 === midx) ==> movieTypes

  const movieTypeMap = await newMovieTypeMap(midx);

  // console.log(movieTypeMap);

  // 2. movieType ===> mcode === cgvcode
  const targetMovieType = MOVIE_TYPE_NAME.IMAX_LASER_2D
  const { cgvcode } = movieTypeMap[targetMovieType];
  const mcode = cgvcode;

  // 3. midx && mcode => areacode
  const cityInfoMap = await newCityInfoMap(midx, mcode);

  // console.log(cityInfoMap);

  // 4. 서울's areacode => areacode

  const { areacode, date } = cityInfoMap['서울'];

  // console.log(areacode, date)

  // 5. midx && mcode && areacode (&& date) => href => 날짜별
  const dates = await newDates(midx, mcode, areacode, date);
  console.log(dates);
}

main('86996'); // 분노의질주;

