const express = require('express');
const bodyParser = require('body-parser');
const { calculateSaju, lunarToSolar } = require('./sajuEngine');
const { saveUser, loginUser } = require('./userModel');
const { sendConsult } = require('./consultModel');

const app = express();
app.use(bodyParser.json());

// 회원가입/로그인
app.post('/api/signup', (req, res) => { /* ... */ });
app.post('/api/login', (req, res) => { /* ... */ });

// 사주 계산 (음력 변환 포함)
app.post('/api/calculate', async (req, res) => {
  let data = req.body;
  if (data.calendarType === "lunar") {
    data = await lunarToSolar(data);
  }
  const result = calculateSaju(data);
  res.json(result);
});

// 상담 신청
app.post('/api/consult', async (req, res) => {
  await sendConsult(req.body);
  res.json({ success: true });
});

// 결제 (모의처리)
app.post('/api/payment', (req, res) => {
  res.json({ success: true, premium: true });
});

app.listen(4000, () => console.log("서버 시작!"));