import Head from 'next/head';

const ComingSoon = () => {
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
          <div className="mt-8">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 text-lg border-2 border-gray-300 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 "
            />
            <button className="ml-2 p-3 text-lg bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              Notify Me
            </button>
          </div>
          <div className=" text-gray-800 py-4">
        <div className="text-center">
          <p className="text-sm">Developed by Hansaka Wijesinghe</p>
          <p className="text-sm">Feel free to reach out: <a href="hansakakaveesh2@gmail.com" className="text-indigo-400 hover:text-indigo-600">E-mail</a></p>
          <p className="text-sm">Follow me on <a href="https://www.linkedin.com/in/hansaka-wijesinghe-285748142/" className="text-indigo-400 hover:text-indigo-600">LinkedIn</a></p>
        </div>
      </div>
        </div>
      </div>

      {/* Developer Contact Section */}
      
    </>
  );
};

export default ComingSoon;
