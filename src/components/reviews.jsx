import React, { useState } from 'react';

const reviews = [
  {
    name: 'Robert A. Voltaire',
    storeLink: 'https://www.ravenouseternalhunger.com/',
    comment: 'Printify has been an incredible service for us musicians unable to keep large amounts of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify!',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    rating: 5,
  },
  {
    name: 'Quinten Barney',
    storeLink: 'https://www.etsy.com/',
    comment: 'We chose Printify because of their offerings as well as their incredibly low prices. After several years, we have come to find that their customer service is also top-notch, and their platform just keeps getting better and better.',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    rating: 5,
  },
  {
    name: 'Nikki',
    storeLink: 'https://mynerdlife.com/',
    comment: 'Printify has been an amazing partner to work with as we grow our business. From the range of merch we can make for our customers to working with our Customer Service team (Hi Martin!), it\'s truly made the whole process a breeze.',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    rating: 5,
  },
  {
    name: 'Spencer, Brett, and Kyle',
    storeLink: 'https://brotallion.com/',
    comment: 'Using Printify has been a great experience. Customer service is always very quick to respond and handle any issues that our customers may have. The premium account has more than paid for itself and has increased our margins significantly.',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    rating: 5,
  },
  {
    name: 'April Showers',
    storeLink: 'https://afrounicorns.com/',
    comment: 'I really appreciate working with Printify on my brand. Their service is seamless, and they genuinely care about their merchants.',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    rating: 5,
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="bg-gray-50 py-10 px-4">
        <h2 className='text-3xl md:text-6xl text-pretty text-center font-extrabold font-serif m-8'>
            Testimonials
        </h2>
        <div className='flex justify-start items-center gap-10 mt-10'>

      <h2 className=" text-xl md:text-3xl font-bold text-center mb-6 max-w-80">
        Trusted by over 8M sellers around the world
      </h2>
      <p className="text-center text-sm md:text-lg mb-10 max-w-80">
        Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.
      </p>
        </div>
      <div className="flex justify-between items-center mb-4">
        <button onClick={prevReview} className="bg-gray-200 text-gray-700 rounded-full w-12 h-12 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button onClick={nextReview} className="bg-gray-200 text-gray-700 rounded-full w-12 h-12 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="flex space-x-4 overflow-hidden transition-transform duration-300 ease-in-out">
        {reviews.slice(currentIndex, currentIndex + (window.innerWidth < 640 ? 1 : 3)).map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between w-full max-w-sm transition-transform duration-300 ease-in-out"
          >
            <div className="flex items-center mb-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="text-xl font-semibold">{review.name}</h4>
                <a
                  href={review.storeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-sm"
                >
                  Store link
                </a>
              </div>
            </div>
            <p className="text-gray-600">{review.comment}</p>
            <div className="flex mt-2">
              {Array.from({ length: review.rating }).map((_, starIndex) => (
                <span key={starIndex} className="text-yellow-500">★</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
