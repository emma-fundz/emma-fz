
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className={`text-2xl font-bold font-poppins ${isScrolled ? 'text-royal-blue' : 'text-white'}`}>
            emma_fz
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:text-royal-blue' : 'text-white hover:text-gray-200'}`}>Home</a>
            <a href="#about" className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:text-royal-blue' : 'text-white hover:text-gray-200'}`}>About</a>
            <a href="#skills" className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:text-royal-blue' : 'text-white hover:text-gray-200'}`}>Skills</a>
            <a href="#portfolio" className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:text-royal-blue' : 'text-white hover:text-gray-200'}`}>Portfolio</a>
            <a href="#contact" className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:text-royal-blue' : 'text-white hover:text-gray-200'}`}>Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 
              <X className={`h-6 w-6 ${isScrolled ? 'text-royal-blue' : 'text-white'}`} /> : 
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-royal-blue' : 'text-white'}`} />
            }
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md">
            <div className="flex flex-col p-4 space-y-3">
              <a href="#home" className="font-medium text-gray-700 hover:text-royal-blue" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#about" className="font-medium text-gray-700 hover:text-royal-blue" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#skills" className="font-medium text-gray-700 hover:text-royal-blue" onClick={() => setIsMenuOpen(false)}>Skills</a>
              <a href="#portfolio" className="font-medium text-gray-700 hover:text-royal-blue" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
              <a href="#contact" className="font-medium text-gray-700 hover:text-royal-blue" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
