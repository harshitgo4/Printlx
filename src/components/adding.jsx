import React from 'react';

const data = [
  {
    title: 'Create custom products',
    description: 'Easily add your designs to a wide range of products using our free tools.',
    buttonText: 'Start Creating',
    imageAlt: 'Create custom products image',
    imageUrl: 'https://img.freepik.com/free-vector/paper-production-wood-processing-online-service-platform-cutting-wood-making-paper-cardboard-website-isolated-flat-vector-illustration_613284-2437.jpg?t=st=1727033810~exp=1727037410~hmac=8f918f3881f6defef0cb04716c4d223e1ea08c9880134e8e11ae9211fdde517c&w=740',
  },
  {
    title: 'Sell on your terms',
    description: 'You choose the products, sale price, and where to sell.',
    buttonText: 'Learn More',
    imageAlt: 'Sell custom products image',
    imageUrl: 'https://img.freepik.com/free-vector/iso-certification-concept_23-2148696278.jpg?t=st=1727034197~exp=1727037797~hmac=8c536db70739a75e8b326c8a82c51852234cbcea8fc6c900b670eab06bd0c216&w=740',
  },
  {
    title: 'We handle fulfillment',
    description: 'Once an order is placed, we automatically handle all the printing and delivery logistics.',
    buttonText: 'How it Works',
    imageAlt: 'Fulfillment image',
    imageUrl: 'https://img.freepik.com/free-vector/hand-drawn-delivery-concept-with-boxes_23-2149149427.jpg?t=st=1727034124~exp=1727037724~hmac=78861eedc048a6d81a0f801d818f794b17bca917781f8bf44fcd44124dbe43f4&w=740',
  }
];

const Adding = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 md:p-12 bg-white w-full mx-auto">
      {data.map((item, index) => (
        <div 
          key={index} 
          className="flex flex-col items-center bg-gray-100 p-6 rounded-lg transform transition-all duration-300 hover:scale-105"
        >
          <div className="w-full mb-4 overflow-hidden rounded-lg">
            <img src={item.imageUrl} alt={item.imageAlt} className="w-full h-48 object-cover rounded-lg transition duration-500 transform hover:scale-110" />
          </div>
          <h1 className="text-2xl font-bold mb-2 tracking-wide text-black">
            {item.title}
          </h1>
          <p className="text-center mb-6 text-gray-600 tracking-wide">
            {item.description}
          </p>
          <a
            href="#"
            className="bg-green-500 text-white font-semibold px-6 py-3 rounded-full transform transition duration-300 hover:bg-green-600"
          >
            {item.buttonText}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Adding;
