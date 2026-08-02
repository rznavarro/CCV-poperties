const { useState: useStateTB, useEffect: useEffectTB, useRef: useRefTB } = React;
const fmtN_tb = new Intl.NumberFormat('es-CL', { maximumFractionDigits: 0 });

function useCountUp(target, durationMs = 1400) {
  const [v, setV] = useStateTB(0);
  const [started, setStarted] = useStateTB(false);
  const elRef = useRefTB(null);

  useEffectTB(() => {
    const el = elRef.current;
    if (!el) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setStarted(true); });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffectTB(() => {
    if (!started) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / durationMs);
      // easeOutExpo
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setV(target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, durationMs]);

  return [elRef, v];
}

// Portal "logo" — wordmark in distinct typography style
function PortalLogo({ name, style }) {
  const styles = {
    portalinmobiliario: { font: 'font-display', weight: 'font-semibold', label: <>portalinmobiliario<span className="text-terra">.com</span></> },
    yapo:      { font: 'font-sans',    weight: 'font-extrabold', label: <>yapo<span className="font-light">.cl</span></> },
    toctoc:    { font: 'font-display', weight: 'font-medium',    label: <>TocToc</> },
    icasas:    { font: 'font-sans',    weight: 'font-bold',      label: <>iCasas<span className="font-light">.cl</span></> },
    chileprop: { font: 'font-display', weight: 'font-normal',    label: <>Chile Propiedades</> },
    goplaceit: { font: 'font-sans',    weight: 'font-bold',      label: <>goplaceit</> },
  };
  const s = styles[name] || styles.portalinmobiliario;
  return (
    <span className={`${s.font} ${s.weight} text-lg sm:text-xl tracking-tight whitespace-nowrap`}>
      {s.label}
    </span>
  );
}

function TrustBar() {
  const [r1, n1] = useCountUp(100);
  const [r2, n2] = useCountUp(18);
  const [r3, n3] = useCountUp(2);
  const [r4, n4] = useCountUp(0);

  const stats = [
    { ref: r1, val: Math.floor(n1) + '+', label: 'Propiedades gestionadas' },
    { ref: r2, val: Math.floor(n2),       label: 'Días medios de respuesta', suffix: ' días' },
    { ref: r3, val: '2',                  label: 'Regiones cubiertas', suffix: ' zonas' },
    { ref: r4, val: '0%',                 label: 'Pagos por adelantado' },
  ];

  const portales = ['portalinmobiliario','yapo','toctoc','icasas','chileprop','goplaceit'];
  const track = [...portales, ...portales];

  return (
    <section className="bg-ink py-16 sm:py-20 border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
        <p className="text-[10px] sm:text-xs text-white/35 uppercase tracking-[0.22em] text-center mb-8 font-semibold">
          Publicamos tu propiedad en los portales inmobiliarios más importantes de Chile
        </p>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-16 z-10 pointer-events-none"
               style={{ background: 'linear-gradient(to right, #070B12, transparent)' }}/>
          <div className="absolute inset-y-0 right-0 w-16 z-10 pointer-events-none"
               style={{ background: 'linear-gradient(to left, #070B12, transparent)' }}/>
          <div className="overflow-hidden">
            <div className="flex gap-12 sm:gap-16 marquee-track w-max">
              {track.map((p, i) => (
                <div key={i} className="text-white/35 hover:text-white transition-colors duration-300">
                  <PortalLogo name={p}/>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mt-14 sm:mt-16">
          {stats.map((s, i) => (
            <div key={i} ref={s.ref} className="text-center">
              <div className="font-display font-normal text-white text-3xl sm:text-4xl md:text-5xl tracking-tightd">
                {s.val}{s.suffix && <span className="text-white/70 text-2xl sm:text-3xl ml-0.5">{s.suffix}</span>}
              </div>
              <div className="text-[11px] sm:text-xs text-white/40 mt-2 leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-white/25 text-center mt-8 max-w-md mx-auto leading-relaxed">
          Cifras ilustrativas de la propuesta de valor. Reemplázalas con las estadísticas reales de CCV Propiedades antes de publicar.
        </p>
      </div>
    </section>
  );
}

window.TrustBar = TrustBar;
