
import React from 'react';
import { Code, BarChart, Bitcoin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">About Me</h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            I specialize in full-stack development, forex trading, and cryptocurrency trading. 
            With a passion for creating elegant solutions and strategic financial analysis, 
            I bring a unique blend of technical and financial expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Full-Stack Development */}
          <div className="card p-6 group hover:-translate-y-2">
            <div className="bg-royal-blue/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-royal-blue/20 transition-all duration-300">
              <Code className="text-royal-blue w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-royal-blue">Full-Stack Development</h3>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <span className="text-royal-blue mr-2">•</span>
                <span>Building responsive and dynamic websites</span>
              </li>
              <li className="flex items-start">
                <span className="text-royal-blue mr-2">•</span>
                <span>Developing full-stack applications with modern technologies</span>
              </li>
              <li className="flex items-start">
                <span className="text-royal-blue mr-2">•</span>
                <span>Writing clean, efficient, and maintainable code</span>
              </li>
              <li className="flex items-start">
                <span className="text-royal-blue mr-2">•</span>
                <span>Optimizing website performance and ensuring security</span>
              </li>
              <li className="flex items-start">
                <span className="text-royal-blue mr-2">•</span>
                <span>Implementing APIs and database management</span>
              </li>
            </ul>
          </div>

          {/* Forex Trading */}
          <div className="card p-6 group hover:-translate-y-2">
            <div className="bg-gradient-to-r from-forex-red/10 to-forex-yellow/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:from-forex-red/20 group-hover:to-forex-yellow/20 transition-all duration-300">
              <BarChart className="text-forex-red w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 bg-gradient-forex text-transparent bg-clip-text">Forex Trading</h3>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <span className="text-forex-red mr-2">•</span>
                <span>Expert in SMC and ICT trading strategies</span>
              </li>
              <li className="flex items-start">
                <span className="text-forex-red mr-2">•</span>
                <span>Proficient with TradingView and MT5 platforms</span>
              </li>
              <li className="flex items-start">
                <span className="text-forex-red mr-2">•</span>
                <span>Advanced technical analysis and chart reading</span>
              </li>
              <li className="flex items-start">
                <span className="text-forex-red mr-2">•</span>
                <span>Effective risk management and position sizing</span>
              </li>
              <li className="flex items-start">
                <span className="text-forex-red mr-2">•</span>
                <span>Market psychology and behavioral patterns analysis</span>
              </li>
            </ul>
          </div>

          {/* Crypto Trading */}
          <div className="card p-6 group hover:-translate-y-2">
            <div className="bg-crypto-black w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300">
              <Bitcoin className="text-crypto-yellow w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-crypto-black">Crypto Trading</h3>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <span className="text-crypto-yellow mr-2">•</span>
                <span>Comprehensive market analysis and trend identification</span>
              </li>
              <li className="flex items-start">
                <span className="text-crypto-yellow mr-2">•</span>
                <span>DeFi protocols and yield farming strategies</span>
              </li>
              <li className="flex items-start">
                <span className="text-crypto-yellow mr-2">•</span>
                <span>Technical and fundamental analysis of cryptocurrencies</span>
              </li>
              <li className="flex items-start">
                <span className="text-crypto-yellow mr-2">•</span>
                <span>Portfolio diversification and risk management</span>
              </li>
              <li className="flex items-start">
                <span className="text-crypto-yellow mr-2">•</span>
                <span>Blockchain technology understanding and implementation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
