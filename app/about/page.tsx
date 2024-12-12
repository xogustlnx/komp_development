// app/about/page.tsx
import DeveloperCard from "../../components/DeveloperCard";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-header text-main mb-6 text-center">
          팀 소개
        </h2>
        <p className="font-body text-gray-700 text-center mb-12">
          카이스트생 두 명이 만들어주는 미래
        </p>
        {/* 개발자 소개 */}
        <div className="flex flex-col md:flex-row justify-around">
          <DeveloperCard
            name="서영진"
            image="/developers/seoyoungjin.jpg"
            description="한국과학영재고등학교 출신<br/>카이스트 전산학과 조기졸업<br/>카이스트 전산학부 대학원 재학 중"
          />
          <DeveloperCard
            name="신태현"
            image="/developers/sin-taehyun.jpg"
            description="경산과학고등학교 출신<br/>카이스트 전산학과 재학 중<br/>카이스트 개발동아리 SPARCS 소속"
          />
        </div>
        {/* 팀 사진 또는 활동 사진 추가 가능 */}
        <div className="mt-12 flex justify-center">
          <Image
            src="/team-photo.jpg" // 팀 활동 사진 추가
            alt="팀 komp 활동 사진"
            width={800}
            height={600}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
