import * as cheerio from 'cheerio';

const htmlStringShowtimes = `<div class="sect-showtimes">
<ul>

    <li>
        <div class="col-theater"><a href="/theaters/?theaterCode=P001" target="_top">씨네드쉐프<br />압구정</a>
        </div>
        <div class="col-times">

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li><span class='screentype'><span class='tempurCinema'>TEMPUR CINEMA</span></span></li>//-->
                        <li><span class='screentype'><span class='tempurCinema'>TEMPUR CINEMA</span></span>
                        </li>
                        <li>총 30석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=P001&PLAY_START_TM=1620&AREA_CD=13&SCREEN_CD=001"
                                target="_top" data-theatercode="P001" data-playymd="20230511" data-screencode="001"
                                data-playnum="3" data-playstarttime="1620" data-playendtime="1855"
                                data-theatername="씨네드쉐프 압구정" data-seatremaincnt="20"
                                data-screenkorname="템퍼 시네마[CINE de CHEF]"><em>16:20</em><span
                                    class='txt-lightblue'><span class='hidden'>잔여좌석</span>20석</span></a>
                        </li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=P001&PLAY_START_TM=1940&AREA_CD=13&SCREEN_CD=001"
                                target="_top" data-theatercode="P001" data-playymd="20230511" data-screencode="001"
                                data-playnum="4" data-playstarttime="1940" data-playendtime="2215"
                                data-theatername="씨네드쉐프 압구정" data-seatremaincnt="2"
                                data-screenkorname="템퍼 시네마[CINE de CHEF]"><em>19:40</em><span
                                    class='txt-lightblue'><span class='hidden'>잔여좌석</span>2석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=P001&PLAY_START_TM=2300&AREA_CD=13&SCREEN_CD=001"
                                target="_top" data-theatercode="P001" data-playymd="20230511" data-screencode="001"
                                data-playnum="5" data-playstarttime="2300" data-playendtime="2535"
                                data-theatername="씨네드쉐프 압구정" data-seatremaincnt="30"
                                data-screenkorname="템퍼 시네마[CINE de CHEF]"><em>23:00</em><span
                                    class='txt-lightblue'><span class='hidden'>잔여좌석</span>30석</span></a>
                        </li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>스트레스리스 시네마[CINE de CHEF]</li>//-->
                        <li>스트레스리스 시네마[CINE de CHEF]</li>
                        <li>총 46석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=P001&PLAY_START_TM=1900&AREA_CD=13&SCREEN_CD=002"
                                target="_top" data-theatercode="P001" data-playymd="20230511" data-screencode="002"
                                data-playnum="4" data-playstarttime="1900" data-playendtime="2135"
                                data-theatername="씨네드쉐프 압구정" data-seatremaincnt="36"
                                data-screenkorname="스트레스리스 시네마[CINE de CHEF]"><em>19:00</em><span
                                    class='txt-lightblue'><span class='hidden'>잔여좌석</span>36석</span></a>
                        </li>

                    </ul>
                </div>
            </div>

        </div>
    </li>

    <li>
        <div class="col-theater"><a href="/theaters/?theaterCode=P013" target="_top">씨네드쉐프<br />용산아이파크몰</a>
        </div>
        <div class="col-times">

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li><span class='screentype'><span class='tempurCinema'>TEMPUR CINEMA</span></span></li>//-->
                        <li><span class='screentype'><span class='tempurCinema'>TEMPUR CINEMA</span></span>
                        </li>
                        <li>총 50석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=P013&PLAY_START_TM=1600&AREA_CD=13&SCREEN_CD=002"
                                target="_top" data-theatercode="P013" data-playymd="20230511" data-screencode="002"
                                data-playnum="3" data-playstarttime="1600" data-playendtime="1835"
                                data-theatername="씨네드쉐프 용산아이파크몰" data-seatremaincnt="28"
                                data-screenkorname="템퍼 시네마[CINE de CHEF]"><em>16:00</em><span
                                    class='txt-lightblue'><span class='hidden'>잔여좌석</span>28석</span></a>
                        </li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=P013&PLAY_START_TM=1920&AREA_CD=13&SCREEN_CD=002"
                                target="_top" data-theatercode="P013" data-playymd="20230511" data-screencode="002"
                                data-playnum="4" data-playstarttime="1920" data-playendtime="2155"
                                data-theatername="씨네드쉐프 용산아이파크몰" data-seatremaincnt="16"
                                data-screenkorname="템퍼 시네마[CINE de CHEF]"><em>19:20</em><span
                                    class='txt-lightblue'><span class='hidden'>잔여좌석</span>16석</span></a>
                        </li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=P013&PLAY_START_TM=2240&AREA_CD=13&SCREEN_CD=002"
                                target="_top" data-theatercode="P013" data-playymd="20230511" data-screencode="002"
                                data-playnum="5" data-playstarttime="2240" data-playendtime="2515"
                                data-theatername="씨네드쉐프 용산아이파크몰" data-seatremaincnt="48"
                                data-screenkorname="템퍼 시네마[CINE de CHEF]"><em>22:40</em><span
                                    class='txt-lightblue'><span class='hidden'>잔여좌석</span>48석</span></a>
                        </li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>스트레스리스 시네마[CINE de CHEF]</li>//-->
                        <li>스트레스리스 시네마[CINE de CHEF]</li>
                        <li>총 64석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=P013&PLAY_START_TM=2000&AREA_CD=13&SCREEN_CD=001"
                                target="_top" data-theatercode="P013" data-playymd="20230511" data-screencode="001"
                                data-playnum="4" data-playstarttime="2000" data-playendtime="2235"
                                data-theatername="씨네드쉐프 용산아이파크몰" data-seatremaincnt="29"
                                data-screenkorname="스트레스리스 시네마[CINE de CHEF]"><em>20:00</em><span
                                    class='txt-lightblue'><span class='hidden'>잔여좌석</span>29석</span></a>
                        </li>

                    </ul>
                </div>
            </div>

        </div>
    </li>

    <li>
        <div class="col-theater"><a href="/theaters/?theaterCode=0056" target="_top">CGV<br />강남</a></div>
        <div class="col-times">

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>1관 6층</li>//-->
                        <li>1관 6층</li>
                        <li>총 158석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0056&PLAY_START_TM=2000&AREA_CD=13&SCREEN_CD=001"
                                target="_top" data-theatercode="0056" data-playymd="20230511" data-screencode="001"
                                data-playnum="5" data-playstarttime="2000" data-playendtime="2240"
                                data-theatername="CGV 강남" data-seatremaincnt="73"
                                data-screenkorname="1관 6층"><em>20:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>73석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0056&PLAY_START_TM=2300&AREA_CD=13&SCREEN_CD=001"
                                target="_top" data-theatercode="0056" data-playymd="20230511" data-screencode="001"
                                data-playnum="6" data-playstarttime="2300" data-playendtime="2540"
                                data-theatername="CGV 강남" data-seatremaincnt="148"
                                data-screenkorname="1관 6층"><em>23:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>148석</span></a></li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>3관 8층</li>//-->
                        <li>3관 8층</li>
                        <li>총 172석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><em>15:00</em><span>마감</span></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0056&PLAY_START_TM=1800&AREA_CD=13&SCREEN_CD=003"
                                target="_top" data-theatercode="0056" data-playymd="20230511" data-screencode="003"
                                data-playnum="4" data-playstarttime="1800" data-playendtime="2040"
                                data-theatername="CGV 강남" data-seatremaincnt="104"
                                data-screenkorname="3관 8층"><em>18:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>104석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0056&PLAY_START_TM=2100&AREA_CD=13&SCREEN_CD=003"
                                target="_top" data-theatercode="0056" data-playymd="20230511" data-screencode="003"
                                data-playnum="5" data-playstarttime="2100" data-playendtime="2340"
                                data-theatername="CGV 강남" data-seatremaincnt="139"
                                data-screenkorname="3관 8층"><em>21:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>139석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0056&PLAY_START_TM=2400&AREA_CD=13&SCREEN_CD=003"
                                target="_top" data-theatercode="0056" data-playymd="20230511" data-screencode="003"
                                data-playnum="6" data-playstarttime="2400" data-playendtime="2640"
                                data-theatername="CGV 강남" data-seatremaincnt="164"
                                data-screenkorname="3관 8층"><em>24:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>164석</span></a></li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>5관 10층</li>//-->
                        <li>5관 10층</li>
                        <li>총 172석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0056&PLAY_START_TM=1640&AREA_CD=13&SCREEN_CD=005"
                                target="_top" data-theatercode="0056" data-playymd="20230511" data-screencode="005"
                                data-playnum="4" data-playstarttime="1640" data-playendtime="1920"
                                data-theatername="CGV 강남" data-seatremaincnt="140"
                                data-screenkorname="5관 10층"><em>16:40</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>140석</span></a></li>

                    </ul>
                </div>
            </div>

        </div>
    </li>

    <li>
        <div class="col-theater"><a href="/theaters/?theaterCode=0001" target="_top">CGV<br />강변</a></div>
        <div class="col-times">

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>씨네앤포레</li>//-->
                        <li>씨네앤포레</li>
                        <li>총 48석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><em>14:40</em><span>마감</span></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0001&PLAY_START_TM=1750&AREA_CD=13&SCREEN_CD=011"
                                target="_top" data-theatercode="0001" data-playymd="20230511" data-screencode="011"
                                data-playnum="3" data-playstarttime="1750" data-playendtime="2030"
                                data-theatername="CGV 강변" data-seatremaincnt="45"
                                data-screenkorname="씨네앤포레"><em>17:50</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>45석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0001&PLAY_START_TM=2110&AREA_CD=13&SCREEN_CD=011"
                                target="_top" data-theatercode="0001" data-playymd="20230511" data-screencode="011"
                                data-playnum="4" data-playstarttime="2110" data-playendtime="2350"
                                data-theatername="CGV 강변" data-seatremaincnt="48"
                                data-screenkorname="씨네앤포레"><em>21:10</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>48석</span></a></li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>2관 [LCK관]</li>//-->
                        <li>2관 [LCK관]</li>
                        <li>총 218석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0001&PLAY_START_TM=1600&AREA_CD=13&SCREEN_CD=002"
                                target="_top" data-theatercode="0001" data-playymd="20230511" data-screencode="002"
                                data-playnum="3" data-playstarttime="1600" data-playendtime="1840"
                                data-theatername="CGV 강변" data-seatremaincnt="208"
                                data-screenkorname="2관 [LCK관]"><em>16:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>208석</span></a>
                        </li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0001&PLAY_START_TM=1900&AREA_CD=13&SCREEN_CD=002"
                                target="_top" data-theatercode="0001" data-playymd="20230511" data-screencode="002"
                                data-playnum="4" data-playstarttime="1900" data-playendtime="2140"
                                data-theatername="CGV 강변" data-seatremaincnt="198"
                                data-screenkorname="2관 [LCK관]"><em>19:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>198석</span></a>
                        </li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0001&PLAY_START_TM=2200&AREA_CD=13&SCREEN_CD=002"
                                target="_top" data-theatercode="0001" data-playymd="20230511" data-screencode="002"
                                data-playnum="5" data-playstarttime="2200" data-playendtime="2440"
                                data-theatername="CGV 강변" data-seatremaincnt="201"
                                data-screenkorname="2관 [LCK관]"><em>22:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>201석</span></a>
                        </li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>3관</li>//-->
                        <li>3관</li>
                        <li>총 218석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0001&PLAY_START_TM=1700&AREA_CD=13&SCREEN_CD=003"
                                target="_top" data-theatercode="0001" data-playymd="20230511" data-screencode="003"
                                data-playnum="3" data-playstarttime="1700" data-playendtime="1940"
                                data-theatername="CGV 강변" data-seatremaincnt="206"
                                data-screenkorname="3관"><em>17:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>206석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0001&PLAY_START_TM=2000&AREA_CD=13&SCREEN_CD=003"
                                target="_top" data-theatercode="0001" data-playymd="20230511" data-screencode="003"
                                data-playnum="4" data-playstarttime="2000" data-playendtime="2240"
                                data-theatername="CGV 강변" data-seatremaincnt="199"
                                data-screenkorname="3관"><em>20:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>199석</span></a></li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>10관</li>//-->
                        <li>10관</li>
                        <li>총 184석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0001&PLAY_START_TM=1730&AREA_CD=13&SCREEN_CD=010"
                                target="_top" data-theatercode="0001" data-playymd="20230511" data-screencode="010"
                                data-playnum="4" data-playstarttime="1730" data-playendtime="2010"
                                data-theatername="CGV 강변" data-seatremaincnt="170"
                                data-screenkorname="10관"><em>17:30</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>170석</span></a></li>

                    </ul>
                </div>
            </div>

        </div>
    </li>

    <li>
        <div class="col-theater"><a href="/theaters/?theaterCode=0229" target="_top">CGV<br />건대입구</a></div>
        <div class="col-times">

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>1관 3층</li>//-->
                        <li>1관 3층</li>
                        <li>총 140석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0229&PLAY_START_TM=2105&AREA_CD=13&SCREEN_CD=001"
                                target="_top" data-theatercode="0229" data-playymd="20230511" data-screencode="001"
                                data-playnum="6" data-playstarttime="2105" data-playendtime="2345"
                                data-theatername="CGV 건대입구" data-seatremaincnt="128"
                                data-screenkorname="1관 3층"><em>21:05</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>128석</span></a></li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>5관 4층</li>//-->
                        <li>5관 4층</li>
                        <li>총 183석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0229&PLAY_START_TM=1700&AREA_CD=13&SCREEN_CD=005"
                                target="_top" data-theatercode="0229" data-playymd="20230511" data-screencode="005"
                                data-playnum="3" data-playstarttime="1700" data-playendtime="1940"
                                data-theatername="CGV 건대입구" data-seatremaincnt="162"
                                data-screenkorname="5관 4층"><em>17:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>162석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0229&PLAY_START_TM=2000&AREA_CD=13&SCREEN_CD=005"
                                target="_top" data-theatercode="0229" data-playymd="20230511" data-screencode="005"
                                data-playnum="4" data-playstarttime="2000" data-playendtime="2240"
                                data-theatername="CGV 건대입구" data-seatremaincnt="146"
                                data-screenkorname="5관 4층"><em>20:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>146석</span></a></li>

                    </ul>
                </div>
            </div>

        </div>
    </li>

    <li>
        <div class="col-theater"><a href="/theaters/?theaterCode=0010" target="_top">CGV<br />구로</a></div>
        <div class="col-times">

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>2관 6층 (Laser)</li>//-->
                        <li>2관 6층 (Laser)</li>
                        <li>총 171석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0010&PLAY_START_TM=1530&AREA_CD=13&SCREEN_CD=002"
                                target="_top" data-theatercode="0010" data-playymd="20230511" data-screencode="002"
                                data-playnum="3" data-playstarttime="1530" data-playendtime="1810"
                                data-theatername="CGV 구로" data-seatremaincnt="154"
                                data-screenkorname="2관 6층 (Laser)"><em>15:30</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>154석</span></a>
                        </li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>5관 8층 (Laser)</li>//-->
                        <li>5관 8층 (Laser)</li>
                        <li>총 171석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0010&PLAY_START_TM=1830&AREA_CD=13&SCREEN_CD=005"
                                target="_top" data-theatercode="0010" data-playymd="20230511" data-screencode="005"
                                data-playnum="5" data-playstarttime="1830" data-playendtime="2110"
                                data-theatername="CGV 구로" data-seatremaincnt="146"
                                data-screenkorname="5관 8층 (Laser)"><em>18:30</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>146석</span></a>
                        </li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0010&PLAY_START_TM=2130&AREA_CD=13&SCREEN_CD=005"
                                target="_top" data-theatercode="0010" data-playymd="20230511" data-screencode="005"
                                data-playnum="6" data-playstarttime="2130" data-playendtime="2410"
                                data-theatername="CGV 구로" data-seatremaincnt="155"
                                data-screenkorname="5관 8층 (Laser)"><em>21:30</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>155석</span></a>
                        </li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>6관 8층 (Laser)</li>//-->
                        <li>6관 8층 (Laser)</li>
                        <li>총 183석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0010&PLAY_START_TM=1630&AREA_CD=13&SCREEN_CD=006"
                                target="_top" data-theatercode="0010" data-playymd="20230511" data-screencode="006"
                                data-playnum="3" data-playstarttime="1630" data-playendtime="1910"
                                data-theatername="CGV 구로" data-seatremaincnt="162"
                                data-screenkorname="6관 8층 (Laser)"><em>16:30</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>162석</span></a>
                        </li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0010&PLAY_START_TM=1930&AREA_CD=13&SCREEN_CD=006"
                                target="_top" data-theatercode="0010" data-playymd="20230511" data-screencode="006"
                                data-playnum="4" data-playstarttime="1930" data-playendtime="2210"
                                data-theatername="CGV 구로" data-seatremaincnt="157"
                                data-screenkorname="6관 8층 (Laser)"><em>19:30</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>157석</span></a>
                        </li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0010&PLAY_START_TM=2230&AREA_CD=13&SCREEN_CD=006"
                                target="_top" data-theatercode="0010" data-playymd="20230511" data-screencode="006"
                                data-playnum="5" data-playstarttime="2230" data-playendtime="2510"
                                data-theatername="CGV 구로" data-seatremaincnt="173"
                                data-screenkorname="6관 8층 (Laser)"><em>22:30</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>173석</span></a>
                        </li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>7관 8층 (컴포트석,Laser)</li>//-->
                        <li>7관 8층 (컴포트석,Laser)</li>
                        <li>총 132석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><em>14:40</em><span>마감</span></li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>8관 8층 (컴포트석,Laser)</li>//-->
                        <li>8관 8층 (컴포트석,Laser)</li>
                        <li>총 132석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0010&PLAY_START_TM=2100&AREA_CD=13&SCREEN_CD=008"
                                target="_top" data-theatercode="0010" data-playymd="20230511" data-screencode="008"
                                data-playnum="5" data-playstarttime="2100" data-playendtime="2340"
                                data-theatername="CGV 구로" data-seatremaincnt="128"
                                data-screenkorname="8관 8층 (컴포트석,Laser)"><em>21:00</em><span
                                    class='txt-lightblue'><span class='hidden'>잔여좌석</span>128석</span></a>
                        </li>

                    </ul>
                </div>
            </div>

        </div>
    </li>

    <li>
        <div class="col-theater"><a href="/theaters/?theaterCode=0063" target="_top">CGV<br />대학로</a></div>
        <div class="col-times">

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>1관 B3층</li>//-->
                        <li>1관 B3층</li>
                        <li>총 164석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0063&PLAY_START_TM=1710&AREA_CD=13&SCREEN_CD=001"
                                target="_top" data-theatercode="0063" data-playymd="20230511" data-screencode="001"
                                data-playnum="3" data-playstarttime="1710" data-playendtime="1950"
                                data-theatername="CGV 대학로" data-seatremaincnt="150"
                                data-screenkorname="1관 B3층"><em>17:10</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>150석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0063&PLAY_START_TM=2005&AREA_CD=13&SCREEN_CD=001"
                                target="_top" data-theatercode="0063" data-playymd="20230511" data-screencode="001"
                                data-playnum="4" data-playstarttime="2005" data-playendtime="2245"
                                data-theatername="CGV 대학로" data-seatremaincnt="130"
                                data-screenkorname="1관 B3층"><em>20:05</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>130석</span></a></li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>6관 2층</li>//-->
                        <li>6관 2층</li>
                        <li>총 141석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0063&PLAY_START_TM=1600&AREA_CD=13&SCREEN_CD=006"
                                target="_top" data-theatercode="0063" data-playymd="20230511" data-screencode="006"
                                data-playnum="3" data-playstarttime="1600" data-playendtime="1840"
                                data-theatername="CGV 대학로" data-seatremaincnt="127"
                                data-screenkorname="6관 2층"><em>16:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>127석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0063&PLAY_START_TM=1900&AREA_CD=13&SCREEN_CD=006"
                                target="_top" data-theatercode="0063" data-playymd="20230511" data-screencode="006"
                                data-playnum="4" data-playstarttime="1900" data-playendtime="2140"
                                data-theatername="CGV 대학로" data-seatremaincnt="104"
                                data-screenkorname="6관 2층"><em>19:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>104석</span></a></li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>7관 3층</li>//-->
                        <li>7관 3층</li>
                        <li>총 141석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><em>14:40</em><span>마감</span></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0063&PLAY_START_TM=2100&AREA_CD=13&SCREEN_CD=007"
                                target="_top" data-theatercode="0063" data-playymd="20230511" data-screencode="007"
                                data-playnum="4" data-playstarttime="2100" data-playendtime="2340"
                                data-theatername="CGV 대학로" data-seatremaincnt="129"
                                data-screenkorname="7관 3층"><em>21:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>129석</span></a></li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>8관 4층 (컴포트석)</li>//-->
                        <li>8관 4층 (컴포트석)</li>
                        <li>총 116석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><em>15:20</em><span>마감</span></li>

                    </ul>
                </div>
            </div>

        </div>
    </li>

    <li>
        <div class="col-theater"><a href="/theaters/?theaterCode=0252" target="_top">CGV<br />동대문</a></div>
        <div class="col-times">

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>1관 10층</li>//-->
                        <li>1관 10층</li>
                        <li>총 135석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0252&PLAY_START_TM=1600&AREA_CD=13&SCREEN_CD=001"
                                target="_top" data-theatercode="0252" data-playymd="20230511" data-screencode="001"
                                data-playnum="3" data-playstarttime="1600" data-playendtime="1840"
                                data-theatername="CGV 동대문" data-seatremaincnt="115"
                                data-screenkorname="1관 10층"><em>16:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>115석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0252&PLAY_START_TM=1900&AREA_CD=13&SCREEN_CD=001"
                                target="_top" data-theatercode="0252" data-playymd="20230511" data-screencode="001"
                                data-playnum="4" data-playstarttime="1900" data-playendtime="2140"
                                data-theatername="CGV 동대문" data-seatremaincnt="110"
                                data-screenkorname="1관 10층"><em>19:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>110석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0252&PLAY_START_TM=2210&AREA_CD=13&SCREEN_CD=001"
                                target="_top" data-theatercode="0252" data-playymd="20230511" data-screencode="001"
                                data-playnum="5" data-playstarttime="2210" data-playendtime="2450"
                                data-theatername="CGV 동대문" data-seatremaincnt="120"
                                data-screenkorname="1관 10층"><em>22:10</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>120석</span></a></li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>4관 10층</li>//-->
                        <li>4관 10층</li>
                        <li>총 128석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><em>15:00</em><span>마감</span></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0252&PLAY_START_TM=1800&AREA_CD=13&SCREEN_CD=004"
                                target="_top" data-theatercode="0252" data-playymd="20230511" data-screencode="004"
                                data-playnum="4" data-playstarttime="1800" data-playendtime="2040"
                                data-theatername="CGV 동대문" data-seatremaincnt="112"
                                data-screenkorname="4관 10층"><em>18:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>112석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0252&PLAY_START_TM=2100&AREA_CD=13&SCREEN_CD=004"
                                target="_top" data-theatercode="0252" data-playymd="20230511" data-screencode="004"
                                data-playnum="5" data-playstarttime="2100" data-playendtime="2340"
                                data-theatername="CGV 동대문" data-seatremaincnt="114"
                                data-screenkorname="4관 10층"><em>21:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>114석</span></a></li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>5관 10층</li>//-->
                        <li>5관 10층</li>
                        <li>총 135석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0252&PLAY_START_TM=1705&AREA_CD=13&SCREEN_CD=005"
                                target="_top" data-theatercode="0252" data-playymd="20230511" data-screencode="005"
                                data-playnum="3" data-playstarttime="1705" data-playendtime="1945"
                                data-theatername="CGV 동대문" data-seatremaincnt="122"
                                data-screenkorname="5관 10층"><em>17:05</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>122석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0252&PLAY_START_TM=2005&AREA_CD=13&SCREEN_CD=005"
                                target="_top" data-theatercode="0252" data-playymd="20230511" data-screencode="005"
                                data-playnum="4" data-playstarttime="2005" data-playendtime="2245"
                                data-theatername="CGV 동대문" data-seatremaincnt="108"
                                data-screenkorname="5관 10층"><em>20:05</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>108석</span></a></li>

                    </ul>
                </div>
            </div>

        </div>
    </li>

    <li>
        <div class="col-theater"><a href="/theaters/?theaterCode=0230" target="_top">CGV<br />등촌</a></div>
        <div class="col-times">

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>1관 5층</li>//-->
                        <li>1관 5층</li>
                        <li>총 170석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0230&PLAY_START_TM=1600&AREA_CD=13&SCREEN_CD=001"
                                target="_top" data-theatercode="0230" data-playymd="20230511" data-screencode="001"
                                data-playnum="3" data-playstarttime="1600" data-playendtime="1840"
                                data-theatername="CGV 등촌" data-seatremaincnt="153"
                                data-screenkorname="1관 5층"><em>16:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>153석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0230&PLAY_START_TM=1900&AREA_CD=13&SCREEN_CD=001"
                                target="_top" data-theatercode="0230" data-playymd="20230511" data-screencode="001"
                                data-playnum="4" data-playstarttime="1900" data-playendtime="2140"
                                data-theatername="CGV 등촌" data-seatremaincnt="148"
                                data-screenkorname="1관 5층"><em>19:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>148석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0230&PLAY_START_TM=2200&AREA_CD=13&SCREEN_CD=001"
                                target="_top" data-theatercode="0230" data-playymd="20230511" data-screencode="001"
                                data-playnum="5" data-playstarttime="2200" data-playendtime="2440"
                                data-theatername="CGV 등촌" data-seatremaincnt="154"
                                data-screenkorname="1관 5층"><em>22:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>154석</span></a></li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>4관 7층</li>//-->
                        <li>4관 7층</li>
                        <li>총 170석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><em>15:00</em><span>마감</span></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0230&PLAY_START_TM=1800&AREA_CD=13&SCREEN_CD=004"
                                target="_top" data-theatercode="0230" data-playymd="20230511" data-screencode="004"
                                data-playnum="3" data-playstarttime="1800" data-playendtime="2040"
                                data-theatername="CGV 등촌" data-seatremaincnt="157"
                                data-screenkorname="4관 7층"><em>18:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>157석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0230&PLAY_START_TM=2100&AREA_CD=13&SCREEN_CD=004"
                                target="_top" data-theatercode="0230" data-playymd="20230511" data-screencode="004"
                                data-playnum="4" data-playstarttime="2100" data-playendtime="2340"
                                data-theatername="CGV 등촌" data-seatremaincnt="148"
                                data-screenkorname="4관 7층"><em>21:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>148석</span></a></li>

                    </ul>
                </div>
            </div>

        </div>
    </li>

    <li>
        <div class="col-theater"><a href="/theaters/?theaterCode=0009" target="_top">CGV<br />명동</a></div>
        <div class="col-times">

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>1관</li>//-->
                        <li>1관</li>
                        <li>총 139석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><em>14:50</em><span>마감</span></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0009&PLAY_START_TM=1745&AREA_CD=13&SCREEN_CD=001"
                                target="_top" data-theatercode="0009" data-playymd="20230511" data-screencode="001"
                                data-playnum="4" data-playstarttime="1745" data-playendtime="2025"
                                data-theatername="CGV 명동" data-seatremaincnt="124"
                                data-screenkorname="1관"><em>17:45</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>124석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0009&PLAY_START_TM=2040&AREA_CD=13&SCREEN_CD=001"
                                target="_top" data-theatercode="0009" data-playymd="20230511" data-screencode="001"
                                data-playnum="5" data-playstarttime="2040" data-playendtime="2320"
                                data-theatername="CGV 명동" data-seatremaincnt="112"
                                data-screenkorname="1관"><em>20:40</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>112석</span></a></li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>3관</li>//-->
                        <li>3관</li>
                        <li>총 141석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0009&PLAY_START_TM=1640&AREA_CD=13&SCREEN_CD=003"
                                target="_top" data-theatercode="0009" data-playymd="20230511" data-screencode="003"
                                data-playnum="3" data-playstarttime="1640" data-playendtime="1920"
                                data-theatername="CGV 명동" data-seatremaincnt="129"
                                data-screenkorname="3관"><em>16:40</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>129석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0009&PLAY_START_TM=1945&AREA_CD=13&SCREEN_CD=003"
                                target="_top" data-theatercode="0009" data-playymd="20230511" data-screencode="003"
                                data-playnum="4" data-playstarttime="1945" data-playendtime="2225"
                                data-theatername="CGV 명동" data-seatremaincnt="122"
                                data-screenkorname="3관"><em>19:45</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>122석</span></a></li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>5관</li>//-->
                        <li>5관</li>
                        <li>총 183석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0009&PLAY_START_TM=1555&AREA_CD=13&SCREEN_CD=005"
                                target="_top" data-theatercode="0009" data-playymd="20230511" data-screencode="005"
                                data-playnum="3" data-playstarttime="1555" data-playendtime="1835"
                                data-theatername="CGV 명동" data-seatremaincnt="170"
                                data-screenkorname="5관"><em>15:55</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>170석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0009&PLAY_START_TM=1850&AREA_CD=13&SCREEN_CD=005"
                                target="_top" data-theatercode="0009" data-playymd="20230511" data-screencode="005"
                                data-playnum="4" data-playstarttime="1850" data-playendtime="2130"
                                data-theatername="CGV 명동" data-seatremaincnt="141"
                                data-screenkorname="5관"><em>18:50</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>141석</span></a></li>

                    </ul>
                </div>
            </div>

        </div>
    </li>

    <li>
        <div class="col-theater"><a href="/theaters/?theaterCode=0105" target="_top">CGV<br />명동역<br />씨네라이브러리</a>
        </div>
        <div class="col-times">

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>3관 11층</li>//-->
                        <li>3관 11층</li>
                        <li>총 182석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0105&PLAY_START_TM=1940&AREA_CD=13&SCREEN_CD=004"
                                target="_top" data-theatercode="0105" data-playymd="20230511" data-screencode="004"
                                data-playnum="4" data-playstarttime="1940" data-playendtime="2220"
                                data-theatername="CGV 명동역 씨네라이브러리" data-seatremaincnt="157"
                                data-screenkorname="3관 11층"><em>19:40</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>157석</span></a>
                        </li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>4관 11층</li>//-->
                        <li>4관 11층</li>
                        <li>총 123석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><em>15:20</em><span>마감</span></li>

                    </ul>
                </div>
            </div>

        </div>
    </li>

    <li>
        <div class="col-theater"><a href="/theaters/?theaterCode=0057" target="_top">CGV<br />미아</a></div>
        <div class="col-times">

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>1관 9층</li>//-->
                        <li>1관 9층</li>
                        <li>총 125석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0057&PLAY_START_TM=1655&AREA_CD=13&SCREEN_CD=001"
                                target="_top" data-theatercode="0057" data-playymd="20230511" data-screencode="001"
                                data-playnum="3" data-playstarttime="1655" data-playendtime="1935"
                                data-theatername="CGV 미아" data-seatremaincnt="108"
                                data-screenkorname="1관 9층"><em>16:55</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>108석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0057&PLAY_START_TM=2010&AREA_CD=13&SCREEN_CD=001"
                                target="_top" data-theatercode="0057" data-playymd="20230511" data-screencode="001"
                                data-playnum="4" data-playstarttime="2010" data-playendtime="2250"
                                data-theatername="CGV 미아" data-seatremaincnt="90"
                                data-screenkorname="1관 9층"><em>20:10</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>90석</span></a></li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>5관 11층</li>//-->
                        <li>5관 11층</li>
                        <li>총 157석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0057&PLAY_START_TM=1540&AREA_CD=13&SCREEN_CD=005"
                                target="_top" data-theatercode="0057" data-playymd="20230511" data-screencode="005"
                                data-playnum="3" data-playstarttime="1540" data-playendtime="1820"
                                data-theatername="CGV 미아" data-seatremaincnt="136"
                                data-screenkorname="5관 11층"><em>15:40</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>136석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0057&PLAY_START_TM=1835&AREA_CD=13&SCREEN_CD=005"
                                target="_top" data-theatercode="0057" data-playymd="20230511" data-screencode="005"
                                data-playnum="4" data-playstarttime="1835" data-playendtime="2115"
                                data-theatername="CGV 미아" data-seatremaincnt="129"
                                data-screenkorname="5관 11층"><em>18:35</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>129석</span></a></li>

                    </ul>
                </div>
            </div>

        </div>
    </li>

    <li>
        <div class="col-theater"><a href="/theaters/?theaterCode=0288" target="_top">CGV<br />방학</a></div>
        <div class="col-times">

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>3관 7층</li>//-->
                        <li>3관 7층</li>
                        <li>총 132석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><em>15:20</em><span>마감</span></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0288&PLAY_START_TM=1820&AREA_CD=13&SCREEN_CD=003"
                                target="_top" data-theatercode="0288" data-playymd="20230511" data-screencode="003"
                                data-playnum="4" data-playstarttime="1820" data-playendtime="2100"
                                data-theatername="CGV 방학" data-seatremaincnt="120"
                                data-screenkorname="3관 7층"><em>18:20</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>120석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0288&PLAY_START_TM=2140&AREA_CD=13&SCREEN_CD=003"
                                target="_top" data-theatercode="0288" data-playymd="20230511" data-screencode="003"
                                data-playnum="5" data-playstarttime="2140" data-playendtime="2420"
                                data-theatername="CGV 방학" data-seatremaincnt="122"
                                data-screenkorname="3관 7층"><em>21:40</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>122석</span></a></li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>4관 5층</li>//-->
                        <li>4관 5층</li>
                        <li>총 132석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0288&PLAY_START_TM=1720&AREA_CD=13&SCREEN_CD=004"
                                target="_top" data-theatercode="0288" data-playymd="20230511" data-screencode="004"
                                data-playnum="3" data-playstarttime="1720" data-playendtime="2000"
                                data-theatername="CGV 방학" data-seatremaincnt="120"
                                data-screenkorname="4관 5층"><em>17:20</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>120석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0288&PLAY_START_TM=2020&AREA_CD=13&SCREEN_CD=004"
                                target="_top" data-theatercode="0288" data-playymd="20230511" data-screencode="004"
                                data-playnum="4" data-playstarttime="2020" data-playendtime="2300"
                                data-theatername="CGV 방학" data-seatremaincnt="110"
                                data-screenkorname="4관 5층"><em>20:20</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>110석</span></a></li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>5관 5층</li>//-->
                        <li>5관 5층</li>
                        <li>총 132석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0288&PLAY_START_TM=1600&AREA_CD=13&SCREEN_CD=005"
                                target="_top" data-theatercode="0288" data-playymd="20230511" data-screencode="005"
                                data-playnum="3" data-playstarttime="1600" data-playendtime="1840"
                                data-theatername="CGV 방학" data-seatremaincnt="122"
                                data-screenkorname="5관 5층"><em>16:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>122석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0288&PLAY_START_TM=1900&AREA_CD=13&SCREEN_CD=005"
                                target="_top" data-theatercode="0288" data-playymd="20230511" data-screencode="005"
                                data-playnum="4" data-playstarttime="1900" data-playendtime="2140"
                                data-theatername="CGV 방학" data-seatremaincnt="118"
                                data-screenkorname="5관 5층"><em>19:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>118석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0288&PLAY_START_TM=2200&AREA_CD=13&SCREEN_CD=005"
                                target="_top" data-theatercode="0288" data-playymd="20230511" data-screencode="005"
                                data-playnum="5" data-playstarttime="2200" data-playendtime="2440"
                                data-theatername="CGV 방학" data-seatremaincnt="122"
                                data-screenkorname="5관 5층"><em>22:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>122석</span></a></li>

                    </ul>
                </div>
            </div>

        </div>
    </li>

    <li>
        <div class="col-theater"><a href="/theaters/?theaterCode=0030" target="_top">CGV<br />불광</a></div>
        <div class="col-times">

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>1관 11층</li>//-->
                        <li>1관 11층</li>
                        <li>총 283석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0030&PLAY_START_TM=1600&AREA_CD=13&SCREEN_CD=001"
                                target="_top" data-theatercode="0030" data-playymd="20230511" data-screencode="001"
                                data-playnum="3" data-playstarttime="1600" data-playendtime="1840"
                                data-theatername="CGV 불광" data-seatremaincnt="259"
                                data-screenkorname="1관 11층"><em>16:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>259석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0030&PLAY_START_TM=1900&AREA_CD=13&SCREEN_CD=001"
                                target="_top" data-theatercode="0030" data-playymd="20230511" data-screencode="001"
                                data-playnum="4" data-playstarttime="1900" data-playendtime="2140"
                                data-theatername="CGV 불광" data-seatremaincnt="253"
                                data-screenkorname="1관 11층"><em>19:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>253석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0030&PLAY_START_TM=2200&AREA_CD=13&SCREEN_CD=001"
                                target="_top" data-theatercode="0030" data-playymd="20230511" data-screencode="001"
                                data-playnum="5" data-playstarttime="2200" data-playendtime="2440"
                                data-theatername="CGV 불광" data-seatremaincnt="265"
                                data-screenkorname="1관 11층"><em>22:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>265석</span></a></li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>4관 11층</li>//-->
                        <li>4관 11층</li>
                        <li>총 162석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0030&PLAY_START_TM=2240&AREA_CD=13&SCREEN_CD=004"
                                target="_top" data-theatercode="0030" data-playymd="20230511" data-screencode="004"
                                data-playnum="7" data-playstarttime="2240" data-playendtime="2520"
                                data-theatername="CGV 불광" data-seatremaincnt="149"
                                data-screenkorname="4관 11층"><em>22:40</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>149석</span></a></li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>5관 13층</li>//-->
                        <li>5관 13층</li>
                        <li>총 283석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0030&PLAY_START_TM=1700&AREA_CD=13&SCREEN_CD=005"
                                target="_top" data-theatercode="0030" data-playymd="20230511" data-screencode="005"
                                data-playnum="3" data-playstarttime="1700" data-playendtime="1940"
                                data-theatername="CGV 불광" data-seatremaincnt="267"
                                data-screenkorname="5관 13층"><em>17:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>267석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0030&PLAY_START_TM=2000&AREA_CD=13&SCREEN_CD=005"
                                target="_top" data-theatercode="0030" data-playymd="20230511" data-screencode="005"
                                data-playnum="4" data-playstarttime="2000" data-playendtime="2240"
                                data-theatername="CGV 불광" data-seatremaincnt="249"
                                data-screenkorname="5관 13층"><em>20:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>249석</span></a></li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>9관 13층</li>//-->
                        <li>9관 13층</li>
                        <li>총 214석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><em>15:00</em><span>마감</span></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0030&PLAY_START_TM=1800&AREA_CD=13&SCREEN_CD=009"
                                target="_top" data-theatercode="0030" data-playymd="20230511" data-screencode="009"
                                data-playnum="4" data-playstarttime="1800" data-playendtime="2040"
                                data-theatername="CGV 불광" data-seatremaincnt="194"
                                data-screenkorname="9관 13층"><em>18:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>194석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0030&PLAY_START_TM=2100&AREA_CD=13&SCREEN_CD=009"
                                target="_top" data-theatercode="0030" data-playymd="20230511" data-screencode="009"
                                data-playnum="5" data-playstarttime="2100" data-playendtime="2340"
                                data-theatername="CGV 불광" data-seatremaincnt="190"
                                data-screenkorname="9관 13층"><em>21:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>190석</span></a></li>

                    </ul>
                </div>
            </div>

        </div>
    </li>

    <li>
        <div class="col-theater"><a href="/theaters/?theaterCode=0046" target="_top">CGV<br />상봉</a></div>
        <div class="col-times">

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>1관</li>//-->
                        <li>1관</li>
                        <li>총 321석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><em>15:00</em><span>마감</span></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0046&PLAY_START_TM=1800&AREA_CD=13&SCREEN_CD=001"
                                target="_top" data-theatercode="0046" data-playymd="20230511" data-screencode="001"
                                data-playnum="4" data-playstarttime="1800" data-playendtime="2040"
                                data-theatername="CGV 상봉" data-seatremaincnt="291"
                                data-screenkorname="1관"><em>18:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>291석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0046&PLAY_START_TM=2100&AREA_CD=13&SCREEN_CD=001"
                                target="_top" data-theatercode="0046" data-playymd="20230511" data-screencode="001"
                                data-playnum="5" data-playstarttime="2100" data-playendtime="2340"
                                data-theatername="CGV 상봉" data-seatremaincnt="285"
                                data-screenkorname="1관"><em>21:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>285석</span></a></li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>6관</li>//-->
                        <li>6관</li>
                        <li>총 215석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0046&PLAY_START_TM=1630&AREA_CD=13&SCREEN_CD=006"
                                target="_top" data-theatercode="0046" data-playymd="20230511" data-screencode="006"
                                data-playnum="4" data-playstarttime="1630" data-playendtime="1910"
                                data-theatername="CGV 상봉" data-seatremaincnt="197"
                                data-screenkorname="6관"><em>16:30</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>197석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0046&PLAY_START_TM=1930&AREA_CD=13&SCREEN_CD=006"
                                target="_top" data-theatercode="0046" data-playymd="20230511" data-screencode="006"
                                data-playnum="5" data-playstarttime="1930" data-playendtime="2210"
                                data-theatername="CGV 상봉" data-seatremaincnt="186"
                                data-screenkorname="6관"><em>19:30</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>186석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0046&PLAY_START_TM=2230&AREA_CD=13&SCREEN_CD=006"
                                target="_top" data-theatercode="0046" data-playymd="20230511" data-screencode="006"
                                data-playnum="6" data-playstarttime="2230" data-playendtime="2510"
                                data-theatername="CGV 상봉" data-seatremaincnt="201"
                                data-screenkorname="6관"><em>22:30</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>201석</span></a></li>

                    </ul>
                </div>
            </div>

        </div>
    </li>

    <li>
        <div class="col-theater"><a href="/theaters/?theaterCode=0300" target="_top">CGV<br />성신여대입구</a>
        </div>
        <div class="col-times">

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>1관 10층</li>//-->
                        <li>1관 10층</li>
                        <li>총 206석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><em>15:00</em><span>마감</span></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0300&PLAY_START_TM=1805&AREA_CD=13&SCREEN_CD=001"
                                target="_top" data-theatercode="0300" data-playymd="20230511" data-screencode="001"
                                data-playnum="3" data-playstarttime="1805" data-playendtime="2045"
                                data-theatername="CGV 성신여대입구" data-seatremaincnt="166"
                                data-screenkorname="1관 10층"><em>18:05</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>166석</span></a>
                        </li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0300&PLAY_START_TM=2115&AREA_CD=13&SCREEN_CD=001"
                                target="_top" data-theatercode="0300" data-playymd="20230511" data-screencode="001"
                                data-playnum="4" data-playstarttime="2115" data-playendtime="2355"
                                data-theatername="CGV 성신여대입구" data-seatremaincnt="179"
                                data-screenkorname="1관 10층"><em>21:15</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>179석</span></a>
                        </li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>5관 12층</li>//-->
                        <li>5관 12층</li>
                        <li>총 206석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0300&PLAY_START_TM=1630&AREA_CD=13&SCREEN_CD=003"
                                target="_top" data-theatercode="0300" data-playymd="20230511" data-screencode="003"
                                data-playnum="3" data-playstarttime="1630" data-playendtime="1910"
                                data-theatername="CGV 성신여대입구" data-seatremaincnt="180"
                                data-screenkorname="5관 12층"><em>16:30</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>180석</span></a>
                        </li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0300&PLAY_START_TM=1925&AREA_CD=13&SCREEN_CD=003"
                                target="_top" data-theatercode="0300" data-playymd="20230511" data-screencode="003"
                                data-playnum="4" data-playstarttime="1925" data-playendtime="2205"
                                data-theatername="CGV 성신여대입구" data-seatremaincnt="142"
                                data-screenkorname="5관 12층"><em>19:25</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>142석</span></a>
                        </li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0300&PLAY_START_TM=2220&AREA_CD=13&SCREEN_CD=003"
                                target="_top" data-theatercode="0300" data-playymd="20230511" data-screencode="003"
                                data-playnum="5" data-playstarttime="2220" data-playendtime="2500"
                                data-theatername="CGV 성신여대입구" data-seatremaincnt="187"
                                data-screenkorname="5관 12층"><em>22:20</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>187석</span></a>
                        </li>

                    </ul>
                </div>
            </div>

        </div>
    </li>

    <li>
        <div class="col-theater"><a href="/theaters/?theaterCode=0088" target="_top">CGV<br />송파</a></div>
        <div class="col-times">

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>2관</li>//-->
                        <li>2관</li>
                        <li>총 183석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0088&PLAY_START_TM=1730&AREA_CD=13&SCREEN_CD=002"
                                target="_top" data-theatercode="0088" data-playymd="20230511" data-screencode="002"
                                data-playnum="4" data-playstarttime="1730" data-playendtime="2010"
                                data-theatername="CGV 송파" data-seatremaincnt="168"
                                data-screenkorname="2관"><em>17:30</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>168석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0088&PLAY_START_TM=2030&AREA_CD=13&SCREEN_CD=002"
                                target="_top" data-theatercode="0088" data-playymd="20230511" data-screencode="002"
                                data-playnum="5" data-playstarttime="2030" data-playendtime="2310"
                                data-theatername="CGV 송파" data-seatremaincnt="150"
                                data-screenkorname="2관"><em>20:30</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>150석</span></a></li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>3관</li>//-->
                        <li>3관</li>
                        <li>총 310석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0088&PLAY_START_TM=1530&AREA_CD=13&SCREEN_CD=003"
                                target="_top" data-theatercode="0088" data-playymd="20230511" data-screencode="003"
                                data-playnum="3" data-playstarttime="1530" data-playendtime="1810"
                                data-theatername="CGV 송파" data-seatremaincnt="290"
                                data-screenkorname="3관"><em>15:30</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>290석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0088&PLAY_START_TM=1830&AREA_CD=13&SCREEN_CD=003"
                                target="_top" data-theatercode="0088" data-playymd="20230511" data-screencode="003"
                                data-playnum="4" data-playstarttime="1830" data-playendtime="2110"
                                data-theatername="CGV 송파" data-seatremaincnt="291"
                                data-screenkorname="3관"><em>18:30</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>291석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0088&PLAY_START_TM=2130&AREA_CD=13&SCREEN_CD=003"
                                target="_top" data-theatercode="0088" data-playymd="20230511" data-screencode="003"
                                data-playnum="5" data-playstarttime="2130" data-playendtime="2410"
                                data-theatername="CGV 송파" data-seatremaincnt="291"
                                data-screenkorname="3관"><em>21:30</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>291석</span></a></li>

                    </ul>
                </div>
            </div>

        </div>
    </li>

    <li>
        <div class="col-theater"><a href="/theaters/?theaterCode=0276" target="_top">CGV<br />수유</a></div>
        <div class="col-times">

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>3관 4층</li>//-->
                        <li>3관 4층</li>
                        <li>총 124석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><em>15:20</em><span>마감</span></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0276&PLAY_START_TM=1830&AREA_CD=13&SCREEN_CD=003"
                                target="_top" data-theatercode="0276" data-playymd="20230511" data-screencode="003"
                                data-playnum="4" data-playstarttime="1830" data-playendtime="2110"
                                data-theatername="CGV 수유" data-seatremaincnt="112"
                                data-screenkorname="3관 4층"><em>18:30</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>112석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0276&PLAY_START_TM=2130&AREA_CD=13&SCREEN_CD=003"
                                target="_top" data-theatercode="0276" data-playymd="20230511" data-screencode="003"
                                data-playnum="5" data-playstarttime="2130" data-playendtime="2410"
                                data-theatername="CGV 수유" data-seatremaincnt="109"
                                data-screenkorname="3관 4층"><em>21:30</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>109석</span></a></li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>6관 6층</li>//-->
                        <li>6관 6층</li>
                        <li>총 124석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0276&PLAY_START_TM=1620&AREA_CD=13&SCREEN_CD=006"
                                target="_top" data-theatercode="0276" data-playymd="20230511" data-screencode="006"
                                data-playnum="3" data-playstarttime="1620" data-playendtime="1900"
                                data-theatername="CGV 수유" data-seatremaincnt="100"
                                data-screenkorname="6관 6층"><em>16:20</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>100석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0276&PLAY_START_TM=1930&AREA_CD=13&SCREEN_CD=006"
                                target="_top" data-theatercode="0276" data-playymd="20230511" data-screencode="006"
                                data-playnum="4" data-playstarttime="1930" data-playendtime="2210"
                                data-theatername="CGV 수유" data-seatremaincnt="100"
                                data-screenkorname="6관 6층"><em>19:30</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>100석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0276&PLAY_START_TM=2225&AREA_CD=13&SCREEN_CD=006"
                                target="_top" data-theatercode="0276" data-playymd="20230511" data-screencode="006"
                                data-playnum="5" data-playstarttime="2225" data-playendtime="2505"
                                data-theatername="CGV 수유" data-seatremaincnt="112"
                                data-screenkorname="6관 6층"><em>22:25</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>112석</span></a></li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>9관 8층</li>//-->
                        <li>9관 8층</li>
                        <li>총 124석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0276&PLAY_START_TM=1740&AREA_CD=13&SCREEN_CD=009"
                                target="_top" data-theatercode="0276" data-playymd="20230511" data-screencode="009"
                                data-playnum="3" data-playstarttime="1740" data-playendtime="2020"
                                data-theatername="CGV 수유" data-seatremaincnt="104"
                                data-screenkorname="9관 8층"><em>17:40</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>104석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0276&PLAY_START_TM=2040&AREA_CD=13&SCREEN_CD=009"
                                target="_top" data-theatercode="0276" data-playymd="20230511" data-screencode="009"
                                data-playnum="4" data-playstarttime="2040" data-playendtime="2320"
                                data-theatername="CGV 수유" data-seatremaincnt="105"
                                data-screenkorname="9관 8층"><em>20:40</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>105석</span></a></li>

                    </ul>
                </div>
            </div>

        </div>
    </li>

    <li>
        <div class="col-theater"><a href="/theaters/?theaterCode=0150" target="_top">CGV<br />신촌아트레온</a>
        </div>
        <div class="col-times">

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>1관[프리미엄] B3층-상층</li>//-->
                        <li>1관[프리미엄] B3층-상층</li>
                        <li>총 16석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0150&PLAY_START_TM=1610&AREA_CD=13&SCREEN_CD=002"
                                target="_top" data-theatercode="0150" data-playymd="20230511" data-screencode="002"
                                data-playnum="3" data-playstarttime="1610" data-playendtime="1850"
                                data-theatername="CGV 신촌아트레온" data-seatremaincnt="12"
                                data-screenkorname="1관[프리미엄] B3층-상층"><em>16:10</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>12석</span></a>
                        </li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0150&PLAY_START_TM=1910&AREA_CD=13&SCREEN_CD=002"
                                target="_top" data-theatercode="0150" data-playymd="20230511" data-screencode="002"
                                data-playnum="4" data-playstarttime="1910" data-playendtime="2150"
                                data-theatername="CGV 신촌아트레온" data-seatremaincnt="8"
                                data-screenkorname="1관[프리미엄] B3층-상층"><em>19:10</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>8석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0150&PLAY_START_TM=2210&AREA_CD=13&SCREEN_CD=002"
                                target="_top" data-theatercode="0150" data-playymd="20230511" data-screencode="002"
                                data-playnum="5" data-playstarttime="2210" data-playendtime="2450"
                                data-theatername="CGV 신촌아트레온" data-seatremaincnt="13"
                                data-screenkorname="1관[프리미엄] B3층-상층"><em>22:10</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>13석</span></a>
                        </li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>1관 B3층-하층</li>//-->
                        <li>1관 B3층-하층</li>
                        <li>총 288석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0150&PLAY_START_TM=1610&AREA_CD=13&SCREEN_CD=001"
                                target="_top" data-theatercode="0150" data-playymd="20230511" data-screencode="001"
                                data-playnum="3" data-playstarttime="1610" data-playendtime="1850"
                                data-theatername="CGV 신촌아트레온" data-seatremaincnt="244"
                                data-screenkorname="1관 B3층-하층"><em>16:10</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>244석</span></a>
                        </li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0150&PLAY_START_TM=1910&AREA_CD=13&SCREEN_CD=001"
                                target="_top" data-theatercode="0150" data-playymd="20230511" data-screencode="001"
                                data-playnum="4" data-playstarttime="1910" data-playendtime="2150"
                                data-theatername="CGV 신촌아트레온" data-seatremaincnt="233"
                                data-screenkorname="1관 B3층-하층"><em>19:10</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>233석</span></a>
                        </li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0150&PLAY_START_TM=2210&AREA_CD=13&SCREEN_CD=001"
                                target="_top" data-theatercode="0150" data-playymd="20230511" data-screencode="001"
                                data-playnum="5" data-playstarttime="2210" data-playendtime="2450"
                                data-theatername="CGV 신촌아트레온" data-seatremaincnt="271"
                                data-screenkorname="1관 B3층-하층"><em>22:10</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>271석</span></a>
                        </li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>2관 3층</li>//-->
                        <li>2관 3층</li>
                        <li>총 205석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0150&PLAY_START_TM=1940&AREA_CD=13&SCREEN_CD=003"
                                target="_top" data-theatercode="0150" data-playymd="20230511" data-screencode="003"
                                data-playnum="4" data-playstarttime="1940" data-playendtime="2220"
                                data-theatername="CGV 신촌아트레온" data-seatremaincnt="181"
                                data-screenkorname="2관 3층"><em>19:40</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>181석</span></a>
                        </li>

                    </ul>
                </div>
            </div>

        </div>
    </li>

    <li>
        <div class="col-theater"><a href="/theaters/?theaterCode=0040" target="_top">CGV<br />압구정</a></div>
        <div class="col-times">

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li><span class='screentype'><span class='tempurCinema'>TEMPUR CINEMA</span></span></li>//-->
                        <li><span class='screentype'><span class='tempurCinema'>TEMPUR CINEMA</span></span>
                        </li>
                        <li>총 30석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0040&PLAY_START_TM=1620&AREA_CD=13&SCREEN_CD=012"
                                target="_top" data-theatercode="0040" data-playymd="20230511" data-screencode="012"
                                data-playnum="3" data-playstarttime="1620" data-playendtime="1855"
                                data-theatername="CGV 압구정" data-seatremaincnt="20"
                                data-screenkorname="템퍼 시네마[CINE de CHEF]"><em>16:20</em><span
                                    class='txt-lightblue'><span class='hidden'>잔여좌석</span>20석</span></a>
                        </li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0040&PLAY_START_TM=1940&AREA_CD=13&SCREEN_CD=012"
                                target="_top" data-theatercode="0040" data-playymd="20230511" data-screencode="012"
                                data-playnum="4" data-playstarttime="1940" data-playendtime="2215"
                                data-theatername="CGV 압구정" data-seatremaincnt="2"
                                data-screenkorname="템퍼 시네마[CINE de CHEF]"><em>19:40</em><span
                                    class='txt-lightblue'><span class='hidden'>잔여좌석</span>2석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0040&PLAY_START_TM=2300&AREA_CD=13&SCREEN_CD=012"
                                target="_top" data-theatercode="0040" data-playymd="20230511" data-screencode="012"
                                data-playnum="5" data-playstarttime="2300" data-playendtime="2535"
                                data-theatername="CGV 압구정" data-seatremaincnt="30"
                                data-screenkorname="템퍼 시네마[CINE de CHEF]"><em>23:00</em><span
                                    class='txt-lightblue'><span class='hidden'>잔여좌석</span>30석</span></a>
                        </li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>스트레스리스 시네마[CINE de CHEF]</li>//-->
                        <li>스트레스리스 시네마[CINE de CHEF]</li>
                        <li>총 46석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0040&PLAY_START_TM=1900&AREA_CD=13&SCREEN_CD=013"
                                target="_top" data-theatercode="0040" data-playymd="20230511" data-screencode="013"
                                data-playnum="4" data-playstarttime="1900" data-playendtime="2135"
                                data-theatername="CGV 압구정" data-seatremaincnt="36"
                                data-screenkorname="스트레스리스 시네마[CINE de CHEF]"><em>19:00</em><span
                                    class='txt-lightblue'><span class='hidden'>잔여좌석</span>36석</span></a>
                        </li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>3관 본관4층</li>//-->
                        <li>3관 본관4층</li>
                        <li>총 182석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0040&PLAY_START_TM=1600&AREA_CD=13&SCREEN_CD=003"
                                target="_top" data-theatercode="0040" data-playymd="20230511" data-screencode="003"
                                data-playnum="3" data-playstarttime="1600" data-playendtime="1840"
                                data-theatername="CGV 압구정" data-seatremaincnt="156"
                                data-screenkorname="3관 본관4층"><em>16:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>156석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0040&PLAY_START_TM=1900&AREA_CD=13&SCREEN_CD=003"
                                target="_top" data-theatercode="0040" data-playymd="20230511" data-screencode="003"
                                data-playnum="4" data-playstarttime="1900" data-playendtime="2140"
                                data-theatername="CGV 압구정" data-seatremaincnt="151"
                                data-screenkorname="3관 본관4층"><em>19:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>151석</span></a></li>

                    </ul>
                </div>
            </div>

        </div>
    </li>

    <li>
        <div class="col-theater"><a href="/theaters/?theaterCode=0292" target="_top">CGV<br />연남</a></div>
        <div class="col-times">

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>2관[YOGIBO관] 8층 (빈백석)</li>//-->
                        <li>2관[YOGIBO관] 8층 (빈백석)</li>
                        <li>총 78석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><em>15:25</em><span>마감</span></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0292&PLAY_START_TM=2115&AREA_CD=13&SCREEN_CD=002"
                                target="_top" data-theatercode="0292" data-playymd="20230511" data-screencode="002"
                                data-playnum="5" data-playstarttime="2115" data-playendtime="2355"
                                data-theatername="CGV 연남" data-seatremaincnt="65"
                                data-screenkorname="2관[YOGIBO관] 8층 (빈백석)"><em>21:15</em><span
                                    class='txt-lightblue'><span class='hidden'>잔여좌석</span>65석</span></a>
                        </li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>6관 10층</li>//-->
                        <li>6관 10층</li>
                        <li>총 188석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0292&PLAY_START_TM=2240&AREA_CD=13&SCREEN_CD=006"
                                target="_top" data-theatercode="0292" data-playymd="20230511" data-screencode="006"
                                data-playnum="6" data-playstarttime="2240" data-playendtime="2520"
                                data-theatername="CGV 연남" data-seatremaincnt="174"
                                data-screenkorname="6관 10층"><em>22:40</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>174석</span></a></li>

                    </ul>
                </div>
            </div>

        </div>
    </li>

    <li>
        <div class="col-theater"><a href="/theaters/?theaterCode=0059" target="_top">CGV<br />영등포</a></div>
        <div class="col-times">

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li><span class='screentype'><span class='sphereX'>SphereX</span></span></li>//-->
                        <li><span class='screentype'><span class='sphereX'>SphereX</span></span></li>
                        <li>총 387석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0059&PLAY_START_TM=1730&AREA_CD=13&SCREEN_CD=017"
                                target="_top" data-theatercode="0059" data-playymd="20230511" data-screencode="017"
                                data-playnum="3" data-playstarttime="1730" data-playendtime="2010"
                                data-theatername="CGV 영등포" data-seatremaincnt="356"
                                data-screenkorname="SPHEREX관 7층"><em>17:30</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>356석</span></a>
                        </li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0059&PLAY_START_TM=2055&AREA_CD=13&SCREEN_CD=017"
                                target="_top" data-theatercode="0059" data-playymd="20230511" data-screencode="017"
                                data-playnum="4" data-playstarttime="2055" data-playendtime="2335"
                                data-theatername="CGV 영등포" data-seatremaincnt="358"
                                data-screenkorname="SPHEREX관 7층"><em>20:55</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>358석</span></a>
                        </li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0059&PLAY_START_TM=2420&AREA_CD=13&SCREEN_CD=017"
                                target="_top" data-theatercode="0059" data-playymd="20230511" data-screencode="017"
                                data-playnum="5" data-playstarttime="2420" data-playendtime="2700"
                                data-theatername="CGV 영등포" data-seatremaincnt="381"
                                data-screenkorname="SPHEREX관 7층"><em>24:20</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>381석</span></a>
                        </li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li><span class='screentype'><span class='gold'>GOLD CLASS</span></span></li>//-->
                        <li><span class='screentype'><span class='gold'>GOLD CLASS</span></span></li>
                        <li>총 48석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0059&PLAY_START_TM=1650&AREA_CD=13&SCREEN_CD=011"
                                target="_top" data-theatercode="0059" data-playymd="20230511" data-screencode="011"
                                data-playnum="3" data-playstarttime="1650" data-playendtime="1930"
                                data-theatername="CGV 영등포" data-seatremaincnt="33"
                                data-screenkorname="GOLD CLASS with NOUHAUS 6층"><em>16:50</em><span
                                    class='txt-lightblue'><span class='hidden'>잔여좌석</span>33석</span></a>
                        </li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0059&PLAY_START_TM=2025&AREA_CD=13&SCREEN_CD=011"
                                target="_top" data-theatercode="0059" data-playymd="20230511" data-screencode="011"
                                data-playnum="4" data-playstarttime="2025" data-playendtime="2305"
                                data-theatername="CGV 영등포" data-seatremaincnt="42"
                                data-screenkorname="GOLD CLASS with NOUHAUS 6층"><em>20:25</em><span
                                    class='txt-lightblue'><span class='hidden'>잔여좌석</span>42석</span></a>
                        </li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0059&PLAY_START_TM=2340&AREA_CD=13&SCREEN_CD=011"
                                target="_top" data-theatercode="0059" data-playymd="20230511" data-screencode="011"
                                data-playnum="5" data-playstarttime="2340" data-playendtime="2620"
                                data-theatername="CGV 영등포" data-seatremaincnt="48"
                                data-screenkorname="GOLD CLASS with NOUHAUS 6층"><em>23:40</em><span
                                    class='txt-lightblue'><span class='hidden'>잔여좌석</span>48석</span></a>
                        </li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>1관[THX] 4층</li>//-->
                        <li>1관[THX] 4층</li>
                        <li>총 358석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><em>15:00</em><span>마감</span></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0059&PLAY_START_TM=1825&AREA_CD=13&SCREEN_CD=001"
                                target="_top" data-theatercode="0059" data-playymd="20230511" data-screencode="001"
                                data-playnum="4" data-playstarttime="1825" data-playendtime="2105"
                                data-theatername="CGV 영등포" data-seatremaincnt="252"
                                data-screenkorname="1관[THX] 4층"><em>18:25</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>252석</span></a>
                        </li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0059&PLAY_START_TM=2145&AREA_CD=13&SCREEN_CD=001"
                                target="_top" data-theatercode="0059" data-playymd="20230511" data-screencode="001"
                                data-playnum="5" data-playstarttime="2145" data-playendtime="2425"
                                data-theatername="CGV 영등포" data-seatremaincnt="318"
                                data-screenkorname="1관[THX] 4층"><em>21:45</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>318석</span></a>
                        </li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>3관 4층</li>//-->
                        <li>3관 4층</li>
                        <li>총 177석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0059&PLAY_START_TM=1905&AREA_CD=13&SCREEN_CD=003"
                                target="_top" data-theatercode="0059" data-playymd="20230511" data-screencode="003"
                                data-playnum="5" data-playstarttime="1905" data-playendtime="2145"
                                data-theatername="CGV 영등포" data-seatremaincnt="141"
                                data-screenkorname="3관 4층"><em>19:05</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>141석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0059&PLAY_START_TM=2230&AREA_CD=13&SCREEN_CD=003"
                                target="_top" data-theatercode="0059" data-playymd="20230511" data-screencode="003"
                                data-playnum="6" data-playstarttime="2230" data-playendtime="2510"
                                data-theatername="CGV 영등포" data-seatremaincnt="163"
                                data-screenkorname="3관 4층"><em>22:30</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>163석</span></a></li>

                    </ul>
                </div>
            </div>

        </div>
    </li>

    <li>
        <div class="col-theater"><a href="/theaters/?theaterCode=0074" target="_top">CGV<br />왕십리</a></div>
        <div class="col-times">

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>씨네앤리빙룸</li>//-->
                        <li>씨네앤리빙룸</li>
                        <li>총 50석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0074&PLAY_START_TM=1700&AREA_CD=13&SCREEN_CD=003"
                                target="_top" data-theatercode="0074" data-playymd="20230511" data-screencode="003"
                                data-playnum="3" data-playstarttime="1700" data-playendtime="1940"
                                data-theatername="CGV 왕십리" data-seatremaincnt="44"
                                data-screenkorname="씨네앤리빙룸"><em>17:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>44석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0074&PLAY_START_TM=2030&AREA_CD=13&SCREEN_CD=003"
                                target="_top" data-theatercode="0074" data-playymd="20230511" data-screencode="003"
                                data-playnum="4" data-playstarttime="2030" data-playendtime="2310"
                                data-theatername="CGV 왕십리" data-seatremaincnt="28"
                                data-screenkorname="씨네앤리빙룸"><em>20:30</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>28석</span></a></li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li><span class='screentype'><span class='gold'>GOLD CLASS</span></span></li>//-->
                        <li><span class='screentype'><span class='gold'>GOLD CLASS</span></span></li>
                        <li>총 30석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0074&PLAY_START_TM=1710&AREA_CD=13&SCREEN_CD=010"
                                target="_top" data-theatercode="0074" data-playymd="20230511" data-screencode="010"
                                data-playnum="3" data-playstarttime="1710" data-playendtime="1950"
                                data-theatername="CGV 왕십리" data-seatremaincnt="24"
                                data-screenkorname="GOLD CLASS with FLEXOUND"><em>17:10</em><span
                                    class='txt-lightblue'><span class='hidden'>잔여좌석</span>24석</span></a>
                        </li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0074&PLAY_START_TM=2015&AREA_CD=13&SCREEN_CD=010"
                                target="_top" data-theatercode="0074" data-playymd="20230511" data-screencode="010"
                                data-playnum="4" data-playstarttime="2015" data-playendtime="2255"
                                data-theatername="CGV 왕십리" data-seatremaincnt="18"
                                data-screenkorname="GOLD CLASS with FLEXOUND"><em>20:15</em><span
                                    class='txt-lightblue'><span class='hidden'>잔여좌석</span>18석</span></a>
                        </li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>8관</li>//-->
                        <li>8관</li>
                        <li>총 326석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><em>15:10</em><span>마감</span></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0074&PLAY_START_TM=1815&AREA_CD=13&SCREEN_CD=008"
                                target="_top" data-theatercode="0074" data-playymd="20230511" data-screencode="008"
                                data-playnum="4" data-playstarttime="1815" data-playendtime="2055"
                                data-theatername="CGV 왕십리" data-seatremaincnt="268"
                                data-screenkorname="8관"><em>18:15</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>268석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0074&PLAY_START_TM=2120&AREA_CD=13&SCREEN_CD=008"
                                target="_top" data-theatercode="0074" data-playymd="20230511" data-screencode="008"
                                data-playnum="5" data-playstarttime="2120" data-playendtime="2400"
                                data-theatername="CGV 왕십리" data-seatremaincnt="284"
                                data-screenkorname="8관"><em>21:20</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>284석</span></a></li>

                    </ul>
                </div>
            </div>

        </div>
    </li>

    <li>
        <div class="col-theater"><a href="/theaters/?theaterCode=0013" target="_top">CGV<br />용산아이파크몰</a>
        </div>
        <div class="col-times">

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li><span class='screentype'><span class='tempurCinema'>TEMPUR CINEMA</span></span></li>//-->
                        <li><span class='screentype'><span class='tempurCinema'>TEMPUR CINEMA</span></span>
                        </li>
                        <li>총 50석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0013&PLAY_START_TM=1600&AREA_CD=13&SCREEN_CD=032"
                                target="_top" data-theatercode="0013" data-playymd="20230511" data-screencode="032"
                                data-playnum="3" data-playstarttime="1600" data-playendtime="1835"
                                data-theatername="CGV 용산아이파크몰" data-seatremaincnt="28"
                                data-screenkorname="템퍼 시네마[CINE de CHEF]"><em>16:00</em><span
                                    class='txt-lightblue'><span class='hidden'>잔여좌석</span>28석</span></a>
                        </li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0013&PLAY_START_TM=1920&AREA_CD=13&SCREEN_CD=032"
                                target="_top" data-theatercode="0013" data-playymd="20230511" data-screencode="032"
                                data-playnum="4" data-playstarttime="1920" data-playendtime="2155"
                                data-theatername="CGV 용산아이파크몰" data-seatremaincnt="16"
                                data-screenkorname="템퍼 시네마[CINE de CHEF]"><em>19:20</em><span
                                    class='txt-lightblue'><span class='hidden'>잔여좌석</span>16석</span></a>
                        </li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0013&PLAY_START_TM=2240&AREA_CD=13&SCREEN_CD=032"
                                target="_top" data-theatercode="0013" data-playymd="20230511" data-screencode="032"
                                data-playnum="5" data-playstarttime="2240" data-playendtime="2515"
                                data-theatername="CGV 용산아이파크몰" data-seatremaincnt="48"
                                data-screenkorname="템퍼 시네마[CINE de CHEF]"><em>22:40</em><span
                                    class='txt-lightblue'><span class='hidden'>잔여좌석</span>48석</span></a>
                        </li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>스트레스리스 시네마[CINE de CHEF]</li>//-->
                        <li>스트레스리스 시네마[CINE de CHEF]</li>
                        <li>총 64석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0013&PLAY_START_TM=2000&AREA_CD=13&SCREEN_CD=031"
                                target="_top" data-theatercode="0013" data-playymd="20230511" data-screencode="031"
                                data-playnum="4" data-playstarttime="2000" data-playendtime="2235"
                                data-theatername="CGV 용산아이파크몰" data-seatremaincnt="29"
                                data-screenkorname="스트레스리스 시네마[CINE de CHEF]"><em>20:00</em><span
                                    class='txt-lightblue'><span class='hidden'>잔여좌석</span>29석</span></a>
                        </li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li><span class='screentype'><span class='gold'>GOLD CLASS</span></span></li>//-->
                        <li><span class='screentype'><span class='gold'>GOLD CLASS</span></span></li>
                        <li>총 40석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0013&PLAY_START_TM=1730&AREA_CD=13&SCREEN_CD=008"
                                target="_top" data-theatercode="0013" data-playymd="20230511" data-screencode="008"
                                data-playnum="4" data-playstarttime="1730" data-playendtime="2010"
                                data-theatername="CGV 용산아이파크몰" data-seatremaincnt="30"
                                data-screenkorname="GOLD CLASS"><em>17:30</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>30석</span></a>
                        </li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0013&PLAY_START_TM=2035&AREA_CD=13&SCREEN_CD=008"
                                target="_top" data-theatercode="0013" data-playymd="20230511" data-screencode="008"
                                data-playnum="5" data-playstarttime="2035" data-playendtime="2315"
                                data-theatername="CGV 용산아이파크몰" data-seatremaincnt="23"
                                data-screenkorname="GOLD CLASS"><em>20:35</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>23석</span></a>
                        </li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0013&PLAY_START_TM=2340&AREA_CD=13&SCREEN_CD=008"
                                target="_top" data-theatercode="0013" data-playymd="20230511" data-screencode="008"
                                data-playnum="6" data-playstarttime="2340" data-playendtime="2620"
                                data-theatername="CGV 용산아이파크몰" data-seatremaincnt="38"
                                data-screenkorname="GOLD CLASS"><em>23:40</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>38석</span></a>
                        </li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>2관 (Laser)</li>//-->
                        <li>2관 (Laser)</li>
                        <li>총 172석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0013&PLAY_START_TM=2310&AREA_CD=13&SCREEN_CD=002"
                                target="_top" data-theatercode="0013" data-playymd="20230511" data-screencode="002"
                                data-playnum="7" data-playstarttime="2310" data-playendtime="2550"
                                data-theatername="CGV 용산아이파크몰" data-seatremaincnt="157"
                                data-screenkorname="2관 (Laser)"><em>23:10</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>157석</span></a>
                        </li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>4관 (Laser)</li>//-->
                        <li>4관 (Laser)</li>
                        <li>총 403석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0013&PLAY_START_TM=1615&AREA_CD=13&SCREEN_CD=004"
                                target="_top" data-theatercode="0013" data-playymd="20230511" data-screencode="004"
                                data-playnum="4" data-playstarttime="1615" data-playendtime="1855"
                                data-theatername="CGV 용산아이파크몰" data-seatremaincnt="278"
                                data-screenkorname="4관 (Laser)"><em>16:15</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>278석</span></a>
                        </li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0013&PLAY_START_TM=1920&AREA_CD=13&SCREEN_CD=004"
                                target="_top" data-theatercode="0013" data-playymd="20230511" data-screencode="004"
                                data-playnum="5" data-playstarttime="1920" data-playendtime="2200"
                                data-theatername="CGV 용산아이파크몰" data-seatremaincnt="181"
                                data-screenkorname="4관 (Laser)"><em>19:20</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>181석</span></a>
                        </li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0013&PLAY_START_TM=2225&AREA_CD=13&SCREEN_CD=004"
                                target="_top" data-theatercode="0013" data-playymd="20230511" data-screencode="004"
                                data-playnum="6" data-playstarttime="2225" data-playendtime="2505"
                                data-theatername="CGV 용산아이파크몰" data-seatremaincnt="374"
                                data-screenkorname="4관 (Laser)"><em>22:25</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>374석</span></a>
                        </li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0013&PLAY_START_TM=2530&AREA_CD=13&SCREEN_CD=004"
                                target="_top" data-theatercode="0013" data-playymd="20230511" data-screencode="004"
                                data-playnum="7" data-playstarttime="2530" data-playendtime="2810"
                                data-theatername="CGV 용산아이파크몰" data-seatremaincnt="387"
                                data-screenkorname="4관 (Laser)"><em>25:30</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>387석</span></a>
                        </li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>7관 (Laser)</li>//-->
                        <li>7관 (Laser)</li>
                        <li>총 201석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><em>14:40</em><span>마감</span></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0013&PLAY_START_TM=1745&AREA_CD=13&SCREEN_CD=007"
                                target="_top" data-theatercode="0013" data-playymd="20230511" data-screencode="007"
                                data-playnum="4" data-playstarttime="1745" data-playendtime="2025"
                                data-theatername="CGV 용산아이파크몰" data-seatremaincnt="115"
                                data-screenkorname="7관 (Laser)"><em>17:45</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>115석</span></a>
                        </li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0013&PLAY_START_TM=2050&AREA_CD=13&SCREEN_CD=007"
                                target="_top" data-theatercode="0013" data-playymd="20230511" data-screencode="007"
                                data-playnum="5" data-playstarttime="2050" data-playendtime="2330"
                                data-theatername="CGV 용산아이파크몰" data-seatremaincnt="96"
                                data-screenkorname="7관 (Laser)"><em>20:50</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>96석</span></a>
                        </li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0013&PLAY_START_TM=2355&AREA_CD=13&SCREEN_CD=007"
                                target="_top" data-theatercode="0013" data-playymd="20230511" data-screencode="007"
                                data-playnum="6" data-playstarttime="2355" data-playendtime="2635"
                                data-theatername="CGV 용산아이파크몰" data-seatremaincnt="184"
                                data-screenkorname="7관 (Laser)"><em>23:55</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>184석</span></a>
                        </li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>11관[디즈니시네마관]</li>//-->
                        <li>11관[디즈니시네마관]</li>
                        <li>총 194석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><em>15:10</em><span>마감</span></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0013&PLAY_START_TM=1815&AREA_CD=13&SCREEN_CD=048"
                                target="_top" data-theatercode="0013" data-playymd="20230511" data-screencode="048"
                                data-playnum="4" data-playstarttime="1815" data-playendtime="2055"
                                data-theatername="CGV 용산아이파크몰" data-seatremaincnt="137"
                                data-screenkorname="11관[디즈니시네마관]"><em>18:15</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>137석</span></a>
                        </li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0013&PLAY_START_TM=2120&AREA_CD=13&SCREEN_CD=048"
                                target="_top" data-theatercode="0013" data-playymd="20230511" data-screencode="048"
                                data-playnum="5" data-playstarttime="2120" data-playendtime="2400"
                                data-theatername="CGV 용산아이파크몰" data-seatremaincnt="157"
                                data-screenkorname="11관[디즈니시네마관]"><em>21:20</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>157석</span></a>
                        </li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0013&PLAY_START_TM=2425&AREA_CD=13&SCREEN_CD=048"
                                target="_top" data-theatercode="0013" data-playymd="20230511" data-screencode="048"
                                data-playnum="6" data-playstarttime="2425" data-playendtime="2705"
                                data-theatername="CGV 용산아이파크몰" data-seatremaincnt="181"
                                data-screenkorname="11관[디즈니시네마관]"><em>24:25</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>181석</span></a>
                        </li>

                    </ul>
                </div>
            </div>

        </div>
    </li>

    <li>
        <div class="col-theater"><a href="/theaters/?theaterCode=0131" target="_top">CGV<br />중계</a></div>
        <div class="col-times">

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>4관</li>//-->
                        <li>4관</li>
                        <li>총 188석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0131&PLAY_START_TM=1720&AREA_CD=13&SCREEN_CD=004"
                                target="_top" data-theatercode="0131" data-playymd="20230511" data-screencode="004"
                                data-playnum="4" data-playstarttime="1720" data-playendtime="2000"
                                data-theatername="CGV 중계" data-seatremaincnt="175"
                                data-screenkorname="4관"><em>17:20</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>175석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0131&PLAY_START_TM=2040&AREA_CD=13&SCREEN_CD=004"
                                target="_top" data-theatercode="0131" data-playymd="20230511" data-screencode="004"
                                data-playnum="5" data-playstarttime="2040" data-playendtime="2320"
                                data-theatername="CGV 중계" data-seatremaincnt="175"
                                data-screenkorname="4관"><em>20:40</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>175석</span></a></li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>7관</li>//-->
                        <li>7관</li>
                        <li>총 199석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><em>15:00</em><span>마감</span></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0131&PLAY_START_TM=1820&AREA_CD=13&SCREEN_CD=007"
                                target="_top" data-theatercode="0131" data-playymd="20230511" data-screencode="007"
                                data-playnum="4" data-playstarttime="1820" data-playendtime="2100"
                                data-theatername="CGV 중계" data-seatremaincnt="178"
                                data-screenkorname="7관"><em>18:20</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>178석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0131&PLAY_START_TM=2120&AREA_CD=13&SCREEN_CD=007"
                                target="_top" data-theatercode="0131" data-playymd="20230511" data-screencode="007"
                                data-playnum="5" data-playstarttime="2120" data-playendtime="2400"
                                data-theatername="CGV 중계" data-seatremaincnt="181"
                                data-screenkorname="7관"><em>21:20</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>181석</span></a></li>

                    </ul>
                </div>
            </div>

        </div>
    </li>

    <li>
        <div class="col-theater"><a href="/theaters/?theaterCode=0199" target="_top">CGV<br />천호</a></div>
        <div class="col-times">

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li><span class='screentype'><span class='sphereX'>SphereX</span></span></li>//-->
                        <li><span class='screentype'><span class='sphereX'>SphereX</span></span></li>
                        <li>총 213석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><em>15:00</em><span>마감</span></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0199&PLAY_START_TM=1800&AREA_CD=13&SCREEN_CD=005"
                                target="_top" data-theatercode="0199" data-playymd="20230511" data-screencode="005"
                                data-playnum="4" data-playstarttime="1800" data-playendtime="2040"
                                data-theatername="CGV 천호" data-seatremaincnt="207"
                                data-screenkorname="SPHEREX관"><em>18:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>207석</span></a>
                        </li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0199&PLAY_START_TM=2100&AREA_CD=13&SCREEN_CD=005"
                                target="_top" data-theatercode="0199" data-playymd="20230511" data-screencode="005"
                                data-playnum="5" data-playstarttime="2100" data-playendtime="2340"
                                data-theatername="CGV 천호" data-seatremaincnt="205"
                                data-screenkorname="SPHEREX관"><em>21:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>205석</span></a>
                        </li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>4관</li>//-->
                        <li>4관</li>
                        <li>총 174석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0199&PLAY_START_TM=1710&AREA_CD=13&SCREEN_CD=004"
                                target="_top" data-theatercode="0199" data-playymd="20230511" data-screencode="004"
                                data-playnum="4" data-playstarttime="1710" data-playendtime="1950"
                                data-theatername="CGV 천호" data-seatremaincnt="151"
                                data-screenkorname="4관"><em>17:10</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>151석</span></a></li>

                    </ul>
                </div>
            </div>

        </div>
    </li>

    <li>
        <div class="col-theater"><a href="/theaters/?theaterCode=0107" target="_top">CGV<br />청담씨네시티</a>
        </div>
        <div class="col-times">

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>CINEMA PREMIUM관 5층</li>//-->
                        <li>CINEMA PREMIUM관 5층</li>
                        <li>총 112석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0107&PLAY_START_TM=1700&AREA_CD=13&SCREEN_CD=001"
                                target="_top" data-theatercode="0107" data-playymd="20230511" data-screencode="001"
                                data-playnum="4" data-playstarttime="1700" data-playendtime="1940"
                                data-theatername="CGV 청담씨네시티" data-seatremaincnt="109"
                                data-screenkorname="CINEMA PREMIUM관 5층"><em>17:00</em><span
                                    class='txt-lightblue'><span class='hidden'>잔여좌석</span>109석</span></a>
                        </li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>SWEETBOX PREMIUM 6층</li>//-->
                        <li>SWEETBOX PREMIUM 6층</li>
                        <li>총 20석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0107&PLAY_START_TM=1700&AREA_CD=13&SCREEN_CD=002"
                                target="_top" data-theatercode="0107" data-playymd="20230511" data-screencode="002"
                                data-playnum="4" data-playstarttime="1700" data-playendtime="1940"
                                data-theatername="CGV 청담씨네시티" data-seatremaincnt="20"
                                data-screenkorname="SWEETBOX PREMIUM 6층"><em>17:00</em><span
                                    class='txt-lightblue'><span class='hidden'>잔여좌석</span>20석</span></a>
                        </li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>3관 9층(컴포트석)</li>//-->
                        <li>3관 9층(컴포트석)</li>
                        <li>총 186석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0107&PLAY_START_TM=1620&AREA_CD=13&SCREEN_CD=005"
                                target="_top" data-theatercode="0107" data-playymd="20230511" data-screencode="005"
                                data-playnum="3" data-playstarttime="1620" data-playendtime="1900"
                                data-theatername="CGV 청담씨네시티" data-seatremaincnt="184"
                                data-screenkorname="3관 9층(컴포트석)"><em>16:20</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>184석</span></a>
                        </li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0107&PLAY_START_TM=1920&AREA_CD=13&SCREEN_CD=005"
                                target="_top" data-theatercode="0107" data-playymd="20230511" data-screencode="005"
                                data-playnum="4" data-playstarttime="1920" data-playendtime="2200"
                                data-theatername="CGV 청담씨네시티" data-seatremaincnt="177"
                                data-screenkorname="3관 9층(컴포트석)"><em>19:20</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>177석</span></a>
                        </li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>SWEETBOX PREMIUM 10층</li>//-->
                        <li>SWEETBOX PREMIUM 10층</li>
                        <li>총 20석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0107&PLAY_START_TM=1620&AREA_CD=13&SCREEN_CD=006"
                                target="_top" data-theatercode="0107" data-playymd="20230511" data-screencode="006"
                                data-playnum="3" data-playstarttime="1620" data-playendtime="1900"
                                data-theatername="CGV 청담씨네시티" data-seatremaincnt="20"
                                data-screenkorname="SWEETBOX PREMIUM 10층"><em>16:20</em><span
                                    class='txt-lightblue'><span class='hidden'>잔여좌석</span>20석</span></a>
                        </li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0107&PLAY_START_TM=1920&AREA_CD=13&SCREEN_CD=006"
                                target="_top" data-theatercode="0107" data-playymd="20230511" data-screencode="006"
                                data-playnum="4" data-playstarttime="1920" data-playendtime="2200"
                                data-theatername="CGV 청담씨네시티" data-seatremaincnt="14"
                                data-screenkorname="SWEETBOX PREMIUM 10층"><em>19:20</em><span
                                    class='txt-lightblue'><span class='hidden'>잔여좌석</span>14석</span></a>
                        </li>

                    </ul>
                </div>
            </div>

        </div>
    </li>

    <li>
        <div class="col-theater"><a href="/theaters/?theaterCode=0223" target="_top">CGV<br />피카디리1958</a>
        </div>
        <div class="col-times">

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>3관 B2층</li>//-->
                        <li>3관 B2층</li>
                        <li>총 262석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0223&PLAY_START_TM=1620&AREA_CD=13&SCREEN_CD=003"
                                target="_top" data-theatercode="0223" data-playymd="20230511" data-screencode="003"
                                data-playnum="3" data-playstarttime="1620" data-playendtime="1900"
                                data-theatername="CGV 피카디리1958" data-seatremaincnt="239"
                                data-screenkorname="3관 B2층"><em>16:20</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>239석</span></a>
                        </li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>4관 B4층</li>//-->
                        <li>4관 B4층</li>
                        <li>총 117석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><em>14:50</em><span>마감</span></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0223&PLAY_START_TM=1750&AREA_CD=13&SCREEN_CD=004"
                                target="_top" data-theatercode="0223" data-playymd="20230511" data-screencode="004"
                                data-playnum="3" data-playstarttime="1750" data-playendtime="2030"
                                data-theatername="CGV 피카디리1958" data-seatremaincnt="80"
                                data-screenkorname="4관 B4층"><em>17:50</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>80석</span></a>
                        </li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0223&PLAY_START_TM=2050&AREA_CD=13&SCREEN_CD=004"
                                target="_top" data-theatercode="0223" data-playymd="20230511" data-screencode="004"
                                data-playnum="4" data-playstarttime="2050" data-playendtime="2330"
                                data-theatername="CGV 피카디리1958" data-seatremaincnt="101"
                                data-screenkorname="4관 B4층"><em>20:50</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>101석</span></a>
                        </li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>5관 B4층</li>//-->
                        <li>5관 B4층</li>
                        <li>총 160석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0223&PLAY_START_TM=2000&AREA_CD=13&SCREEN_CD=005"
                                target="_top" data-theatercode="0223" data-playymd="20230511" data-screencode="005"
                                data-playnum="5" data-playstarttime="2000" data-playendtime="2240"
                                data-theatername="CGV 피카디리1958" data-seatremaincnt="127"
                                data-screenkorname="5관 B4층"><em>20:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>127석</span></a>
                        </li>

                    </ul>
                </div>
            </div>

        </div>
    </li>

    <li>
        <div class="col-theater"><a href="/theaters/?theaterCode=0164" target="_top">CGV<br />하계</a></div>
        <div class="col-times">

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>1관</li>//-->
                        <li>1관</li>
                        <li>총 269석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0164&PLAY_START_TM=2020&AREA_CD=13&SCREEN_CD=001"
                                target="_top" data-theatercode="0164" data-playymd="20230511" data-screencode="001"
                                data-playnum="5" data-playstarttime="2020" data-playendtime="2300"
                                data-theatername="CGV 하계" data-seatremaincnt="251"
                                data-screenkorname="1관"><em>20:20</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>251석</span></a></li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>2관</li>//-->
                        <li>2관</li>
                        <li>총 269석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0164&PLAY_START_TM=1800&AREA_CD=13&SCREEN_CD=002"
                                target="_top" data-theatercode="0164" data-playymd="20230511" data-screencode="002"
                                data-playnum="3" data-playstarttime="1800" data-playendtime="2040"
                                data-theatername="CGV 하계" data-seatremaincnt="244"
                                data-screenkorname="2관"><em>18:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>244석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0164&PLAY_START_TM=2100&AREA_CD=13&SCREEN_CD=002"
                                target="_top" data-theatercode="0164" data-playymd="20230511" data-screencode="002"
                                data-playnum="4" data-playstarttime="2100" data-playendtime="2340"
                                data-theatername="CGV 하계" data-seatremaincnt="249"
                                data-screenkorname="2관"><em>21:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>249석</span></a></li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>3관</li>//-->
                        <li>3관</li>
                        <li>총 285석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0164&PLAY_START_TM=1640&AREA_CD=13&SCREEN_CD=003"
                                target="_top" data-theatercode="0164" data-playymd="20230511" data-screencode="003"
                                data-playnum="3" data-playstarttime="1640" data-playendtime="1920"
                                data-theatername="CGV 하계" data-seatremaincnt="263"
                                data-screenkorname="3관"><em>16:40</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>263석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0164&PLAY_START_TM=1940&AREA_CD=13&SCREEN_CD=003"
                                target="_top" data-theatercode="0164" data-playymd="20230511" data-screencode="003"
                                data-playnum="4" data-playstarttime="1940" data-playendtime="2220"
                                data-theatername="CGV 하계" data-seatremaincnt="262"
                                data-screenkorname="3관"><em>19:40</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>262석</span></a></li>

                    </ul>
                </div>
            </div>

        </div>
    </li>

    <li>
        <div class="col-theater"><a href="/theaters/?theaterCode=0191" target="_top">CGV<br />홍대</a></div>
        <div class="col-times">

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>3관 7층</li>//-->
                        <li>3관 7층</li>
                        <li>총 178석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><em>14:40</em><span>마감</span></li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>4관 7층</li>//-->
                        <li>4관 7층</li>
                        <li>총 134석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0191&PLAY_START_TM=1800&AREA_CD=13&SCREEN_CD=004"
                                target="_top" data-theatercode="0191" data-playymd="20230511" data-screencode="004"
                                data-playnum="5" data-playstarttime="1800" data-playendtime="2040"
                                data-theatername="CGV 홍대" data-seatremaincnt="80"
                                data-screenkorname="4관 7층"><em>18:00</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>80석</span></a></li>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0191&PLAY_START_TM=2055&AREA_CD=13&SCREEN_CD=004"
                                target="_top" data-theatercode="0191" data-playymd="20230511" data-screencode="004"
                                data-playnum="6" data-playstarttime="2055" data-playendtime="2335"
                                data-theatername="CGV 홍대" data-seatremaincnt="97"
                                data-screenkorname="4관 7층"><em>20:55</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>97석</span></a></li>

                    </ul>
                </div>
            </div>

            <div class="type-hall">
                <div class="info-hall">
                    <ul>
                        <li>2D</li>
                        <!--<li>6관 9층</li>//-->
                        <li>6관 9층</li>
                        <li>총 134석</li>
                    </ul>
                </div>
                <div class="info-timetable">
                    <ul>

                        <li><a href="/ticket/?MOVIE_CD=20032164&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230511&THEATER_CD=0191&PLAY_START_TM=2155&AREA_CD=13&SCREEN_CD=006"
                                target="_top" data-theatercode="0191" data-playymd="20230511" data-screencode="006"
                                data-playnum="6" data-playstarttime="2155" data-playendtime="2435"
                                data-theatername="CGV 홍대" data-seatremaincnt="122"
                                data-screenkorname="6관 9층"><em>21:55</em><span class='txt-lightblue'><span
                                        class='hidden'>잔여좌석</span>122석</span></a></li>

                    </ul>
                </div>
            </div>

        </div>
    </li>
</ul>
</div>`

export interface ShowTimeInfo {
  href: string;
  theatercode: string;
  playymd: string;
  screencode: string;
  playnum: string;
  playstarttime: string;
  playendtime: string;
  theatername: string;
  seatremaincnt: string;
  screenkorname: string;
}

export interface FilterInfo {
  theatercode: string;
  screencode: string;
}

/*
  newShowTimeInfos
  - <특정 타입의 영화 & [지역 & 날짜]>가 지정되어 날아간 요청에 대한 응답인 HTML 코드를 가지고 파싱
  - 해당 지역 전체 스케줄에서 내가 원하는 지점 및 영화관 정보를 필터링해서 사용
  - 내가 얻은것: 특정 조건을 만족하는 상영회차 정보를 가지게 됨
  - 이후 할것: 필터링된 상영회차 정보를 가지고 있으므로
    => 해당 정보를 통해 새로 열린 예매를 탐지하거나
    => GetSeatList 와 연계해서 세부적인 자리 정보까지 활용
*/
export const newShowTimeInfos = ($: cheerio.CheerioAPI, filterInfo?: FilterInfo) => {

  // 이미 특정 타입의 영화가 지정된 상태. (e.g. 가오갤3 IMAX Laser 2D) => 여기에 해당하는 정보만 넘어온 상태.
  // 내가 원하는 지점 및 영화관 정보는 filterInfo로 (e.g. 용산아이파크몰지점 && IMAX관)

  const selector = 'div.sect-showtimes ul li div.col-times div.type-hall div.info-timetable ul li a';

  const newShowTime = (aTag: cheerio.Element): ShowTimeInfo => ({
    href: aTag.attribs.href,
    theatercode: aTag.attribs['data-theatercode'],
    playymd: aTag.attribs['data-playymd'],
    screencode: aTag.attribs['data-screencode'],
    playnum: aTag.attribs['data-playnum'],
    playstarttime: aTag.attribs['data-playstarttime'],
    playendtime: aTag.attribs['data-playendtime'],
    theatername: aTag.attribs['data-theatername'],
    seatremaincnt: aTag.attribs['data-seatremaincnt'],
    screenkorname: aTag.attribs['data-screenkorname'],
  })

  const aTagElements = $(selector).toArray();
  let showTimeInfos = aTagElements.map(newShowTime);

  if (filterInfo) {
    
    const { theatercode, screencode } = filterInfo;
    showTimeInfos = showTimeInfos.filter(showTimeInfo => showTimeInfo.theatercode === theatercode && showTimeInfo.screencode === screencode);
  }
  return showTimeInfos;  
}

function test(html: string) {
  const $ = cheerio.load(html);
  const showTimeInfos = newShowTimeInfos($);
  console.log(showTimeInfos)
  console.log(showTimeInfos.length)
}(htmlStringShowtimes);
