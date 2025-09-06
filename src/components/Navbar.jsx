import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/', icon: '🏠' },
  { name: 'Journal', path: '/journal', icon: '📝' },
  { name: 'Insights', path: '/insights', icon: '📊' },
  { name: 'About', path: '/about', icon: '💭' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-2xl sticky top-0 z-50 border-b border-purple-200/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-18">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link 
              to="/" 
              className="group flex items-center gap-2 text-2xl font-bold text-slate-800 hover:text-purple-600 transition-all duration-300 hover:scale-105"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-sm font-bold group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                H
              </div>
              <span className="font-space-grotesk">Homi</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`group relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.path 
                    ? 'bg-purple-100 text-purple-600 shadow-lg backdrop-blur-sm' 
                    : 'text-slate-600 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-base group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </span>
                  <span>{link.name}</span>
                </span>
                {location.pathname === link.path && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-400 rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:ml-6 md:flex md:items-center space-x-3">
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-300"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="px-6 py-2 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-3 rounded-xl text-slate-600 hover:text-purple-600 hover:bg-purple-50 focus:outline-none transition-all duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-6">
                <span className={`absolute top-1 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`absolute top-2.5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`absolute top-4 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`group flex items-center gap-3 px-4 py-3 text-base font-medium transition-all duration-300 ${
                location.pathname === link.path 
                  ? 'bg-orange-100 text-orange-600 border-l-4 border-orange-400' 
                  : 'text-slate-600 hover:bg-orange-50 hover:border-l-4 hover:border-orange-200'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                {link.icon}
              </span>
              <span>{link.name}</span>
            </Link>
          ))}
          <div className="pt-4 pb-3 border-t border-orange-200/30">
            <div className="space-y-2 px-4">
              <Link
                to="/login"
                className="block px-4 py-3 rounded-xl text-base font-medium text-slate-600 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className="block w-full text-center px-4 py-3 rounded-xl text-base font-medium text-white bg-gradient-to-r from-orange-400 to-rose-400 hover:from-orange-500 hover:to-rose-500 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
