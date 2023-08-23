import requests
네이티브앱키 = "8f859952c11c68e52571375a7463ae9f"
자바스크립트키 = "9ee9160acb77c152e01a83bcc644b307"
어드민키 = "0c1477d3f81160c2d7d77eb4f6590ea6"
# ACCESS_TOKEN = "decd03428ec8ec69d8dfc88fc3288c34" # rest api
ACCESS_TOKEN = "yHtd-4wAa-DfMO0Ihg2sEYroC0sKNJR_HuGn0M5JCiolkQAAAYoRTDV4" # rest api

'''
content: '최대 200자'
web_url: 'http://example.com'
button_title: '최대 8자'
'''
def send_kakao_message(text: str, web_url: str, button_title: str) -> int:
    url = 'https://kapi.kakao.com/v2/api/talk/memo/default/send'
    headers = {
        'Authorization': f'Bearer {ACCESS_TOKEN}',
        "Content-Type": "application/x-www-form-urlencoded",
    }
    data = {
        'template_object': {
            'object_type': 'text',
            'text': text,
            'link': {
                'web_url': web_url ,
                # "mobile_web_url": "https://developers.kakao.com"
            },
            "button_title": button_title or "바로 확인"
        }
    }
    response = requests.post(url, json=data, headers=headers)
    if response.ok:
        return response.result_code
    else:
        return response.msg, response.code
    print(response)
    '''
    ['_content', '_content_consumed', '_next',
    'status_code', 'headers', 'raw', 'url', 'encoding', 'history',
    'reason', 'cookies', 'elapsed', 'request', 'connection',
    '__module__', '__doc__', '__attrs__', '__init__', '__enter__',
    '__exit__', '__getstate__', '__setstate__', '__repr__', '__bool__',
    '__nonzero__', '__iter__',
    'ok', 'is_redirect', 'is_permanent_redirect', 'next', 'apparent_encoding',
    'iter_content', 'iter_lines', 'content', 'text', 'json', 'links',
    'raise_for_status', 'close'
    '__dict__', '__weakref__', '__new__', '__hash__', '__str__', '__getattribute__', '__setattr__', '__delattr__', '__lt__', '__le__', '__eq__', '__ne__', '__gt__', '__ge__', '__reduce_ex__', '__reduce__', '__subclasshook__', '__init_subclass__', '__format__', '__sizeof__', '__dir__', '__class__']
    '''
    print(response.ok)
    print(response.content)
    print(response.text)
    print(response.links)
    print(response.status_code)
    print(response.headers)
    print(response.url)
    print(response.encoding)
    print(response.history)
    print(response.reason)
    print(response.cookies)
    print(response.connection)

    # return response["result_code"]

send_kakao_message("text", "www.naver.com", "가즈아")