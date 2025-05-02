"use client";

import React from "react";

interface PortfolioCardProps {
  imageUrl?: string;
  date: string; // e.g., '2024-08'
  name: string; // e.g., 'WINE DIARY'
  types: ("App" | "Web" | "AI" | "Design" | "Software")[];
  descriptions?: string[];
  stacks: string[];
}

export default function PortfolioCard({
  imageUrl,
  date,
  name,
  types,
  descriptions,
  stacks,
}: PortfolioCardProps) {
  const typeColors: Record<string, string> = {
    App: "bg-pink-200 ",
    Web: "bg-blue-200 ",
    AI: "bg-green-200 ",
    Design: "bg-purple-200 ",
    Software: "bg-yellow-200",
  };

  return (
    <div className="flex flex-col md:flex-row w-full mb-6">
      {/* 이미지 */}
      <div
        className="w-full md:w-1/3 aspect-square bg-[#111] p-10 md:p-16 flex items-center justify-center"
        style={{ minHeight: 200 }}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-contain"
          />
        ) : null}
      </div>

      {/* 내용 */}
      <div className="w-full md:w-2/3 px-4 md:px-8 py-6 md:py-0 text-white">
        {/* 날짜 */}
        <p className="text-sm mb-2">{date}</p>

        {/* 제목 */}
        <h2 className="text-xl font-semibold mb-2">{name}</h2>

        {/* 유형 */}
        <div className="flex gap-2 mb-4 flex-wrap">
          {types.map((t, index) => (
            <span
              key={index}
              className={`inline-block text-xs px-2 py-0.5 font-semibold rounded ${typeColors[t]} text-black`}
            >
              {t}
            </span>
          ))}
        </div>

        {/* 설명 */}
        <ul className="text-sm text-gray-200 list-inside space-y-2">
          {descriptions?.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>

        {/* 스택 */}
        <div className="mt-4">
          <p className="text-sm mb-2 font-semibold">STACKS</p>
          <div className="flex flex-wrap gap-2">
            {stacks.map((stack, i) => (
              <span
                key={i}
                className="text-xs text-white px-2 py-0.5 rounded border"
              >
                {stack}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
