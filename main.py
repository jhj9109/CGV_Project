import requests
from bs4 import BeautifulSoup as bs
from parse import get_yyyymmdd_by_url

HTML_PARSER = "html.parser"
AREA_CODE = "areacode"
THEATER_CODE = "theatersCode"
MOVIE_ID = "midx"  # 특정 영화
MOVIE_CODE = "mcode"  # 특정 영화 & 특정 상영관 종류
IMAX_LASER_2D = "imax_laser_2d"
BASE_URL = "http://www.cgv.co.kr/common/showtimes"
BASE_URL_BY_THEATER = f"{BASE_URL}/iframeTheater.aspx"
BASE_URL_BY_MOVIE = f"{BASE_URL}/iframeMovie.aspx"
sample_url = "http://www.cgv.co.kr/common/showtimes/iframeMovie.aspx?midx=84949&mcode=20028635&areacode=13"

movies = {
    "spider_man": {
        MOVIE_ID: "84949",
        MOVIE_CODE: {
            IMAX_LASER_2D: "20028635"
        }
    }
}

theaters = {
    "yongsan": {
        AREA_CODE: "01",
        THEATER_CODE: "0013",
    }
}


def create_url(movie_name, theater_name, theater_type="imax_laser_2d", yyyymmdd=""):
    areacode = theaters[theater_name][AREA_CODE]
    theaterscode = theaters[theater_name][THEATER_CODE]
    midx = movies[movie_name][MOVIE_ID]

    if theater_type:
        # 특정영화의 상영시간표
        mcode = movies[movie_name][MOVIE_CODE][theater_type]
        # areacode는 13 -> 용산을 의미
        url = f"{BASE_URL_BY_MOVIE}?midx={midx}&mcode={mcode}&areacode={theaterscode}"
    else:
        # 특정상영관의 상영시간표
        # areacode는 01 -> 서울을 의미
        url = f"{BASE_URL_BY_THEATER}?areacode={areacode}&theatercode={theaterscode}&midx={midx}"
    if yyyymmdd:
        # 특정일자 기입.
        url += f"&date={yyyymmdd}"
    return url


def get_soup_from_url(url):
    response = requests.get(url)  # response 객체
    content = response.content  # html
    soup = bs(content, HTML_PARSER)  # bs class
    return soup


def get_attr(tag, attr):
    return tag.get(attr) if tag.has_attr(attr) else []


def is_contain(tag, attr, target):
    return target in get_attr(tag, attr)


def is_contain_class_from_tag(target_cls):
    def contain_class(tag):
        return is_contain(tag, "class", target_cls)
    return contain_class


def get_tags_by_class(html_soup, target_cls):
    return html_soup.find_all(is_contain_class_from_tag(target_cls))


def get_theater_name(html_soup):
    col_theater = get_tags_by_class(html_soup, "col-theater")[0]
    a_tag = col_theater.a
    return f"{a_tag.contents[0]} {a_tag.contents[2]}"
    # e.g. CGV 용산아이파크몰, e.g. 씨네드쉐프 압구정


def get_day_range(html_soup):
    day_tags = get_tags_by_class(html_soup, "day")
    day_range = []
    for day_tag in day_tags:
        a_tag = day_tag.a  # 태그 || None
        yyyymmdd = get_yyyymmdd_by_url(a_tag.get("href"))
        # span: 월, em: 요일, strong: 일
        children = a_tag.find_all(True, recursive=False)
        m = int(children[0].text.strip()[:-1])  # 월: e.g. 12월
        dd = children[1].text.strip()  # 요일: e.g. 화
        d = int(children[2].text.strip())  # 일: e.g. 20
        # print(f"{m}월 {d}일 {dd}요일 yyyymmdd: {yyyymmdd}")
        day_range.append([m, d, dd, yyyymmdd])
    print(f"상영 오픈 범위 : {day_range[0][3]} ~ {day_range[-1][3]}")
    return day_range


def get_screen_data_by_screening(li_tag):
    a_tag = li_tag.find("a")
    if (a_tag == None):
        # 매진 or 상영준비중으로 a태그가 생략 될 수 있다.
        em_tag = li_tag.find("em")
        span_tag = li_tag.find("span")
        screen_data = [em_tag.string, span_tag.string]
        # print(f"{em_tag.string}시간대 {span_tag.string}")
    else:
        # 모든 정보는 a태그의 attr에서 추출 가능하다.
        theater_name = a_tag.get("data-theatername")
        screen_kor_name = a_tag.get("data-screenkorname")
        ymd = a_tag.get("data-playymd")  # data-playymd == yyyymmdd
        start_time = a_tag.get("data-playstarttime")
        end_time = a_tag.get("data-playendtime")
        remain = int(a_tag.get("data-seatremaincnt"))
        href = a_tag.get("href")
        screen_data = [theater_name, screen_kor_name, ymd,
                       start_time, end_time, remain, href]
    return screen_data


def get_timetable_by_day(request_url_with_out_date, yyyymmdd):
    request_url = f"{request_url_with_out_date}&date={yyyymmdd}"
    html_soup = get_soup_from_url(request_url)
    print("\n", "-"*20, f"{yyyymmdd}일자", "-"*20)

    # 상영관 테이블 -> 해당일자 해당상영관의 상영정보 전체 -> ul
    info_timetable = get_tags_by_class(html_soup, "info-timetable")[0]
    ul_tag = info_timetable.ul
    
    # 해당일자 해당상영관의 상영정보 하나 -> li
    li_tags = ul_tag.find_all("li", recursive=False)
    screen_data_by_day = []
    
    for li_tag in li_tags:
        screen_data = get_screen_data_by_screening(li_tag)
        screen_data_by_day.append(screen_data)
    print(screen_data_by_day)
    return screen_data_by_day


def get_whole_timetable(request_url_with_out_date, day_range):
    screen_whole_data = dict()
    for m, d, dd, yyyymmdd in day_range:
        screen_data_by_day = get_timetable_by_day(request_url_with_out_date, yyyymmdd)
        screen_whole_data[yyyymmdd] = screen_data_by_day
    return screen_whole_data

def do():
    # 1. 원하는 데이터로 url 생성 후, http 요청 후 soup으로 변환
    request_url_with_out_date = create_url("spider_man", "yongsan")
    html_soup = get_soup_from_url(request_url_with_out_date)
    print(f'요청주소: {request_url_with_out_date}')

    # 2. soup에서 원하는 것을 추출하기 위해 파싱 -> 상영 날짜
    theater_name = get_theater_name(html_soup)
    day_range = get_day_range(html_soup)


    # # 3. 특정 날짜별 HTTP 요청
    screen_whole_data = get_whole_timetable(request_url_with_out_date, day_range)
    
    return screen_whole_data
