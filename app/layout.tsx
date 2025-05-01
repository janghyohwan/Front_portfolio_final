import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./layout/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HYO_HWAN 블로그 & 포트폴리오",
  description: "블로그와 포트폴리오를 함께 관리하는 웹사이트입니다.",
  keywords: ["개발자", "블로그", "포트폴리오", "프론트엔드", "웹개발"],
  authors: [{ name: "HYO_HWAN" }],
  openGraph: {
    title: "HYO_HWAN 블로그 & 포트폴리오",
    description: "블로그와 포트폴리오를 함께 관리하는 웹사이트입니다.",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "HYO_HWAN 블로그 & 포트폴리오",
    description: "블로그와 포트폴리오를 함께 관리하는 웹사이트입니다.",
    images: ["/metaData.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
