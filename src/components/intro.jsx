import React from 'react';

const Intro = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 bg-white shadow-lg rounded-lg mt-8 w-full mx-auto">
      <div className="flex-1 md:mb-0">
        <h1 className="font-sans text-5xl font-semibold text-black mb-2">
          Create and sell custom products
        </h1>
        <div className='my-4'>
          <p className="text-gray-700 mb-2">
            <span className="text-black-500 font-semibold">✅ 100% Free to Use</span>
          </p>
          <p className="text-gray-700 mb-2">
            <span className="text-black-500 font-semibold">✅ 900+ High-Quality Products</span>
          </p>
          <p className="text-gray-700 mb-2">
            <span className="text-black-500 font-semibold">✅ Largest Global Print Network</span>
          </p>
        </div>
        <div className="flex space-x-4 mt-4">
          <a href="#" className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-blue-400 transition duration-300 font-mono">
            Start for Free
          </a>
          <a href="#" className="bg-gray-300 text-black px-4 py-2 rounded shadow hover:bg-gray-200 transition duration-300">
            How It Works?
          </a>
        </div>
        <p className="mt-4 text-gray-500">
          Trusted by <span className="font-bold">8M sellers around the world</span>
        </p>
      </div>
      <div className="md:pl-8 mt-4 md:mt-0">
        <iframe
          src="https://lottie.host/embed/12228930-92f2-4e5a-b630-1c3e3b0a6494/vGzLOjKyVh.json"
          width="100%"
          height="400" // Adjust height as needed
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default Intro;
