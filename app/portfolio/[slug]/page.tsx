// app/portfolio/[slug]/page.tsx
"use client";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

interface ProjectData {
  [key: string]: {
    title: string;
    image: string;
    description: string;
    achievements: string;
    technologies: string[];
    features: string[];
    challenges: string[];
    team: string[];
    link: string;
    details?: { category: string; content: string[] }[];
  };
}

const projectData: ProjectData = {
  komp: {
    title: "Komp",
    image: "/kompDetail.png",
    description:
      "자신을 발전시키고자 하는 10대부터 20대를 위한 커뮤니티 앱.\n다양한 멘토의 경험과 조언을 통해 진로 고민을 해소하고 스스로 성장할 수 있는 플랫폼을 제공합니다.",
    achievements: "2024 Gov-Tech 아이디어 경진대회 전국 5위 수상",
    technologies: ["React Native", "Firebase", "TypeScript"],
    features: [
      "사용자 맞춤형 추천 시스템으로 멘토 및 자료 제공",
      "가볍고 빠른 실시간 채팅 기능",
      "분야별 멘토 및 관련 사례 둘러보기",
      "진로 고민 해결을 위한 질문 및 답변 플랫폼",
    ],
    challenges: [
      "다양한 멘토와 멘티를 연결하기 위한 사용자 매칭 알고리즘 최적화",
      "대규모 트래픽 처리와 안정성을 위한 서버 아키텍처 설계",
      "사용자 데이터를 기반으로 개인화된 추천 시스템 구현",
    ],
    team: ["서영진", "신태현"],
    link: "https://apps.apple.com/kr/app/komp/id6599858149",
    details: [
      {
        category: "타겟 사용자",
        content: [
          "자신을 발전시키고자 하는 10대~20대 청년층",
          "진로에 대한 실질적인 조언과 정보가 필요한 대학생 및 취업 준비생",
          "가볍고 신속한 상담을 통해 효율적으로 궁금증을 해소하고 싶은 사용자",
        ],
      },
      {
        category: "브랜드 아이덴티티",
        content: [
          "공대생이라는 정체성을 기반으로 소속감과 신뢰 제공",
          "진로에 대한 고민을 실질적으로 해소할 수 있는 공간",
          "가벼운 비용과 시간으로 다양한 멘토와 상담 가능",
          "의지와 소신을 자극하는 사용자 경험 설계",
        ],
      },
      {
        category: "주요 기능",
        content: [
          "멘토와 멘티의 역할을 재정의한 ‘Traveler’와 ‘Pathfinder’ 모드 제공",
          "스타트업, 대기업, 다양한 직업군의 정보를 탐색 가능",
          "분야별 트렌드와 떠오르는 전문가 소개",
          "진로 관련 질문, 상담, 피드백 플랫폼 제공",
        ],
      },
      {
        category: "경험 및 경쟁력",
        content: [
          "창업 대회 수상 경험을 바탕으로 사용자 중심의 플랫폼 설계",
          "가볍고 효율적인 UX/UI 디자인으로 접근성 향상",
          "기존 커피챗과의 차별화: 짧고 효율적인 상담, 낮은 비용, 더 많은 연결 기회",
        ],
      },
    ],
  },
  "connect-ai": {
    title: "커넥트 AI",
    image: "/connectDetail.png",
    description:
      "AI를 활용해 대화 분석 및 맞춤형 연애 조언을 제공하는 혁신적인 연애 보조 서비스입니다.\n사용자가 썸을 연애로 발전시킬 수 있도록 도와줍니다.",
    achievements: "일주일 만에 다운로드 수 1000건 돌파",

    technologies: ["React Native", "TypeScript", "Firebase"],
    features: [
      "AI 기반 대화 맥락 분석 및 상황별 답변 추천",
      "대화 톤 & 강도 조절로 사용자 맞춤형 솔루션 제공",
      "위트 있는 대화 스타터 및 첫인상 개선 멘트 추천",
      "AI와의 1:1 연애 상담 기능으로 세밀한 조언 제공",
      "사용자 피드백 기반 지속적인 서비스 개선",
    ],
    challenges: [
      "대화 맥락 분석 알고리즘 개발과 최적화",
      "Firebase를 활용한 안정적인 사용자 데이터 관리",
      "사용자 인터페이스(UI) 직관성과 사용성 유지",
    ],
    team: ["서영진", "신태현"],
    link: "https://apps.apple.com/kr/app/%EC%BB%A4%EB%84%A5%ED%8A%B8-ai-%EB%8C%80%ED%99%94-%EC%96%B4%EC%8B%9C%EC%8A%A4%ED%84%B4%ED%8A%B8/id6737464562",
    details: [
      {
        category: "서비스 요약",
        content: [
          "대화 분석을 통해 연애 대화의 맥락을 이해하고 상황에 맞는 최적의 답변을 추천합니다.",
          "사용자 경험을 극대화하는 연애 보조 기능을 제공합니다.",
        ],
      },
      {
        category: "주요 성과",
        content: [
          "일주일 만에 다운로드 1000건 돌파",
          "출시 후 안정적인 매출과 사용자 만족도 확보",
          "사용자 맞춤형 추천 시스템으로 높은 재사용률 달성",
        ],
      },
      {
        category: "기술 스택",
        content: [
          "React Native로 크로스플랫폼 앱 개발",
          "Firebase로 사용자 데이터 관리 및 인증 시스템 구축",
          "TypeScript로 코드 안정성과 유지 보수성 확보",
        ],
      },
      {
        category: "주요 기능",
        content: [
          "AI 기반 대화 분석 및 답변 추천",
          "대화 스타터 추천 및 맞춤형 첫인상 멘트 제공",
          "1:1 연애 상담 기능으로 사용자 개인화 지원",
          "연애 상담 결과 및 대화 기록 관리 기능",
        ],
      },

      {
        category: "미래 계획",
        content: [
          "AI 모델 개선을 통한 더욱 세밀한 대화 맥락 이해",
          "유료 플랜 사용자 전용 심화 기능 추가",
          "다양한 언어 및 문화에 맞춘 글로벌 서비스 확장",
        ],
      },
    ],
  },

  "eumpa-eumpa": {
    title: "음파 음파",
    image: "/umpahDetail.png",
    description:
      "한의사의, 한의사를 위한, 한의사에 의한 커뮤니티 플랫폼을 구축했습니다. 케이스 공유와 소통을 통해 전문성을 강화할 수 있는 공간을 제공합니다.",
    achievements: "하나 소셜벤처 유니버시티 전국 우수팀 선정",
    technologies: ["Next.js", "Node.js", "TypeScript", "Firebase"],
    features: [
      "회원가입, 로그인, 인증 기능으로 철저한 보안 유지",
      "사용자 맞춤형 필터링과 태그 기반 검색 기능",
      "초음파 영상 및 사진 업로더와 뷰어, 라벨링 기능 제공",
      "반응형 디자인으로 다양한 디바이스에서 최적의 사용자 경험 제공",
      "케이스 업로드, 수정, 삭제 및 댓글 포럼 기능",
      "퀴즈 모드와 참고자료 입력 기능으로 학습 환경 제공",
    ],
    challenges: [
      "사용자 경험(UX)을 최적화하면서도 빠른 로드 타임을 유지",
      "다양한 파일 형식(mp4, mov, avi, jpg 등)을 지원하는 안정적인 업로더 개발",
      "복잡한 카테고리와 태그 시스템을 통한 효율적인 데이터 정렬 및 검색 구현",
    ],
    team: ["서영진", "신태현"],
    link: "https://www.umpahumpah.kr/",
    details: [
      {
        category: "웹사이트 기초 설계",
        content: [
          "홈페이지 설계 및 소개 페이지 구현",
          "회원가입, 로그인, 인증 시스템 구축",
        ],
      },
      {
        category: "Case & Case Study",
        content: [
          "케이스 업로드, 저장, 수정, 삭제 기능",
          "제목, 작성자, 카테고리, 태그 기반 검색 및 필터링",
          "초음파 영상 업로더 및 뷰어: Drag & Drop 지원",
          "초음파 장축/단축 선택과 라벨링 기능",
          "케이스 포럼(댓글 및 대댓글) 지원",
        ],
      },
      {
        category: "QnA 게시판",
        content: [
          "지식인 스타일의 질문 및 답변 게시판 구현",
          "사용자 간 전문 지식 공유와 문제 해결 환경 제공",
        ],
      },
      {
        category: "My Page",
        content: [
          "사용자 프로필 관리",
          "내가 업로드한 케이스 및 저장한 케이스 관리",
          "댓글 알림 및 활동 내역 관리",
        ],
      },
      {
        category: "관리자 페이지",
        content: [
          "사용자 관리 및 콘텐츠 관리 기능",
          "로그인 인증 시스템을 통한 보안 강화",
        ],
      },
    ],
  },
};

const PortfolioDetail = () => {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug; // `slug`를 문자열로 변환

  if (!slug || !projectData[slug]) {
    notFound();
  }

  const project = projectData[slug];

  return (
    <div className="bg-black text-white">
      <Header />

      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* 프로젝트 타이틀 */}
          <div className="h-screen">
            <h2 className="text-5xl font-semibold mb-12 text-center">
              {project.title}
            </h2>

            {/* 이미지 */}
            <div className="relative w-full h-[400px] mb-10">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="contain"
                className="rounded-lg shadow-xl"
              />
            </div>
            {/* 설명 */}
            <div className="text-lg font-light leading-relaxed mb-16 text-center max-w-3xl mx-auto">
              {project.description}
            </div>

            {/* 아래 화살표와 상세 정보 보기 */}
            <div className="text-center ">
              <button
                onClick={() =>
                  document
                    .getElementById("details-section")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center justify-center mx-auto text-gray-300 hover:text-orange-400 transition"
              >
                <span className="text-medium font-medium">상세 정보 보기</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 ml-2 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5L12 19.5 4.5 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* 세부 정보 */}
          <div
            id="details-section"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 max-w-5xl mx-auto pt-16"
          >
            {[
              { title: "주요 성과", content: project.achievements },
              {
                title: "기술 스택",
                content: (
                  <ul className="list-disc list-inside text-gray-300">
                    {project.technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                ),
              },
              {
                title: "주요 기능",
                content: (
                  <ul className="list-disc list-inside text-gray-300">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                ),
              },
              {
                title: "주요 도전 과제",
                content: (
                  <ul className="list-disc list-inside text-gray-300">
                    {project.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                ),
              },
            ].map((section, index) => (
              <div
                key={index}
                className="flex flex-col  bg-black bg-opacity-50 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-bold text-orange-400 mb-8">
                  {section.title}
                </h3>
                <div className="text-gray-300 text-sm">{section.content}</div>
              </div>
            ))}
          </div>

          {/* 세부 설계 */}
          {project.details && (
            <div className="mb-12 max-w-5xl mx-auto">
              <h3 className="text-3xl font-bold text-orange-500 mb-6 text-center">
                세부 설계
              </h3>
              {project.details.map((detail, index) => (
                <div
                  key={index}
                  className="mb-6 p-6 bg-black bg-opacity-50 rounded-lg shadow-lg"
                >
                  <h4 className="text-2xl font-bold text-orange-400 mb-4">
                    {detail.category}
                  </h4>
                  <ul className="list-disc list-inside text-gray-300">
                    {detail.content.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* 팀원 정보 */}
          <div className="mb-12 text-center">
            <h3 className="text-2xl font-bold text-orange-400 mb-4">팀원</h3>
            <p className="text-gray-300">{project.team.join(", ")}</p>
          </div>

          {/* 데모 링크 */}
          <div className="text-center">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            >
              실제 프로젝트 보기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioDetail;
