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
