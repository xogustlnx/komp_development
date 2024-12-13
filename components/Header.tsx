"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-black/90 shadow-lg backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* 로고 */}
        <div className="text-2xl font-header text-white">
          <Link href="/" className="hover:text-orange-500 transition">
            <Image
              src="/mainLogo.png"
              width={64}
              height={64}
              alt="Picture of the author"
            />
          </Link>
        </div>

        {/* 데스크톱 메뉴 */}
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/#about"
            className="font-body text-gray-200 hover:text-orange-500 transition"
          >
            팀 소개
          </Link>
          <Link
            href="/#portfolio"
            className="font-body text-gray-200 hover:text-orange-500 transition"
          >
            포트폴리오
          </Link>
          <Link
            href="/#advantages"
            className="font-body text-gray-200 hover:text-orange-500 transition"
          >
            장점
          </Link>
          <Link
            href="/#contact"
            className="font-body text-gray-200 hover:text-orange-500 transition"
          >
            문의
          </Link>
        </nav>

        {/* 모바일 메뉴 아이콘 */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-orange-500 transition"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {isOpen && (
        <nav className="md:hidden bg-black/90 backdrop-blur shadow-lg">
          <ul className="flex flex-col items-center space-y-4 p-6">
            <li>
              <Link
                href="/#about"
                className="text-gray-200 hover:text-orange-500 transition"
              >
                팀 소개
              </Link>
            </li>
            <li>
              <Link
                href="/#portfolio"
                className="text-gray-200 hover:text-orange-500 transition"
              >
                포트폴리오
              </Link>
            </li>
            <li>
              <Link
                href="/#advantages"
                className="text-gray-200 hover:text-orange-500 transition"
              >
                장점
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="text-gray-200 hover:text-orange-500 transition"
              >
                연락처
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
