"use client";

import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import { SlArrowDown } from "react-icons/sl";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: "",
    company: "",
    outsourcingType: "",
    serviceType: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  // 폼 입력 핸들러
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  // 폼 제출
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // 간단한 유효성 검사 (이메일과 문의 내용만 필수)
    if (!formData.email.trim() || !formData.message.trim()) {
      setError("이메일과 문의 내용을 모두 입력해주세요.");
      return;
    }
    setError("");

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      setIsSubmitted(true);
      // 폼 초기화
      setFormData({
        email: "",
        company: "",
        outsourcingType: "",
        serviceType: "",
        message: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      setError("전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white px-12 py-14">
      {/* 상단 제목 */}
      <h1 className="text-2xl mb-8">Contact</h1>

      {/* 안내 문구 */}
      <div className="space-y-2 mb-12">
        <p>저희는 어떤 아이디어라도 기술로 실현할 수 있는 팀입니다.</p>
        <p>저희와 이야기를 나누고 싶으시면 언제든 연락주세요.</p>
        <p>
          카카오톡으로 바로 문의 주셔도 되고, 간단한 견적 먼저 메일로 받아보실
          수도 있습니다.
        </p>
        <br />
        <p>
          E-mail: <span className="underline">teamkompdev@gmail.com</span>
        </p>
      </div>

      {/* 견적 문의 */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4">견적 문의</h2>
        <p className="text-gray-300 mb-6">
          개발을 원하시는 서비스/페이지를 소개해주세요.
          <br />
          문의 내용에 대한 견적서를 이메일로 보내드립니다.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 max-w-md relative z-10"
        >
          {/* 이메일 */}
          <div>
            <input
              id="email"
              type="email"
              placeholder="이메일"
              className="w-full bg-black border px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* 회사명/직함 */}
          <div>
            <input
              id="company"
              type="text"
              placeholder="회사명/직함"
              className="w-full bg-black border px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          {/* 외주유형 드롭다운 */}
          <div className="relative">
            <select
              id="outsourcingType"
              value={formData.outsourcingType}
              onChange={handleChange}
              className="w-full bg-black border px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-purple-500 appearance-none"
            >
              <option value="">외주유형</option>
              <option value="앱개발">앱개발</option>
              <option value="웹개발">웹개발</option>
              <option value="딥러닝 모델 제작">AI</option>
              <option value="기획">기획</option>
              <option value="디자인">디자인</option>

              <option value="데이터분석">데이터분석</option>

              <option value="코드 보수">코드 보수</option>
              <option value="기타">기타</option>
            </select>
            {/* 사용자 정의 화살표 아이콘 */}
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <SlArrowDown />
            </span>
          </div>

          {/* 서비스유형 드롭다운 */}
          <div className="relative">
            <select
              id="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="w-full bg-black border px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none"
            >
              <option value="">서비스유형</option>
              <option value="랜딩페이지">랜딩페이지</option>
              <option value="플랫폼">플랫폼</option>
              <option value="쇼핑">쇼핑</option>
              <option value="기술">기술</option>
              <option value="기타">기타</option>
            </select>
            {/* 사용자 정의 화살표 아이콘 */}
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <SlArrowDown />
            </span>
          </div>

          {/* 문의 내용 */}
          <div>
            <textarea
              id="message"
              rows={6}
              placeholder="문의 내용"
              className="w-full bg-black border px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          {/* 에러 메시지 */}
          {error && <p className="text-red-400 text-sm">{error}</p>}

          {/* 제출 버튼 */}
          <button
            type="submit"
            className="border px-4 py-2 text-white hover:bg-white hover:text-black transition-colors"
          >
            Send
          </button>
        </form>

        {/* 전송 완료 메시지 */}
        {isSubmitted && (
          <p className="mt-4 text-green-400">
            문의가 성공적으로 전송되었습니다!
          </p>
        )}
      </div>

      {/* 하단 링크 */}
      <footer className="mt-16 flex gap-6 text-sm relative z-10">
        <a href="/" className="underline hover:text-gray-300">
          Home
        </a>
        <a href="/talk" className="underline hover:text-gray-300">
          Talk
        </a>
        <a href="/cost" className="underline hover:text-gray-300">
          Cost
        </a>
      </footer>
    </main>
  );
}
