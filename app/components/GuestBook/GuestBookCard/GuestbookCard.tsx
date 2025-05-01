import { GuestbookCardProps } from "@/types/GuestbookType";
import Link from "next/link";

export default function GuestbookCard({ guestbook }: GuestbookCardProps) {
  return (
    <Link href={`/${guestbook.id}`}>
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              {guestbook.author}
            </h3>
            <p className="text-sm text-gray-500">{guestbook.createdAt}</p>
          </div>
        </div>
        <p className="text-gray-700">{guestbook.content}</p>
      </div>
    </Link>
  );
}
