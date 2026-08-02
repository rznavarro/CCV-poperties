const { useState: useStateTB, useEffect: useEffectTB, useRef: useRefTB } = React;
const fmtN_tb = new Intl.NumberFormat('es-ES', { maximumFractionDigits: 0 });

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
    idealista: { font: 'font-display', weight: 'font-semibold', label: <>idealista<span className="text-terra">.</span></> },
    fotocasa:  { font: 'font-sans',    weight: 'font-bold',     label: <>fotocasa</> },
    habitaclia:{ font: 'font-display', weight: 'font-medium',   label: <>habitaclia</> },
    pisos:     { font: 'font-sans',    weight: 'font-extrabold',label: <>pisos<span className="font-light">.com</span></> },
    inmobiliaria:{ font: 'font-display', weight: 'font-normal', label: <>inmobiliaria.com</> },
    yaencontre:{ font: 'font-sans',    weight: 'font-bold',     label: <>yaencontré</> },
    enalquiler:{ font: 'font-display', weight: 'font-light',    label: <>EnAlquiler</> },
  };
  const s = styles[name] || styles.idealista;
  return (
    <span className={`${s.font} ${s.weight} text-lg sm:text-xl tracking-tight whitespace-nowrap`}>
      {s.label}
    </span>
  );
}

function TrustBar() {
  const [r1, n1] = useCountUp(100);
  const [r2, n2] = useCountUp(18);
  const [r3, n3] = useCountUp(1500);
  const [r4, n4] = useCountUp(0); // 0% literal

  const stats = [
    { ref: r1, val: Math.floor(n1) + '+', label: 'Pisos vendidos en Madrid' },
    { ref: r2, val: Math.floor(n2),       label: 'Días medios hasta vender', suffix: ' días' },
    { ref: r3, val: fmtN_tb.format(Math.floor(n3)), label: 'Precio fijo, siempre', suffix: '€' },
    { ref: r4, val: '0%',                  label: 'Comisión porcentual' },
  ];

  const portales = ['idealista','fotocasa','habitaclia','pisos','inmobiliaria','yaencontre','enalquiler'];
  const track = [...portales, ...portales];

  return (
    <section className="bg-ink py-16 sm:py-20 border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
        <p className="text-[10px] sm:text-xs text-white/35 uppercase tracking-[0.22em] text-center mb-8 font-semibold">
          Publicamos tu piso en los portales más importantes de España
        </p>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-16 z-10 pointer-events-none"
               style={{ background: 'linear-gradient(to right, #0A0A0A, transparent)' }}/>
          <div className="absolute inset-y-0 right-0 w-16 z-10 pointer-events-none"
               style={{ background: 'linear-gradient(to left, #0A0A0A, transparent)' }}/>
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
      </div>
    </section>
  );
}

window.TrustBar = TrustBar;
