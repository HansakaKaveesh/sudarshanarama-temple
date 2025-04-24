"use client";
import Head from 'next/head';
import { useState } from 'react';

const ComingSoon = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission logic here
    alert(`Email submitted: ${email}`);
    setEmail('');
  };

  return (
    <>
      <Head>
        <title>Coming Soon</title>
        <meta name="description" content="Our website is coming soon!" />
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-800">Coming Soon</h1>
          <p className="mt-4 text-xl text-gray-600">We are working hard to bring you something amazing. Stay tuned!</p>
          <form onSubmit={handleSubmit} className="mt-8">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              aria-label="Email address"
              className="p-3 text-lg border-2 border-gray-300 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <button 
              type="submit"
              className="ml-2 p-3 text-lg bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-200"
            >
              Notify Me
            </button>
          </form>
          <div className="text-gray-800 py-4">
            <div className="text-center">
              <p className="text-sm">Developed by Hansaka Wijesinghe</p>
              <p className="text-sm">
                Feel free to reach out: 
                <a href="mailto:hansakakaveesh2@gmail.com" className="text-indigo-400 hover:text-indigo-600"> E-mail</a>
              </p>
              <p className="text-sm">
                Follow me on 
                <a href="https://www.linkedin.com/in/hansaka-wijesinghe-285748142/" className="text-indigo-400 hover:text-indigo-600"> LinkedIn</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;