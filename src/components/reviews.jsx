import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { Navigation, Pagination } from 'swiper/modules'; // Import Swiper modules
import './reviews.css'; // Your custom CSS file

// Full reviews data
const reviews = [
  {
    name: 'Robert A. Voltaire',
    storeLink: 'https://www.ravenouseternalhunger.com/',
    comment: 'Printify has been an incredible service for us musicians unable to keep large amounts of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify!',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Quinten Barney',
    storeLink: 'https://www.etsy.com/',
    comment: 'We chose Printify because of their offerings as well as their incredibly low prices. After several years, we have come to find that their customer service is also top-notch, and their platform just keeps getting better and better.',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    name: 'Nikki',
    storeLink: 'https://mynerdlife.com/',
    comment: 'Printify has been an amazing partner to work with as we grow our business. From the range of merch we can make for our customers to working with our Customer Service team (Hi Martin!), it\'s truly made the whole process a breeze.',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    name: 'Spencer, Brett, and Kyle',
    storeLink: 'https://brotallion.com/',
    comment: 'Using Printify has been a great experience. Customer service is always very quick to respond and handle any issues that our customers may have. The premium account has more than paid for itself and has increased our margins significantly.',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    name: 'April Showers',
    storeLink: 'https://afrounicorns.com/',
    comment: 'I really appreciate working with Printify on my brand. Their service is seamless, and they genuinely care about their merchants.',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
];

const Reviews = () => {
  return (
    <div className="bg-gray-50 py-10 px-4">
      <h2 className="text-3xl md:text-6xl text-pretty text-center font-extrabold font-serif m-8">
        Testimonials
      </h2>

      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-xl md:text-3xl font-bold mb-6">
          Trusted by over 8M sellers around the world
        </h2>
        <p className="text-sm md:text-lg mb-10">
          Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.
        </p>
      </div>

      {/* Swiper Slider */}
      <div className="max-w-4xl mx-auto">
        <Swiper
          spaceBetween={20} // Space between slides
          slidesPerView={2} // Show 1 slide by default
          navigation // Enable navigation buttons
          pagination={{ clickable: true }} // Enable pagination
          modules={[Navigation, Pagination]} // Add the modules here
          loop={true} // Enable loop if needed
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide
              key={index}
              className="bg-black text-white p-6 rounded-lg shadow-lg flex flex-col justify-between min-h-full"
            >
              <div className="flex justify-center items-center mb-4">
                <img src={review.avatar} alt={review.name} className="h-16 w-16 rounded-full" />
              </div>
              <h3 className="text-lg font-semibold text-center">{review.name}</h3>
              <p className="mt-2 flex-1 text-center">{review.comment}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
