import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Close mobile menu when changing routes
  const handleNavigation = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };
  
  // Determine if a link is active
  const isActive = (path) => location.pathname === path;
  
  // Common navigation links
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/HowItWorks', label: 'How It Works' },
    { path: '/features', label: 'Features' },
    { path: '/pricing', label: 'Pricing' }
  ];

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-green-500">
              Azlon
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={handleNavigation}
                  className={`${
                    isActive(path)
                      ? 'border-green-500 text-white'
                      : 'border-transparent text-gray-300 hover:border-green-300 hover:text-white'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Desktop CTA Buttons */}
          <div className="hidden sm:flex sm:items-center">
            <Link to="/login" className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Sign in
            </Link>
            <Link to="/register" className="ml-4 px-4 py-2 text-sm font-medium text-black bg-green-500 hover:bg-green-400 rounded-md transition-colors">
              Get Started
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } sm:hidden transition-all duration-200 ease-in-out`}
      >
        <div className="pt-2 pb-3 space-y-1">
          {navLinks.map(({ path, label }) => (
            <Link
              key={`mobile-${path}`}
              to={path}
              onClick={handleNavigation}
              className={`${
                isActive(path)
                  ? 'bg-gray-900 border-green-500 text-white'
                  : 'border-transparent text-gray-300 hover:bg-gray-800 hover:border-green-300 hover:text-white'
              } block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors`}
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="flex flex-col space-y-2 px-4">
            <Link
              to="/login"
              onClick={handleNavigation}
              className="w-full text-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
            >
              Sign in
            </Link>
            <Link
              to="/register"
              onClick={handleNavigation}
              className="w-full text-center px-4 py-2 rounded-md text-base font-medium text-black bg-green-500 hover:bg-green-400 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;