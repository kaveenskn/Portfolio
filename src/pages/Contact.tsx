import bgImage from '../assets/Bg.png';
import SocialKeychain from '../components/SocialKeychain';
import { FaEnvelope } from 'react-icons/fa';
import { ScrollFlyIn } from '../components/ScrollFlyIn';

export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Top fade */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

      {/* Main two-column layout */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 flex flex-col md:items-center lg:flex-row items-center gap-16 lg:gap-24">

        {/* ── LEFT: Contact Info ── */}
        <div className="w-full md:max-w-xl lg:max-w-none lg:w-5/12 flex flex-col items-center md:items-center text-center lg:items-start lg:text-left justify-center px-0">

          {/* ── Exact Design Match ── */}
          <ScrollFlyIn direction="left" distance={70} className="flex flex-col items-center md:items-start mb-10 w-full">
            <span className="text-gray-300 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-4">
              Get In Touch
            </span>
            <div className="w-8 h-[2px] bg-white/80 mb-8 rounded-full"></div>

            <h2 className="text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white mb-8 tracking-tight">
              Contact.
            </h2>
            <div className="w-20 h-[2px] bg-gradient-to-r from-white/80 to-transparent rounded-full"></div>
          </ScrollFlyIn>

          <ScrollFlyIn direction="left" distance={58} delay={0.08} className="max-w-md w-full flex flex-col items-center md:items-center lg:items-start">
            <p className="text-[#a0a0a0] text-base md:text-lg leading-relaxed mb-12">
              If you have a project in mind, an idea to explore,<br className="hidden md:block" />
              or just want to connect — I'd love to hear from you.<br className="hidden md:block" />
              Let's create something impactful together.
            </p>

            {/* Signature Area */}
            <ScrollFlyIn direction="up" distance={46} delay={0.15} className="mb-14 relative inline-block">
              {/* Stylized text using Alex Brush to match the exact signature font */}
              <span 
                className="text-white text-5xl md:text-[4rem] opacity-90 tracking-wide" 
                style={{ fontFamily: "'Alex Brush', cursive", transform: "rotate(-4deg)", display: "inline-block" }}
              >
                Let's talk!
              </span>
              <svg className="absolute -bottom-3 left-0 w-[110%] h-auto text-white opacity-60" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 30 Q 60 10 195 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M30 38 Q 90 20 180 28" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
              </svg>
            </ScrollFlyIn>

            {/* Direct Email / CTA */}
            <ScrollFlyIn direction="up" distance={40} delay={0.2} className="relative inline-block mt-4">
              <a
                href="mailto:shanmugarajakaveen4@gmail.com"
                className="relative z-10 group inline-flex items-center gap-6 px-8 py-4 rounded-full bg-transparent border border-white/30 text-white font-medium text-sm tracking-wide hover:bg-white hover:text-black transition-all duration-300"
              >
                Send Me a Message
                <svg 
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              {/* Glowing floor shadow */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[150%] max-w-[300px] h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent blur-[4px] pointer-events-none"></div>
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[100%] max-w-[200px] h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent blur-[2px] pointer-events-none"></div>
            </ScrollFlyIn>
          </ScrollFlyIn>
        </div>
        
        {/* ── RIGHT: Social Keychain ── */}
        <ScrollFlyIn direction="right" distance={78} className="w-full md:max-w-xl lg:max-w-none lg:w-7/12 flex items-center justify-center" >
          <div style={{ minHeight: '650px' }}>
            <SocialKeychain />
          </div>
        </ScrollFlyIn>

      </div>
    </section>
  );
};
