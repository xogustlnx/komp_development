"use client";

import React, { useState, useRef, useEffect } from "react";
import PortfolioCard from "./PortfolioCard";
const dummyProjects = [
  {
    imageUrl: "portfolio/haniagent.png",
    date: "2025-05",
    endDate: "", // 빈 문자열 = 현재 진행중
    name: "HANI AGENT",
    types: ["Software", "AI", "Web"],
    descriptions: [
      "한의원 차트 AI 자동 작성 소프트웨어",
      "법인 설립 완료, 상용화 추진 중",
      "한의학 음성 인식 및 자동 차팅 기능",
      "Whisper AI 모델 기반 음성 인식(STT) 및 대화 구조화",
      "의료 SOAP 형식에 맞춘 자동 차팅 및 복사",
      "KCD/U 코드 데이터베이스화 및 자동 추천",
    ],
    stacks: ["Next.js", "Electron", "Firebase", "OpenAI API"],
  },
  {
    imageUrl: "portfolio/kstax.png",
    date: "2025-05",
    endDate: "", // 빈 문자열 = 현재 진행중
    name: "K-STAX",
    types: ["Software", "AI"],
    descriptions: [
      "AI 기반 척추 X-ray 자동 분석 프로그램",
      "베타 개발 완료, 의료기기 인증 추진 중",
      "경추, 흉추, 요추 딥러닝 모델 개발 완료",
      "자동 척추 각도 계산 및 라인 드로잉 기능",
      "환자의 X-ray 내역 확인 및 4분할 비교 뷰 기능",
    ],
    stacks: ["Pytorch", "Deep Learning", "Next.js", "Node.js"],
  },
  {
    imageUrl: "portfolio/gribuo.png",
    date: "2025-08",
    endDate: "", // 빈 문자열 = 현재 진행중
    name: "GRIBUO",
    types: ["Web", "AI"],
    descriptions: [
      "AI 기반 아동 발달 분석 플랫폼",
      "2025 예비창업패키지 합격 및 2차 선정, 상용화 추진 중",
      "아동 그림 기반 발달 정보 파악 및 분석 기능",
      "나이에 따른 발달 정도 분석, 활동 추천 기능",
      "모바일 최적화된 반응형 디자인",
    ],
    stacks: ["Next.js", "TypeScript", "Firebase", "OpenAI API"],
  },
  {
    imageUrl: "portfolio/moment.png",
    date: "2025-09",
    endDate: "2025-09", // 완료된 프로젝트
    name: "MOMENT",
    types: ["App", "AI"],
    descriptions: [
      "AI 기반 포토북 생성 앱",
      "유사 사진 클러스터링 및 잘 나온 사진 선정 기능",
      "사람이 잘리지 않는 자동 크롭 및 포토북 자동 생성 기능",
      "포토북 PDF 생성 기능",
      "보안 및 안전한 데이터 관리",
    ],
    stacks: ["Flutter", "Firebase", "Deep Learning", "OpenAI API"],
  },
  {
    imageUrl: "portfolio/simplevest.png",
    date: "2025-07",
    endDate: "2025-07", // 완료된 프로젝트
    name: "SIMPLEVEST",
    types: ["App", "AI"],
    descriptions: [
      "AI 기반 개인 투자 포트폴리오 관리 서비스",
      "실시간 시장 데이터 분석 및 투자 추천",
      "실시간 핵심 뉴스 분석 기능",
      "관심 종목 트래킹 및 일주일 분석 기능",
    ],
    stacks: ["React Native", "TypeScript", "Firebase", "OpenAI API"],
  },
  {
    imageUrl: "portfolio/umpahUmpah.png",
    date: "2024-12",
    endDate: "2024-12", // 완료된 프로젝트
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
    imageUrl: "portfolio/wineDiary.png",
    date: "2025-01",
    endDate: "2025-01", // 완료된 프로젝트
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
    date: "2024-09",
    endDate: "2024-09", // 완료된 프로젝트
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
    date: "2025-02",
    endDate: "2025-02", // 완료된 프로젝트
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
    date: "2024-10",
    endDate: "2024-10", // 완료된 프로젝트
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
    date: "2024-11",
    endDate: "2024-11", // 완료된 프로젝트
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
  {
    imageUrl: "portfolio/clify.png",
    date: "2025-04",
    endDate: "2025-04", // 완료된 프로젝트
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
  const [isScrolled, setIsScrolled] = useState(false);
  const projectRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const filteredProjects =
    activeTab === "All"
      ? dummyProjects
      : dummyProjects.filter((p) => p.types.includes(activeTab));

  // 스크롤 이벤트 리스너
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 100); // 100px 이상 스크롤 시 헤더 표시
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProject = (projectName: string) => {
    const element = projectRefs.current[projectName];
    if (element) {
      const targetPosition = element.offsetTop - 140; // 고정 헤더 높이 고려
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1200; // 1.2초로 늘림 (기본값보다 느리게)
      let start: number | null = null;

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      const easeInOutCubic = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
      };

      requestAnimationFrame(animation);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white px-8 py-10 md:px-12 md:py-14">
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* 고정 헤더 */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm transition-opacity duration-300 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="px-8 py-4 md:px-12">
          <div className="flex gap-6 text-lg mb-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${
                  activeTab === tab ? "underline" : "text-neutral-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* 프로젝트명 pill 네비게이션 */}
          <div>
            <div 
              className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {filteredProjects
                .sort((a, b) => {
                  // 현재 진행중인 프로젝트 (endDate가 빈 문자열) 우선 정렬
                  const aIsOngoing = a.endDate === "";
                  const bIsOngoing = b.endDate === "";
                  
                  if (aIsOngoing && !bIsOngoing) return -1;
                  if (!aIsOngoing && bIsOngoing) return 1;
                  
                  // 둘 다 진행중이거나 둘 다 완료된 경우 날짜순 정렬
                  return new Date(`${b.date}-01`).getTime() - new Date(`${a.date}-01`).getTime();
                })
                .map((project) => (
                  <button
                    key={project.name}
                    onClick={() => scrollToProject(project.name)}
                    className="flex-shrink-0 px-4 py-2 text-sm bg-neutral-900 hover:bg-neutral-700 rounded-full transition-colors whitespace-nowrap"
                  >
                    {project.name}
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-2xl  mb-12">Portfolio</h1>

      <div className="flex gap-6 text-lg mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`${
              activeTab === tab ? "underline" : "text-neutral-400 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 프로젝트명 pill 네비게이션 */}
      <div className="mb-12">
        <div 
          className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {filteredProjects
            .sort((a, b) => {
              // 현재 진행중인 프로젝트 (endDate가 빈 문자열) 우선 정렬
              const aIsOngoing = a.endDate === "";
              const bIsOngoing = b.endDate === "";
              
              if (aIsOngoing && !bIsOngoing) return -1;
              if (!aIsOngoing && bIsOngoing) return 1;
              
              // 둘 다 진행중이거나 둘 다 완료된 경우 날짜순 정렬
              return new Date(`${b.date}-01`).getTime() - new Date(`${a.date}-01`).getTime();
            })
            .map((project) => (
              <button
                key={project.name}
                onClick={() => scrollToProject(project.name)}
                className="flex-shrink-0 px-4 py-2 text-sm bg-neutral-900 hover:bg-neutral-700 rounded-full transition-colors whitespace-nowrap"
              >
                {project.name}
              </button>
            ))}
        </div>
      </div>

      <div className="space-y-12">
        {filteredProjects
          .sort((a, b) => {
            // 현재 진행중인 프로젝트 (endDate가 빈 문자열) 우선 정렬
            const aIsOngoing = a.endDate === "";
            const bIsOngoing = b.endDate === "";
            
            if (aIsOngoing && !bIsOngoing) return -1;
            if (!aIsOngoing && bIsOngoing) return 1;
            
            // 둘 다 진행중이거나 둘 다 완료된 경우 날짜순 정렬
            return new Date(`${b.date}-01`).getTime() - new Date(`${a.date}-01`).getTime();
          })
          .map((project, idx) => (
            <div
              key={idx}
              ref={(el) => {
                projectRefs.current[project.name] = el;
              }}
              id={`project-${project.name}`}
            >
              {/*@ts-ignore*/}
              <PortfolioCard {...project} />
            </div>
          ))}
      </div>

      <footer className="mt-12 flex space-x-6 text-sm">
        <a href="/" className="underline hover:text-neutral-300">
          Home
        </a>
        <a href="/about" className="underline hover:text-neutral-300">
          About
        </a>
        <a href="/contact" className="underline hover:text-neutral-300">
          Contact
        </a>
      </footer>
    </main>
  );
}
