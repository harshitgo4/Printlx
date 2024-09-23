import React, { useState } from 'react';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-green-800 text-white fixed top-0 left-0 w-full z-10 border-b border-gray-300 shadow-lg">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <button
            className="block md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
          <div className="flex items-center ml-3">
            {/* Updated logo position and source */}
            <img src="/logo3.png" className="h-8 w-10 mr-2" alt="Logo" />
            <a href="/" className="text-2xl font-bold">Escanor</a>
          </div>
        </div>

        <div className="hidden md:flex space-x-6">
          <div
            className="relative inline-block"
            onMouseEnter={() => toggleMenu('aboutUs')}
            onMouseLeave={() => toggleMenu(null)}
          >
            <button className="hover:text-gray-300 font-bold">
              About Us <FaChevronDown className="inline w-4 h-4 ml-1" />
            </button>
            {openMenu === 'aboutUs' && (
              <ul className="absolute bg-white text-gray-800 py-2 mt-1 rounded shadow-lg">
                <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Our Mission</a></li>
                <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Our Team</a></li>
              </ul>
            )}
          </div>

          <div
            className="relative inline-block"
            onMouseEnter={() => toggleMenu('services')}
            onMouseLeave={() => toggleMenu(null)}
          >
            <button className="hover:text-gray-300 font-bold">
              Our Services <FaChevronDown className="inline w-4 h-4 ml-1" />
            </button>
            {openMenu === 'services' && (
              <ul className="absolute bg-white text-gray-800 py-2 mt-1 rounded shadow-lg">
                <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Consulting</a></li>
                <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Development</a></li>
                <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Support</a></li>
              </ul>
            )}
          </div>

          <div
            className="relative inline-block"
            onMouseEnter={() => toggleMenu('products')}
            onMouseLeave={() => toggleMenu(null)}
          >
            <button className="hover:text-gray-300 font-bold">
              Products <FaChevronDown className="inline w-4 h-4 ml-1" />
            </button>
            {openMenu === 'products' && (
              <ul className="absolute bg-white text-gray-800 py-2 mt-1 rounded shadow-lg">
                <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Software</a></li>
                <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Hardware</a></li>
              </ul>
            )}
          </div>

          <a href="/pricing" className="hover:text-gray-300 font-bold">Pricing</a>
          <a href="/blog" className="hover:text-gray-300 font-bold">Blog</a>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="/app/auth/login"
            className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded shadow-lg transition duration-300"
          >
            Log in
          </a>
          <a
            href="/app/auth/register"
            className="border border-green-600 hover:bg-green-500 text-green-600 hover:text-white px-4 py-2 rounded shadow-lg transition duration-300"
          >
            Sign up
          </a>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white text-gray-800 fixed top-0 left-0 h-full w-full z-20 py-4 border-b border-gray-300">
          <div className="flex justify-between items-center px-4">
            <div className="text-center font-bold text-lg mb-4">Menu</div>
            <button className="text-gray-800 focus:outline-none" onClick={toggleMobileMenu}>
              <FaTimes className="w-6 h-6" />
            </button>
          </div>
          <div className="text-center mb-4">
            <a href="/" className="text-2xl font-bold">Logo</a>
          </div>
          <ul className="space-y-4 text-center font-bold">
            <li>
              <div
                className="relative inline-block"
                onMouseEnter={() => toggleMenu('mobileAboutUs')}
                onMouseLeave={() => toggleMenu(null)}
              >
                <button className="block px-4 py-2 hover:bg-gray-200">
                  About Us <FaChevronDown className="inline w-4 h-4 ml-1" />
                </button>
                {openMenu === 'mobileAboutUs' && (
                  <ul className="bg-white text-gray-800 py-2 rounded shadow-lg mt-1">
                    <li className="hover:bg-gray-200">
                      <a href="#" className="block px-4 py-2">Our Mission</a>
                    </li>
                    <li className="hover:bg-gray-200">
                      <a href="#" className="block px-4 py-2">Our Team</a>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li>
              <div
                className="relative inline-block"
                onMouseEnter={() => toggleMenu('mobileServices')}
                onMouseLeave={() => toggleMenu(null)}
              >
                <button className="block px-4 py-2 hover:bg-gray-200">
                  Our Services <FaChevronDown className="inline w-4 h-4 ml-1" />
                </button>
                {openMenu === 'mobileServices' && (
                  <ul className="bg-white text-gray-800 py-2 rounded shadow-lg mt-1">
                    <li className="hover:bg-gray-200">
                      <a href="#" className="block px-4 py-2">Consulting</a>
                    </li>
                    <li className="hover:bg-gray-200">
                      <a href="#" className="block px-4 py-2">Development</a>
                    </li>
                    <li className="hover:bg-gray-200">
                      <a href="#" className="block px-4 py-2">Support</a>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li>
              <div
                className="relative inline-block"
                onMouseEnter={() => toggleMenu('mobileProducts')}
                onMouseLeave={() => toggleMenu(null)}
              >
                <button className="block px-4 py-2 hover:bg-gray-200">
                  Products <FaChevronDown className="inline w-4 h-4 ml-1" />
                </button>
                {openMenu === 'mobileProducts' && (
                  <ul className="bg-white text-gray-800 py-2 rounded shadow-lg mt-1">
                    <li className="hover:bg-gray-200">
                      <a href="#" className="block px-4 py-2">Software</a>
                    </li>
                    <li className="hover:bg-gray-200">
                      <a href="#" className="block px-4 py-2">Hardware</a>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li><button className="block px-4 py-2 hover:bg-gray-200">Pricing</button></li>
            <li><button className="block px-4 py-2 hover:bg-gray-200">Blog</button></li>
          </ul>

          {/* Auth Buttons in Mobile Menu */}
          <div className="mt-8 text-center">
            <a
              href="/app/auth/login"
              className="mx-4 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded"
            >
              Log in
            </a>
            <a
              href="/app/auth/register"
              className="mt-4 block mx-4 border border-green-600 hover:bg-green-500 text-green-600 hover:text-white px-4 py-2 rounded"
            >
              Sign up
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
