"use client";
import { useRouter } from "next/navigation";
import React from "react";

function DeleteButton() {
  const router = useRouter();
  const handleDelete = async () => {
    const confirmDelete = window.confirm("이 방명록을 삭제하시겠습니까?");
    if (confirmDelete) {
      try {
        router.push("/components/GuestBook");
        alert("방명록이 성공적으로 삭제되었습니다.");
      } catch {
        alert("삭제에 실패했습니다.");
      }
    }
  };
  return (
    <button
      onClick={handleDelete}
      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors mt-4"
    >
      삭제
    </button>
  );
}

export default DeleteButton;
