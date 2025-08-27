"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SajuForm() {
  const [form, setForm] = useState({
    name: "",
    gender: "male",
    birth: "",
    time: "",
    calendar: "solar",
  });
  const router = useRouter();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // 결과 페이지로 쿼리 전달 (간단 MVP)
    router.push(`/saju/result?name=${form.name}&gender=${form.gender}&birth=${form.birth}&time=${form.time}&calendar=${form.calendar}`);
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-2xl shadow p-8 flex flex-col gap-4">
      <h2 className="text-xl font-bold mb-3 text-indigo-700 dark:text-indigo-300 text-center">사주 정보 입력</h2>
      <input name="name" type="text" placeholder="이름" required value={form.name} onChange={handleChange} className="input" />
      <select name="gender" value={form.gender} onChange={handleChange} className="input">
        <option value="male">남자</option>
        <option value="female">여자</option>
      </select>
      <input name="birth" type="date" required value={form.birth} onChange={handleChange} className="input" />
      <input name="time" type="time" required value={form.time} onChange={handleChange} className="input" />
      <select name="calendar" value={form.calendar} onChange={handleChange} className="input">
        <option value="solar">양력</option>
        <option value="lunar">음력</option>
      </select>
      <button type="submit" className="bg-indigo-600 text-white rounded-lg px-4 py-2 font-semibold hover:scale-105 transition">결과 확인</button>
    </form>
  );
}