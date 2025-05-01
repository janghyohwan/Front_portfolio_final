import GuestBookList from "./GuestBook/GuestBookList/GuestBookList";

const GuestBookSection = () => {
  return (
    <section id="guestbook" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold bg-gradient-to-br from-purple-500 to-indigo-600 bg-clip-text text-transparent">
            GUESTBOOK
          </h2>
        </div>
        <GuestBookList />
      </div>
    </section>
  );
};

export default GuestBookSection;
