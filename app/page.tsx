export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-12 py-14">
      <div>
        <h1 className="text-2xl ">Team Komp.</h1>
        <p className="mt-2 text-base">개발 그 이상의 파트너.</p>

        <div className="mt-24 space-y-1">
          <p>무엇이든 상상하세요.</p>
          <p>당신의 상상은, 우리가 실현합니다.</p>
        </div>

        <nav className="mt-24 flex space-x-6 text-sm">
          <a href="/about" className="underline hover:text-gray-300 ">
            About
          </a>
          <a href="/portfolio" className="underline hover:text-gray-300 ">
            Portfolio
          </a>
          <a href="/contact" className="underline hover:text-gray-300 ">
            Contact
          </a>
        </nav>
      </div>
    </main>
  );
}
