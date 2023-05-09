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

const url = (영화정보: MovieInfo, 영화관타입: TheaterType, 지점정보: TheaterInfo, 날짜: string) => {
    const 영화Id = 영화정보.midx;
    const 상영관타입별영화코드 = 영화정보.mcodes[영화관타입];
    const 지역 = 지점정보.areacode;
    `http://www.cgv.co.kr/common/showtimes/iframeMovie.aspx?midx=${영화Id}&mcode=${상영관타입별영화코드}&areacode=${지역}&date=${날짜}`
}

