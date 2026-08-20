import React, { useEffect, useRef } from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa6';
import gsap from 'gsap';

// =========================================================================
// CONFIGURATION: UPDATE YOUR SOCIAL MEDIA URLs AND EMAIL ADDRESS HERE
// =========================================================================
export const SOCIAL_LINKS = [
  { id: 'Facebook', icon: FaFacebookF, url: 'https://www.facebook.com/share/19U31jUQWa/?mibextid=wwXIfr', color: '#1877F2', length: 140, baseAngle: -38, zIndex: 10 },
  { id: 'Instagram', icon: FaInstagram, url: 'https://www.instagram.com/mztr_kaveen_?igsh=cThoZHpsbzh2YXM3&utm_source=qr', color: '#E4405F', length: 190, baseAngle: -22, zIndex: 20 },
  { id: 'WhatsApp', icon: FaWhatsapp, url: 'https://wa.me/0762553381', color: '#25D366', length: 120, baseAngle: -6, zIndex: 30 },
  { id: 'LinkedIn', icon: FaLinkedinIn, url: 'https://www.linkedin.com/in/shanmugaraja-kaveen/', color: '#0A66C2', length: 230, baseAngle: 10, zIndex: 25 },
  { id: 'GitHub', icon: FaGithub, url: 'https://github.com/kaveenskn', color: '#ffffff', length: 200, baseAngle: 26, zIndex: 15 },
  { id: 'Email', icon: FaEnvelope, url: 'mailto:shanmugarajakaveen4@gmail.com', color: '#D44638', length: 130, baseAngle: 42, zIndex: 5 },
];
// =========================================================================

const KeychainHook = () => (
  <div className="relative flex flex-col items-center z-50 drop-shadow-2xl pointer-events-none">
    <svg width="130" height="130" viewBox="0 0 100 100" className="w-[100px] h-[100px] sm:w-[130px] sm:h-[130px]">
      <defs>
        <linearGradient id="metal-ring" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="25%" stopColor="#888" />
          <stop offset="50%" stopColor="#444" />
          <stop offset="75%" stopColor="#aaa" />
          <stop offset="100%" stopColor="#fff" />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="150%" height="150%">
          <feDropShadow dx="3" dy="10" stdDeviation="5" floodOpacity="0.7" />
        </filter>
      </defs>
      {/* Main Ring */}
      <circle cx="35" cy="40" r="28" 
              fill="none" 
              stroke="url(#metal-ring)" 
              strokeWidth="10" 
              filter="url(#shadow)" />
              
      {/* Main Ring Highlight */}
      <circle cx="35" cy="40" r="28" 
              fill="none" 
              stroke="#ffffff" 
              strokeWidth="1.5" 
              opacity="0.6" />

      {/* Jump Ring (Connecting Loop) */}
      <circle cx="50" cy="75" r="12" 
              fill="none" 
              stroke="url(#metal-ring)" 
              strokeWidth="6" 
              filter="url(#shadow)" />
              
      {/* Jump Ring Highlight */}
      <circle cx="50" cy="75" r="12" 
              fill="none" 
              stroke="#ffffff" 
              strokeWidth="1" 
              opacity="0.6" />
    </svg>
  </div>
);

const Chain = ({ length }: { length: number }) => {
  const linkCount = Math.floor(length / 18);
  return (
    <div className="w-4 sm:w-5 flex flex-col items-center mx-auto pointer-events-none" style={{ height: length, transformStyle: 'preserve-3d' }}>
      {Array.from({ length: linkCount }).map((_, i) => (
        <div key={i} className="w-4 h-6 sm:w-5 sm:h-8 rounded-full border-[3px] sm:border-[4px] -mt-[9px] sm:-mt-[11px] first:mt-0 relative"
          style={{
            borderColor: i % 2 === 0 ? '#d1d5db' : '#9ca3af',
            background: 'transparent',
            boxShadow: '1px 2px 3px rgba(0,0,0,0.6), inset 1px 1px 2px rgba(255,255,255,0.9)',
            transform: i % 2 === 0 ? 'rotateY(0deg)' : 'rotateY(80deg)',
            transformStyle: 'preserve-3d'
          }}
        />
      ))}
    </div>
  );
};

const SocialTag = ({ icon: Icon, color, name, url }: { icon: any, color: string, name: string, url: string }) => {
  const tagRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!tagRef.current) return;
    const rect = tagRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    gsap.to(tagRef.current, {
      rotationX: -y / 4,
      rotationY: x / 4,
      scale: 1.15,
      z: 30,
      duration: 0.4,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    if (!tagRef.current) return;
    gsap.to(tagRef.current, {
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      z: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.3)"
    });
  };

  return (
    <a ref={tagRef} href={url} target="_blank" rel="noopener noreferrer" 
       className="relative block group cursor-pointer mx-auto origin-center mt-[-4px]"
       onMouseMove={handleMouseMove}
       onMouseLeave={handleMouseLeave}
       style={{ transformStyle: 'preserve-3d' }}
       title={name}>
       
      {/* 3D Cube/Keytag Base */}
      <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl sm:rounded-[1.5rem] relative flex items-center justify-center transition-shadow duration-300 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]"
           style={{
             background: 'linear-gradient(135deg, #2e2e2e 0%, #0a0a0a 100%)',
             boxShadow: `
               inset 1px 1px 2px rgba(255,255,255,0.4),
               inset -2px -2px 5px rgba(0,0,0,0.9),
               0 15px 25px rgba(0,0,0,0.8),
               0 5px 10px rgba(0,0,0,0.6)
             `,
             transformStyle: 'preserve-3d',
           }}>
           
           {/* Depth Edge (simulating 3D thickness) */}
           <div className="absolute inset-0 rounded-2xl sm:rounded-[1.5rem] -z-10"
                style={{
                  background: 'linear-gradient(135deg, #111, #000)',
                  transform: 'translateZ(-10px)',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.9)'
                }}
           />

           {/* Glossy Reflection overlay */}
           <div className="absolute inset-0 rounded-2xl sm:rounded-[1.5rem] opacity-50 overflow-hidden" style={{ pointerEvents: 'none' }}>
             <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-white/40 via-transparent to-transparent transform rotate-45 translate-y-[-20%] group-hover:translate-y-[15%] transition-transform duration-700 ease-out" />
           </div>

           {/* Hardware attachment hole at top */}
           <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-black shadow-inner"
                style={{ boxShadow: 'inset 0 4px 6px rgba(0,0,0,0.9), 0 1px 1px rgba(255,255,255,0.2)' }} />

           {/* Icon */}
           <div className="relative z-10 mt-1 transition-all duration-300 transform group-hover:scale-110"
                style={{ transform: 'translateZ(20px)' }}>
             <Icon size={38} className="text-gray-300 group-hover:text-white transition-colors duration-300" />
             
             {/* Glow effect on hover */}
             <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ filter: `blur(12px)` }}>
                <Icon size={38} color={color} />
             </div>
           </div>
      </div>
    </a>
  );
};

export default function SocialKeychain() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inertiaRefs = useRef<(HTMLDivElement | null)[]>([]);
  const idleRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // 1. Idle Swinging Animation
    SOCIAL_LINKS.forEach((_, i) => {
      const idleEl = idleRefs.current[i];
      if (idleEl) {
        const duration = 2 + Math.random() * 1.5;
        const delay = Math.random() * -2;
        const angleX = 3 + Math.random() * 4;
        const angleZ = 2 + Math.random() * 3;

        gsap.to(idleEl, {
          rotationX: angleX,
          rotationZ: angleZ,
          duration: duration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: delay
        });
      }
    });

    // 2. Mouse Inertia Physics
    const handleGlobalMouseMove = (e: MouseEvent) => {
      const { movementX, movementY } = e;
      
      if (Math.abs(movementX) > 1 || Math.abs(movementY) > 1) {
        inertiaRefs.current.forEach((el, i) => {
          if (!el) return;
          
          const multiplier = SOCIAL_LINKS[i].length / 100;
          const forceX = movementX * 0.04 * multiplier;
          const forceY = movementY * 0.04 * multiplier;
          
          const currentRotationZ = gsap.getProperty(el, "rotationZ") as number || 0;
          const currentRotationX = gsap.getProperty(el, "rotationX") as number || 0;
          
          let newZ = currentRotationZ + forceX;
          let newX = currentRotationX - forceY;
          
          newZ = Math.max(-35, Math.min(35, newZ));
          newX = Math.max(-35, Math.min(35, newX));

          gsap.killTweensOf(el);
          gsap.to(el, {
            rotationZ: newZ,
            rotationX: newX,
            duration: 0.8,
            ease: "power2.out",
            onComplete: () => {
              gsap.to(el, {
                rotationZ: 0,
                rotationX: 0,
                duration: 2,
                ease: "elastic.out(1, 0.2)"
              });
            }
          });
        });
      }
    };

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      window.addEventListener('mousemove', handleGlobalMouseMove);
    } else {
       idleRefs.current.forEach(el => {
         if (el) gsap.killTweensOf(el);
       });
    }

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      idleRefs.current.forEach(el => { if(el) gsap.killTweensOf(el) });
      inertiaRefs.current.forEach(el => { if(el) gsap.killTweensOf(el) });
    };
  }, []);

  return (
    <div className="relative w-full min-h-[500px] flex justify-center overflow-visible" 
         style={{ perspective: '1200px' }} 
         ref={containerRef}>
      
      <KeychainHook />

      {/* The collection of swinging tags */}
      <div className="absolute top-[85px] sm:top-[115px] left-1/2 -translate-x-1/2 w-[80px] sm:w-[100px] h-0 z-30 pointer-events-none" 
           style={{ transformStyle: 'preserve-3d' }}>
        {SOCIAL_LINKS.map((link, i) => (
          <div key={link.id} 
               className="absolute top-0 left-0 w-full origin-top pointer-events-auto"
               style={{ 
                 transform: `rotateZ(${link.baseAngle}deg)`,
                 zIndex: link.zIndex,
                 transformStyle: 'preserve-3d'
               }}>
            {/* Inertia wrapper */}
            <div ref={el => { inertiaRefs.current[i] = el; }} className="origin-top w-full" style={{ transformStyle: 'preserve-3d' }}>
              {/* Idle swing wrapper */}
              <div ref={el => { idleRefs.current[i] = el; }} className="origin-top flex flex-col items-center w-full" style={{ transformStyle: 'preserve-3d' }}>
                <Chain length={link.length} />
                <SocialTag icon={link.icon} color={link.color} name={link.id} url={link.url} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
