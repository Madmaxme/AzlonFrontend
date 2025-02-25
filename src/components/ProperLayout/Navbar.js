import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-green-500">
                Azlon
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className="border-green-500 text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Home
              </Link>
              <Link to="/how-it-works" className="border-transparent text-gray-300 hover:border-green-300 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                How It Works
              </Link>
              <Link to="/features" className="border-transparent text-gray-300 hover:border-green-300 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Features
              </Link>
              <Link to="/pricing" className="border-transparent text-gray-300 hover:border-green-300 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Pricing
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link to="/login" className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">
              Sign in
            </Link>
            <Link to="/register" className="ml-4 px-4 py-2 text-sm font-medium text-black bg-green-500 hover:bg-green-400 rounded-md">
              Get Started
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link to="/" className="bg-gray-900 border-green-500 text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
            Home
          </Link>
          <Link to="/how-it-works" className="border-transparent text-gray-300 hover:bg-gray-800 hover:border-green-300 hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
            How It Works
          </Link>
          <Link to="/features" className="border-transparent text-gray-300 hover:bg-gray-800 hover:border-green-300 hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
            Features
          </Link>
          <Link to="/pricing" className="border-transparent text-gray-300 hover:bg-gray-800 hover:border-green-300 hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
            Pricing
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="flex items-center px-4">
            <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">
              Sign in
            </Link>
            <Link to="/register" className="ml-4 block px-4 py-2 rounded-md text-base font-medium text-black bg-green-500 hover:bg-green-400">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;