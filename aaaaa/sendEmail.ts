import * as nodemailer from 'nodemailer';

// 환경 변수에서 Google 계정 정보를 가져옵니다.
const GOOGLE_USER = process.env.GOOGLE_USER;
const GOOGLE_USER_APP_PASS = process.env.GOOGLE_USER_APP_PASS;
// const GOOGLE_USER_APP_PASS="nuciaanaypsxudqz"
// const GOOGLE_USER="janghj18"

// console.log(GOOGLE_USER, GOOGLE_USER_APP_PASS)

export async function sendEmail(to: string, subject: string, text: string) {

  try {
    // Nodemailer transport 객체 생성
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: GOOGLE_USER, // your Gmail email address
        pass: GOOGLE_USER_APP_PASS // your Gmail App Password
      }
    });

    // 이메일 옵션 설정
    const mailOptions = {
      from: GOOGLE_USER, // 보내는 주소
      to: to, // 받는 주소
      subject: subject, // 제목
      text: text // 본문
    };

    // 이메일 전송
    const info = await transporter.sendMail(mailOptions);
    console.log(`Message sent: ${info.response}`);
  } catch (error) {
    console.error(`An error occurred: ${error}`);
  }
}

// 사용 예:
// sendEmail('jhj91_09@naver.com', 'Test Subject', 'Test text body');
