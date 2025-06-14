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
    date: "2025-06", // 날짜 미정
    name: "K-STAX",
    types: ["Software", "AI"],
    descriptions: [
      "AI 기반 척추 X-ray 자동 분석 프로그램",
      "경추, 흉추, 요추 딥러닝 모델 개발 완료, 상용화 추진 중",
      "X-ray 방향 자동 정렬 기능",
      "자동 척추 각도 계산 및 라인 드로잉 기능",
      "환자의 X-ray 내역 확인 및 4분할 비교 뷰 기능",
    ],
    stacks: ["Pytorch", "Deep Learning", "Next.js", "Node.js"],
  },
  {
    imageUrl: "portfolio/haniagent.png",
    date: "2025-05", // 날짜 미정
    name: "HANI AGENT",
    types: ["Software", "AI", "Web"],
    descriptions: [
      "한의원 차트 AI 자동 작성 소프트웨어",
      "한의학 음성 인식 및 자동 차팅 모델 개발 완료, 상용화 추진 중",
      "Whisper AI 모델 기반 음성 인식(STT) 및 대화 구조화",
      "의료 SOAP 형식에 맞춘 자동 차팅 및 복사",
      "KCD/U 코드 데이터베이스화 및 자동 추천",
    ],
    stacks: ["Next.js", "Electron", "Firebase", "OpenAI API"],
  },
  {
    imageUrl: "portfolio/wineDiary.png",
    date: "2025-01",
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
      "AI 기반 압박 모의 면접 서비스",
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
    date: "2024-10", // 날짜 미정
    name: "CONNECT AI",
    types: ["App", "AI"],
    descriptions: [
      "AI 기반 연애 상담 앱",
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
  // {
  //   imageUrl: "portfolio/hani.png",
  //   date: "2025-04", // 날짜 미정
  //   name: "HANI-HELPER",
  //   types: ["Software", "AI"],
  //   descriptions: [
  //     "한의사용 차트 자동화 툴 제작",
  //     "양/한의학 코드 트리 구조화 및 클라우드 저장",
  //     "LLM 기반 자동 코드 선택 및 SOAP 차트 구조화",
  //     "치료 항목에 맞는 근골격계 검사 자동 추천 및 템플릿화",
  //   ],
  //   stacks: ["Next.js", "Electron", "Firebase", "OpenAI API"],
  // },
  {
    imageUrl: "portfolio/clify.png",
    date: "2025-04", // 날짜 미정
    name: "CLIFY FAV",
    types: ["App"],
    descriptions: [
      "AI 심리 상담 서비스 UI UX 설계 및 AI API 연동",
      "촬영한 영상 기반 이미지 자동 추출 및 녹음 분리",
      "AI 모델용 데이터 가공 및 처리",
      "결과값 분석 및 시각화 UI 제작",
    ],
    stacks: ["Flutter"],
  },
];

const tabs = ["All", "App", "Web", "AI", "Software"];

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? dummyProjects
      : dummyProjects.filter((p) => p.types.includes(activeTab));

  return (
    <main className="min-h-screen bg-black text-white px-8 py-10 md:px-12 md:py-14">
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
            //@ts-ignore
            <PortfolioCard key={idx} {...project} />
          ))}
      </div>

      <footer className="mt-12 flex space-x-6 text-sm">
        <a href="/" className="underline hover:text-gray-300">
          Home
        </a>
        <a href="/about" className="underline hover:text-gray-300">
          About
        </a>
        <a href="/contact" className="underline hover:text-gray-300">
          Contact
        </a>
      </footer>
    </main>
  );
}
