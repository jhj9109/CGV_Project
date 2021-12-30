import requests
from bs4 import BeautifulSoup as bs
from parse import get_yyyymmdd_by_url

from fbase import get_db, update_db, read_db, get_users
from smtp import send_email
from time import localtime
import threading
from argparse import ArgumentParser
from sound import hello_peter


HTML_PARSER = "html.parser"
AREA_CODE = "areacode"
THEATER_CODE = "theatersCode"
MOVIE_ID = "midx"  # 특정 영화
MOVIE_CODE = "mcode"  # 특정 영화 & 특정 상영관 종류

IMAX_LASER_2D = "imax_laser_2d"
YONGSAN_THEATER = "yongsan"

BASE_URL = "http://www.cgv.co.kr"
BASE_URL_SHOWTIMES = "http://www.cgv.co.kr/common/showtimes"
BASE_URL_BY_THEATER = f"{BASE_URL_SHOWTIMES}/iframeTheater.aspx"
BASE_URL_BY_MOVIE = f"{BASE_URL_SHOWTIMES}/iframeMovie.aspx"
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


def create_url(movie_name, theater_name=YONGSAN_THEATER, theater_type=IMAX_LASER_2D, yyyymmdd=""):
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


def get_attr(tag, attr):  # 무조건 리스트 형태로 리턴받기 위해 활용
    return tag.get(attr) if tag.has_attr(attr) else []


def is_contain(tag, attr, target):
    return target in get_attr(tag, attr)


# BS.find_all에 넘기는 함수가 target_cls도 인자로 받기 위해 활용
def is_contain_class_from_tag(target_cls):
    def contain_class(tag):
        return is_contain(tag, "class", target_cls)
    return contain_class


def get_tags_by_class(html_soup, target_cls):
    return html_soup.find_all(is_contain_class_from_tag(target_cls))


def get_theater_name(html_soup):
    try:
        # 기본 : 영화이름 리턴
        col_theater = get_tags_by_class(html_soup, "col-theater")[0]
        a_tag = col_theater.a
        return f"{a_tag.contents[0]} {a_tag.contents[2]}"
    except IndexError:
        # 해당 날짜에 해당 상영이 전혀 없을 경우 -> IndexError -> None 리턴
        return None
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


def get_screen_data_by_screening(li_tag, yyyymmdd):
    a_tag = li_tag.find("a")
    screen_data = {key: None for key in [
        "status", "start_time", "end_time", "remain", "href", "yyyymmddhhmm"]}
    if (a_tag == None):
        # 매진 or 상영준비중으로 a태그가 생략 될 수 있다.
        em_tag = li_tag.find("em")
        span_tag = li_tag.find("span")
        start_time = em_tag.string  # e.g."09:05"
        screen_data["status"] = span_tag.string  # e.g. 매진 or 상영중
        screen_data["start_time"] = f"{start_time[0:2]}{start_time[3:5]}"
        # print(f"{em_tag.string}시간대 {span_tag.string}")
    else:
        # 모든 정보는 a태그의 attr에서 추출 가능하다.
        start_time = a_tag.get("data-playstarttime")  # e.g. "0905"
        end_time = a_tag.get("data-playendtime")  # e.g. "0905"
        remain = int(a_tag.get("data-seatremaincnt"))  # e.g. "11"
        href = a_tag.get("href")  # e.g. "/ticket/?..."
        screen_data["status"] = "ok"
        screen_data["start_time"] = start_time
        screen_data["end_time"] = end_time
        screen_data["remain"] = remain
        screen_data["href"] = href
    screen_data["yyyymmddhhmm"] = yyyymmdd + screen_data["start_time"]

    return screen_data


def get_timetable_per_day(request_url_with_out_date, yyyymmdd):
    request_url = f"{request_url_with_out_date}&date={yyyymmdd}"
    html_soup = get_soup_from_url(request_url)

    try:
        # 상영관 테이블 -> 해당일자 해당상영관의 상영정보 전체 -> ul
        info_timetable = get_tags_by_class(html_soup, "info-timetable")[0]
        ul_tag = info_timetable.ul

        # 해당일자 해당상영관의 상영정보 하나 -> li
        li_tags = ul_tag.find_all("li", recursive=False)
        timetable_per_day = []

        for li_tag in li_tags:
            screen_data = get_screen_data_by_screening(li_tag, yyyymmdd)
            timetable_per_day.append(screen_data)

        return timetable_per_day
    except IndexError:
        return []


def get_whole_timetable(request_url_with_out_date, day_range):
    whole_timetable = dict()
    for m, d, dd, yyyymmdd in day_range:
        timetable_per_day = get_timetable_per_day(
            request_url_with_out_date, yyyymmdd)
        whole_timetable[yyyymmdd] = timetable_per_day
    return whole_timetable


def print_timetable_per_day(yyyymmdd, timetable_per_day):
    print("\n", "-"*20, f"{yyyymmdd}일자({len(timetable_per_day)})", "-"*20)
    for screen_data in timetable_per_day:
        print(screen_data)


def print_whole_timetable(whole_timetable):
    for yyyymmdd, timetable_per_day in whole_timetable.items():
        print_timetable_per_day(yyyymmdd, timetable_per_day)


def update_data(db, movie_name, new_data, modified_data, theater_type=IMAX_LASER_2D):
    for data_dict in [new_data, modified_data]:
        if data_dict:
            for yyyymmddhhmm, screen_data in data_dict.items():
                context = {
                    "movie_name": movie_name,
                    "screen_type": theater_type,
                    "yyyymmddhhmm": yyyymmddhhmm,
                    "screen_data": screen_data,
                }
                update_db(db, context)


def compare_prev_data(prev_data, whole_timetable):
    new_data = dict()
    modified_data = dict()
    for yyyymmdd, timetable_per_day in whole_timetable.items():
        for screen_data in timetable_per_day:
            yyyymmddhhmm = screen_data["yyyymmddhhmm"]
            if yyyymmddhhmm not in prev_data:
                new_data[yyyymmddhhmm] = screen_data
            elif prev_data[yyyymmddhhmm]["remain"] != screen_data["remain"]:
                modified_data[yyyymmddhhmm] = screen_data
    return new_data, modified_data


def create_email_body(new_data):
    strings = []
    for yyyymmddhhmm, d in new_data.items():
        content = ""
        yyyy, mmdd,  hhmm = yyyymmddhhmm[:4], yyyymmddhhmm[4:8], yyyymmddhhmm[8:]
        href = BASE_URL+d['href']
        content += f"<p>{yyyy}년 {mmdd[:2]}월 {mmdd[2:]}일 {hhmm[:2]}시{hhmm[2:]}분 남은 좌석수:{d['remain']}</p>"
        content += f"<a href='{href}'>{href}</a>"
        strings.append(content)
    return "<br/>".join(strings)


def create_context_for_send_email(subject, user_email_list, email_body):
    context = dict(
        subject=subject,
        body=email_body,
        email_list=user_email_list,
    )
    return context


def get_user_email_list(db):
    users = get_users(db)
    user_email_list = [v["email"] for k, v in users.items()]
    return user_email_list


def main(db, prev_data, movie_name, theater_name, theater_type):

    # 1. 원하는 데이터로 url 생성 후, http 요청 후 soup으로 변환
    request_url_with_out_date = create_url(movie_name)
    html_soup = get_soup_from_url(request_url_with_out_date)

    # 2. soup에서 원하는 것을 추출하기 위해 파싱 -> 상영 날짜
    day_range = get_day_range(html_soup)

    # 3. 특정 날짜별 HTTP 요청
    whole_timetable = get_whole_timetable(
        request_url_with_out_date, day_range)  # whole_timetable{키:yyyymmdd, 값:timetable_per_day(<dict>[)}

    # 4. 이전 데이터와 비교
    new_data, modified_data = compare_prev_data(prev_data, whole_timetable)

    # 5. 업데이트
    if new_data or modified_data:
        update_data(db, movie_name, new_data, modified_data)

    # 6. 메일 발송
    if new_data:
        mail_subject = f"{movie_name} {theater_name} {theater_type}"
        user_email_list = get_user_email_list(db)
        email_body = create_email_body(new_data)
        context = create_context_for_send_email(
            mail_subject, user_email_list, email_body)
        send_email(context)
        hello_peter()
        t = localtime()
        print(f"{t.tm_mon}월{t.tm_mday}일 {t.tm_hour}시{t.tm_min}분{t.tm_sec}초 새로운 데이터 O")
    else:
        t = localtime()
        print(f"{t.tm_mon}월{t.tm_mday}일 {t.tm_hour}시{t.tm_min}분{t.tm_sec}초 새로운 정보 X")

    return new_data, modified_data


if __name__ == "__main__":

    parser = ArgumentParser()
    parser.add_argument('movie_name', choices=['spider_man'])
    parser.add_argument('-n', '--name', dest='theater_name',
                        default=YONGSAN_THEATER)
    parser.add_argument('-t', '--type', dest='theater_type',
                        default=IMAX_LASER_2D)
    parser.add_argument('-i', '--interval', dest='repeat_interval',
                        default=10)
    args = parser.parse_args()

    db = get_db()
    init_data = read_db(db, args.movie_name, args.theater_type)

    def repeat(prev_data):
        new_data, modified_data = main(db, prev_data, args.movie_name,
                        args.theater_name, args.theater_type)
        for data_dict in [new_data, modified_data]:
            for k, v in data_dict.items():
                prev_data[k] = v
        threading.Timer(args.repeat_interval, repeat, args=(prev_data,)).start()

    repeat(init_data)
