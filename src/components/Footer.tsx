import { ArrowUp } from 'lucide-react';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';

const navigationLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Work', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shanmugaraja-kaveen/', icon: FaLinkedinIn },
  { label: 'GitHub', href: 'https://github.com/kaveenskn', icon: FaGithub },
  { label: 'Instagram', href: 'https://www.instagram.com/mztr_kaveen_?igsh=cThoZHpsbzh2YXM3&utm_source=qr', icon: FaInstagram },
  { label: 'Facebook', href: 'https://www.facebook.com/share/19U31jUQWa/?mibextid=wwXIfr', icon: FaFacebookF },
  { label: 'WhatsApp', href: 'https://wa.me/0762553381', icon: FaWhatsapp },
];

export const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative z-40 border-t border-white/10 bg-black px-6 py-12 text-white md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_1fr] md:gap-12">
        <div>
          <button type="button" onClick={() => scrollTo('home')} className="text-left text-xl font-bold tracking-[0.2em] hover:text-white/70 transition-colors">
            PORTFOLIO
          </button>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
            Full-stack developer creating thoughtful digital experiences with modern technology.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-white/40">Explore</h2>
          <nav aria-label="Footer navigation" className="mt-4 flex flex-col items-start gap-3">
            {navigationLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollTo(link.id)}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-white/40">Connect</h2>
          <div className="mt-4 flex flex-col items-start gap-2 text-sm">
            <a href="mailto:shanmugarajakaveen4@gmail.com" className="text-white/70 transition-colors hover:text-white">
              shanmugarajakaveen4@gmail.com
            </a>
            <a href="https://wa.me/0762553381" target="_blank" rel="noopener noreferrer" className="text-white/70 transition-colors hover:text-white">
              +94 76 255 3381
            </a>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all hover:border-white/50 hover:bg-white hover:text-black"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-5 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Kaveen. All rights reserved.</span>
        <button type="button" onClick={() => scrollTo('home')} className="flex items-center gap-2 text-white/60 transition-colors hover:text-white">
          Back to top <ArrowUp className="h-3.5 w-3.5" />
        </button>
      </div>
    </footer>
  );
};
