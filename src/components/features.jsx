import React from 'react';

const data = [
  {
    img: 'https://img.freepik.com/free-vector/gold-coins-banknotes-3d-cartoon-style-icon-stack-coins-with-dollar-sign-wad-money-cash-savings-flat-vector-illustration-wealth-economy-finance-profit-currency-concept_74855-25998.jpg?t=st=1726991410~exp=1726995010~hmac=691e3ac626f4a155ca5b8640de0a1a4cbb96abd3679c6202aeec6301bce32f23&w=740',
    title: 'Higher Profits',
    details: 'We offer some of the lowest prices in the industry because print providers continuously compete to win your business.',
  },
  {
    img: 'https://img.freepik.com/free-vector/bar-graph_52683-9732.jpg?t=st=1726991519~exp=1726995119~hmac=ec84debfe74e5cbc4b73da024c1f186dd74b74cb545dcb3b6e4c41cd46786a66&w=740',
    title: 'Robust Scaling',
    details: 'Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.',
  },
  {
    img: 'https://img.freepik.com/free-vector/choice-worker-concept_23-2148627427.jpg?t=st=1726991573~exp=1726995173~hmac=e7aeeb1f13bdddc748cbc7fcf25b484d79f76da02bf981a753a5ac2fa28c913d&w=740',
    title: 'Best Selection',
    details: 'With 900+ products and top quality brands, you can choose the best products for your business.',
  },
];

const Cards = () => {
  return (
    <div className="md:flex  items-center justify-center p-2 mt-20 space-y-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg p-4 flex-none w-70 sm:w-72 md:w-80 lg:w-96 mx-4" // Responsive widths
        >
          <img src={item.img} alt={item.title} className="w-full h-32 object-cover rounded-t-lg" />
          <h2 className="font-bold text-xl mt-2">{item.title}</h2>
          <p className="text-gray-600 mt-1">{item.details}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
