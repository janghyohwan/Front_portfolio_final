"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isGuestbookPage = pathname?.includes("/components/GuestBook");

  return (
    <>
      {!isGuestbookPage && <Header />}
      {children}
    </>
  );
}
