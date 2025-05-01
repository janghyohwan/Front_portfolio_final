import { guestbookData } from "@/data/guestbookData";
import Link from "next/link";

export default function GuestBookList() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-white">방명록</h2>
        <Link
          href="/components/GuestBook"
          className="px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          더보기
        </Link>
      </div>
      <div className="grid gap-6">
        {guestbookData.slice(0, 3).map((guestbook) => (
          <Link
            key={guestbook.id}
            href={`/components/GuestBook/${guestbook.id}`}
            className="block p-6 bg-white/10 backdrop-blur-lg rounded-lg hover:bg-white/20 transition-colors border border-white/20"
          >
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-white">{guestbook.author}</h3>
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
    </div>
  );
}
