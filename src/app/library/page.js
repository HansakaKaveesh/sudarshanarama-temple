import { FaBookOpen } from "react-icons/fa";
import BookCard from "./components/BookCard";

const books = [
  {
    title: "Dhammapada",
    author: "Buddha",
    link: "/downloads/dhammapada.pdf",
    cover: "/images/dhammapada.jpg",
  },
  {
    title: "Sutta Nipata",
    author: "Buddha",
    link: "/downloads/sutta-nipata.pdf",
    cover: "/images/sutta-nipata.jpg",
  },
  {
    title: "Visuddhimagga",
    author: "Buddhaghosa",
    link: "/downloads/visuddhimagga.pdf",
    cover: "/images/visuddhimagga.jpg",
  },
];

export default function ELibrary() {
  return (
    <div className="min-h-screen bg-yellow-50 text-gray-800">
      <header className=" py-6">
  <div className="text-center text-3xl font-bold flex justify-center items-center gap-3  mt-20">
    <FaBookOpen className="text-yellow-600" />
    E-Library
  </div>
</header>

      <main className="p-6">
        <h2 className="text-2xl font-semibold mb-6">Available Books</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {books.map((book, index) => (
            <BookCard key={index} {...book} />
          ))}
        </div>
      </main>
    </div>
  );
}
