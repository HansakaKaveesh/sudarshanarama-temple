import { AlertCircle } from "lucide-react";

export default function Not() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <div className="text-center p-8 rounded-2xl shadow-xl bg-white max-w-lg w-full">
        <div className="flex justify-center mb-4">
          <AlertCircle className="w-12 h-12 text-red-500" />
        </div>
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Page Not Published</h1>
        <p className="text-gray-600 mb-6 text-base">
          This page is currently unavailable. We're working on it, so please check back soon!
        </p>
        <div className="border-t pt-5 mt-6 text-sm text-gray-500 space-y-1">
          <p>Web Developer: <span className="font-medium">Hansaka Wijesinghe</span></p>
          <p>Email: <a href="mailto:hansakakaveesh2@gmail.com" className="text-blue-500 hover:underline">hansakakaveesh2@gmail.com</a></p>
          <p>Website: <a href="https://www.hansaka.com" className="text-blue-500 hover:underline">www.hansaka.com</a></p>
        </div>
      </div>
    </main>
  );
}
