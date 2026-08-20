import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);

    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl z-50">
      <div className="flex items-center justify-between px-6 py-4 bg-black/30 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
        <div 
          onClick={() => scrollTo('home')}
          className="text-white font-bold text-xl tracking-wider cursor-pointer select-none"
        >
          PORTFOLIO
        </div>
        
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
          <li onClick={() => scrollTo('home')} className="hover:text-white cursor-pointer transition-colors select-none">Home</li>
          <li onClick={() => scrollTo('about')} className="hover:text-white cursor-pointer transition-colors select-none">About</li>
          <li onClick={() => scrollTo('projects')} className="hover:text-white cursor-pointer transition-colors select-none">Work</li>
          <li onClick={() => scrollTo('contact')} className="hover:text-white cursor-pointer transition-colors select-none">Contact</li>
        </ul>

        <button 
          onClick={() => scrollTo('contact')}
          className="hidden md:block px-6 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-colors"
        >
          Hire Me
        </button>
        
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
          className="md:hidden text-white p-1 rounded-full hover:bg-white/10 transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-3 p-3 bg-black/85 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg">
          <ul className="flex flex-col gap-1 text-sm font-medium text-white/80">
            <li>
              <button type="button" onClick={() => scrollTo('home')} className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 hover:text-white transition-colors">Home</button>
            </li>
            <li>
              <button type="button" onClick={() => scrollTo('about')} className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 hover:text-white transition-colors">About</button>
            </li>
            <li>
              <button type="button" onClick={() => scrollTo('projects')} className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 hover:text-white transition-colors">Work</button>
            </li>
            <li>
              <button type="button" onClick={() => scrollTo('contact')} className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 hover:text-white transition-colors">Contact</button>
            </li>
            <li className="pt-2">
              <button type="button" onClick={() => scrollTo('contact')} className="w-full px-4 py-3 bg-white text-black rounded-xl font-semibold hover:bg-white/90 transition-colors">Hire Me</button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
