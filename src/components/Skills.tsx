
import React, { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  percentage: number;
  category: 'dev' | 'forex' | 'crypto';
}

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const devSkills: Skill[] = [
    { name: 'HTML & CSS', percentage: 95, category: 'dev' },
    { name: 'JavaScript', percentage: 90, category: 'dev' },
    { name: 'Bootstrap', percentage: 85, category: 'dev' },
    { name: 'React', percentage: 88, category: 'dev' },
    { name: 'Node.js', percentage: 80, category: 'dev' },
    { name: 'API Development', percentage: 85, category: 'dev' },
  ];

  const forexSkills: Skill[] = [
    { name: 'SMC Strategy', percentage: 90, category: 'forex' },
    { name: 'ICT Strategy', percentage: 88, category: 'forex' },
    { name: 'TradingView', percentage: 92, category: 'forex' },
    { name: 'MT5', percentage: 85, category: 'forex' },
    { name: 'Risk Management', percentage: 95, category: 'forex' },
  ];

  const cryptoSkills: Skill[] = [
    { name: 'Market Analysis', percentage: 90, category: 'crypto' },
    { name: 'DeFi', percentage: 85, category: 'crypto' },
    { name: 'Technical Analysis', percentage: 88, category: 'crypto' },
    { name: 'Fundamental Analysis', percentage: 82, category: 'crypto' },
    { name: 'Blockchain Technology', percentage: 80, category: 'crypto' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const SkillBar = ({ skill }: { skill: Skill }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill.name}</span>
        <span className="text-sm font-medium">{skill.percentage}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className={`skill-progress ${
            skill.category === 'dev' 
              ? 'dev-progress' 
              : skill.category === 'forex'
                ? 'forex-progress'
                : 'crypto-progress'
          }`}
          style={{ 
            width: isVisible ? `${skill.percentage}%` : '0%'
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="section bg-white" ref={skillsRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">My Skills</h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Here are my technical skills and expertise across different domains
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Development Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-royal-blue">Full-Stack Development</h3>
            {devSkills.map((skill, index) => (
              <SkillBar key={`dev-${index}`} skill={skill} />
            ))}
          </div>

          {/* Forex Trading Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-forex text-transparent bg-clip-text">Forex Trading</h3>
            {forexSkills.map((skill, index) => (
              <SkillBar key={`forex-${index}`} skill={skill} />
            ))}
          </div>

          {/* Crypto Trading Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-crypto-black">Crypto Trading</h3>
            {cryptoSkills.map((skill, index) => (
              <SkillBar key={`crypto-${index}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
