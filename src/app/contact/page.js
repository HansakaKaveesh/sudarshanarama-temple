'use client';

import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage('');

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setResponseMessage('Your message has been sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-8 mt-18">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-green-600 text-xl" />
              <span className="text-gray-700">
                Dhamma Temple, 123 Serenity Road, Peace City, Sri Lanka
              </span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-green-600 text-xl" />
              <span className="text-gray-700">+94 77 123 4567</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-green-600 text-xl" />
              <span className="text-gray-700">info@dhammatemple.lk</span>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Name"
                aria-label="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="you@example.com"
                aria-label="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Type your message here..."
                aria-label="Your Message"
              ></textarea>
            </div>
             <button
              type="submit"
              className={`bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          {responseMessage && (
            <div className="mt-4 text-center text-green-600">
              {responseMessage}
            </div>
          )}
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-4xl mx-auto mt-12 rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63389.14248942957!2d79.8412038!3d6.9270782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259226b94754d%3A0x3a09a4a2432bce68!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1713266665485!5m2!1sen!2slk"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}