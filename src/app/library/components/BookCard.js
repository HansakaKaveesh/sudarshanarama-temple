import { FaDownload } from "react-icons/fa";

export default function BookCard({ title, author, link, cover }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
      <img
        src={cover}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-yellow-700">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">By: {author}</p>
        <a
          href={link}
          download
          className="inline-flex items-center text-yellow-700 hover:underline"
        >
          <FaDownload className="mr-2" />
          Download PDF
        </a>
      </div>
    </div>
  );
}
