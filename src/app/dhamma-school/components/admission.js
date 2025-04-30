'use client';

import { FaUserGraduate } from 'react-icons/fa';
import { useState } from 'react';

export default function DhammaAdmissionPage() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-white px-4 py-10 md:px-20">
      <div className="max-w-4xl mx-auto bg-gray-50 p-6 md:p-8 rounded-2xl shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <FaUserGraduate className="text-3xl text-yellow-600" />
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            New Student Admission – Dhamma School
          </h1>
        </div>

        <p className="text-gray-600 mb-6 text-sm md:text-base">
          Welcome to our Dhamma School! Please fill out the following Google Form to complete your admission process.
        </p>

        <div className="w-full aspect-[1/2] md:aspect-video rounded-xl overflow-hidden shadow-md">
          {loading && (
            <div className="flex items-center justify-center h-full">
              <div className="loader"></div>
            </div>
          )}
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfVRG35ZA5Ulvji9EmlCoql--LO0JuOwmESGxro_F9xNgT8ug/viewform?embedded=true"
            className={`w-full h-full transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Dhamma School Admission Form"
            allowFullScreen
            onLoad={() => setLoading(false)}
          >
            Loading…
          </iframe>
        </div>

        <p className="text-gray-600 mt-4 text-sm md:text-base">
          If you have any questions regarding the admission process, feel free to contact us at <a href="mailto:info@dhammaschool.com" className="text-yellow-600 hover:underline">info@dhammaschool.com</a>.
        </p>
      </div>

      <style jsx>{`
        .loader {
          border: 4px solid rgba(255, 255, 255, 0.3);
          border-top: 4px solid #fbbf24; /* Yellow color */
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}