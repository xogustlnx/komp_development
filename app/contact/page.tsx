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
  const [error, setError] = useState("");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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

      alert("문의가 성공적으로 전송되었습니다!");

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
    <main className="min-h-screen bg-black text-white px-8 py-10 md:px-12 md:py-14">
      <h1 className="text-2xl mb-8">Contact</h1>

      <div className="space-y-4 mb-12 text-sm leading-[1.8]">
        <p>저희와 이야기를 나누고 싶으시면 언제든 연락주세요.</p>
        <p>
          저희와 함께하는 방식은 두 가지 입니다. <br />
          <strong>일반 외주</strong>: 예산이 준비되어 있다면, 명확한 조건 아래 빠르고 정밀하게 개발해드립니다.<br />
          <strong>지분 외주</strong>: 저희는 함께할 팀을 찾기도 합니다. 당장 돈이 부족하다고 걱정하지 마세요.
        </p>
        <p>
          카카오톡으로 바로 문의하시거나,<br />
          이메일로 연락주시면 빠르게 답장드리겠습니다.
        </p>
        <p>
          카카오톡 문의:{" "}
          <a
            href="https://open.kakao.com/o/s53LJ6oh"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-300"
          >
            https://open.kakao.com/o/s53LJ6oh
          </a>
          <br />
          E-mail: teamkompdev@gmail.com
        </p>
      </div>

      {/* <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4">상담 문의</h2>
        <p className="text-sm pb-1 leading-[1.8] mb-6">
          아직 구체적인 기획이 없더라도 괜찮습니다.<br />
          원하시는 방향이나 생각을 간단히 적어주시면<br />
          저희가 참고하여 대략적인 안내를 드립니다.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-md relative z-10">
          <input
            id="email"
            type="email"
            placeholder="이메일"
            className="w-full bg-black border rounded-sm px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            id="company"
            type="text"
            placeholder="회사명/직함"
            className="w-full bg-black border rounded-sm px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white"
            value={formData.company}
            onChange={handleChange}
          />

          <div className="relative">
            <select
              id="outsourcingType"
              value={formData.outsourcingType}
              onChange={handleChange}
              className="w-full bg-black border rounded-sm px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white appearance-none"
            >
              <option value="">외주유형</option>
              <option value="앱개발">앱개발</option>
              <option value="웹개발">웹개발</option>
              <option value="AI">AI</option>
              <option value="기획">기획</option>
              <option value="디자인">디자인</option>
              <option value="데이터분석">데이터분석</option>
              <option value="코드 보수">코드 보수</option>
              <option value="기타">기타</option>
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
              <SlArrowDown />
            </span>
          </div>

          <div className="relative">
            <select
              id="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="w-full bg-black border rounded-sm px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white appearance-none"
            >
              <option value="">서비스유형</option>
              <option value="플랫폼">플랫폼</option>
              <option value="랜딩페이지">랜딩페이지</option>
              <option value="기술">기술</option>
              <option value="쇼핑">쇼핑몰</option>
              <option value="기타">기타</option>
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
              <SlArrowDown />
            </span>
          </div>

          <textarea
            id="message"
            rows={6}
            placeholder="문의 내용"
            className="w-full bg-black border rounded-sm px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white"
            value={formData.message}
            onChange={handleChange}
            required
          />

          {error && <p className="text-red-400 text-sm">{error}</p>}
}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-white text-black px-4 py-2 text-sm hover:bg-gray-200 transition-colors"
            >
              문의 보내기
            </button>
          </div>
        </form>
      </div> */}

      {/* 하단 링크 */}
      <footer className="mt-12 flex space-x-6 text-sm">
        <a href="/" className="underline hover:text-gray-300">
          Home
        </a>
        <a href="/about" className="underline hover:text-gray-300">
          About
        </a>
        <a href="/portfolio" className="underline hover:text-gray-300">
          Portfolio
        </a>
      </footer>
    </main>
  );
}
