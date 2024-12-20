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
        {/* 사업자 정보 */}
        <div className="flex justify-center">
          <div className=" text-xs text-gray-400 flex flex-col text-left">
            <p>사업자 등록번호: 734-36-01310</p>
            <p>대표자 이름: 서영진</p>
            <p>상호명: 콤프</p>
            <p>개인정보 보호 책임자: 서영진</p>
          </div>
        </div>

        {/* 저작권 */}
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Team Komp. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
