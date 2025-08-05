// pages/under-construction.tsx
"use client";

import React from "react";

export default function UnderConstruction() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat text-center px-4"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/1919863292/photo/e-learning-education-internet-lessons-and-online-learning-with-webinars-video-tutorials.jpg?s=612x612&w=0&k=20&c=zWAqp6FGH-zm6b0Os_CssxubtrgKh1MyFeMgelFZbOg=')",
      }}
    >
      <div className="bg-yellow-100/80 p-6 sm:p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-3xl sm:text-5xl font-bold text-yellow-700 mb-4">
          🚧 Page Under Construction
        </h1>
        <p className="text-base sm:text-lg text-yellow-800 mb-6">
          We're working hard to bring this page to life. Please check back soon!
        </p>

        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-left">
          <h2 className="text-xl sm:text-2xl font-semibold text-yellow-700 mb-2">📞 Contact Us</h2>
          <p className="text-gray-700">
            If you need assistance or have questions, feel free to reach out.
          </p>
          <div className="mt-4 text-gray-800 space-y-1">
            <p><strong>Email:</strong> hansakakaveesh2@gmail.com</p>
            <p><strong>Phone:</strong> +94 71 044 83 66</p>
          </div>
        </div>
      </div>
    </div>
  );
}
