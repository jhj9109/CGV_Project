import smtplib
# import getpass
from email.message import EmailMessage

from dotenv import load_dotenv
load_dotenv()
import os

GOOGLE_USER = os.getenv('GOOGLE_USER')
GOOGLE_USER_APP_PASS = os.getenv('GOOGLE_USER_APP_PASS')

def prompt() -> dict[str, str]:
    
    context: dict[str, str] = dict()
    
    # context["FROM"] = input("Enter your email address: ")
    # context["from_password"] = getpass.getpass(prompt="Enter your password: ")

    context["TO"] = input("Enter the recipient's email address: ")
    
    context["SUBJECT"] = input("Enter the email subject: ")
    context["BODY"] = input("Enter the email body: ")
    
    context["FILE_PATH"] = input("Enter the file path to attach (optional): ")
    
    return context

def create_message(context: dict[str, str]) -> EmailMessage:
    
    msg = EmailMessage()
    
    # msg['From'] = context["FROM"]
    msg['To'] = context["TO"]
    msg['Subject'] = context["SUBJECT"]
    msg.set_content(context["BODY"])
    
    return msg

def attach_file(msg: EmailMessage, file_path: str) -> None:
    
    with open(file_path, 'rb') as f:
    
        file_data = f.read()
        file_name = os.path.basename(file_path)
    
    msg.add_attachment(file_data, maintype='application', subtype='octet-stream', filename=file_name)

def send_email(context: None | dict[str, str]):
    
    try:
        
        if not context:
            context = prompt()
        
        msg = create_message(context)
        
        if context["FILE_PATH"]:
            attach_file(msg, context["FILE_PATH"])
        
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
        
            smtp.login(GOOGLE_USER, GOOGLE_USER_APP_PASS)
            smtp.send_message(msg)
        
        print("Email sent successfully!")
    
    except Exception as e:
        
        print(e)
        print("Email sent failed....")

context: dict[str, str] = dict()

# 현재 smtp는 FROM 헤더값을 무시하고, 사용자가 인증한 계정의 이메일 주소로 강제.
# context["FROM"] = "janghj18@gmail.com"
context["TO"] = "jhj91_09@naver.com"
context["SUBJECT"] = "메일 테스트 입니다.444"
context["BODY"] = "본문입니다"
context["FILE_PATH"] = ""

send_email(context)
