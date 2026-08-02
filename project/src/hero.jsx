const { useState: useStateHero, useEffect: useEffectHero } = React;

const VIDEO_SRC = (window.__resources && window.__resources.heroVideo) || "assets/hero.mp4";

function AnimatedHeadline({ line1, line2 }) {
  const [armed, setArmed] = useStateHero(false);
  useEffectHero(() => {
    const t = setTimeout(() => setArmed(true), 100);
    return () => clearTimeout(t);
  }, []);
  const renderChars = (text, baseDelay, accent) => {
    const chars = [...text];
    return chars.map((c, i) => (
      <span key={i}
            className={"hero-char " + (armed ? 'in' : '') + (accent ? ' text-terra' : '')}
            style={{ transitionDelay: armed ? (baseDelay + i * 28) + 'ms' : '0ms' }}>
        {c === ' ' ? '\u00A0' : c}
      </span>
    ));
  };
  return (
    <h1 className="font-display font-normal leading-[0.95] text-white text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[4.75rem] xl:text-[5.25rem] tracking-tightd max-w-5xl text-center mx-auto">
      <span className="block">{renderChars(line1, 200)}</span>
      <span className="block">{renderChars(line2, 200 + line1.length * 28 + 80, true)}</span>
    </h1>
  );
}

function HeroForm() {
  const [submitting, setSubmitting] = useStateHero(false);
  const [sent, setSent] = useStateHero(false);
  const submit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSent(true); }, 700);
  };
  return (
    <div className="hidden sm:block absolute right-4 sm:right-6 md:right-10 bottom-6 sm:bottom-8 md:bottom-10 w-[300px] z-10">
      <div className="glass-edge liquid rounded-2xl p-5 border border-white/20"
           style={{ background: 'rgba(255,255,255,0.10)' }}>
        {!sent ? (
          <>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold text-sm tracking-tight">Solicita valoración gratuita</h3>
              <span className="text-[10px] font-semibold tracking-widest text-terra uppercase">24h</span>
            </div>
            <form onSubmit={submit} className="space-y-2.5">
              <input required type="text" placeholder="Nombre completo"
                     className="ring-terra w-full bg-white/8 border border-white/20 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none transition-colors"/>
              <input required type="tel" placeholder="Teléfono / WhatsApp"
                     className="ring-terra w-full bg-white/8 border border-white/20 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none transition-colors"/>
              <input required type="email" placeholder="Email"
                     className="ring-terra w-full bg-white/8 border border-white/20 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none transition-colors"/>
              <button disabled={submitting} type="submit"
                      className="w-full bg-white hover:bg-white/90 text-ink text-sm font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-60">
                {submitting ? 'Enviando…' : <>Quiero mi valoración <IconArrowRight size={14}/></>}
              </button>
              <p className="text-[10px] text-white/55 text-center mt-2 leading-relaxed">
                Te llamamos en menos de 24h · Sin compromiso
              </p>
            </form>
          </>
        ) : (
          <div className="py-4 text-center">
            <div className="w-10 h-10 mx-auto rounded-full bg-terra/20 grid place-items-center mb-3">
              <IconCheck size={20} className="text-terra"/>
            </div>
            <p className="text-white text-sm font-semibold">¡Gracias! Te llamamos pronto.</p>
            <p className="text-white/55 text-xs mt-1">Un asesor contactará en menos de 24h.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function HeroSection() {
  const [armed, setArmed] = useStateHero(false);
  useEffectHero(() => {
    const t = setTimeout(() => setArmed(true), 50);
    return () => clearTimeout(t);
  }, []);
  return (
    <section id="top" className="relative w-full min-h-screen overflow-hidden bg-ink">
      {/* Layer: video */}
      <div className="absolute inset-0 z-0">
        <BoomerangVideoBg src={VIDEO_SRC} />
      </div>
      {/* Layer: dim overlay */}
      <div className="absolute inset-0 z-0 bg-black/45 pointer-events-none"/>
      {/* Layer: vignette */}
      <div className="absolute inset-0 z-0 pointer-events-none"
           style={{ background: 'radial-gradient(120% 80% at 50% 30%, transparent 0%, rgba(0,0,0,0.55) 100%)' }}/>
      {/* Layer: fade bottom */}
      <div className="absolute inset-x-0 bottom-0 h-72 z-0 pointer-events-none"
           style={{ background: 'linear-gradient(to top, #0A0A0A 0%, rgba(10,10,10,0.6) 50%, transparent 100%)' }}/>

      <Navbar/>

      {/* Hero copy */}
      <div className="relative z-10 px-4 sm:px-6 md:px-10 pt-28 sm:pt-32 md:pt-36 pb-40 sm:pb-48 md:pb-60 max-w-6xl mx-auto">
        {/* Pre-headline pill */}
        <div className={"flex justify-center mb-6 fade-in " + (armed ? 'in' : '')}
             style={{ transitionDelay: armed ? '120ms' : '0ms' }}>
          <div className="glass-edge inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20"
               style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-terra animate-pulse"/>
            <span className="text-[11px] font-medium text-white/90 tracking-wide">Inmobiliaria en Madrid · desde 2017</span>
          </div>
        </div>

        <AnimatedHeadline line1="Vende tu piso en Madrid" line2="sin pagar comisión."/>

        <p className={"mt-7 sm:mt-9 max-w-md text-center mx-auto text-white/80 text-sm sm:text-base md:text-lg leading-relaxed fade-in " + (armed ? 'in' : '')}
           style={{ transitionDelay: armed ? '1500ms' : '0ms' }}>
          Precio fijo <span className="text-white font-medium">1.500€ + IVA</span>. Sin letra pequeña. Sin exclusivas.
          Pagas <span className="text-white font-medium">solo si vendes</span>.
        </p>

        <ul className={"flex gap-x-6 gap-y-2 mt-7 justify-center flex-wrap fade-in " + (armed ? 'in' : '')}
            style={{ transitionDelay: armed ? '1700ms' : '0ms' }}>
          {['Precio fijo','Sin riesgo','Todo incluido','Sin exclusivas'].map(t => (
            <li key={t} className="text-[11px] sm:text-xs font-semibold text-white/85 flex items-center gap-1.5">
              <IconCheck size={14} className="text-terra"/>{t}
            </li>
          ))}
        </ul>

        {/* Mobile-only CTA row (hero form is hidden on mobile) */}
        <div className={"sm:hidden flex flex-col gap-3 mt-10 fade-in " + (armed ? 'in' : '')}
             style={{ transitionDelay: armed ? '1900ms' : '0ms' }}>
          <a href="#cta" className="bg-white hover:bg-white/90 text-ink text-sm font-semibold py-3.5 rounded-full text-center transition-colors">
            Valoración Gratuita
          </a>
          <a href="tel:+34911192966" className="flex items-center justify-center gap-2 text-white/80 text-sm font-medium">
            <IconPhone size={14}/> 91 119 29 66
          </a>
        </div>
      </div>

      {/* Bottom-left block */}
      <div className={"absolute left-4 right-4 sm:right-auto sm:left-6 md:left-10 bottom-6 sm:bottom-8 md:bottom-10 max-w-xs z-10 hidden sm:block fade-in " + (armed ? 'in' : '')}
           style={{ transitionDelay: armed ? '2100ms' : '0ms' }}>
        <div className="flex items-center gap-2 text-white mb-3">
          <IconTrendingDown size={16} className="text-terra"/>
          <span className="text-sm font-semibold tracking-tight">Plan SIN Comisiones™</span>
        </div>
        <p className="text-white/80 text-xs leading-relaxed mb-5 font-medium max-w-[18rem]">
          Ahorra entre <span className="text-white font-semibold">9.000€</span> y <span className="text-white font-semibold">25.000€</span> en la venta de tu piso. Precio fijo. Siempre.
        </p>
        <div className="flex items-center gap-4">
          <a href="#calc" className="bg-white hover:bg-white/90 text-ink text-sm font-semibold px-5 py-2.5 rounded-full transition-colors">
            Calcular ahorro
          </a>
          <a href="tel:+34911192966" className="text-white/80 hover:text-white text-sm font-semibold flex items-center gap-1.5 transition-colors">
            <IconPhone size={14}/> Llamar
          </a>
        </div>
      </div>

    </section>
  );
}

window.HeroSection = HeroSection;
