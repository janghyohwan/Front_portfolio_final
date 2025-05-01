export type Guestbook = {
  id: number;
  author: string;
  content: string;
  createdAt: string;
  likes: number;
};
export type GuestbookCardProps = {
  guestbook: Guestbook;
};
export type GuestbookRegisterProps = {
  guestbook: Pick<Guestbook, "author" | "content">;
};
export type Props = {
  params: {
    id: string;
  };
};
