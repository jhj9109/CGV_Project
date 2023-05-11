# CGV_프로젝트_VS_VERSION

## 1. 요청 정리

### 1.1 GetSeatList
- 마우스 호버시 나타나는 작은 미니맵을 위한 요청

미니맵
- 메인 UI에서 메인 컨텐츠들은 div.col-detail의 형제 div로써 배치
- 마우스 호버시 div.cgv_minimap이 가장 막내 요소로 추가되었다가 호버 해제시 삭제된다.
    - 이때 자식으로 배치되는 엘레먼트는 GetSeatList 요청시 응답으로 받은 html(div.theater_minimap)을 붙인것이다.
- 좌석 엘레먼트는 div.theater_minimap div.map_area div.mini_container div.mini_seats 아래 div.mini_seat로 들어간다.
    - 예약된 자리면 reserved 클래스가 추가된다.
    - style에 left와 top의 px값이 존재한다. => 작은것부터 가장 왼쪽, 가장 앞쪽 자리이다.

요청 예시
- General
```
Request URL: http://www.cgv.co.kr/common/showtimes/iframeTheater.aspx/GetSeatList
Request Method: POST
Status Code: 200 OK
Remote Address: 210.122.97.134:80
Referrer Policy: strict-origin-when-cross-origin
```
- payload
```
{theatercode: '0013',  palyymd : '20230516', screencode : '018' , playnum : '6', starttime : '2230', endtime : '2510', theatername : 'CGV 용산아이파크몰', cnt : '413', screenname : 'IMAX관'}
```
- Request Headers
```
POST /common/showtimes/iframeTheater.aspx/GetSeatList HTTP/1.1
Accept: application/json, text/javascript, */*; q=0.01
Accept-Encoding: gzip, deflate
Accept-Language: ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7,ja;q=0.6,zh-CN;q=0.5,zh;q=0.4
Connection: keep-alive
Content-Length: 198
Content-Type: application/json; charset=UTF-8
Cookie: ASP.NET_SessionId=bmaqpk0fvx0eyaqf4evkjjit; WMONID=sIE567Gad9P; _gid=GA1.3.2123840729.1683607921; scrollPoint=0; Hash=1; _ga=GA1.1.720101391.1681024637; _ga_559DE9WSKZ=GS1.1.1683618507.8.1.1683622957.60.0.0
DNT: 1
Host: www.cgv.co.kr
Origin: http://www.cgv.co.kr
Referer: http://www.cgv.co.kr/common/showtimes/iframeMovie.aspx?midx=86883&mcode=20032468&areacode=13&date=20230516
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36
X-Requested-With: XMLHttpRequest
```

응답 예시
```HTML
<div class="theater_minimap"><span class="arr"></span>
    <div class="data_txt">
        <p class="txt1">CGV 용산아이파크몰</p>
        <p class="txt2">IMAX관(총 624석)</p>
    </div>
    <div class="map_area">
        <div class="mini_container" id="list_container" style="width: 226px; height: 104px;">
            <div class="mini_screen">SCREEN</div>
            <div class="mini_seats">
                <div class="mini_seat" style="left:12px; top:0px;"><span></span></div>
                <div class="mini_seat reserved" style="left:16px; top:0px;"><span></span></div>
                <div class="mini_seat" style="left:12px; top:4px;"><span></span></div>
            </div>
            <div class="mini_exits">
                <div class="mini_exit"></div>
            </div>
        </div>
    </div>
    <div class="theater_time">
        <p>6회 22:30~25:10</p>
    </div>
</div>
```
- `<div class="mini_seat" style="left:12px; top:0px;">`는 가장 앞줄 가장 왼쪽 자리이다. 예약가능한 좌석이다.
- `<div class="mini_seat reserved" style="left:16px; top:0px;">`는 가장 앞줄 가장 왼쪽에서 두번째 자리이다. 이미 예약된 좌석이다.
- `<div class="mini_seat" style="left:12px; top:4px;">`는 앞에서 두번째줄 가장 왼쪽 자리이다. 예약가능한 좌석이다.

요청 생성하기
- 아래 3가지 헤더가 필수적으로 들어가야함
```
Host: "www.cgv.co.kr",
Origin: "http://www.cgv.co.kr",
"Content-Type": "application/json; charset=UTF-8"
```
- 아래 4가지가 필수적으로 payload에 포함되어야함
```
theatercode: '0013',//용아맥: 0013
screencode: '018',//용아맥-IMAX관 018
palyymd: '20230129',//yyyymmdd
playnum: '6',// 1~6
```
  - theatercode: 영화관 코드 e.g. 용산아이파크몰지점: 0013
  - screencode: 해당 지점의 상영관 코드 e.g. 용아맥: 018
  - palyymd: (오타아님) yyyymmdd 형식의 상영날짜 e.g. 23년1월29일: 20230129
  - playnum: 해당 날짜의 해당 상영관의 몇회차 상영인지 e.g. 6회차: 6
- 아래 3가지 요소는 미니맵 형성시에 활용되나, 데이터 자체에는 영향을 미치지 않는다.
```
theatername: '',// CGV 용산아이파크몰
cnt: '',// 123
screenname: ''// IMAX관
```
  - theatername: 지점명 e.g. CGV 용산아이파크몰
  - cnt: 남은 자리수였나... 
  - screenname: 상영관명 e.g. IMAX관

### 1.2 특정타입 영화 기준 스케줄 확인
- BaseUrl: `http://www.cgv.co.kr/common/showtimes/iframeMovie.aspx`
- queries
  - midx: 특정영화 id
  - mcode: midx에 해당하는 영화의 특정 타입의 코드
  - 예시
    - 가오갤's midx: '86883'
    - 가오갤's 아이맥스 2D's mcode: '20032468'
    - 가오갤's 아이맥스 3D's mcode: '20032465'
결과
- (기본은 서울인듯) 각 지역별 > 요일별 > 지점별 > 상영관별 > 상영관별 > 상영시각 스케줄 확인 가능한 HTML 리턴
- iframe#ifrm_movie_time_talbe 아래 HTML 코드 전체가 들어감.


- General
```
Request URL: http://www.cgv.co.kr/common/showtimes/iframeMovie.aspx?midx=86883&mcode=20032468
Request Method: GET
Status Code: 200 OK
Remote Address: 210.122.97.134:80
Referrer Policy: strict-origin-when-cross-origin
```

- Request Headers
```
GET /common/showtimes/iframeMovie.aspx?midx=86883&mcode=20032468 HTTP/1.1
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Accept-Encoding: gzip, deflate
Accept-Language: ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7,ja;q=0.6,zh-CN;q=0.5,zh;q=0.4
Connection: keep-alive
Cookie: ASP.NET_SessionId=bmaqpk0fvx0eyaqf4evkjjit; WMONID=sIE567Gad9P; _gid=GA1.3.2123840729.1683607921; scrollPoint=0; Hash=1; _gat_UA-47951671-5=1; _gat_UA-47951671-7=1; _gat_UA-47126437-1=1; _ga_559DE9WSKZ=GS1.1.1683638312.9.1.1683638313.59.0.0; _ga=GA1.1.720101391.1681024637; CgvCM=YtVLzyu4GKLC4i7xMeTDm2UDnPrXSUxQ+12LNYkjx6nFW9n5JqQTChHHHh3zfq8tpTYqrlt7A1WkLExnEdol4YTXaeo22eWhaHbuGKI46ixvG6TEpn9hn7rvB02vmsWFNTh54fHl6jaBpHhhO/TsU5DSiYKqsbZ1bki3e1afLmUmmRP6H4dadoiZ+MLUTMZPc2v9yXzI8hc8NDX32bygP9Ehe6QxguPqcScL+lKMZElNYsi0i5h0mbcNzyaqxL5j
DNT: 1
Host: www.cgv.co.kr
Referer: http://www.cgv.co.kr/movies/detail-view/show-times.aspx?midx=86883
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36
```
- HTML
- 구성 html body.vsc-initalized div.showtimes-wrap 아래
  - div.sect-city : 서울 경기 대구 적히는 라인
  - div.sect-schedule : 날짜와 좌우 화살표 라인
  - div.sect-guide : 코멘트 라인
  - div.sect-showtimes : 각 영화관별 스케줄 라인

- 지역 확인하기
```

<div class="showtimes-wrap">
    
    <div class="sect-city">
        <ul>
            
                <li class="on">
                    <a href="./iframeMovie.aspx?midx=86883&amp;mcode=20032468&amp;areacode=13&amp;date=20230509" title="현재 선택">서울</a>
                </li>
            
                <li>
                    <a href="./iframeMovie.aspx?midx=86883&amp;mcode=20032468&amp;areacode=09&amp;date=20230509">경기</a>
                </li>
        </ul>
    </div>
</div>
```
  - div.sect-city ul 아래 형제 li들이 각 지역 나타냄
  - a 주소
    - base_url: ./iframeMovie.aspx
    - queries
      - midx
      - mcode
      - areacode : 특정 지역 코드 (서울 경기 대구 등)
      - date: 특정 날짜, 디폴트는 조회가능한 첫번째 날짜인듯
  - 현재 열려있는 탭은 li에 on 클래스가 추가됨

- 일자 확인하기
  - ul.item 아래 li태그가 형제 요소로 존재
  - 열려있는 일자인 li.on
  - a 태그엔 href와 title 2가지 속성 가짐, 3가지 자녀 태그
    - span: mm월 (e.g. 03월)
    - em: 1자리 요일 (e.g. 화)
    - strong: dd (e.g. 09)
  ```
  li
  - div.day
    - a
      - span
      - em
      - strong
  ```
