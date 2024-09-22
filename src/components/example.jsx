import React from 'react';
import img from '../photos/image1.jpeg';

const Example = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 bg-gray-200 text-white shadow-lg rounded-lg mt-8 w-full mx-auto">
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0">
        <img src={img} alt="Custom products" className="h-auto w-3/4 md:w-full object-contain rounded-lg shadow-lg" />
      </div>

      {/* Text Content Section */}
      <div className="md:w-1/2 flex flex-col justify-between md:pl-8">
        <h1 className="font-sans text-3xl md:text-2xl font-semibold text-green-600 mb-4">
          Easily add your design to a wide range of products
        </h1>
        
        {/* New Paragraph */}
        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
          With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.
        </p>

        {/* CTA Button */}
        <div className="flex space-x-4 mt-6">
          <a href="#" className="bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-400 transition duration-300 font-mono">
            All Products
          </a>
        </div>
      </div>
    </div>
  );
};

export default Example;
