import requests
from bs4 import BeautifulSoup as bs

HTML_PARSER = "html.parser"
AREA_CODE = "areacode"
THEATER_CODE = "theatersCode"
MOVIE_ID = "midx"
BASE_URL = "http://www.cgv.co.kr/common/showtimes/iframeTheater.aspx"

movies = {
    "spider_man": {
        MOVIE_ID: "84949",
    }
}

theaters = {
    "yongsan": {
        AREA_CODE: "01",
        THEATER_CODE : "0013",
    }
}

def create_url(movie_name, theater_name, type=0, yyyymmdd=""):
    areacode = theaters[theater_name][AREA_CODE]
    theaterscode = theaters[theater_name][THEATER_CODE]
    midx = movies[movie_name][MOVIE_ID]
    date = "" if yyyymmdd == "" else f"&date={yyyymmdd}"
    url = [
        # 특정상영관의 상영시간표
        f"{BASE_URL}?areacode={areacode}&theatercode={theaterscode}&midx={midx}",
        # 특정영화의 상영시간표
        f"{BASE_URL}?midx={midx}",
    ]
    return f"{url[type]}{date}"

def get_soup_from_url(url):
    response = requests.get(url)  # response 객체
    content = response.content  # html
    soup = bs(content, HTML_PARSER)  # bs class
    return soup

# 1. 원하는 데이터로 url 생성 후, http 요청 후 soup으로 변환
request_url = create_url("spider_man", "yongsan")
html_soup = get_soup_from_url(request_url)
