from collections import defaultdict
from main import get_tags_by_class, is_contain
import requests
import json
from bs4 import BeautifulSoup as bs
HTML_PARSER = "html.parser"
MINIMAP_URL = "http://www.cgv.co.kr/common/showtimes/iframeTheater.aspx/GetSeatList"

ALPHA_A_TO_P = "ABCDEFGHIJKLMNOP"
ROW_TO_ALPHA = {row: ALPHA_A_TO_P[row] for row in range(16)}

KEY_FROM_ATTRIBUTE = dict(
    theatercode="theatercode",
    palyymd="data-playymd",
    screencode="data-screencode",
    playnum="data-playnum",
    starttime="data-playstarttime",
    endtime="data-playendtime",
    theatername="data-theatername",
    cnt="data-seatremaincnt",
    screenname="data-screenkorname",
)

BASIC_HEADERS = {
    'Content-Type': 'application/json; charset=utf-8',
}

DEFAULT_FILTER_CONDITIONS = [
    ["G", "G", 19, 26],
    ["H", "I", 16, 29],
    ["J", "K", 16, 29],
    ["L", "L", 16, 29],
]

def get_row_col(style):
    col, row = style.split()
    col, row = int(col[5:-3])//4 + 1, int(row[4:-3])//4
    if col >= 48:
        col -= 4
    elif col >= 34:
        col -= 3
    elif col >= 18:
        col -= 2
    elif col >= 4:
        col -= 1
    return ROW_TO_ALPHA[row], col


def get_seat_info(mini_seat_tag):
    is_reserved = is_contain(mini_seat_tag, "class", "reserved")
    style = mini_seat_tag.get("style")
    row, col = get_row_col(style)
    return row, col, is_reserved


def get_html_soup(response):
    html = response.json()['d'].replace('\\"', '"')  # '\\"' -> '"'
    html_soup = bs(html, HTML_PARSER)
    return html_soup


def get_minimap_info(response):
    html_soup = get_html_soup(response)
    mini_seat_tags = get_tags_by_class(html_soup, "mini_seat")

    minimap_info = defaultdict(dict)
    for mini_seat_tag in mini_seat_tags:
        row, col, is_reserved = get_seat_info(mini_seat_tag)
        minimap_info[row][col] = is_reserved
    return minimap_info


def get_available_seat(minimap_info):
    available_seat = []
    for row, cols_dict in minimap_info.items():
        for col, is_reserved in cols_dict.items():
            if not is_reserved:
                available_seat.append(f"{row}{col}")
    return available_seat



def get_filtered_seat(available_seat, filter_conditions):
    filtered_seat = []
    for seat in available_seat:
        alpha, num = seat[0], int(seat[1:])
        for alpha_low, alpha_high, num_low, num_high in filter_conditions:
            if alpha_low <= alpha <= alpha_high and num_low <= num <= num_high:
                filtered_seat.append(seat)
    return filtered_seat

def main(context):
    response = requests.post(context["url"], headers=context["headers"],
                             data=context["data"])
    minimap_info = get_minimap_info(response)
    available_seat = get_available_seat(minimap_info)
    filtered_seat = get_filtered_seat(
        available_seat, context["filter_conditions"])
    return filtered_seat
