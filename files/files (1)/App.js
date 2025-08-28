import React, { useState } from "react";
import SajuForm from "./SajuForm";
import SajuResult from "./SajuResult";
import Auth from "./Auth";
import ChatConsult from "./ChatConsult";
import Payment from "./Payment";
import { calculateSaju, lunarToSolar } from "./sajuEngine"; // 계산 엔진 분리

function App() {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState(null);
  const [sajuResult, setSajuResult] = useState(null);
  const [premium, setPremium] = useState(false);

  // 사주 계산 처리
  async function handleSajuSubmit(data) {
    let solarData = { ...data };
    if (data.calendarType === "lunar") {
      solarData = await lunarToSolar(data); // 음력 변환
    }
    const result = calculateSaju(solarData);
    setFormData(data);
    setSajuResult(result);
  }

  // 결제 성공시 프리미엄 해설 제공
  function handlePaymentSuccess() {
    setPremium(true);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 to-purple-600">
      <header className="p-4 flex justify-between items-center bg-white bg-opacity-30">
        <h1 className="text-2xl font-bold">정밀 만세력 사주</h1>
        <Auth user={user} setUser={setUser} />
      </header>
      <main className="p-4">
        {!sajuResult ? (
          <SajuForm onSubmit={handleSajuSubmit} />
        ) : (
          <SajuResult data={formData} result={sajuResult} premium={premium} />
        )}
        <Payment onSuccess={handlePaymentSuccess} />
        <ChatConsult user={user} />
      </main>
      <footer className="text-center p-4 text-gray-700">
        © 2025 사주손 - 개인정보처리방침 | 이용약관
      </footer>
    </div>
  );
}

export default App;