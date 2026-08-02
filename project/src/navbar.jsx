const { useState: useStateNav, useEffect: useEffectNav } = React;

function Navbar() {
  const [open, setOpen] = useStateNav(false);
  const [scrolled, setScrolled] = useStateNav(false);

  useEffectNav(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffectNav(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const links = [
    ['Inicio',       '#top'],
    ['Servicios',    '#plan'],
    ['Proceso',      '#proceso'],
    ['Testimonios',  '#testimonios'],
    ['FAQ',          '#faq'],
  ];

  return (
    <>
      <nav className={"fixed top-0 inset-x-0 z-30 transition-all duration-500 " + (scrolled ? 'pt-2 sm:pt-3' : 'pt-4 sm:pt-6')}>
        <div className="flex justify-between items-center px-4 sm:px-6 md:px-10 pb-2">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2 text-white">
            <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-terra grid place-items-center text-ink font-display font-bold text-xs sm:text-sm shrink-0">CCV</span>
            <span className="font-display font-semibold tracking-tight text-white text-base sm:text-lg leading-none">Propiedades</span>
          </a>

          {/* Desktop pill */}
          <div className="hidden lg:flex items-center">
            <div className="glass-edge liquid rounded-full pl-6 pr-1 py-1 border border-white/15 flex items-center gap-1"
                 style={{ background: 'rgba(255,255,255,0.06)' }}>
              {links.map(([label, href]) => (
                <a key={label} href={href}
                   className="text-[13px] px-3 py-2 font-medium text-white/85 hover:text-white transition-colors">
                  {label}
                </a>
              ))}
              <a href="#cta" className="ml-2 bg-white hover:bg-white/90 text-ink text-[13px] font-semibold px-5 py-2.5 rounded-full transition-colors">
                Valoración Gratuita
              </a>
            </div>
          </div>

          {/* Right cluster */}
          <div className="flex items-center gap-3">
            <a href="tel:+56985022517" className="hidden sm:flex items-center gap-2 text-[13px] font-medium text-white/85 hover:text-white transition-colors">
              <IconPhoneCall size={15} className="text-terra"/>
              <span>+56 9 8502 2517</span>
            </a>
            <button onClick={() => setOpen(o => !o)} aria-label="Menú"
                    className="lg:hidden relative w-9 h-9 grid place-items-center rounded-full border border-white/15 bg-white/5 text-white">
              <span className={"absolute transition-all duration-300 " + (open ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100')}>
                <IconMenu size={18}/>
              </span>
              <span className={"absolute transition-all duration-300 " + (open ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50')}>
                <IconX size={18}/>
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div onClick={() => setOpen(false)}
           className={"fixed inset-0 z-40 lg:hidden bg-ink/40 backdrop-blur-sm transition-opacity duration-300 " + (open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none')}/>
      {/* Mobile drawer */}
      <aside className={"fixed top-0 right-0 bottom-0 z-50 w-[85%] max-w-sm bg-white/95 backdrop-blur-xl lg:hidden transition-transform duration-500 " + (open ? 'translate-x-0' : 'translate-x-full')}
             style={{ transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)' }}>
        <div className="flex items-center justify-between px-6 py-5 border-b border-black/5">
          <div className="flex items-center gap-2 text-ink">
            <span className="w-8 h-8 rounded-lg bg-terra grid place-items-center text-ink font-display font-bold text-xs shrink-0">CCV</span>
            <span className="font-display font-semibold tracking-tight text-ink text-base leading-none">Propiedades</span>
          </div>
          <button onClick={() => setOpen(false)} className="w-9 h-9 grid place-items-center rounded-full bg-ink text-white">
            <IconX size={16}/>
          </button>
        </div>
        <nav className="flex flex-col px-6 py-8 gap-1">
          {links.map(([label, href], i) => (
            <a key={label} href={href} onClick={() => setOpen(false)}
               style={{ transitionDelay: open ? (150 + i * 70) + 'ms' : '0ms' }}
               className={"text-2xl font-semibold tracking-tight text-ink py-2 transition-all duration-500 " + (open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0')}>
              {label}
            </a>
          ))}
          <a href="#cta" onClick={() => setOpen(false)}
             style={{ transitionDelay: open ? '500ms' : '0ms' }}
             className={"mt-6 bg-ink text-white text-center text-sm font-semibold py-3.5 rounded-full transition-all duration-500 " + (open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0')}>
            Valoración Gratuita
          </a>
          <a href="tel:+56985022517" onClick={() => setOpen(false)}
             style={{ transitionDelay: open ? '570ms' : '0ms' }}
             className={"mt-3 flex items-center justify-center gap-2 text-sm font-medium text-ink/70 py-2 transition-all duration-500 " + (open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0')}>
            <IconPhone size={14}/> +56 9 8502 2517
          </a>
        </nav>
      </aside>
    </>
  );
}

window.Navbar = Navbar;
