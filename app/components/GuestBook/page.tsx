"use client";

import Link from "next/link";
import { guestbookData } from "@/data/guestbookData";

export default function GuestBookPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <Link
            href="/"
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            뒤로가기
          </Link>
          <Link
            href="/components/GuestBook/register"
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            방명록 작성
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-br from-purple-500 to-indigo-600 bg-clip-text text-transparent">
            GUESTBOOK
          </h1>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white">방명록 목록</h2>
        </div>

        {guestbookData.length === 0 ? (
          <p className="text-gray-400 text-center">
            아직 작성된 방명록이 없습니다.
          </p>
        ) : (
          <div className="grid gap-6">
            {guestbookData.map((guestbook) => (
              <Link
                key={guestbook.id}
                href={`/components/GuestBook/${guestbook.id}`}
                className="block p-6 bg-white/10 backdrop-blur-lg rounded-lg hover:bg-white/20 transition-colors border border-white/20"
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-white">
                    {guestbook.author}
                  </h3>
                  <span className="text-sm text-gray-400">
                    {guestbook.createdAt}
                  </span>
                </div>
                <p className="mt-2 text-gray-300 line-clamp-2">
                  {guestbook.content}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
