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
  title: "Team Komp. 개발 그 이상의 파트너",
  description: "당신의 상상을 실현할 파트너, 팀콤프",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Team Komp. 개발 그 이상의 파트너",
    description:
      "당신의 상상을 실현할 파트너, 팀콤프",
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
