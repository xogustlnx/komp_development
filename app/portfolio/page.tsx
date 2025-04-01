"use client";

import React, { useState } from "react";
import PortfolioCard from "./PortfolioCard";
const dummyProjects = [
  {
    imageUrl: "portfolio/umpahUmpah.png",
    date: "2024-12", // 날짜 미정
    name: "UMPAH UMPAH",
    types: ["Web"],
    descriptions: [
      "한의학 진료 사례 아카이빙 웹 서비스",
      "2024 하나 소셜 유니버시티 전국 15팀 선정",
      "사용자 맞춤형 필터링과 태그 기반 검색",
      "초음파 영상/사진 업로더·뷰어",
      "반응형 디자인, 최적의 사용자 경험 제공",
    ],
    stacks: ["Next.js", "Node.js", "TypeScript", "Firebase"],
  },
  {
    imageUrl: "portfolio/kstax.png",
    date: "2025-03", // 날짜 미정
    name: "K-STAX",
    types: ["AI", "Web"],
    descriptions: [
      "AI 딥러닝 기반 경추 X-ray 마킹 프로그램",
      "정확도 90% 이상 달성, 상용화 추진중",
      "X-ray 사진 방향 자동 정렬,",
      "AI 기반 OL/OPL/APL 자동 라벨링",
      " GeorgeLine 드로잉 & Cobb’s angle 계산",
    ],
    stacks: ["Pytorch", "Deep Learning", "Next.js", "Node.js"],
  },
  {
    imageUrl: "portfolio/wineDiary.png",
    date: "2024-08",
    name: "WINE DIARY",
    types: ["App"],
    descriptions: [
      "와인 기록 / AI 와인 추천 앱",
      "앱스토어 정식 출시 후 운영중, 유저수 4천명 이상",
      "와인 일기 기록 및 수집 기능",
      "AI, 빅데이터 기반 와인 추천 기능",
      "커뮤니티및 와인 평가 공유 기능",
      "앱 결제 및 멤버십 기능",
    ],
    stacks: ["React Native", "Firebase", "OpenAI API"],
  },
  {
    imageUrl: "portfolio/komp.png",
    date: "2024-09", // 날짜 미정
    name: "KOMP",
    types: ["App", "AI"],
    descriptions: [
      "AI 기반 멘토링 플랫폼 앱",
      "2024 Govtech 아이디어 기획 분야 6위",
      "AI 기반 사용자 맞춤형 멘토 추천",
      "빠르고 편리한 실시간 채팅 기능",
      "가상 유명인 AI 멘토와의 채팅 기능",
    ],
    stacks: ["React Native", "Firebase", "OpenAI API", "TypeScript"],
  },
  {
    imageUrl: "portfolio/careerAI.png",
    date: "2025-02", // 날짜 미정
    name: "CAREER AI",
    types: ["Web", "AI"],
    descriptions: [
      "AI 기반 연애 상담 앱 개발",
      "정식 출시 후 운영중",
      "자기소개서 기반 가상 압박 면접 기능",
      "사용자 답변 기반 질문 자동 생성 기능",
      "AI 기반 면접 채점 및 피드백 기능",
      "웹 결제 및 구독 기능",
    ],
    stacks: ["Next.js", "TypeScript", "Firebase", "OpenAI API"],
  },
  {
    imageUrl: "portfolio/connectAI.png",
    date: "2024-11", // 날짜 미정
    name: "CONNECT AI",
    types: ["App", "AI"],
    descriptions: [
      "AI 기반 연애 상담 앱 개발",
      "정식 출시 후 운영중, 유저수 2천명 이상",
      "이미지 인식 및 자동 응답 생성 기능",
      "커스텀 고민 상담 AI 기능",
      "앱 결제 및 구독 기능",
    ],
    stacks: ["React Native", "Firebase", "OpenAI API"],
  },
  {
    imageUrl: "portfolio/archive.png",
    date: "2024-11", // 날짜 미정
    name: "ARCHIVING WEB",
    types: ["Web"],
    descriptions: [
      "프로필 아카이빙 웹 개발",
      "사용자 커스텀 프로필 제작 기능",
      "자유로운 작업물 아카이빙 기능",
      "감각적인 미니멀 디자인",
    ],
    stacks: ["Next.js", "Firebase"],
  },
];

const tabs = ["All", "App", "Web", "AI"];

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? dummyProjects
      : dummyProjects.filter((p) => p.types.includes(activeTab));

  return (
    <main className="min-h-screen bg-black text-white px-12 py-14">
      <h1 className="text-2xl  mb-12">Portfolio</h1>

      <div className="flex gap-6 text-lg mb-12">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`${
              activeTab === tab ? "underline" : "text-gray-400 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="space-y-12">
        {filteredProjects
          .sort(
            (a, b) =>
              new Date(`${b.date}-01`).getTime() -
              new Date(`${a.date}-01`).getTime()
          )
          .map((project, idx) => (
            <PortfolioCard key={idx} {...project} />
          ))}
      </div>

      <footer className="mt-16 flex gap-6 text-sm">
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
