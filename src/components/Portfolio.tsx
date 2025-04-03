
import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: 'development' | 'forex' | 'crypto';
  image: string;
  description: string;
  link: string;
}

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'development' | 'forex' | 'crypto'>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "development",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      description: "Full-stack e-commerce platform with user authentication, product management, and payment processing.",
      link: "#"
    },
    {
      id: 2,
      title: "Financial Dashboard",
      category: "development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      description: "Interactive dashboard for financial data visualization and analysis.",
      link: "#"
    },
    {
      id: 3,
      title: "Forex Strategy Backtesting",
      category: "forex",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
      description: "Custom forex strategy backtesting tool with comprehensive performance metrics.",
      link: "#"
    },
    {
      id: 4,
      title: "Crypto Portfolio Tracker",
      category: "crypto",
      image: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?auto=format&fit=crop&w=800&q=80",
      description: "Real-time cryptocurrency portfolio tracking and analytics application.",
      link: "#"
    },
    {
      id: 5,
      title: "Mobile Trading App",
      category: "development",
      image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=800&q=80",
      description: "Cross-platform mobile app for trading stocks, forex, and cryptocurrencies.",
      link: "#"
    },
    {
      id: 6,
      title: "DeFi Yield Optimizer",
      category: "crypto",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=800&q=80",
      description: "DeFi protocol that automatically optimizes yield farming strategies.",
      link: "#"
    },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">My Portfolio</h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Explore my latest projects and work across development and trading
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 text-sm font-medium border ${
                activeCategory === 'all' 
                  ? 'bg-royal-blue text-white border-royal-blue' 
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              } rounded-l-lg`}
            >
              All
            </button>
            <button
              onClick={() => setActiveCategory('development')}
              className={`px-4 py-2 text-sm font-medium border-t border-b border-r ${
                activeCategory === 'development' 
                  ? 'bg-royal-blue text-white border-royal-blue' 
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
            >
              Development
            </button>
            <button
              onClick={() => setActiveCategory('forex')}
              className={`px-4 py-2 text-sm font-medium border-t border-b border-r ${
                activeCategory === 'forex' 
                  ? 'bg-gradient-forex text-white border-forex-red' 
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
            >
              Forex
            </button>
            <button
              onClick={() => setActiveCategory('crypto')}
              className={`px-4 py-2 text-sm font-medium border-t border-b border-r ${
                activeCategory === 'crypto' 
                  ? 'bg-crypto-black text-crypto-yellow border-crypto-black' 
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              } rounded-r-lg`}
            >
              Crypto
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="card group overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <ExternalLink className="w-5 h-5 text-royal-blue" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  project.category === 'development' 
                    ? 'bg-royal-blue/10 text-royal-blue' 
                    : project.category === 'forex'
                      ? 'bg-gradient-to-r from-forex-red/10 to-forex-yellow/10 text-forex-red' 
                      : 'bg-crypto-black/10 text-crypto-black'
                }`}>
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                </span>
                <h3 className="text-xl font-bold mt-3 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
