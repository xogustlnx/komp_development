export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white px-12 py-14">
      <section className="space-y-4">
        <h1 className="text-2xl mb-8">About Team Komp.</h1>
        <p className="text-sm pb-4">
          저희는 <strong>KAIST</strong>를 졸업한 두 젊은 인재가 신설한 개발
          외주사입니다.
        </p>
        <p className="text-sm pb-4">
          웹사이트, 앱, AI 데이터 분석 등 다양한 분야에서 빠른 개발 솔루션을
          제공하며,
          <br />
          고객이 원하는 어떤 아이디어든 기술로 실현할 수 있는 팀입니다.
        </p>
        <p className="text-sm pb-4">
          돈 받고 개발만 하는 게 아닌,
          <br />그 이상의 파트너로서 함께 성장까지 돕는 팀이 되기를 지향합니다.
        </p>
        <p className="text-sm">
          저희와 이야기를 나누고 싶으시면 언제든 연락주세요.
        </p>
      </section>

      <section className="mt-12 space-y-4">
        <h1 className="text-2xl mb-8">Team</h1>

        <div>
          <h3 className="mb-2 text-sm">공동대표 서영진</h3>
          <ul className="list-disc list-inside space-y-2 text-xs">
            <li>KAIST 전산학부 3년 조기졸업</li>
            <li>KAIST AI 데이터마이닝 연구실 석사 과정</li>
            <li>2023 KT AI 해커톤 1위 외 다수 수상 이력</li>
            <li>2022 한국소프트웨어학회 AI 분야 최우수논문상</li>
          </ul>
        </div>

        <div>
          <h3 className=" mb-2 text-sm">공동대표 신태현</h3>
          <ul className="list-disc list-inside text-xs space-y-2">
            <li>KAIST 전산학부 / 산업디자인과 재학</li>
            <li>KAIST 개발 팀 Sparcs 소속</li>
            <li>앱/웹 풀스택 개발 경험 다수</li>
          </ul>
        </div>

        <p className="text-sm mt-4">
          팀콤프의 실제 작업물은{" "}
          <a href="/portfolio" className="underline hover:text-gray-300">
            Portfolio
          </a>
          에서 확인하세요.
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
