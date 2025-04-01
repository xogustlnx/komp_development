// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Team Komp | KAIST 출신 두 개발자의 신속하고 정확한 개발 외주 서비스",
  description: "KAIST 출신 두 개발자의 신속하고 정확한 개발 외주 서비스",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Team Komp | 당신의 상상을 실현할 최고의 개발 파트너",
    description:
      "아이디어를 실현할 완벽한 솔루션을 제공하는 신뢰할 수 있는 개발 파트너",
    type: "website",
    images: [
      {
        url: "/openGraph.png", // 썸네일 이미지 URL
        width: 1200,
        height: 630,
        alt: "Team Komp 썸네일",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={inter.className}>
      <body className={` flex flex-col min-h-screen`}>
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
