import React from 'react';

const Intro = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-0 md:p-10 bg-inherit shadow-lg rounded-lg mt-8 md:mt-8 w-full mx-0 md:mx-auto">
      <div className="flex-1 mb-6 md:mb-0 bg-blue-900 py-8 md:py-16 px-2 md:px-6 rounded-lg text-white">
        <div className="px-2 md:px-6 py-4">
          <h1 className="font-poppins text-4xl md:text-5xl font-bold capitalize mb-4 md:mb-6">
            Make Money, Risk-free
          </h1>
          <p className="text-yellow-400 text-lg md:text-xl font-semibold mb-2 md:mb-4">
            You pay for fulfillment only when you make a sale
          </p>
        </div>

        <div className="px-2 md:px-6 py-4 bg-blue-800 rounded-lg mb-4 md:mb-6">
          <div className="flex justify-between mb-2">
            <span>You sell a t-shirt</span>
            <span className="font-semibold text-lg">$30</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>You pay for its production</span>
            <span className="font-semibold text-lg">$12</span>
          </div>
          <hr className="my-4 border-t border-gray-500" />
          <div className="flex justify-between">
            <span className="font-semibold text-lg">Your profit</span>
            <span className="font-bold text-yellow-400 text-2xl">$18</span>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <button className="mx-auto bg-green-600 px-2 py-1 rounded-md hover:bg-green-500">
            Start Selling
          </button>
        </div>
        <p className="mt-4 md:mt-6 text-gray-300 text-center text-sm md:text-base">
          100% Free to use · 900+ Products · Largest print network
        </p>
      </div>

      <div className="flex-1 md:pl-10 mt-4 md:mt-0">
        <img
          src="https://img.freepik.com/free-vector/happy-couple-earning-money-counting-budget_74855-6498.jpg?t=st=1727005526~exp=1727009126~hmac=c6d623ae185fcb79c04469943d00c0d99b744b31cc664ac5c33106e9d798f8f3&w=996"
          alt="Happy couple earning money"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Intro;
