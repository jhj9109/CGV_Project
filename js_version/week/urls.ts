/**
 * midx: 지점, 용산 86883
 * mcode: 영화관 타입, 용산 아이멕스 2D: 20032468, 용산 아이맥스 3D: 20032465
 */
type TheaterType = "아이맥스_2D" | "아이맥스_3D";

interface MovieInfo {
    midx: string;
    mcodes: Record<TheaterType, string>
}

interface TheaterInfo {
    areacode: string;
    theatercode: string;
}

const movieInfos: Record<string, MovieInfo> = {
    가오갤: { midx: '86883', mcodes: { 아이맥스_2D: '20032468', 아이맥스_3D: '20032465'} },
    분노의질주: { midx: '86996', mcodes: { 아이맥스_2D: '20032671', 아이맥스_3D: '' } },
}

const theaterInfos: Record<string, TheaterInfo> = {
    용산: { areacode: '01', theatercode: '0013' }
}

const 서울지역_용산아이맥스_가오갤_URL = (date: string) => 
    `http://www.cgv.co.kr/common/showtimes/iframeMovie.aspx?midx=86883&mcode=20032468&areacode=13&date=${date}`

const toQueryString = (queries: object) =>
    Object.entries(queries).map(([key, value]) => `${key}=${value}`).join('&')

const getUrl = (movie: MovieInfo, movieType: TheaterType, theater: TheaterInfo, date: string) => {
    const BASE_URL = 'http://www.cgv.co.kr/common/showtimes/iframeMovie.aspx';

    if (!(movieType in movie)) {
        throw new Error(`${movieType}이 movie의 mcodes(${Object.keys(movie.mcodes).join('|')})에 포함되지 않습니다.`);
    }

    const queries = {
        midx: movie.midx,
        mcode: movie.mcodes[movieType],
        areacode: theater.areacode,
        date
    };

    return BASE_URL + '?' + toQueryString(queries);
}

const test = () => {
    const q = toQueryString({
        key1: 'value1',
        key2: 'value2',
        key3: 'value3',
        key4: 'value4',
    })
    console.log(q);
}

// test();