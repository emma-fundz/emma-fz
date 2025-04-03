
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-royal-blue overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-royal-blue to-royal-blue-light opacity-90">
        {/* Animated background particles */}
        <div className="absolute w-full h-full">
          <div className="absolute top-1/4 left-1/5 w-24 h-24 rounded-full bg-white opacity-5 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-white opacity-5 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-16 h-16 rounded-full bg-white opacity-5 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            Hi, I'm <span className="text-forex-yellow">Emmanuel</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
            A Full-Stack Developer, Forex Trader, and Crypto Trader!
          </p>
          <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <a href="#portfolio" className="button-primary mr-4">View My Work</a>
            <a href="#contact" className="bg-transparent text-white border-2 border-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:bg-white hover:text-royal-blue">Contact Me</a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
