export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-10 md:px-12 md:py-14">
      <section className="space-y-4">
        <h1 className="text-2xl mb-8">About Team Komp.</h1>
        <p className="text-sm pb-1 leading-[1.8]">
          KAIST 출신의 두 젊은 개발자가 이끄는 개발 에이전시,
          <br />
          Team Komp 입니다.
        </p>
        <p className="text-sm pb-1 leading-[1.8]">
          저희는 웹, 앱, AI 등 고객의 어떤 니즈라도
          <br />
          빠르고 영리하게 실현할 수 있는 팀입니다.
        </p>
        <p className="text-sm pb-1 leading-[1.8]">
          돈 받고 개발만 하는 딱딱한 외주 개발사가 아닌,
          <br />
          고객의 니즈 그 이상을 실현하는 파트너가 되기를 지향합니다.
        </p>
        <p className="text-sm">
          저희와 파트너가 되고 싶다면,{" "}
          <a href="/contact" className="underline hover:text-gray-300">
            Contact
          </a>
          를 확인하세요.
        </p>
      </section>

      <section className="mt-12 space-y-4">
        <h1 className="text-2xl mb-8">Team</h1>

        <div>
          <h3 className="mb-3 text-sm">공동대표 서영진</h3>
          <ul className="list-disc list-inside space-y-2 text-xs">
            <li>한국과학영재학교 졸업</li>
            <li>KAIST 전산학부 3년 조기졸업</li>
            <li>KAIST AI 데이터마이닝 연구실 석사</li>
            <li>2023 KT AI 해커톤 1위</li>
            <li>2022 한국고용정보원 AI 해커톤 4위</li>
            <li>2022 한국소프트웨어학회 AI 분야 최우수논문상</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 mt-6 text-sm">공동대표 신태현</h3>
          <ul className="list-disc list-inside text-xs space-y-2 mb-6">
            <li>경산과학고등학교 2년 조기졸업</li>
            <li>KAIST 전산학부 / 산업디자인과 전공</li>
            <li>KAIST 개발 팀 Sparcs 소속</li>
            <li>20개 이상의 앱/웹 서비스 풀스택 개발</li>
            <li>10개 이상의 AI 기반 서비스 개발</li>
          </ul>
        </div>

        <p className="text-sm">
          저희의 실제 작업물이 궁금하다면,{" "}
          <a href="/portfolio" className="underline hover:text-gray-300">
            Portfolio
          </a>
          를 확인하세요.
        </p>
      </section>

      <footer className="mt-12 flex space-x-6 text-sm">
        <a href="/" className="underline hover:text-gray-300">
          Home
        </a>
        <a href="/portfolio" className="underline hover:text-gray-300">
          Portfolio
        </a>
        <a href="/contact" className="underline hover:text-gray-300">
          Contact
        </a>
      </footer>
    </main>
  );
}
