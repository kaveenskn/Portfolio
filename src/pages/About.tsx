import aboutBg from '../assets/Bg.png';
import { User, Target, GraduationCap, Library } from 'lucide-react';
import { ScrollFlyIn } from '../components/ScrollFlyIn';

export const About = () => {
  const details = [
    { icon: <User className="w-5 h-5" />, label: 'ROLE', value: 'Full-Stack Developer' },
    { icon: <Target className="w-5 h-5" />, label: 'FOCUS', value: 'Web • Mobile • AI' },
    { icon: <GraduationCap className="w-5 h-5" />, label: 'DEGREE', value: 'BSc Hons in Software Engineering' },
    { icon: <Library className="w-5 h-5" />, label: 'UNIVERSITY', value: 'Sabaragamuwa University of Sri Lanka' },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center py-24"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      {/* Top blend */}
      <div className="absolute top-0 left-0 w-full h-16 md:h-24 bg-gradient-to-b from-black/70 to-transparent pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative">

          {/* Vertical divider with dot */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.6)]" />
          </div>

          {/* ── Left Card ── */}
          <ScrollFlyIn direction="left" distance={72}>
            <div className="relative bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden">

            {/* Dot-grid decoration (top-right) */}
            <div
              className="absolute top-6 right-6 opacity-20 pointer-events-none"
              style={{
                width: 96,
                height: 80,
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '12px 12px',
              }}
            />

            {/* "ABOUT ME" label */}
            <div className="flex items-center gap-2 mb-5">
              <span className="text-white/60 text-xs font-bold tracking-[0.25em] uppercase select-none">
                + ABOUT ME
              </span>
            </div>

           

            {/* Heading */}
            <h3 className="text-5xl md:text-6xl font-extrabold text-white mb-2 leading-none">About</h3>
            {/* Thin underline accent */}
            <div className="w-10 h-[2px] bg-white/40 mb-6 rounded-full" />

            <p className="text-gray-300 leading-relaxed mb-5 text-[15px]">
              Hello I am Shanmugaraja Kaveen .I am a passionate creative professional dedicated to crafting engaging and innovative
              digital experiences. With a strong foundation in modern web technologies and a keen
              eye for aesthetics, I transform ideas into beautiful, functional reality.
            </p>
            <p className="text-gray-400 leading-relaxed text-[15px]">
              My work is driven by a commitment to excellence and a continuous desire to push boundaries.
            </p>

            {/* Slash decoration bottom-left */}
            <div className="mt-8 flex items-center gap-1 opacity-20 select-none">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-white text-xl font-light">/</span>
              ))}
            </div>
            </div>
          </ScrollFlyIn>

          {/* ── Right Column — individual detail cards ── */}
          <div className="flex flex-col gap-4 lg:pl-8">
            {details.map((detail, index) => (
              <ScrollFlyIn
                key={detail.label}
                direction="right"
                distance={60}
                delay={index * 0.06}
              >
                <div
                  className="group flex items-center gap-5 bg-black/50 backdrop-blur-xl border border-white/10 rounded-xl px-5 py-4 shadow-[0_2px_20px_rgba(0,0,0,0.4)] hover:border-white/25 hover:bg-white/5 transition-all duration-300"
                >
                  {/* Icon tile */}
                  <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                    {detail.icon}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-0.5">
                      {detail.label}
                    </p>
                    <p className="text-white font-semibold text-base leading-snug truncate">
                      {detail.value}
                    </p>
                  </div>

                  {/* Right dot */}
                  <div className="w-2 h-2 rounded-full bg-white/30 group-hover:bg-white shrink-0 transition-colors duration-300" />
                </div>
              </ScrollFlyIn>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 w-full h-16 md:h-24 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
    </section>
  );
};
