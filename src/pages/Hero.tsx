import heroBgDesktop from '../assets/Herobg.png';
import heroBgMobile from '../assets/HeroMobile.png';

export const Hero = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat bg-[image:var(--bg-mobile)] md:bg-[image:var(--bg-desktop)]"
      style={{ 
        '--bg-mobile': `url(${heroBgMobile})`,
        '--bg-desktop': `url(${heroBgDesktop})`
      } as React.CSSProperties}
    >
      {/* Shade to blend with the next section */}
      <div className="absolute bottom-0 left-0 w-full h-16 md:h-24 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
    </section>
  );
};
