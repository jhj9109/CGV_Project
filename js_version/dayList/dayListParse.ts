import * as cheerio from 'cheerio';
import { requestCityInfo, requestDates } from '../api';

export const htmlString = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ko" lang="ko">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=1024" />
    <meta name="description" content="CGV는 선진화된 관람문화와 최고의 서비스로 고객에게 잊을 수 없는 감동을 선사합니다. CGV홈페이지를 통해 영화 예매뿐만 아니라 그 이상의 서비스와 감동을 전달하고, 다양한 즐거움과 특별한 경험을 제공하고자 합니다." />
    <title id="ctl00_headerTitle">영화 그 이상의 감동. CGV</title>
    <link rel="shortcut icon" type="image/x-icon" href="https://img.cgv.co.kr/R2014/images/favicon.ico" />
    <link rel="stylesheet" media="all" type="text/css" href="https://img.cgv.co.kr/R2014/css/reset.css" />
    
    <link rel="stylesheet" media="all" type="text/css" href="https://img.cgv.co.kr/R2014/css/layout.css" />
    <link rel="stylesheet" media="all" type="text/css" href="https://img.cgv.co.kr/R2014/css/module.css" />
    <link rel="stylesheet" media="all" type="text/css" href="https://img.cgv.co.kr/R2014/css/content.css" />
    <link rel="stylesheet" media="all" type="text/css" href="https://img.cgv.co.kr/R2014/css/common.css" />
    <link rel="stylesheet" media="all" type="text/css" href="https://img.cgv.co.kr/R2014/css/eggupdate.css" />
    <!--
    <link rel="stylesheet" media="all" type="text/css" href="/css/layout.css" />
    <link rel="stylesheet" media="all" type="text/css" href="/css/module.css" />
    <link rel="stylesheet" media="all" type="text/css" href="/css/common.css" />
    <link rel="stylesheet" media="all" type="text/css" href="/css/content.css" />
    -->
    <link rel="stylesheet" media="print" type="text/css" href="https://img.cgv.co.kr/R2014/css/print.css" />
    <link rel="stylesheet" type="text/css" href="https://img.cgv.co.kr/R2014/js/jquery.ui/smoothness/jquery-ui-1.10.4.custom.min.css" />
    <script type="text/javascript" src="https://img.cgv.co.kr/R2014/js/app.config.js"></script>
    <script type="text/javascript" src="/common/js/extraTheaters.js"></script>
    <script type="text/javascript" src="https://img.cgv.co.kr/R2014/js/jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="https://img.cgv.co.kr/R2014/js/jquery.plugin/jquery.tmpl.min.js"></script>
    <script type="text/javascript" src="https://img.cgv.co.kr/R2014/js/jquery.plugin/jquery.validate.min.js"></script>
    <script type="text/javascript" src="https://img.cgv.co.kr/R2014/js/jquery.plugin/jquery.paging.min.js"></script>
    <script type="text/javascript" src="https://img.cgv.co.kr/R2014/js/jquery.ui/jquery-ui-1.10.4.custom.min.js"></script>
    <script type="text/javascript" src="https://img.cgv.co.kr/R2014/js/jquery.utils.js"></script>
    <script type="text/javascript" src="https://img.cgv.co.kr/R2014/js/app.utils.js"></script>
    <script type="text/javascript" src="https://img.cgv.co.kr/R2014/js/app.init.js"></script>
    <!--[if lte IE 9]><script type="text/javascript" src="https://img.cgv.co.kr/R2014/js/jquery.plugin/jquery.placeholder.js"></script><![endif]-->
    <script type="text/javascript" src="https://img.cgv.co.kr/R2014/js/jquery.plugin/jquery.dotdotdot.min.js"></script>
    
    <!-- 홈페이지 CSS 일원화로 인한 반영 20220721 -->
    <link rel="stylesheet" type="text/css" href="https://img.cgv.co.kr/resource_pc/css/cgv.min.css" />
    <script type="text/javascript" src="https://img.cgv.co.kr/resource_pc/js/cgvUi.js"></script>
    
    <!-- 각페이지 Header Start--> 
    

    <!--/각페이지 Header End--> 
    <script type="text/javascript">
    //<![CDATA[
        app.config('staticDomain', 'https://img.cgv.co.kr/R2014/')
            .config('imageDomain', 'https://img.cgv.co.kr')
            .config('isLogin', 'False');
    //]]>
    </script>
</head>
<body class="">


<!-- Contents Start -->

<div class="showtimes-wrap">
    
    <div class="sect-city">
        <ul>
            
                <li class='on'>
                    <a href="./iframeMovie.aspx?midx=86883&mcode=20032468&areacode=13&date=20230509" title='현재 선택'>서울</a>
                </li>
            
                <li >
                    <a href="./iframeMovie.aspx?midx=86883&mcode=20032468&areacode=09&date=20230509" >경기</a>
                </li>
            
                <li >
                    <a href="./iframeMovie.aspx?midx=86883&mcode=20032468&areacode=14&date=20230509" >대구</a>
                </li>
            
        </ul>
    </div> 
    
    <div class="sect-schedule">
		<div id="slider" class="slider">
			
           <div class='item-wrap on'><ul class='item'>
                <li class='on'>
                    <div class="day">
                        <a href="./iframeMovie.aspx?midx=86883&mcode=20032468&areacode=13&date=20230509" title='현재 선택'>
                            <span> 05월</span>
                            <em>화</em>
                            <strong>09</strong>
                        </a>
                    </div>
                </li>
            
            
           
                <li >
                    <div class="day">
                        <a href="./iframeMovie.aspx?midx=86883&mcode=20032468&areacode=13&date=20230510" >
                            <span> 05월</span>
                            <em>수</em>
                            <strong>10</strong>
                        </a>
                    </div>
                </li>
            
            
           
                <li >
                    <div class="day">
                        <a href="./iframeMovie.aspx?midx=86883&mcode=20032468&areacode=13&date=20230511" >
                            <span> 05월</span>
                            <em>목</em>
                            <strong>11</strong>
                        </a>
                    </div>
                </li>
            
            
           
                <li >
                    <div class="day">
                        <a href="./iframeMovie.aspx?midx=86883&mcode=20032468&areacode=13&date=20230512" >
                            <span> 05월</span>
                            <em>금</em>
                            <strong>12</strong>
                        </a>
                    </div>
                </li>
            
            
           
                <li >
                    <div class="day">
                        <a href="./iframeMovie.aspx?midx=86883&mcode=20032468&areacode=13&date=20230513" >
                            <span> 05월</span>
                            <em>토</em>
                            <strong>13</strong>
                        </a>
                    </div>
                </li>
            
            
           
                <li >
                    <div class="day">
                        <a href="./iframeMovie.aspx?midx=86883&mcode=20032468&areacode=13&date=20230514" >
                            <span> 05월</span>
                            <em>일</em>
                            <strong>14</strong>
                        </a>
                    </div>
                </li>
            
            
           
                <li >
                    <div class="day">
                        <a href="./iframeMovie.aspx?midx=86883&mcode=20032468&areacode=13&date=20230515" >
                            <span> 05월</span>
                            <em>월</em>
                            <strong>15</strong>
                        </a>
                    </div>
                </li>
            
            
           
                <li >
                    <div class="day">
                        <a href="./iframeMovie.aspx?midx=86883&mcode=20032468&areacode=13&date=20230516" >
                            <span> 05월</span>
                            <em>화</em>
                            <strong>16</strong>
                        </a>
                    </div>
                </li>
            </ul></div>
            

			<button type="button" class="btn-prev">이전 날자보기</button>
			<button type="button" class="btn-next">다음 날자보기</button>
		</div>
    </div>

    <div class="sect-guide">
        <div class="descri-timezone">
            <ul>
                <li><span class="early">모닝</span></li>
                <li><span class="midnight">심야</span></li>
            </ul>
            <p>* 시간을 클릭하시면 빠른 예매를 하실 수 있습니다.</p>
        </div>
        
    </div>
    <div class="sect-showtimes">
        <ul>
            
            <li>
                <div class="col-theater"><a href="/theaters/?theaterCode=0013" target="_top">CGV<br />용산아이파크몰</a></div>
                <div class="col-times">
                    
                    <div class="type-hall">
                        <div class="info-hall">
                            <ul>
                                <li>IMAX LASER 2D</li>                                
                                <!--<li><span class='screentype'><span class='imax'>IMAX</span></span></li>//-->
                                <li><span class='screentype'><span class='imax'>IMAX</span></span></li>
                                <li>총 624석</li>
                            </ul>
                        </div>
                        <div class="info-timetable">
                            <ul>
                                
                                    <li><a href="/ticket/?MOVIE_CD=20032468&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230509&THEATER_CD=0013&PLAY_START_TM=2325&AREA_CD=13&SCREEN_CD=018" target="_top"data-theatercode="0013" data-playymd="20230509" data-screencode="018" data-playnum="6" data-playstarttime="2325" data-playendtime="2605" data-theatername="CGV 용산아이파크몰" data-seatremaincnt="352" data-screenkorname="IMAX관"><em>23:25</em><span class='txt-lightblue'><span class='hidden'>잔여좌석</span>352석</span></a></li>
                                
                                    <li><a href="/ticket/?MOVIE_CD=20032468&MOVIE_CD_GROUP=20032164&PLAY_YMD=20230509&THEATER_CD=0013&PLAY_START_TM=2630&AREA_CD=13&SCREEN_CD=018" target="_top"data-theatercode="0013" data-playymd="20230509" data-screencode="018" data-playnum="7" data-playstarttime="2630" data-playendtime="2910" data-theatername="CGV 용산아이파크몰" data-seatremaincnt="496" data-screenkorname="IMAX관"><em>26:30</em><span class='txt-lightblue'><span class='hidden'>잔여좌석</span>496석</span></a></li>
                                
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </li>
            
            
        </ul>
    </div>
    <p class="info-noti">* 입장 지연에 따른 관람불편을 최소화하고자 영화는 약 10분 후에 시작됩니다. 관람 에티켓을 위한 사전 입장 부탁드립니다.</p>
</div>
<script type="text/javascript">
//<![CDATA[
    (function ($) {
    	$(function () {
    		var sliderOptions = { 'effect': 'none', 'offset': 0 };
    		$('#slider').visualMotion(sliderOptions);
            try {
                var container = window.parent.document.iFrame;
                container.resize(); // 갱신될때마다 iFrame 높이값 재조정.
            }
            catch(e) { 
                //ToDO : iframe 순서로 인한 예외 처리
                setTimeout(function(){
                    var container = window.parent.document.iFrame;
                    container.resize(); // 갱신될때마다 iFrame 높이값 재조정.
                },500);
            }


            
            //hover event
            $('.info-timetable > ul > li').each( function() {
                   
                if( $(this).children("a") != null ) {
                    var child_atag = $(this).children("a");

                   if(child_atag.attr("data-theatercode") != undefined){
                    var theatercode = child_atag.attr("data-theatercode");
                    var playymd = child_atag.attr("data-playymd");
                    var screencode  = child_atag.attr("data-screencode");
                    var playnum  = child_atag.attr("data-playnum");
                    var playstarttime  = child_atag.attr("data-playstarttime");
                    var playendtime  = child_atag.attr("data-playendtime");
                    var theatername  = child_atag.attr("data-theatername");
                    var seatremaincnt  = child_atag.attr("data-seatremaincnt");
                    var screenkorname  = child_atag.attr("data-screenkorname");

                                        
                 //   alert(theatercode +","+ playymd +","+ screencode +","+ playnum +","+ playstarttime +","+ playendtime +","+ theatername + "," + seatremaincnt + "," +  screenkorname);
                    //return false;
                    $(this).hover(function(evt) {
                       
                        GetCJ002_AllData($(this), theatercode, playymd , screencode , playnum , playstarttime , playendtime , theatername , seatremaincnt, screenkorname);
                    },function(evt) {
                           $('.cgv_minimap', window.parent.document).each(function() {
                            $(this).hide();
                            $(this).remove();
                        });
                    });
                  }
                } //end if
            }); //end each

    	});
    })(jQuery);


     function  GetCJ002_AllData(liTag, TheaterCode , PlayYMD, ScreenCode, PlayNum ,StartTime,  EndTime, TheaterName,  Cnt , ScreenName) 
    {
        $.ajax({
            type: "POST",
            url: "/common/showtimes/iframeTheater.aspx/GetSeatList",
            data: "{theatercode: '" +  TheaterCode + "',  palyymd : '" + PlayYMD + "', screencode : '" + ScreenCode + "' , playnum : '" + PlayNum + "', starttime : '" + StartTime + "', endtime : '" + EndTime + "', theatername : '" + TheaterName + "', cnt : '" + Cnt + "', screenname : '" + ScreenName + "'}",                                        
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            //async: true,
            success: function (data) {
                var rst = $.parseJSON(data.d);
                if($.trim(rst) != "") {
                    $('.cgv_minimap',window.parent.document).each(function() {
                        $(this).hide();
                        $(this).remove();
                    });
                    //aTag.append("<div class=\"totaldiv\" style=\"display:none\">" + rst + "</div>");
                    var pobj = $(".col-detail", window.parent.document);
                    var ifrmobj = $(".showtimes-wrap");

                    //li tag position
                    var parent_li = liTag.offset();
                    pobj.append("<div class=\"cgv_minimap\" style=\"display:block;position:absolute\">" + rst + "</div>");
                    pobj.show(function(){
                        var boxWidth = pobj.find('.cgv_minimap .theater_minimap').outerWidth();
                        var boxHeight = pobj.find('.cgv_minimap .theater_minimap').height();
                        var posX = parent_li.left + $('.info-timetable > ul > li').outerWidth() / 2 - boxWidth / 2;
                        
                        // 2019.05.07 레이어 팝업 위치 변경
                        var posY = pobj.height() - ifrmobj.height() + parent_li.top - boxHeight - 20;

                        pobj.find('.cgv_minimap').css({top:posY,left:posX});
                    });          

                }
            },
            error: function(request, error)
		    {
			    alert("code:" + request.statusText + request.readyState + "\n" + "error:" + error);
		    }
        });
    }
//]]>
</script>

<!--/ Contents End -->


<script type="text/javascript">
    //배경색 스타일 적용: 20211015
    $("html, body, #contaniner, #footer").css("background-color", "#ffffff");

//<![CDATA[
    
//]]>
</script>

</body>
</html>`
const sample = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ko" lang="ko">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=1024" />
    <meta name="description" content="CGV는 선진화된 관람문화와 최고의 서비스로 고객에게 잊을 수 없는 감동을 선사합니다. CGV홈페이지를 통해 영화 예매뿐만 아니라 그 이상의 서비스와 감동을 전달하고, 다양한 즐거움과 특별한 경험을 제공하고자 합니다." />
    <title id="ctl00_headerTitle">영화 그 이상의 감동. CGV</title>
    <link rel="shortcut icon" type="image/x-icon" href="https://img.cgv.co.kr/R2014/images/favicon.ico" />
    <link rel="stylesheet" media="all" type="text/css" href="https://img.cgv.co.kr/R2014/css/reset.css" />
    
    <link rel="stylesheet" media="all" type="text/css" href="https://img.cgv.co.kr/R2014/css/layout.css" />
    <link rel="stylesheet" media="all" type="text/css" href="https://img.cgv.co.kr/R2014/css/module.css" />
    <link rel="stylesheet" media="all" type="text/css" href="https://img.cgv.co.kr/R2014/css/content.css" />
    <link rel="stylesheet" media="all" type="text/css" href="https://img.cgv.co.kr/R2014/css/common.css" />
    <link rel="stylesheet" media="all" type="text/css" href="https://img.cgv.co.kr/R2014/css/eggupdate.css" />
    <!--
    <link rel="stylesheet" media="all" type="text/css" href="/css/layout.css" />
    <link rel="stylesheet" media="all" type="text/css" href="/css/module.css" />
    <link rel="stylesheet" media="all" type="text/css" href="/css/common.css" />
    <link rel="stylesheet" media="all" type="text/css" href="/css/content.css" />
    -->
    <link rel="stylesheet" media="print" type="text/css" href="https://img.cgv.co.kr/R2014/css/print.css" />
    <link rel="stylesheet" type="text/css" href="https://img.cgv.co.kr/R2014/js/jquery.ui/smoothness/jquery-ui-1.10.4.custom.min.css" />
    <script type="text/javascript" src="https://img.cgv.co.kr/R2014/js/app.config.js"></script>
    <script type="text/javascript" src="/common/js/extraTheaters.js"></script>
    <script type="text/javascript" src="https://img.cgv.co.kr/R2014/js/jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="https://img.cgv.co.kr/R2014/js/jquery.plugin/jquery.tmpl.min.js"></script>
    <script type="text/javascript" src="https://img.cgv.co.kr/R2014/js/jquery.plugin/jquery.validate.min.js"></script>
    <script type="text/javascript" src="https://img.cgv.co.kr/R2014/js/jquery.plugin/jquery.paging.min.js"></script>
    <script type="text/javascript" src="https://img.cgv.co.kr/R2014/js/jquery.ui/jquery-ui-1.10.4.custom.min.js"></script>
    <script type="text/javascript" src="https://img.cgv.co.kr/R2014/js/jquery.utils.js"></script>
    <script type="text/javascript" src="https://img.cgv.co.kr/R2014/js/app.utils.js"></script>
    <script type="text/javascript" src="https://img.cgv.co.kr/R2014/js/app.init.js"></script>
    <!--[if lte IE 9]><script type="text/javascript" src="https://img.cgv.co.kr/R2014/js/jquery.plugin/jquery.placeholder.js"></script><![endif]-->
    <script type="text/javascript" src="https://img.cgv.co.kr/R2014/js/jquery.plugin/jquery.dotdotdot.min.js"></script>
    
    <!-- 홈페이지 CSS 일원화로 인한 반영 20220721 -->
    <link rel="stylesheet" type="text/css" href="https://img.cgv.co.kr/resource_pc/css/cgv.min.css" />
    <script type="text/javascript" src="https://img.cgv.co.kr/resource_pc/js/cgvUi.js"></script>
    
    <!-- 각페이지 Header Start--> 
    

    <!--/각페이지 Header End--> 
    <script type="text/javascript">
    //<![CDATA[
        app.config('staticDomain', 'https://img.cgv.co.kr/R2014/')
            .config('imageDomain', 'https://img.cgv.co.kr')
            .config('isLogin', 'False');
    //]]>
    </script>
</head>
<body class="">


<!-- Contents Start -->

<div class="showtimes-wrap">
    
    <div class="sect-city">
        <ul>
            
                <li class='on'>
                    <a href="./iframeMovie.aspx?midx=86996&mcode=20032671&areacode=13&date=20230517" title='현재 선택'>서울</a>
                </li>
            
                <li >
                    <a href="./iframeMovie.aspx?midx=86996&mcode=20032671&areacode=09&date=20230517" >경기</a>
                </li>
            
                <li >
                    <a href="./iframeMovie.aspx?midx=86996&mcode=20032671&areacode=14&date=20230517" >대구</a>
                </li>
            
        </ul>
    </div> 
    
    <div class="sect-schedule">
                <div id="slider" class="slider">

           <div class='item-wrap on'><ul class='item'>
                <li class='on'>
                    <div class="day">
                        <a href="./iframeMovie.aspx?midx=86996&mcode=20032671&areacode=13&date=20230517" title='현재 선택'>
                            <span> 05월</span>
                            <em>수</em>
                            <strong>17</strong>
                        </a>
                    </div>
                </li>
            
            
           
                <li >
                    <div class="day">
                        <a href="./iframeMovie.aspx?midx=86996&mcode=20032671&areacode=13&date=20230518" >
                            <span> 05월</span>
                            <em>목</em>
                            <strong>18</strong>
                        </a>
                    </div>
                </li>
            
            
           
                <li >
                    <div class="day">
                        <a href="./iframeMovie.aspx?midx=86996&mcode=20032671&areacode=13&date=20230519" >
                            <span> 05월</span>
                            <em>금</em>
                            <strong>19</strong>
                        </a>
                    </div>
                </li>
            
            
           
                <li >
                    <div class="day">
                        <a href="./iframeMovie.aspx?midx=86996&mcode=20032671&areacode=13&date=20230520" >
                            <span> 05월</span>
                            <em>토</em>
                            <strong>20</strong>
                        </a>
                    </div>
                </li>
            
            
           
                <li >
                    <div class="day">
                        <a href="./iframeMovie.aspx?midx=86996&mcode=20032671&areacode=13&date=20230521" >
                            <span> 05월</span>
                            <em>일</em>
                            <strong>21</strong>
                        </a>
                    </div>
                </li>
            </ul></div>
            

                        <button type="button" class="btn-prev">이전 날자보기</button>
                        <button type="button" class="btn-next">다음 날자보기</button>
                </div>
    </div>

    <div class="sect-guide">
        <div class="descri-timezone">
            <ul>
                <li><span class="early">모닝</span></li>
                <li><span class="midnight">심야</span></li>
            </ul>
            <p>* 시간을 클릭하시면 빠른 예매를 하실 수 있습니다.</p>
        </div>
        
    </div>
    <div class="sect-showtimes">
        <ul>
            
            <li>
                <div class="col-theater"><a href="/theaters/?theaterCode=0040" target="_top">CGV<br />압구정</a></div>
                <div class="col-times">
                    
                    <div class="type-hall">
                        <div class="info-hall">
                            <ul>
                                <li>IMAX LASER 2D</li>                                
                                <!--<li><span class='screentype'><span class='imax'>IMAX</span></span></li>//-->
                                <li><span class='screentype'><span class='imax'>IMAX</span></span></li>
                                <li>총 170석</li>
                            </ul>
                        </div>
                        <div class="info-timetable">
                            <ul>
                                
                                    <li><a href="/ticket/?MOVIE_CD=20032671&MOVIE_CD_GROUP=20032571&PLAY_YMD=20230517&THEATER_CD=0040&PLAY_START_TM=1100&AREA_CD=13&SCREEN_CD=001" target="_top"data-theatercode="0040" data-playymd="20230517" data-screencode="001" data-playnum="1" data-playstarttime="1100" data-playendtime="1331" data-theatername="CGV 압구정" data-seatremaincnt="149" data-screenkorname="IMAX관 본관 B1층"><em>11:00</em><span class='early txt-lightblue'><span class='hidden'>잔여좌석</span>149석</span></a></li>
                                
                                    <li><a href="/ticket/?MOVIE_CD=20032671&MOVIE_CD_GROUP=20032571&PLAY_YMD=20230517&THEATER_CD=0040&PLAY_START_TM=1410&AREA_CD=13&SCREEN_CD=001" target="_top"data-theatercode="0040" data-playymd="20230517" data-screencode="001" data-playnum="2" data-playstarttime="1410" data-playendtime="1641" data-theatername="CGV 압구정" data-seatremaincnt="156" data-screenkorname="IMAX관 본관 B1층"><em>14:10</em><span class='txt-lightblue'><span class='hidden'>잔여좌석</span>156석</span></a></li>
                                
                                    <li><a href="/ticket/?MOVIE_CD=20032671&MOVIE_CD_GROUP=20032571&PLAY_YMD=20230517&THEATER_CD=0040&PLAY_START_TM=1720&AREA_CD=13&SCREEN_CD=001" target="_top"data-theatercode="0040" data-playymd="20230517" data-screencode="001" data-playnum="3" data-playstarttime="1720" data-playendtime="1951" data-theatername="CGV 압구정" data-seatremaincnt="158" data-screenkorname="IMAX관 본관 B1층"><em>17:20</em><span class='txt-lightblue'><span class='hidden'>잔여좌석</span>158석</span></a></li>
                                
                                    <li><a href="/ticket/?MOVIE_CD=20032671&MOVIE_CD_GROUP=20032571&PLAY_YMD=20230517&THEATER_CD=0040&PLAY_START_TM=2030&AREA_CD=13&SCREEN_CD=001" target="_top"data-theatercode="0040" data-playymd="20230517" data-screencode="001" data-playnum="4" data-playstarttime="2030" data-playendtime="2301" data-theatername="CGV 압구정" data-seatremaincnt="130" data-screenkorname="IMAX관 본관 B1층"><em>20:30</em><span class='txt-lightblue'><span class='hidden'>잔여좌석</span>130석</span></a></li>
                                
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </li>
            
            <li>
                <div class="col-theater"><a href="/theaters/?theaterCode=0013" target="_top">CGV<br />용산아이파크몰</a></div>
                <div class="col-times">
                    
                    <div class="type-hall">
                        <div class="info-hall">
                            <ul>
                                <li>IMAX LASER 2D</li>                                
                                <!--<li><span class='screentype'><span class='imax'>IMAX</span></span></li>//-->
                                <li><span class='screentype'><span class='imax'>IMAX</span></span></li>
                                <li>총 624석</li>
                            </ul>
                        </div>
                        <div class="info-timetable">
                            <ul>
                                
                                    <li><a href="/ticket/?MOVIE_CD=20032671&MOVIE_CD_GROUP=20032571&PLAY_YMD=20230517&THEATER_CD=0013&PLAY_START_TM=0620&AREA_CD=13&SCREEN_CD=018" target="_top"data-theatercode="0013" data-playymd="20230517" data-screencode="018" data-playnum="1" data-playstarttime="0620" data-playendtime="0851" data-theatername="CGV 용산아이파크몰" data-seatremaincnt="415" data-screenkorname="IMAX관"><em>06:20</em><span class='early txt-lightblue'><span class='hidden'>잔여좌석</span>415석</span></a></li>
                                
                                    <li><a href="/ticket/?MOVIE_CD=20032671&MOVIE_CD_GROUP=20032571&PLAY_YMD=20230517&THEATER_CD=0013&PLAY_START_TM=0915&AREA_CD=13&SCREEN_CD=018" target="_top"data-theatercode="0013" data-playymd="20230517" data-screencode="018" data-playnum="2" data-playstarttime="0915" data-playendtime="1146" data-theatername="CGV 용산아이파크몰" data-seatremaincnt="345" data-screenkorname="IMAX관"><em>09:15</em><span class='early txt-lightblue'><span class='hidden'>잔여좌석</span>345석</span></a></li>
                                
                                    <li><a href="/ticket/?MOVIE_CD=20032671&MOVIE_CD_GROUP=20032571&PLAY_YMD=20230517&THEATER_CD=0013&PLAY_START_TM=1210&AREA_CD=13&SCREEN_CD=018" target="_top"data-theatercode="0013" data-playymd="20230517" data-screencode="018" data-playnum="3" data-playstarttime="1210" data-playendtime="1441" data-theatername="CGV 용산아이파크몰" data-seatremaincnt="320" data-screenkorname="IMAX관"><em>12:10</em><span class='txt-lightblue'><span class='hidden'>잔여좌석</span>320석</span></a></li>
                                
                                    <li><a href="/ticket/?MOVIE_CD=20032671&MOVIE_CD_GROUP=20032571&PLAY_YMD=20230517&THEATER_CD=0013&PLAY_START_TM=1505&AREA_CD=13&SCREEN_CD=018" target="_top"data-theatercode="0013" data-playymd="20230517" data-screencode="018" data-playnum="4" data-playstarttime="1505" data-playendtime="1736" data-theatername="CGV 용산아이파크몰" data-seatremaincnt="327" data-screenkorname="IMAX관"><em>15:05</em><span class='txt-lightblue'><span class='hidden'>잔여좌석</span>327석</span></a></li>
                                
                                    <li><a href="/ticket/?MOVIE_CD=20032671&MOVIE_CD_GROUP=20032571&PLAY_YMD=20230517&THEATER_CD=0013&PLAY_START_TM=1800&AREA_CD=13&SCREEN_CD=018" target="_top"data-theatercode="0013" data-playymd="20230517" data-screencode="018" data-playnum="5" data-playstarttime="1800" data-playendtime="2031" data-theatername="CGV 용산아이파크몰" data-seatremaincnt="292" data-screenkorname="IMAX관"><em>18:00</em><span class='txt-lightblue'><span class='hidden'>잔여좌석</span>292석</span></a></li>
                                
                                    <li><a href="/ticket/?MOVIE_CD=20032671&MOVIE_CD_GROUP=20032571&PLAY_YMD=20230517&THEATER_CD=0013&PLAY_START_TM=2055&AREA_CD=13&SCREEN_CD=018" target="_top"data-theatercode="0013" data-playymd="20230517" data-screencode="018" data-playnum="6" data-playstarttime="2055" data-playendtime="2326" data-theatername="CGV 용산아이파크몰" data-seatremaincnt="280" data-screenkorname="IMAX관"><em>20:55</em><span class='txt-lightblue'><span class='hidden'>잔여좌석</span>280석</span></a></li>
                                
                                    <li><a href="/ticket/?MOVIE_CD=20032671&MOVIE_CD_GROUP=20032571&PLAY_YMD=20230517&THEATER_CD=0013&PLAY_START_TM=2350&AREA_CD=13&SCREEN_CD=018" target="_top"data-theatercode="0013" data-playymd="20230517" data-screencode="018" data-playnum="7" data-playstarttime="2350" data-playendtime="2621" data-theatername="CGV 용산아이파크몰" data-seatremaincnt="462" data-screenkorname="IMAX관"><em>23:50</em><span class='txt-lightblue'><span class='hidden'>잔여좌석</span>462석</span></a></li>
                                
                                    <li><a href="/ticket/?MOVIE_CD=20032671&MOVIE_CD_GROUP=20032571&PLAY_YMD=20230517&THEATER_CD=0013&PLAY_START_TM=2645&AREA_CD=13&SCREEN_CD=018" target="_top"data-theatercode="0013" data-playymd="20230517" data-screencode="018" data-playnum="8" data-playstarttime="2645" data-playendtime="2916" data-theatername="CGV 용산아이파크몰" data-seatremaincnt="575" data-screenkorname="IMAX관"><em>26:45</em><span class='txt-lightblue'><span class='hidden'>잔여좌석</span>575석</span></a></li>
                                
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </li>
            
            
        </ul>
    </div>
    <p class="info-noti">* 입장 지연에 따른 관람불편을 최소화하고자 영화는 약 10분 후에 시작됩니다. 관람 에티켓을 위한 사전 입장 부탁드립니다.</p>
</div>
<script type="text/javascript">
//<![CDATA[
    (function ($) {
        $(function () {
                var sliderOptions = { 'effect': 'none', 'offset': 0 };
                $('#slider').visualMotion(sliderOptions);
            try {
                var container = window.parent.document.iFrame;
                container.resize(); // 갱신될때마다 iFrame 높이값 재조정.
            }
            catch(e) { 
                //ToDO : iframe 순서로 인한 예외 처리
                setTimeout(function(){
                    var container = window.parent.document.iFrame;
                    container.resize(); // 갱신될때마다 iFrame 높이값 재조정.
                },500);
            }


            
            //hover event
            $('.info-timetable > ul > li').each( function() {
                   
                if( $(this).children("a") != null ) {
                    var child_atag = $(this).children("a");

                   if(child_atag.attr("data-theatercode") != undefined){
                    var theatercode = child_atag.attr("data-theatercode");
                    var playymd = child_atag.attr("data-playymd");
                    var screencode  = child_atag.attr("data-screencode");
                    var playnum  = child_atag.attr("data-playnum");
                    var playstarttime  = child_atag.attr("data-playstarttime");
                    var playendtime  = child_atag.attr("data-playendtime");
                    var theatername  = child_atag.attr("data-theatername");
                    var seatremaincnt  = child_atag.attr("data-seatremaincnt");
                    var screenkorname  = child_atag.attr("data-screenkorname");

                                        
                 //   alert(theatercode +","+ playymd +","+ screencode +","+ playnum +","+ playstarttime +","+ playendtime +","+ theatername + "," + seatremaincnt + "," +  screenkorname);
                    //return false;
                    $(this).hover(function(evt) {
                       
                        GetCJ002_AllData($(this), theatercode, playymd , screencode , playnum , playstarttime , playendtime , theatername , seatremaincnt, screenkorname);
                    },function(evt) {
                           $('.cgv_minimap', window.parent.document).each(function() {
                            $(this).hide();
                            $(this).remove();
                        });
                    });
                  }
                } //end if
            }); //end each

        });
    })(jQuery);


     function  GetCJ002_AllData(liTag, TheaterCode , PlayYMD, ScreenCode, PlayNum ,StartTime,  EndTime, TheaterName,  Cnt , ScreenName) 
    {
        $.ajax({
            type: "POST",
            url: "/common/showtimes/iframeTheater.aspx/GetSeatList",
            data: "{theatercode: '" +  TheaterCode + "',  palyymd : '" + PlayYMD + "', screencode : '" + ScreenCode + "' , playnum : '" + PlayNum + "', starttime : '" + StartTime + "', endtime : '" + EndTime + "', theatername : '" + TheaterName + "', cnt : '" + Cnt + "', screenname : '" + ScreenName + "'}",                                        
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            //async: true,
            success: function (data) {
                var rst = $.parseJSON(data.d);
                if($.trim(rst) != "") {
                    $('.cgv_minimap',window.parent.document).each(function() {
                        $(this).hide();
                        $(this).remove();
                    });
                    //aTag.append("<div class=\"totaldiv\" style=\"display:none\">" + rst + "</div>");
                    var pobj = $(".col-detail", window.parent.document);
                    var ifrmobj = $(".showtimes-wrap");

                    //li tag position
                    var parent_li = liTag.offset();
                    pobj.append("<div class=\"cgv_minimap\" style=\"display:block;position:absolute\">" + rst + "</div>");
                    pobj.show(function(){
                        var boxWidth = pobj.find('.cgv_minimap .theater_minimap').outerWidth();
                        var boxHeight = pobj.find('.cgv_minimap .theater_minimap').height();
                        var posX = parent_li.left + $('.info-timetable > ul > li').outerWidth() / 2 - boxWidth / 2;
                        
                        // 2019.05.07 레이어 팝업 위치 변경
                        var posY = pobj.height() - ifrmobj.height() + parent_li.top - boxHeight - 20;

                        pobj.find('.cgv_minimap').css({top:posY,left:posX});
                    });          

                }
            },
            error: function(request, error)
                    {
                            alert("code:" + request.statusText + request.readyState + "\n" + "error:" + error);
                    }
        });
    }
//]]>
</script>

<!--/ Contents End -->


<script type="text/javascript">
    //배경색 스타일 적용: 20211015
    $("html, body, #contaniner, #footer").css("background-color", "#ffffff");

//<![CDATA[
    
//]]>
</script>

</body>
</html>`

const sample2 = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ko" lang="ko">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=1024" />
    <meta name="description" content="CGV는 선진화된 관람문화와 최고의 서비스로 고객에게 잊을 수 없는 감동을 선사합니다. CGV홈페이지를 통해 영화 예매뿐만 아니라 그 이상의 서비스와 감동을 전달하고, 다양한 즐거움과 특별한 경험을 제공하고자 합니다." />
    <title id="ctl00_headerTitle">영화 그 이상의 감동. CGV</title>
    <link rel="shortcut icon" type="image/x-icon" href="https://img.cgv.co.kr/R2014/images/favicon.ico" />
    <link rel="stylesheet" media="all" type="text/css" href="https://img.cgv.co.kr/R2014/css/reset.css" />
    
    <link rel="stylesheet" media="all" type="text/css" href="https://img.cgv.co.kr/R2014/css/layout.css" />
    <link rel="stylesheet" media="all" type="text/css" href="https://img.cgv.co.kr/R2014/css/module.css" />
    <link rel="stylesheet" media="all" type="text/css" href="https://img.cgv.co.kr/R2014/css/content.css" />
    <link rel="stylesheet" media="all" type="text/css" href="https://img.cgv.co.kr/R2014/css/common.css" />
    <link rel="stylesheet" media="all" type="text/css" href="https://img.cgv.co.kr/R2014/css/eggupdate.css" />
    <!--
    <link rel="stylesheet" media="all" type="text/css" href="/css/layout.css" />
    <link rel="stylesheet" media="all" type="text/css" href="/css/module.css" />
    <link rel="stylesheet" media="all" type="text/css" href="/css/common.css" />
    <link rel="stylesheet" media="all" type="text/css" href="/css/content.css" />
    -->
    <link rel="stylesheet" media="print" type="text/css" href="https://img.cgv.co.kr/R2014/css/print.css" />
    <link rel="stylesheet" type="text/css" href="https://img.cgv.co.kr/R2014/js/jquery.ui/smoothness/jquery-ui-1.10.4.custom.min.css" />
    <script type="text/javascript" src="https://img.cgv.co.kr/R2014/js/app.config.js"></script>
    <script type="text/javascript" src="/common/js/extraTheaters.js"></script>
    <script type="text/javascript" src="https://img.cgv.co.kr/R2014/js/jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="https://img.cgv.co.kr/R2014/js/jquery.plugin/jquery.tmpl.min.js"></script>
    <script type="text/javascript" src="https://img.cgv.co.kr/R2014/js/jquery.plugin/jquery.validate.min.js"></script>
    <script type="text/javascript" src="https://img.cgv.co.kr/R2014/js/jquery.plugin/jquery.paging.min.js"></script>
    <script type="text/javascript" src="https://img.cgv.co.kr/R2014/js/jquery.ui/jquery-ui-1.10.4.custom.min.js"></script>
    <script type="text/javascript" src="https://img.cgv.co.kr/R2014/js/jquery.utils.js"></script>
    <script type="text/javascript" src="https://img.cgv.co.kr/R2014/js/app.utils.js"></script>
    <script type="text/javascript" src="https://img.cgv.co.kr/R2014/js/app.init.js"></script>
    <!--[if lte IE 9]><script type="text/javascript" src="https://img.cgv.co.kr/R2014/js/jquery.plugin/jquery.placeholder.js"></script><![endif]-->
    <script type="text/javascript" src="https://img.cgv.co.kr/R2014/js/jquery.plugin/jquery.dotdotdot.min.js"></script>
    
    <!-- 홈페이지 CSS 일원화로 인한 반영 20220721 -->
    <link rel="stylesheet" type="text/css" href="https://img.cgv.co.kr/resource_pc/css/cgv.min.css" />
    <script type="text/javascript" src="https://img.cgv.co.kr/resource_pc/js/cgvUi.js"></script>
    
    <!-- 각페이지 Header Start--> 
    

    <!--/각페이지 Header End--> 
    <script type="text/javascript">
    //<![CDATA[
        app.config('staticDomain', 'https://img.cgv.co.kr/R2014/')
            .config('imageDomain', 'https://img.cgv.co.kr')
            .config('isLogin', 'False');
    //]]>
    </script>
</head>
<body class="">


<!-- Contents Start -->

<div class="showtimes-wrap">
    
    <div class="sect-city">
        <ul>
            
                <li class='on'>
                    <a href="./iframeMovie.aspx?midx=86996&mcode=20032671&areacode=13&date=20230517" title='현재 선택'>서울</a>
                </li>
            
                <li >
                    <a href="./iframeMovie.aspx?midx=86996&mcode=20032671&areacode=09&date=20230517" >경기</a>
                </li>
            
                <li >
                    <a href="./iframeMovie.aspx?midx=86996&mcode=20032671&areacode=14&date=20230517" >대구</a>
                </li>
            
        </ul>
    </div> 
    
    <div class="sect-schedule">
                <div id="slider" class="slider">

           <div class='item-wrap on'><ul class='item'>
                <li class='on'>
                    <div class="day">
                        <a href="./iframeMovie.aspx?midx=86996&mcode=20032671&areacode=13&date=20230517" title='현재 선택'>
                            <span> 05월</span>
                            <em>수</em>
                            <strong>17</strong>
                        </a>
                    </div>
                </li>
            
            
           
                <li >
                    <div class="day">
                        <a href="./iframeMovie.aspx?midx=86996&mcode=20032671&areacode=13&date=20230518" >
                            <span> 05월</span>
                            <em>목</em>
                            <strong>18</strong>
                        </a>
                    </div>
                </li>
            
            
           
                <li >
                    <div class="day">
                        <a href="./iframeMovie.aspx?midx=86996&mcode=20032671&areacode=13&date=20230519" >
                            <span> 05월</span>
                            <em>금</em>
                            <strong>19</strong>
                        </a>
                    </div>
                </li>
            
            
           
                <li >
                    <div class="day">
                        <a href="./iframeMovie.aspx?midx=86996&mcode=20032671&areacode=13&date=20230520" >
                            <span> 05월</span>
                            <em>토</em>
                            <strong>20</strong>
                        </a>
                    </div>
                </li>
            
            
           
                <li >
                    <div class="day">
                        <a href="./iframeMovie.aspx?midx=86996&mcode=20032671&areacode=13&date=20230521" >
                            <span> 05월</span>
                            <em>일</em>
                            <strong>21</strong>
                        </a>
                    </div>
                </li>
            </ul></div>
            

                        <button type="button" class="btn-prev">이전 날자보기</button>
                        <button type="button" class="btn-next">다음 날자보기</button>
                </div>
    </div>

    <div class="sect-guide">
        <div class="descri-timezone">
            <ul>
                <li><span class="early">모닝</span></li>
                <li><span class="midnight">심야</span></li>
            </ul>
            <p>* 시간을 클릭하시면 빠른 예매를 하실 수 있습니다.</p>
        </div>
        
    </div>
    <div class="sect-showtimes">
        <ul>
            
            <li>
                <div class="col-theater"><a href="/theaters/?theaterCode=0040" target="_top">CGV<br />압구정</a></div>
                <div class="col-times">
                    
                    <div class="type-hall">
                        <div class="info-hall">
                            <ul>
                                <li>IMAX LASER 2D</li>                                
                                <!--<li><span class='screentype'><span class='imax'>IMAX</span></span></li>//-->
                                <li><span class='screentype'><span class='imax'>IMAX</span></span></li>
                                <li>총 170석</li>
                            </ul>
                        </div>
                        <div class="info-timetable">
                            <ul>
                                
                                    <li><a href="/ticket/?MOVIE_CD=20032671&MOVIE_CD_GROUP=20032571&PLAY_YMD=20230517&THEATER_CD=0040&PLAY_START_TM=1100&AREA_CD=13&SCREEN_CD=001" target="_top"data-theatercode="0040" data-playymd="20230517" data-screencode="001" data-playnum="1" data-playstarttime="1100" data-playendtime="1331" data-theatername="CGV 압구정" data-seatremaincnt="149" data-screenkorname="IMAX관 본관 B1층"><em>11:00</em><span class='early txt-lightblue'><span class='hidden'>잔여좌석</span>149석</span></a></li>
                                
                                    <li><a href="/ticket/?MOVIE_CD=20032671&MOVIE_CD_GROUP=20032571&PLAY_YMD=20230517&THEATER_CD=0040&PLAY_START_TM=1410&AREA_CD=13&SCREEN_CD=001" target="_top"data-theatercode="0040" data-playymd="20230517" data-screencode="001" data-playnum="2" data-playstarttime="1410" data-playendtime="1641" data-theatername="CGV 압구정" data-seatremaincnt="156" data-screenkorname="IMAX관 본관 B1층"><em>14:10</em><span class='txt-lightblue'><span class='hidden'>잔여좌석</span>156석</span></a></li>
                                
                                    <li><a href="/ticket/?MOVIE_CD=20032671&MOVIE_CD_GROUP=20032571&PLAY_YMD=20230517&THEATER_CD=0040&PLAY_START_TM=1720&AREA_CD=13&SCREEN_CD=001" target="_top"data-theatercode="0040" data-playymd="20230517" data-screencode="001" data-playnum="3" data-playstarttime="1720" data-playendtime="1951" data-theatername="CGV 압구정" data-seatremaincnt="158" data-screenkorname="IMAX관 본관 B1층"><em>17:20</em><span class='txt-lightblue'><span class='hidden'>잔여좌석</span>158석</span></a></li>
                                
                                    <li><a href="/ticket/?MOVIE_CD=20032671&MOVIE_CD_GROUP=20032571&PLAY_YMD=20230517&THEATER_CD=0040&PLAY_START_TM=2030&AREA_CD=13&SCREEN_CD=001" target="_top"data-theatercode="0040" data-playymd="20230517" data-screencode="001" data-playnum="4" data-playstarttime="2030" data-playendtime="2301" data-theatername="CGV 압구정" data-seatremaincnt="130" data-screenkorname="IMAX관 본관 B1층"><em>20:30</em><span class='txt-lightblue'><span class='hidden'>잔여좌석</span>130석</span></a></li>
                                
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </li>
            
            <li>
                <div class="col-theater"><a href="/theaters/?theaterCode=0013" target="_top">CGV<br />용산아이파크몰</a></div>
                <div class="col-times">
                    
                    <div class="type-hall">
                        <div class="info-hall">
                            <ul>
                                <li>IMAX LASER 2D</li>                                
                                <!--<li><span class='screentype'><span class='imax'>IMAX</span></span></li>//-->
                                <li><span class='screentype'><span class='imax'>IMAX</span></span></li>
                                <li>총 624석</li>
                            </ul>
                        </div>
                        <div class="info-timetable">
                            <ul>
                                
                                    <li><a href="/ticket/?MOVIE_CD=20032671&MOVIE_CD_GROUP=20032571&PLAY_YMD=20230517&THEATER_CD=0013&PLAY_START_TM=0620&AREA_CD=13&SCREEN_CD=018" target="_top"data-theatercode="0013" data-playymd="20230517" data-screencode="018" data-playnum="1" data-playstarttime="0620" data-playendtime="0851" data-theatername="CGV 용산아이파크몰" data-seatremaincnt="415" data-screenkorname="IMAX관"><em>06:20</em><span class='early txt-lightblue'><span class='hidden'>잔여좌석</span>415석</span></a></li>
                                
                                    <li><a href="/ticket/?MOVIE_CD=20032671&MOVIE_CD_GROUP=20032571&PLAY_YMD=20230517&THEATER_CD=0013&PLAY_START_TM=0915&AREA_CD=13&SCREEN_CD=018" target="_top"data-theatercode="0013" data-playymd="20230517" data-screencode="018" data-playnum="2" data-playstarttime="0915" data-playendtime="1146" data-theatername="CGV 용산아이파크몰" data-seatremaincnt="344" data-screenkorname="IMAX관"><em>09:15</em><span class='early txt-lightblue'><span class='hidden'>잔여좌석</span>344석</span></a></li>
                                
                                    <li><a href="/ticket/?MOVIE_CD=20032671&MOVIE_CD_GROUP=20032571&PLAY_YMD=20230517&THEATER_CD=0013&PLAY_START_TM=1210&AREA_CD=13&SCREEN_CD=018" target="_top"data-theatercode="0013" data-playymd="20230517" data-screencode="018" data-playnum="3" data-playstarttime="1210" data-playendtime="1441" data-theatername="CGV 용산아이파크몰" data-seatremaincnt="320" data-screenkorname="IMAX관"><em>12:10</em><span class='txt-lightblue'><span class='hidden'>잔여좌석</span>320석</span></a></li>
                                
                                    <li><a href="/ticket/?MOVIE_CD=20032671&MOVIE_CD_GROUP=20032571&PLAY_YMD=20230517&THEATER_CD=0013&PLAY_START_TM=1505&AREA_CD=13&SCREEN_CD=018" target="_top"data-theatercode="0013" data-playymd="20230517" data-screencode="018" data-playnum="4" data-playstarttime="1505" data-playendtime="1736" data-theatername="CGV 용산아이파크몰" data-seatremaincnt="327" data-screenkorname="IMAX관"><em>15:05</em><span class='txt-lightblue'><span class='hidden'>잔여좌석</span>327석</span></a></li>
                                
                                    <li><a href="/ticket/?MOVIE_CD=20032671&MOVIE_CD_GROUP=20032571&PLAY_YMD=20230517&THEATER_CD=0013&PLAY_START_TM=1800&AREA_CD=13&SCREEN_CD=018" target="_top"data-theatercode="0013" data-playymd="20230517" data-screencode="018" data-playnum="5" data-playstarttime="1800" data-playendtime="2031" data-theatername="CGV 용산아이파크몰" data-seatremaincnt="292" data-screenkorname="IMAX관"><em>18:00</em><span class='txt-lightblue'><span class='hidden'>잔여좌석</span>292석</span></a></li>
                                
                                    <li><a href="/ticket/?MOVIE_CD=20032671&MOVIE_CD_GROUP=20032571&PLAY_YMD=20230517&THEATER_CD=0013&PLAY_START_TM=2055&AREA_CD=13&SCREEN_CD=018" target="_top"data-theatercode="0013" data-playymd="20230517" data-screencode="018" data-playnum="6" data-playstarttime="2055" data-playendtime="2326" data-theatername="CGV 용산아이파크몰" data-seatremaincnt="278" data-screenkorname="IMAX관"><em>20:55</em><span class='txt-lightblue'><span class='hidden'>잔여좌석</span>278석</span></a></li>
                                
                                    <li><a href="/ticket/?MOVIE_CD=20032671&MOVIE_CD_GROUP=20032571&PLAY_YMD=20230517&THEATER_CD=0013&PLAY_START_TM=2350&AREA_CD=13&SCREEN_CD=018" target="_top"data-theatercode="0013" data-playymd="20230517" data-screencode="018" data-playnum="7" data-playstarttime="2350" data-playendtime="2621" data-theatername="CGV 용산아이파크몰" data-seatremaincnt="462" data-screenkorname="IMAX관"><em>23:50</em><span class='txt-lightblue'><span class='hidden'>잔여좌석</span>462석</span></a></li>
                                
                                    <li><a href="/ticket/?MOVIE_CD=20032671&MOVIE_CD_GROUP=20032571&PLAY_YMD=20230517&THEATER_CD=0013&PLAY_START_TM=2645&AREA_CD=13&SCREEN_CD=018" target="_top"data-theatercode="0013" data-playymd="20230517" data-screencode="018" data-playnum="8" data-playstarttime="2645" data-playendtime="2916" data-theatername="CGV 용산아이파크몰" data-seatremaincnt="575" data-screenkorname="IMAX관"><em>26:45</em><span class='txt-lightblue'><span class='hidden'>잔여좌석</span>575석</span></a></li>
                                
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </li>
            
            
        </ul>
    </div>
    <p class="info-noti">* 입장 지연에 따른 관람불편을 최소화하고자 영화는 약 10분 후에 시작됩니다. 관람 에티켓을 위한 사전 입장 부탁드립니다.</p>
</div>
<script type="text/javascript">
//<![CDATA[
    (function ($) {
        $(function () {
                var sliderOptions = { 'effect': 'none', 'offset': 0 };
                $('#slider').visualMotion(sliderOptions);
            try {
                var container = window.parent.document.iFrame;
                container.resize(); // 갱신될때마다 iFrame 높이값 재조정.
            }
            catch(e) { 
                //ToDO : iframe 순서로 인한 예외 처리
                setTimeout(function(){
                    var container = window.parent.document.iFrame;
                    container.resize(); // 갱신될때마다 iFrame 높이값 재조정.
                },500);
            }


            
            //hover event
            $('.info-timetable > ul > li').each( function() {
                   
                if( $(this).children("a") != null ) {
                    var child_atag = $(this).children("a");

                   if(child_atag.attr("data-theatercode") != undefined){
                    var theatercode = child_atag.attr("data-theatercode");
                    var playymd = child_atag.attr("data-playymd");
                    var screencode  = child_atag.attr("data-screencode");
                    var playnum  = child_atag.attr("data-playnum");
                    var playstarttime  = child_atag.attr("data-playstarttime");
                    var playendtime  = child_atag.attr("data-playendtime");
                    var theatername  = child_atag.attr("data-theatername");
                    var seatremaincnt  = child_atag.attr("data-seatremaincnt");
                    var screenkorname  = child_atag.attr("data-screenkorname");

                                        
                 //   alert(theatercode +","+ playymd +","+ screencode +","+ playnum +","+ playstarttime +","+ playendtime +","+ theatername + "," + seatremaincnt + "," +  screenkorname);
                    //return false;
                    $(this).hover(function(evt) {
                       
                        GetCJ002_AllData($(this), theatercode, playymd , screencode , playnum , playstarttime , playendtime , theatername , seatremaincnt, screenkorname);
                    },function(evt) {
                           $('.cgv_minimap', window.parent.document).each(function() {
                            $(this).hide();
                            $(this).remove();
                        });
                    });
                  }
                } //end if
            }); //end each

        });
    })(jQuery);


     function  GetCJ002_AllData(liTag, TheaterCode , PlayYMD, ScreenCode, PlayNum ,StartTime,  EndTime, TheaterName,  Cnt , ScreenName) 
    {
        $.ajax({
            type: "POST",
            url: "/common/showtimes/iframeTheater.aspx/GetSeatList",
            data: "{theatercode: '" +  TheaterCode + "',  palyymd : '" + PlayYMD + "', screencode : '" + ScreenCode + "' , playnum : '" + PlayNum + "', starttime : '" + StartTime + "', endtime : '" + EndTime + "', theatername : '" + TheaterName + "', cnt : '" + Cnt + "', screenname : '" + ScreenName + "'}",                                        
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            //async: true,
            success: function (data) {
                var rst = $.parseJSON(data.d);
                if($.trim(rst) != "") {
                    $('.cgv_minimap',window.parent.document).each(function() {
                        $(this).hide();
                        $(this).remove();
                    });
                    //aTag.append("<div class=\"totaldiv\" style=\"display:none\">" + rst + "</div>");
                    var pobj = $(".col-detail", window.parent.document);
                    var ifrmobj = $(".showtimes-wrap");

                    //li tag position
                    var parent_li = liTag.offset();
                    pobj.append("<div class=\"cgv_minimap\" style=\"display:block;position:absolute\">" + rst + "</div>");
                    pobj.show(function(){
                        var boxWidth = pobj.find('.cgv_minimap .theater_minimap').outerWidth();
                        var boxHeight = pobj.find('.cgv_minimap .theater_minimap').height();
                        var posX = parent_li.left + $('.info-timetable > ul > li').outerWidth() / 2 - boxWidth / 2;
                        
                        // 2019.05.07 레이어 팝업 위치 변경
                        var posY = pobj.height() - ifrmobj.height() + parent_li.top - boxHeight - 20;

                        pobj.find('.cgv_minimap').css({top:posY,left:posX});
                    });          

                }
            },
            error: function(request, error)
                    {
                            alert("code:" + request.statusText + request.readyState + "\n" + "error:" + error);
                    }
        });
    }
//]]>
</script>

<!--/ Contents End -->


<script type="text/javascript">
    //배경색 스타일 적용: 20211015
    $("html, body, #contaniner, #footer").css("background-color", "#ffffff");

//<![CDATA[
    
//]]>
</script>

</body>
</html>`


const $ = cheerio.load(htmlString);
const citySelector = 'div.showtimes-wrap div.sect-city li.on a'; // on상태인 1개!


/**
 
<div class="">
    
    <div class="sect-city">
        <ul>
            
                <li class="on">
                    <a
                      href="./iframeMovie.aspx?midx=86883&amp;mcode=20032468&amp;areacode=13&amp;date=20230509"
                      title="현재 선택"
                    >서울</a>
 */

// const aElement = $(citySelector).toArray()[0]; // cheerio.Element
// const href = aElement.attribs.href;
// console.log(href);

// <li>
// <a
// href="./iframeMovie.aspx?
//         midx=86996&
//         mcode=20032674&
//         areacode=15,04,05
//         date=20230517"
// >대전/충청</a>

export interface CityInfo {
  href: string;
  midx: string;
  mcode: string;
  areacode: string;
  date: string;
  areaName: string;
}

export const newCityInfoMap = async (midx: string, mcode: string) => {
  
  const htmlString = await requestCityInfo(midx, mcode);
  const $ = cheerio.load(htmlString);
  
  // const $ = cheerio.load(sample);

  const selector = 'div.showtimes-wrap div.sect-city li a'; // city 정보들을 캡쳐하기 위함

  const getRegExp = (baseUrl: string, keys: string[]) =>
    new RegExp(baseUrl + keys.map(key => `${key}=([^\\&]+)`).join('\\&'))

  const re = getRegExp("\\/iframeMovie\\.aspx\\?", ['midx', 'mcode', 'areacode', 'date']);

  const newCityInfo = (el: cheerio.Element, res: RegExpExecArray | null): CityInfo | null =>
    res === null ?
      null :
      ({
        href: el.attribs.href,
        midx: res[1],
        mcode: res[2],
        areacode: res[3],
        date: res[4],
        areaName: $(el).text(),
      });

  const cityInfos = $(selector).toArray().map(el =>
    newCityInfo(el, re.exec(el.attribs.href))).filter(el => el !== null) as CityInfo[];

  const cityInfoMap = cityInfos.reduce((obj, cur) => {
    obj[cur.areaName] = cur;
    return obj;
  }, {} as Record<string, CityInfo>)

  return cityInfoMap;
  // midx, mcode 이미 요청시 사용했던 값
  // 각 리스트별 새로운 값 => areacode, date => 가장 의미있는것은 areacode
  // 용아맥이 타겟이라면 => areacode는 무조건 서울의 것인 13이여야 한다.
}

/*
<div class="sect-schedule">
  <div id="slider" class="slider">
    <div class='item-wrap on'>
      <ul class='item'>
        <li class='on'>
          <div class="day">
            <a href="./iframeMovie.aspx?midx=86883&mcode=20032468&areacode=13&date=20230509" title='현재 선택'>
              <span> 05월</span>
              <em>화</em>
              <strong>09</strong>
*/
export const newDates = async (midx: string, mcode: string, areacode: string, date: string) => {
  
  const htmlString = await requestDates(midx, mcode, areacode, date);

  const re = /\/iframeMovie\.aspx\?midx=[^\&]+&mcode=[^\&]+&areacode=[^\&]+&date=(\d+)/
  const extractDate = (aTagElement: cheerio.Element) =>
    re.test(aTagElement.attribs.href) ? (re.exec(aTagElement.attribs.href) as RegExpExecArray)[1] : '';

  const $ = cheerio.load(htmlString);

  // const selector = 'div.sect-schedule div#slider.slider div.item-wrap.on ul.item li';
  const selector = 'div.sect-schedule div#slider.slider div.item-wrap.on ul.item li div.day a'; // city 정보들을 캡쳐하기 위함

  // const dates = $(selector).toArray().map(el => `${el.name} + ${el.tagName} + ${el.type}: ${el.attribs.href}`)
  const dates = $(selector).toArray().map(extractDate).filter(date => date !== '');

  return dates;
}
/**
 * 여기서 얻은 dates의 의미 톹아보기.
 *
 * 특정 타입의 특정 영화 스케줄을 확인하는 중.
 * midx & mcode를 조합해 리퀘스트를 생성해서 지역별 날짜별 상영 정보 페이지를 얻을 수 있게됨
 * 이때 서울 데이터가 존재할 경우 지역별의 기본값은 서울
 * 날짜별의 경우 데이터가 존재하는 첫번째 날짜
 * 우리는 날짜 선택할 수 있는 UI에서 특정 타입 && 특정 영화가 특정 지역에서 예매할 수 있는 날짜 리스트 알수 있다.
 * => 이게 바로 dates
 *
 * TODO
 * => dates를 알았으니, 특정 지역의 각 dates별 내가 원하는 상영관의 스케줄이 있는지 확인해야한다.
 * => 그다음이 스케줄이 있을때, 각 자리 정보를 미니맵에서 추출
 */

// export const etc = () => {
  // const selector = 'div.sect-schedule div#slider.slider div.item-wrap.on ul.item li';
  // const selector = 'div.sect-schedule div#slider.slider div.item-wrap.on ul.item li div.day a'; // city 정보들을 캡쳐하기 위함
  // const finds = $(daysSelector).find('span');
  // const what = $(daysSelector).find('span').text()
  // const what2 = $(daysSelector).find('span').toArray().map(el => el.children[0)

  // console.log(finds);
  // console.log(what);
// }