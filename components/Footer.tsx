import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="container mx-auto text-center space-y-6">
        {/* 로고 및 팀 이름 */}
        <div>
          <h1 className="text-xl font-bold text-white">Team Komp</h1>
          <p className="text-sm text-gray-400">
            당신의 상상을 실현할 최고의 개발 파트너
          </p>
        </div>

        {/* 네비게이션 */}
        <div className="flex justify-center space-x-6 text-sm">
          <Link href="/#about" className="hover:text-orange-500 transition">
            팀 소개
          </Link>
          <Link href="/#portfolio" className="hover:text-orange-500 transition">
            포트폴리오
          </Link>
          <Link
            href="/#advantages"
            className="hover:text-orange-500 transition"
          >
            장점
          </Link>
          <Link href="/contact" className="hover:text-orange-500 transition">
            문의
          </Link>
        </div>

        {/* 소셜 아이콘 */}
        {/* <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
          >
            <FaLinkedin size={28} />
          </a>
        </div> */}

        {/* 저작권 */}
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Team Komp. All rights reserved.
        </p>
      </div>

      {/* 하단 장식 효과 */}
    </footer>
  );
};

export default Footer;
