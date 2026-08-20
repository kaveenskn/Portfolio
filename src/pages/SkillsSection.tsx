import aboutBg from '../assets/Bg.png';
import { HangingSkills } from '../components/HangingSkills';
import { ScrollFlyIn } from '../components/ScrollFlyIn';

export const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen w-full py-20 md:py-24 overflow-visible flex items-center"
      style={{
        backgroundImage: `url(${aboutBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute top-0 left-0 w-full h-16 md:h-24 bg-gradient-to-b from-black/70 to-transparent pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center">
        <ScrollFlyIn direction="up" distance={70} duration={0.75} className="w-full flex justify-center">
          <HangingSkills />
        </ScrollFlyIn>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-16 md:h-24 bg-gradient-to-t from-black/70 to-transparent pointer-events-none z-0" />
    </section>
  );
};
