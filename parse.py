import re


p = re.compile(r"""
    (?:date=)
    (?P<yyyymmdd>[0-9]{8,8})
    (?:&|$)
""", re.VERBOSE)


def get_yyyymmdd_by_url(url):
    m = p.search(url)
    if m:
        return m.groupdict()["yyyymmdd"]
    else:
        return None


def test_sample():
    sample1 = "?date=123456789"  # 9자리 -> X
    sample2 = "?date=12341234&"  # 8자리 + & -> O
    sample3 = "?date=11112222"  # 8자리 + $(끝) -> O
    sample4 = "?date=12341234z"  # 8자리 + z -> X
    a = get_yyyymmdd_by_url(sample1)
    print(a)
    a = get_yyyymmdd_by_url(sample2)
    print(a)
    a = get_yyyymmdd_by_url(sample3)
    print(a)
    a = get_yyyymmdd_by_url(sample4)
    print(a)
