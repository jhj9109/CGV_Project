import * as cheerio from 'cheerio';
import { requestMovieTypes } from '../api';

export const movieInfoHtmlString = `<div class="sect-movie-type">
<h4>영화선택</h4>
<ul>
    
        <li><a href="#menu" data-midx="86996" data-koreatitle="분노의 질주-라이드 오어 다이" data-cgvcode="20032571" title="현재 선택됨 분노의 질주-라이드 오어 다이">분노의 질주-라이드 오어 다이</a></li>
    
        <li><a href="#menu" data-midx="86996" data-koreatitle="분노의 질주-라이드 오어 다이(4DX 2D)" data-cgvcode="20032672" title="분노의 질주-라이드 오어 다이(4DX 2D)">분노의 질주-라이드 오어 다이(4DX 2D)</a></li>
    
        <li><a href="#menu" data-midx="86996" data-koreatitle="분노의 질주-라이드 오어 다이(4DX SCREEN 2D)" data-cgvcode="20032674" title="분노의 질주-라이드 오어 다이(4DX SCREEN 2D)">분노의 질주-라이드 오어 다이(4DX SCREEN 2D)</a></li>
    
        <li><a href="#menu" data-midx="86996" data-koreatitle="분노의 질주-라이드 오어 다이(4DX SOUNDX 2D)" data-cgvcode="20032673" title="분노의 질주-라이드 오어 다이(4DX SOUNDX 2D)">분노의 질주-라이드 오어 다이(4DX SOUNDX 2D)</a></li>
    
        <li><a href="#menu" data-midx="86996" data-koreatitle="분노의 질주-라이드 오어 다이(세계최초 00시 특별상영)" data-cgvcode="20032684" title="분노의 질주-라이드 오어 다이(세계최초 00시 특별상영)">분노의 질주-라이드 오어 다이(세계최초 00시 특별상영)</a></li>
    
        <li><a href="#menu" data-midx="86996" data-koreatitle="분노의 질주-라이드 오어 다이(세계최초 00시 특별상영,4DX 2D)" data-cgvcode="20032685" title="분노의 질주-라이드 오어 다이(세계최초 00시 특별상영,4DX 2D)">분노의 질주-라이드 오어 다이(세계최초 00시 특별상영,4DX 2D)</a></li>
    
        <li><a href="#menu" data-midx="86996" data-koreatitle="분노의 질주-라이드 오어 다이(세계최초 00시 특별상영,4DX SCREEN 2D)" data-cgvcode="20032686" title="분노의 질주-라이드 오어 다이(세계최초 00시 특별상영,4DX SCREEN 2D)">분노의 질주-라이드 오어 다이(세계최초 00시 특별상영,4DX SCREEN 2D)</a></li>
    
        <li><a href="#menu" data-midx="86996" data-koreatitle="분노의 질주-라이드 오어 다이(세계최초 00시 특별상영,IMAX 2D)" data-cgvcode="20032687" title="분노의 질주-라이드 오어 다이(세계최초 00시 특별상영,IMAX 2D)">분노의 질주-라이드 오어 다이(세계최초 00시 특별상영,IMAX 2D)</a></li>
    
        <li><a href="#menu" data-midx="86996" data-koreatitle="분노의 질주-라이드 오어 다이(세계최초 00시 특별상영,IMAX LASER 2D)" data-cgvcode="20032688" title="분노의 질주-라이드 오어 다이(세계최초 00시 특별상영,IMAX LASER 2D)">분노의 질주-라이드 오어 다이(세계최초 00시 특별상영,IMAX LASER 2D)</a></li>
    
        <li><a href="#menu" data-midx="86996" data-koreatitle="분노의 질주-라이드 오어 다이(DOLBY ATMOS mix 2D)" data-cgvcode="20032695" title="분노의 질주-라이드 오어 다이(DOLBY ATMOS mix 2D)">분노의 질주-라이드 오어 다이(DOLBY ATMOS mix 2D)</a></li>
    
        <li class="on"><a href="#menu" data-midx="86996" data-koreatitle="분노의 질주-라이드 오어 다이(IMAX 2D)" data-cgvcode="20032670" title="분노의 질주-라이드 오어 다이(IMAX 2D)">분노의 질주-라이드 오어 다이(IMAX 2D)</a></li>
    
        <li><a href="#menu" data-midx="86996" data-koreatitle="분노의 질주-라이드 오어 다이(IMAX LASER 2D)" data-cgvcode="20032671" title="분노의 질주-라이드 오어 다이(IMAX LASER 2D)">분노의 질주-라이드 오어 다이(IMAX LASER 2D)</a></li>
    
        <li><a href="#menu" data-midx="86996" data-koreatitle="분노의 질주-라이드 오어 다이(PRIVATE BOX)" data-cgvcode="20032678" title="분노의 질주-라이드 오어 다이(PRIVATE BOX)">분노의 질주-라이드 오어 다이(PRIVATE BOX)</a></li>
    
        <li><a href="#menu" data-midx="86996" data-koreatitle="분노의 질주-라이드 오어 다이(PRIVATE BOX, 세계최초 00시 특별상영)" data-cgvcode="20032697" title="분노의 질주-라이드 오어 다이(PRIVATE BOX, 세계최초 00시 특별상영)">분노의 질주-라이드 오어 다이(PRIVATE BOX, 세계최초 00시 특별상영)</a></li>
    
        <li><a href="#menu" data-midx="86996" data-koreatitle="분노의 질주-라이드 오어 다이(PRIVATE BOX,IMAX LASER 2D)" data-cgvcode="20032679" title="분노의 질주-라이드 오어 다이(PRIVATE BOX,IMAX LASER 2D)">분노의 질주-라이드 오어 다이(PRIVATE BOX,IMAX LASER 2D)</a></li>
    
        <li><a href="#menu" data-midx="86996" data-koreatitle="분노의 질주-라이드 오어 다이(PRIVATE BOX,SCREENX 2D)" data-cgvcode="20032680" title="분노의 질주-라이드 오어 다이(PRIVATE BOX,SCREENX 2D)">분노의 질주-라이드 오어 다이(PRIVATE BOX,SCREENX 2D)</a></li>
    
        <li><a href="#menu" data-midx="86996" data-koreatitle="분노의 질주-라이드 오어 다이(SCREENX 2D)" data-cgvcode="20032675" title="분노의 질주-라이드 오어 다이(SCREENX 2D)">분노의 질주-라이드 오어 다이(SCREENX 2D)</a></li>
    
        <li><a href="#menu" data-midx="86996" data-koreatitle="분노의 질주-라이드 오어 다이(SCREENX SOUNDX 2D)" data-cgvcode="20032676" title="분노의 질주-라이드 오어 다이(SCREENX SOUNDX 2D)">분노의 질주-라이드 오어 다이(SCREENX SOUNDX 2D)</a></li>
    
        <li><a href="#menu" data-midx="86996" data-koreatitle="분노의 질주-라이드 오어 다이(SOUNDX 2D)" data-cgvcode="20032669" title="분노의 질주-라이드 오어 다이(SOUNDX 2D)">분노의 질주-라이드 오어 다이(SOUNDX 2D)</a></li>
    
        <li><a href="#menu" data-midx="86996" data-koreatitle="분노의 질주-라이드 오어 다이(SUITE CINEMA)" data-cgvcode="20032677" title="분노의 질주-라이드 오어 다이(SUITE CINEMA)">분노의 질주-라이드 오어 다이(SUITE CINEMA)</a></li>
    
</ul>
</div>`

/**
 * 영화의 상영시간 정보를 한눈에 확인 할 수 있는 페이지.
 * 영화의 id인 midx를 이용해 호출한다.
 * http://www.cgv.co.kr/movies/detail-view/show-times.aspx?midx=86996#menu
 * 
 * div.cols-content div.col-detail div.sect-movie-type ul li
 * - li당 영화 타입 하나씩 배치
 * - 현재 보여지는 타입은 li.on
 * - li a
 *   - href="#menu"
 *   - data-midx="86996"
 *   - data-koreatitle="분노의 질주-라이드 오어 다이" 
 *   - data-cgvcode="20032571" 
 *   - title="현재 선택됨 분노의 질주-라이드 오어 다이"
 *   - text: 분노의 질주-라이드 오어 다이
 * 
 * 특정 타입을 선택하려면?
 * - cgvcode가 영화안에서도 타입별로 다르다. => 그러나 어떤 코드가 어떤 타입인지 미리 알 수 없다.
 * - koreatitle에 ()안에 영화 타입이 써져있다.
 *   - e.g. IAMX LASER 2D: 분노의 질주-라이드 오어 다이(IMAX LASER 2D)
 *   - IMAX LASER 2D와 매칭시키면 될듯하다.
 */

export interface MovieType {
  href: string;
  midx: string;
  koreatitle: string;
  cgvcode: string;
  title: string;
  typeName: string;
}

const re = /[^()]*\(([^()]+)\)/;
const extractTypeName = (koeartitle: string) =>
  ((res: RegExpExecArray | null) => res === null ? '' : res[1])(re.exec(koeartitle))
const a = (res: RegExpExecArray | null) => (res === null ? '' : res[1])

const newMovieType = (el: cheerio.Element): MovieType => ({
  href: el.attribs['href'],
  midx: el.attribs['data-midx'],
  koreatitle: el.attribs['data-koreatitle'],
  cgvcode: el.attribs['data-cgvcode'],
  title: el.attribs['title'],
  typeName: extractTypeName(el.attribs['data-koreatitle'])
})

export const MOVIE_TYPE_NAME = {
  '': '',
  '4DX_2D': '4DX 2D',
  '4DX_SCREEN_2D': '4DX SCREEN 2D',
  '4DX_SOUNDX_2D': '4DX SOUNDX 2D',
  '세계최초_00시_특별상영': '세계최초 00시 특별상영',
  '세계최초_00시_특별상영,4DX_2D': '세계최초 00시 특별상영,4DX 2D',
  '세계최초_00시_특별상영,4DX_SCREEN_2D': '세계최초 00시 특별상영,4DX SCREEN 2D',
  '세계최초_00시_특별상영,IMAX_2D': '세계최초 00시 특별상영,IMAX 2D',
  '세계최초_00시_특별상영,IMAX_LASER_2D': '세계최초 00시 특별상영,IMAX LASER 2D',
  'DOLBY_ATMOS_mix_2D': 'DOLBY ATMOS mix 2D',
  'IMAX_2D': 'IMAX 2D',
  'IMAX_LASER_2D': 'IMAX LASER 2D',
  'PRIVATE_BOX': 'PRIVATE BOX',
  'PRIVATE_BOX,_세계최초_00시_특별상영': 'PRIVATE BOX, 세계최초 00시 특별상영',
  'PRIVATE_BOX,IMAX_LASER_2D': 'PRIVATE BOX,IMAX LASER 2D',
  'PRIVATE_BOX,SCREENX_2D': 'PRIVATE BOX,SCREENX 2D',
  'SCREENX_2D': 'SCREENX 2D',
  'SCREENX_SOUNDX_2D': 'SCREENX SOUNDX 2D',
  'SOUNDX_2D': 'SOUNDX 2D',
  'SUITE_CINEMA': 'SUITE CINEMA',

}


/*
'IMAX LASER 2D': {
  href: '#menu',
  midx: '86996',
  koreatitle: '분노의 질주-라이드 오어 다이(IMAX LASER 2D)',
  cgvcode: '20032671',
  title: '분노의 질주-라이드 오어 다이(IMAX LASER 2D)',
  typeName: 'IMAX LASER 2D'
}
*/
export const newMovieTypeMap = async (midx:string) => {

  const htmlString = await requestMovieTypes(midx);
  const $ = cheerio.load(htmlString);

  
  // const selector = 'div.cols-content div.col-detail div.sect-movie-type ul li a';
  const selector = 'div.sect-movie-type ul li a';
  
  const movieTypes = $(selector).toArray().map(newMovieType);
  
  // const imaxLaser2d = movieTypes.filter(el => el.typeName === 'IMAX LASER 2D')
  // const movieTypeNames = movieTypes.map(el => el.typeName)
  // const keyValue = movieTypeNames.forEach(n => console.log(`'${n.replace(/[ ]/g, '_')}': '${n}',`))
  // console.log(movieTypes)
  // console.log(movieTypeNames)
  // console.log(imaxLaser2d)

  const movieTypeMap = movieTypes.reduce((obj, cur) => {
    obj[cur.typeName] = cur;
    return obj;
  }, {} as Record<string, MovieType>)

  return movieTypeMap;
}

// const movieTypeMap = newMovieTypeMap(htmlString);
// const { midx } = movieTypeMap[MOVIE_TYPE_NAME.IMAX_LASER_2D]
// console.log(midx)