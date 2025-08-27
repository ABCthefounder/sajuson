"use client";
import { useState } from "react";

export default function AuthForm({ mode }) {
  const [form, setForm] = useState({ email: "", password: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // 실제 구현: Firebase/Supabase/Auth API 연동
    alert(`${mode === "login" ? "로그인" : "회원가입"} 성공! (MVP 예시)`);
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-2xl shadow p-8 flex flex-col gap-4">
      <h2 className="text-xl font-bold mb-3 text-indigo-700 dark:text-indigo-300 text-center">
        {mode === "login" ? "로그인" : "회원가입"}
      </h2>
      <input name="email" type="email" required placeholder="이메일" value={form.email} onChange={handleChange} className="input" />
      <input name="password" type="password" required placeholder="비밀번호" value={form.password} onChange={handleChange} className="input" />
      <button type="submit" className="bg-indigo-600 text-white rounded-lg px-4 py-2 font-semibold hover:scale-105 transition">
        {mode === "login" ? "로그인" : "회원가입"}
      </button>
      <div className="flex flex-col gap-2 mt-4">
        <button type="button" className="bg-gray-100 rounded px-2 py-1 text-sm">구글 로그인</button>
        <button type="button" className="bg-gray-100 rounded px-2 py-1 text-sm">카카오 로그인</button>
      </div>
    </form>
  );
}