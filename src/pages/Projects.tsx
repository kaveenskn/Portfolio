import { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import aboutBg from '../assets/Bg.png';
import { ScrollFlyIn } from '../components/ScrollFlyIn';
import { projectsData } from '../projectsdata/projectsData';

const projects = projectsData.map((project) => ({
  id: project.id,
  title: project.title,
  desc: project.desc,
  image: project.image,
  link: project.liveLink || project.github,
  imageFit: project.imageFit || 'cover',
  imagePosition: project.imagePosition || 'center'
}));

const DESKTOP_PAGE_SIZE = 4;

export const Projects = () => {
  // Mobile: individual project index
  const [mobileIndex, setMobileIndex] = useState(0);
  // Desktop: page index (each page = 4 projects)
  const [desktopPage, setDesktopPage] = useState(0);

  const totalDesktopPages = Math.ceil(projects.length / DESKTOP_PAGE_SIZE);
  const desktopProjects = projects.slice(
    desktopPage * DESKTOP_PAGE_SIZE,
    desktopPage * DESKTOP_PAGE_SIZE + DESKTOP_PAGE_SIZE
  );

  const nextDesktopPage = () => setDesktopPage((p) => (p + 1) % totalDesktopPages);
  const prevDesktopPage = () => setDesktopPage((p) => (p - 1 + totalDesktopPages) % totalDesktopPages);

  const nextMobile = () => setMobileIndex((p) => (p + 1) % projects.length);
  const prevMobile = () => setMobileIndex((p) => (p - 1 + projects.length) % projects.length);

  return (
    <section
      id="projects"
      className="min-h-screen w-full py-24 relative overflow-hidden flex flex-col justify-center"
    >
      {/* Rotated Background Layer */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat rotate-180 z-[-1]"
        style={{ backgroundImage: `url(${aboutBg})` }}
      />

      {/* Top blend */}
      <div className="absolute top-0 left-0 w-full h-16 md:h-24 bg-gradient-to-b from-black/70 to-transparent pointer-events-none z-0" />


      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full relative z-10 flex flex-col items-center">



        {/* Projects Header */}
        <ScrollFlyIn direction="down" distance={56} className="text-center mb-10 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore a selection of my recent work and interactive digital experiences.
          </p>
        </ScrollFlyIn>

        {/* ── Laptop + Side Arrows (desktop) ── */}
        <ScrollFlyIn direction="up" distance={72} duration={0.75} className="relative max-w-5xl mx-auto w-full mt-4">

          {/* Desktop Prev Arrow — left of laptop */}
          {totalDesktopPages > 1 && (
            <button
              onClick={prevDesktopPage}
              aria-label="Previous projects"
              className="hidden md:flex absolute -left-14 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-200 backdrop-blur-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Desktop Next Arrow — right of laptop */}
          {totalDesktopPages > 1 && (
            <button
              onClick={nextDesktopPage}
              aria-label="Next projects"
              className="hidden md:flex absolute -right-14 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-200 backdrop-blur-md"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          {/* Laptop Screen */}
          <div className="relative rounded-t-2xl md:rounded-t-3xl border-[8px] md:border-[16px] border-[#0a0a0a] bg-[#1a1a1a] aspect-[16/10] overflow-hidden shadow-2xl z-10 ring-1 ring-white/10">

            {/* ── MOBILE: single project + in-screen arrows ── */}
            <div className="md:hidden w-full h-full relative">
              {/* Mobile Prev */}
              <button
                onClick={prevMobile}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-30 p-1.5 bg-black/60 text-white rounded-full backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Mobile Next */}
              <button
                onClick={nextMobile}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-30 p-1.5 bg-black/60 text-white rounded-full backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Active mobile project */}
              {(() => {
                const project = projects[mobileIndex];
                return (
                  <div key={mobileIndex} className="w-full h-full bg-[#0f0f0f] flex flex-col justify-center relative group" style={{ animation: 'mobileProjectIn 0.45s ease both' }}>
                    <div className="absolute right-0 top-0 w-full h-full z-0">
                      <div className="absolute inset-0 bg-black/35 z-10" />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/95 via-[#0f0f0f]/80 to-[#0f0f0f]/35 z-10" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-500"
                        style={{ objectPosition: project.imagePosition, backgroundColor: '#0f0f0f' }}
                      />
                    </div>
                    <div className="relative z-10 p-6 px-14 flex flex-col justify-center">
                      <span className="text-gray-300/80 font-mono text-xs mb-1">{project.id}</span>
                      <h3 className="text-white font-bold text-lg mb-1">{project.title}</h3>
                      <p className="text-gray-200 text-[10px] mb-3 leading-relaxed max-w-[68%] drop-shadow-md">{project.desc}</p>
                      <a href={project.link} className="text-white text-[10px] font-semibold flex items-center gap-1 hover:gap-2 transition-all duration-300 w-fit px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/25 shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:bg-white/20 hover:border-white/50 hover:-translate-y-0.5">
                        View Project <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* ── DESKTOP: 2x2 grid (current page of 4) ── */}
            <div className="hidden md:grid w-full h-full grid-cols-2 grid-rows-2 gap-[2px] bg-white/20">
              {Array.from({ length: DESKTOP_PAGE_SIZE }, (_, idx) => desktopProjects[idx]).map((project, idx) => (
                project ? (
                <div
                  key={`${desktopPage}-${idx}`}
                  className="bg-[#0f0f0f] flex flex-row group overflow-hidden relative"
                  style={{
                    animation: `projectFloatFrom${idx % 2 === 0 ? 'Left' : 'Right'} 0.72s cubic-bezier(0.22,1,0.36,1) ${idx * 80}ms both`
                  }}
                >
                  {/* Content */}
                  <div className="p-5 xl:p-8 flex flex-col justify-center w-1/2 z-10 bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f]/90 to-transparent transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-0 group-hover:pointer-events-none group-hover:-translate-x-2">
                    <span className="text-gray-500 font-mono text-xs xl:text-sm mb-1">{project.id}</span>
                    <h3 className="text-white font-bold text-base xl:text-xl mb-1">{project.title}</h3>
                    <p className="text-gray-400 text-[10px] xl:text-xs mb-4 leading-relaxed pr-2">{project.desc}</p>
                  </div>

                  <a
                    href={project.link}
                    className="absolute left-5 xl:left-8 bottom-5 xl:bottom-8 z-20 text-white text-[10px] xl:text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] w-fit bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/25 shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:bg-white/20 hover:border-white/50 hover:-translate-y-0.5"
                  >
                    View Project <ArrowRight className="w-3 h-3" />
                  </a>

                  {/* Image */}
                  <div className="absolute right-0 top-0 w-2/3 group-hover:w-full h-full z-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f] via-transparent to-transparent z-10 transition-opacity duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-0" />
                    {project.imageFit === 'contain' ? (
                      <>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                          style={{ objectPosition: project.imagePosition, backgroundColor: '#0f0f0f' }}
                        />
                        <img
                          src={project.image}
                          alt={project.title}
                          className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                          style={{ objectPosition: project.imagePosition, backgroundColor: '#0f0f0f' }}
                        />
                      </>
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                        style={{ objectPosition: project.imagePosition, backgroundColor: '#0f0f0f' }}
                      />
                    )}
                  </div>
                </div>
                ) : (
                  <div
                    key={`coming-soon-${desktopPage}-${idx}`}
                    className="bg-[#0f0f0f]/75 flex items-center justify-center relative overflow-hidden border border-white/5"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%)]" />
                    <div className="relative text-center">
                      <span className="text-white/35 font-mono text-xs tracking-[0.25em] uppercase">Coming Soon</span>
                      <div className="mx-auto mt-3 h-px w-10 bg-white/20" />
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>

          {/* ── Mobile Dot Indicators ── */}
          <div className="flex md:hidden justify-center gap-2 mt-3">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setMobileIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === mobileIndex ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/60'
                  }`}
              />
            ))}
          </div>

          {/* ── Desktop Page Dot Indicators ── */}
          {totalDesktopPages > 1 && (
            <div className="hidden md:flex justify-center gap-2 mt-4">
              {Array.from({ length: totalDesktopPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setDesktopPage(idx)}
                  className={`rounded-full transition-all duration-300 ${idx === desktopPage
                      ? 'w-6 h-2 bg-white'
                      : 'w-2 h-2 bg-white/30 hover:bg-white/60'
                    }`}
                />
              ))}
            </div>
          )}

          {/* Laptop Base */}
          <div className="relative h-3 md:h-5 w-[106%] -ml-[3%] bg-[#1a1a1a] rounded-b-xl md:rounded-b-2xl rounded-t-sm shadow-[0_20px_50px_rgba(0,0,0,0.7)] z-0 flex justify-center border-t border-white/5 mt-0">
            <div className="w-1/4 h-1/2 bg-[#2a2a2a] rounded-b-md shadow-inner" />
          </div>

        </ScrollFlyIn>

      </div>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 w-full h-16 md:h-24 bg-gradient-to-t from-black/70 to-transparent pointer-events-none z-0" />

      {/* Floating card entrance animations for project tiles */}
      <style>{`
        @keyframes projectFloatFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-40px) translateY(18px);
          }
          65% {
            opacity: 1;
            transform: translateX(8px) translateY(-4px);
          }
          100% {
            opacity: 1;
            transform: translateX(0) translateY(0);
          }
        }

        @keyframes projectFloatFromRight {
          0% {
            opacity: 0;
            transform: translateX(40px) translateY(18px);
          }
          65% {
            opacity: 1;
            transform: translateX(-8px) translateY(-4px);
          }
          100% {
            opacity: 1;
            transform: translateX(0) translateY(0);
          }
        }

        @keyframes mobileProjectIn {
          from { opacity: 0; transform: translateX(12px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};
