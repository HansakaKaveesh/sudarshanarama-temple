import {
  AlertCircle,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Not() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4 py-8">
      <div className="text-center p-8 rounded-3xl shadow-2xl bg-white max-w-md w-full animate-fadeIn">
        <div className="flex justify-center mb-4">
          <AlertCircle className="w-14 h-14 text-red-500 animate-pulse" />
        </div>

        <h1 className="text-4xl font-black text-gray-800 mb-3">
          Page Not Published
        </h1>

        <p className="text-gray-600 mb-6 text-base leading-relaxed">
          This page is currently unavailable. We are working hard to get it
          online. Please check back later
        </p>

        <hr className="border-gray-200 mb-5" />

        <div className="text-sm text-gray-500 space-y-1">
          <p>
            <strong>Web Developer:</strong>{" "}
            <span className="font-medium text-gray-700">Hansaka Wijesinghe</span>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:hansakakaveesh2@gmail.com"
              className="text-blue-600 hover:underline"
            >
              hansakakaveesh2@gmail.com
            </a>
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://www.hansaka.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              www.hansaka.com
            </a>
          </p>
        </div>

        <div className="mt-6 flex justify-center gap-5 text-gray-500">
          <a
            href="https://www.facebook.com/Hansaka.W"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-transform transform hover:scale-110"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/hansaka_wijesinghe/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-transform transform hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/hansaka-wijesinghe-285748142/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition-transform transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </main>
  );
}
