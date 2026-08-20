import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import handImg from '../assets/Hand.png';

const SKILLS = [
  'React', 'Node.js', 'TypeScript', 'Next.js', 
  'MongoDB', 'Python', 'AWS', 'Docker', 
  'AI/ML', 'Figma', 'C', 'Tailwind CSS'
];

interface HangingCardProps {
  skill: string;
  startX: string;
  ropeLength: string;
  delay: number;
  duration: number;
  topOffset?: string;
}

const HangingCard: React.FC<HangingCardProps> = ({ skill, startX, ropeLength, delay, duration, topOffset = '0px' }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    // Use GSAP to animate the swinging motion
    // The element will swing around its top transform origin
    gsap.to(cardRef.current, {
      rotation: 5,
      ease: "power1.inOut",
      duration: duration,
      repeat: -1,
      yoyo: true,
      delay: delay
    });

    // Start from opposite side to create full swing effect
    gsap.set(cardRef.current, { rotation: -5, transformOrigin: 'top center' });
  }, [duration, delay]);

  return (
    <div 
      className="absolute flex flex-col items-center z-0"
      style={{ left: startX, top: topOffset, transform: 'translateX(-50%)' }}
      ref={cardRef}
    >
      {/* SVG Rope */}
      <svg width="2" height={ropeLength} className="opacity-40">
        <line x1="1" y1="0" x2="1" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
      </svg>
      
      {/* Premium Metallic Card */}
      <div 
        className="
          relative mt-[-2px] 
          bg-gradient-to-b from-[#2a2a2a] to-[#111111] 
          border border-[#444] border-t-[#666] border-b-[#000]
          px-4 py-2 md:px-5 md:py-3 
          rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.2)]
          flex items-center justify-center
          group transition-all duration-300 hover:scale-110 hover:border-white/40
        "
      >
        <span className="text-gray-200 font-mono text-xs md:text-sm font-bold whitespace-nowrap drop-shadow-md group-hover:text-white">
          {skill}
        </span>
        
        {/* Subtle highlight effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </div>
  );
};

export const HangingSkills: React.FC = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto h-[500px] md:h-[900px] mt-10 mb-20 overflow-visible flex justify-center">
      
      {/* Hanging Cards Layer - Ropes in front of the hand */}
      <div className="absolute top-[120px] md:top-[180px] left-0 w-full bottom-0 z-10 pointer-events-auto">
        {SKILLS.map((skill, i) => {
          // Wider spread for ropes on desktop
          const startX = `${32 + (i * 36) / (SKILLS.length - 1)}%`;
          
          // Vary rope lengths 
          const mdLengths = [
            '180px', '350px', '250px', '400px', 
            '220px', '450px', '320px', '200px', 
            '420px', '290px', '380px', '240px'
          ];
          
          // Push the React rope (index 0) slightly down so it aligns better with the hand
          const topOffset = i === 0 ? '40px' : '0px';

          return (
            <div key={skill} className="hidden md:block">
               <HangingCard 
                  skill={skill} 
                  startX={startX} 
                  ropeLength={mdLengths[i]} 
                  delay={i * 0.15} 
                  duration={2 + (i % 3) * 0.4} 
                  topOffset={topOffset}
                />
            </div>
          );
        })}

        {/* Mobile rendering */}
        {SKILLS.map((skill, i) => {
           // Wider spread for ropes on mobile
           const startX = `${25 + (i * 50) / (SKILLS.length - 1)}%`;
           // Stagger lengths aggressively so adjacent overlapping cards are at very different depths
           const mobileLengths = [
            '60px',  // React
            '240px', // Node.js
            '130px', // TypeScript
            '320px', // Next.js
            '80px',  // MongoDB
            '280px', // Python
            '160px', // AWS
            '380px', // Docker
            '100px', // AI/ML
            '300px', // Figma
            '200px', // C
            '260px', // Tailwind CSS
          ];
          // Push the React rope (index 0) slightly down for mobile too
          const topOffset = i === 0 ? '25px' : '0px';


           return (
            <div key={`mobile-${skill}`} className="block md:hidden">
               <HangingCard 
                  skill={skill} 
                  startX={startX} 
                  ropeLength={mobileLengths[i]} 
                  delay={i * 0.15} 
                  duration={2 + (i % 3) * 0.4} 
                  topOffset={topOffset}
                />
            </div>
          );
        })}
      </div>

      {/* The Hand Layer - positioned behind the ropes */}
      <div className="absolute top-0 z-0 w-full flex justify-center pointer-events-none">
        <img 
          src={handImg} 
          alt="Puppet Master Hand" 
          className="w-full max-w-[340px] md:max-w-[550px] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]"
        />
      </div>

    </div>
  );
};
