# 메일 모듈이다.
import smtplib
# 메일 메시지를 만드 모듈이다. (MIMEBase는 이하 MIMEMultipart, MIMEText, MIMEApplication, MIMEImage, MIMEAudio)의 상위 모듈이다.
# 굳이 선언할 필요없다.
#from email.mime.base import MIMEBase;
# 메일의 Data 영역의 메시지를 만드는 모듈 (MIMEText, MIMEApplication, MIMEImage, MIMEAudio가 attach되면 바운더리 형식으로 변환)
from email.mime.multipart import MIMEMultipart
# 메일의 본문 내용을 만드는 모듈
from email.mime.text import MIMEText
# 메일의 첨부 파일을 base64 형식으로 변환
from email.mime.application import MIMEApplication
# 메일의 이미지 파일을 base64 형식으로 변환(Content-ID 생성)
from email.mime.image import MIMEImage
# 메일의 음악 파일을 base64 형식으로 변환(Content-ID 생성)
from email.mime.audio import MIMEAudio
# 파일 IO
import io


def send_email(context):

    email_list = context["email_list"]
    subject = context["subject"]
    body = context["body"]

    from util import get_config_for_smtp

    config = get_config_for_smtp()
    g_id, g_pwd = config["id"], config["pwd"]
    sender_email = config["sender_email"]

    # 메일 서버와 통신하기 전에 메시지를 만든다.
    data = MIMEMultipart()

    data['From'] = sender_email  # 송신자
    # data['To'] = ",".join(email_list)  # 수신자, 복수는 콤마 구분 활용
    # data['Cc'] = "jhj91_09@naver.com"  # 참조
    data['Bcc'] = ",".join(email_list)  # 숨은참조
    data['Subject'] = subject  # 제목

    # Html 형식의 본문 내용 (cid로 이미 첨부 파일을 링크했다.)
    # msg = MIMEText("""<p>Hello Test</p><img src='cid:capture'>""", 'html')
    msg = MIMEText(body, 'html')
    data.attach(msg)

    # 메일 서버와 telnet 통신 개시, SMTP: 587
    server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
    server.set_debuglevel(1)  # 메일 통신시 디버그
    # server.starttls(); # tls 설정 주문 - tls 587 포트의 경우

    server.login(g_id, g_pwd)

    # MAIL(송신자), RCPT(수신자) 설정
    sender = data['From']
    receiver = []
    
    # 수신자 추가
    if data["To"] is not None:
        receiver += data["To"].split(",")
    # 참조자 추가
    if data['Cc'] is not None:
        receiver += data['Cc'].split(",")
    # 숨은 참조자 추가
    if data['Bcc'] is not None:
        receiver += data['Bcc'].split(",")

    # 메일 프로토콜 상 MAIL, RCPT, DATA 순으로 메시지를 보내야 하는데 이걸 sendmail함수에서 자동으로 해준다.
    server.sendmail(sender, receiver, data.as_string())
    server.quit()  # QUIT을 보내고 접속을 종료하고 메일을 보낸다.
