// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import DeveloperCard from "../components/DeveloperCard";
import AdvantageCard from "../components/AdvantageCard";
import ContactForm from "@/components/ContactForm";

const Home = () => {
  const portfolioProjects = [
    {
      title: "음파음파",
      image: "/umpahMain.png",
      description: "웹 개발",
      achievements: "하나 소셜벤처 유니버시티 전국 최우수 15팀 선정",
      slug: "eumpa-eumpa",
    },
    {
      title: "Komp",
      image: "/kompMain.png",
      description: "앱 개발 - 커뮤니티 앱",
      achievements: "2024 gov-tech 아이디어 경진대회 전국 5위",
      slug: "komp",
    },
    {
      title: "커넥트 AI",
      image: "/connectMain.png",
      description: "앱 개발 - AI 기능 임베딩",
      achievements: "일주일 만에 다운로드 수 1,000건 돌파",
      slug: "connect-ai",
    },
  ];

  const advantages = [
    {
      title: "무한한 개발 역량",
      description: [
        "앱, 웹, 플랫폼, 필터링, AI 등 모든 프로젝트를 완벽히 지원.",
        "고객의 아이디어를 기술로 실현합니다.",
      ],
      icon: "/icons/puzzle.png",
    },
    {
      title: "독창적인 웹사이트 설계",
      description: [
        "브랜드에 최적화된 맞춤형 디자인과 혁신적인 기능 제공.",
        "단순 랜딩페이지를 넘어 독창적이고 유연한 구조 설계.",
      ],
      icon: "/icons/idea.png",
    },
    {
      title: "압도적인 속도",
      description: [
        "간단한 개발은 단 1주일, 복잡한 플랫폼도 한 달 내 완성.",
        "효율적인 개발 프로세스와 전문성을 기반으로 신속 제공.",
      ],
      icon: "/icons/time.png",
    },
    {
      title: "합리적인 비용, 탁월한 품질",
      description: [
        "효율적인 프로세스로 고품질 서비스를 저렴한 가격에 제공.",
        "대표들과 직접 소통해 빠르고 정확한 피드백 반영.",
      ],
      icon: "/icons/money.png",
    },
  ];

  return (
    <div className="mt-12">
      {/* 히어로 섹션 */}
      <section
        className="relative h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url('/hero-background.jpg')` }}
      >
        {/* 그라데이션 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>

        {/* 콘텐츠 */}
        <div className="relative  z-10 max-w-4xl px-6">
          <h1 className="text-4xl md:text-6xl font-header text-white font-bold leading-tight mb-6">
            당신의 상상을<span className="text-accent"></span> 100% 실현하는
            <br />
          </h1>
          <h1 className="text-4xl md:text-6xl font-header text-white font-bold leading-tight mb-12">
            <span className="bg-clip-text font-bold text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600">
              Team Komp
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-light mb-24">
            우리는 <strong className="font-semibold">신속하고 정확하게</strong>{" "}
            당신이 원하는 결과를 만듭니다. <br />
            아이디어를 실현하고 완벽한 솔루션을 제공하는 믿을 수 있는 개발
            파트너입니다.
          </p>

          <Link href="#about">
            <div className="inline-block bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:scale-105 transition transform">
              콤프 팀 보기
            </div>
          </Link>
        </div>

        {/* 아래 화살표 애니메이션 */}
        <div className="absolute hidden bottom-8 md:flex justify-center w-full animate-bounce">
          <span className="text-white text-3xl">⬇</span>
        </div>
      </section>

      {/* 팀 소개 미리보기 */}
      <section
        id="about"
        className="relative md:h-screen py-20 bg-gradient-to-b from-lightGray to-white overflow-hidden"
      >
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-header text-main font-bold text-center mb-10">
            Team<span className="font-bold"> Komp</span>
          </h2>
          <p className="text-lg md:text-xl font-light text-center mb-2">
            당신이 원하는 무엇이든 개발 가능한{" "}
            <span className="font-semibold text-main">
              두명의 카이스트 출신 개발자
            </span>
          </p>

          <p className="text-lg md:text-xl font-light text-center mb-16">
            대형 업체의 거품을 뺀,{" "}
            <span className="font-semibold text-main">
              투명하고 합리적인 외주 비용으로 서비스를 제공합니다.
            </span>
          </p>

          {/* 개발자 소개 */}
          <div className="flex justify-center items-center flex-col md:flex-row  gap-12 ">
            <DeveloperCard
              name="서영진"
              image="/서영진.jpeg"
              description={[
                "한국과학영재학교 졸업",
                "KAIST 전산학부 3년 조기 졸업",
                "2023 KT AI 해커톤 1위",
                "2022 KEIS AI 해커톤 4위",
                "2022 KSC AI 분야 학부 최우수논문상",
              ]}
            />
            <DeveloperCard
              name="신태현"
              image="/신태현.jpg"
              description={[
                "경산과학고등학교 조기 졸업",
                "KAIST 전산학과 재학",
                "카이스트 개발동아리 SPARCS",
                "2024 Gov-tech 전국 창업 아이디어 대회 5위",
                "카이스트 택시 탑승 서비스 개발",
              ]}
            />
          </div>
        </div>

        {/* 세련된 배경 효과 */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* 작은 별 효과 */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {Array.from({ length: 50 }).map((_, i) => {
              const size = Math.random() * 4 + 1; // 동일한 크기를 위해 변수로 저장
              return (
                <div
                  key={i}
                  className="absolute bg-white rounded-full opacity-20 animate-pulse"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`, // width와 height를 동일하게 설정
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDuration: `${Math.random() * 4 + 2}s`,
                  }}
                ></div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 포트폴리오 하이라이트 */}
      <section id="portfolio" className="md:h-screen  py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-header text-main mb-8 text-center font-bold">
            포트폴리오
          </h2>
          <p className="text-lg md:text-xl font-light text-center mb-16">
            높은 퀄리티, 확실한 성과
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                title={project.title}
                image={project.image}
                description={project.description}
                achievements={project.achievements}
                slug={project.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 장점 요약 - 그리드 레이아웃 */}
      <section
        id="advantages"
        className="py-20 bg-black relative overflow-hidden md:h-screen"
      >
        <div className="container mx-auto px-6 justify-center flex flex-col items-center">
          <h2 className="text-3xl font-bold text-white mb-32 text-center">
            우리 팀의 <span className="text-orange-500">장점</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <AdvantageCard
                key={index}
                title={advantage.title}
                description={advantage.description}
                icon={advantage.icon}
              />
            ))}
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="py-20 bg-black text-white relative md:h-screen"
      >
        <div className="container mx-auto px-6">
          {/* 배경 장식 */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-800 to-black opacity-70 pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-500 opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500 to-indigo-500 opacity-20 rounded-full blur-3xl"></div>

          {/* 제목 */}
          <h2 className="text-3xl font-header text-main mb-24 text-center font-bold relative z-10">
            문의하기
          </h2>

          <div className="flex flex-col md:flex-row relative z-10">
            {/* 문의 양식 */}
            <div className=" flex-[3]  md:pr-8 mb-8 md:mb-0 bg-opacity-5 bg-whitep-6 rounded-xl shadow-lg ">
              <h3 className="text-xl font-header text-center mb-6">
                언제든지 문의하세요!
              </h3>
              <ContactForm />
            </div>

            {/* 연락처 정보 */}
            <div className="flex-[2]  md:pl-8 flex flex-col ">
              <div className="mb-8">
                <h3 className="text-2xl font-header mb-4">연락처 정보</h3>
                <p className="font-body text-gray-300 mb-2">
                  <strong className="text-white">이메일:</strong>{" "}
                  teamkompdev@gmail.com
                </p>
                <p className="font-body text-gray-300 mb-2">
                  <strong className="text-white">전화번호:</strong>{" "}
                  010-5933-3375
                </p>
                <p className="font-body text-gray-300">
                  <strong className="text-white">주소:</strong> 대전광역시 궁동
                </p>
              </div>
              {/* 지도 삽입 */}
              <div className="w-full h-64 overflow-hidden rounded-xl shadow-lg border border-gray-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12850.696032465426!2d127.33604691318561!3d36.36867435796945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35654ba3f7aa85ef%3A0x6722a349f1d9aa6c!2z64yA7KCE6rSR7Jet7IucIOycoOyEseq1rCDqtoHrj5k!5e0!3m2!1sko!2skr!4v1733938238768!5m2!1sko!2skr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="팀 komp 위치"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
