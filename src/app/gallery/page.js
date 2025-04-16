'use client';

import Image from 'next/image';
import { FaPagelines } from 'react-icons/fa';
import { useState } from 'react';

const images = [
  { id: 1, src: '/gallery/image1.jpg', title: 'Meditation Hall', description: 'A serene space for meditation and reflection.' },
  { id: 2, src: '/gallery/image2.jpg', title: 'Peaceful Garden', description: 'A tranquil garden filled with lush greenery.' },
  { id: 3, src: '/gallery/image3.jpg', title: 'Dhamma Talk Area', description: 'An area dedicated to sharing teachings and wisdom.' },
  { id: 4, src: '/gallery/image4.jpg', title: 'Sacred Stupa', description: 'A sacred structure symbolizing enlightenment.' },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mt-18 text-gray-800 mb-10 flex items-center justify-center gap-2">
          <FaPagelines className="text-green-600" />
          Temple Gallery
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((img) => (
            <div
              key={img.id}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300 cursor-pointer"
              onClick={() => handleImageClick(img)}
            >
              <div className="relative h-60 w-full">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover"
                  priority // Load images with priority
                />
              </div>
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-gray-700">{img.title}</h2>
                <p className="text-gray-500 text-sm">{img.description}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50" onClick={closeModal}>
            <div className="relative max-w-3xl w-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                width={800}
                height={600}
                className="object-cover rounded-lg"
              />
              <button className="absolute top-2 right-2 text-white text-2xl" onClick={closeModal}>
                &times;
              </button>
              <div className="text-center text-white mt-2">
                <h2 className="text-lg font-semibold">{selectedImage.title}</h2>
                <p className="text-sm">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}