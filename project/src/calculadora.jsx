const { useState: useStateCalc, useEffect: useEffectCalc, useMemo: useMemoCalc } = React;

const fmtEUR = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });
const fmtN   = new Intl.NumberFormat('es-ES', { maximumFractionDigits: 0 });

function useAnimatedNumber(target, ms = 500) {
  const [n, setN] = useStateCalc(target);
  const fromRef = React.useRef(target);
  const startRef = React.useRef(performance.now());
  useEffectCalc(() => {
    fromRef.current = n;
    startRef.current = performance.now();
    let raf = 0;
    const tick = (now) => {
      const t = Math.min(1, (now - startRef.current) / ms);
      const eased = 1 - Math.pow(1 - t, 3);
      const v = fromRef.current + (target - fromRef.current) * eased;
      setN(v);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target]);
  return n;
}

function Calculadora() {
  const [raw, setRaw] = useStateCalc('300000');
  const precio = parseFloat(raw) || 0;
  const agencia3 = precio * 0.03;
  const ahorro3  = Math.max(0, agencia3 - 1500);

  const animAgencia = useAnimatedNumber(agencia3);
  const animAhorro  = useAnimatedNumber(ahorro3);

  const handleChange = (e) => {
    const cleaned = e.target.value.replace(/[^\d]/g, '');
    if (cleaned.length <= 9) setRaw(cleaned);
  };

  // Quick chips
  const chips = [200000, 300000, 450000, 600000];

  const scrollToCta = () => {
    const el = document.getElementById('cta');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="calc" className="relative bg-ink py-20 sm:py-24 border-t border-white/5">
      {/* Subtle terracota glow */}
      <div className="absolute inset-x-0 top-0 h-72 pointer-events-none opacity-40"
           style={{ background: 'radial-gradient(60% 100% at 50% 0%, rgba(196,113,74,0.18) 0%, transparent 70%)' }}/>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
            <IconSparkle size={14} className="text-terra"/>
            <span className="text-[11px] font-medium text-white/75 tracking-wide">Calculadora de ahorro</span>
          </div>
          <h2 className="font-display font-normal text-white text-3xl sm:text-4xl md:text-5xl tracking-tightd">
            ¿Cuánto te ahorras?
          </h2>
          <p className="text-white/55 text-sm sm:text-base mt-4 max-w-md mx-auto">
            Introduce el precio estimado de tu piso. Verás en directo lo que pagarías a una agencia tradicional vs. con Tu Piso.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 items-stretch">
          {/* Input column */}
          <div className="lg:col-span-2 bg-ink-mid border border-white/10 rounded-2xl p-7">
            <label className="block text-[11px] font-semibold text-white/45 uppercase tracking-widest mb-3">
              Precio estimado de tu piso
            </label>
            <div className="relative">
              <input
                value={raw ? fmtN.format(parseInt(raw, 10)) : ''}
                onChange={handleChange}
                inputMode="numeric"
                placeholder="300.000"
                className="ring-terra w-full bg-white/5 border border-white/15 rounded-xl pl-5 pr-12 py-5 text-3xl font-display font-normal text-white tracking-tightd focus:outline-none transition-colors"
              />
              <span className="absolute right-5 top-1/2 -translate-y-1/2 text-2xl text-white/40 font-display">€</span>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {chips.map(c => (
                <button key={c} onClick={() => setRaw(String(c))}
                        className={"text-xs font-medium px-3 py-1.5 rounded-full border transition-all " + (parseInt(raw,10) === c ? 'border-terra/40 bg-terra/15 text-terra' : 'border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white/80')}>
                  {fmtN.format(c)}€
                </button>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-white/8">
              <p className="text-[11px] text-white/35 leading-relaxed">
                Cálculo basado en una comisión del <span className="text-white/70">3%</span> (mínimo de mercado en Madrid). Algunas agencias cobran hasta el 5%.
              </p>
            </div>
          </div>

          {/* Results column */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Agencia tradicional */}
            <div className="bg-ink-mid/60 border border-white/8 rounded-2xl p-5 flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-white/35 font-semibold">Agencia tradicional</span>
              <span className="text-[10px] text-white/30 mb-3">Comisión 3%</span>
              <div className="mt-auto">
                <div className="relative inline-block">
                  <span className="text-2xl font-display font-normal text-white/55 tracking-tightd">
                    {fmtEUR.format(Math.round(animAgencia))}
                  </span>
                  <span className="absolute left-0 right-0 top-1/2 h-px bg-white/40"/>
                </div>
                <p className="text-[11px] text-white/40 mt-2">Lo que pagarías</p>
              </div>
            </div>

            {/* Tu Piso */}
            <div className="bg-terra/10 border border-terra/25 rounded-2xl p-5 flex flex-col relative overflow-hidden">
              <div className="absolute top-3 right-3 text-[9px] font-semibold tracking-widest text-terra uppercase px-2 py-0.5 rounded-full bg-terra/15 border border-terra/30">
                Plan SIN
              </div>
              <span className="text-[10px] uppercase tracking-widest text-terra font-semibold">Tu Piso</span>
              <span className="text-[10px] text-terra/70 mb-3">Tarifa fija</span>
              <div className="mt-auto">
                <span className="text-2xl font-display font-normal text-terra tracking-tightd">1.500 €</span>
                <p className="text-[11px] text-terra/70 mt-2">+ IVA · Solo si vendes</p>
              </div>
            </div>

            {/* Tu ahorro */}
            <div className="bg-white border border-white/10 rounded-2xl p-5 flex flex-col relative overflow-hidden">
              <span className="text-[10px] uppercase tracking-widest text-ink/50 font-semibold">Tu ahorro real</span>
              <span className="text-[10px] text-ink/40 mb-3">En tu bolsillo</span>
              <div className="mt-auto">
                <span className="text-3xl font-display font-normal text-ink tracking-tightd block leading-none">
                  {fmtEUR.format(Math.round(animAhorro))}
                </span>
                <p className="text-[11px] text-ink/50 mt-2">vs. agencia 3%</p>
              </div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-terra/10"/>
            </div>

            {/* CTA row spanning */}
            <div className="sm:col-span-3 mt-1">
              <button onClick={scrollToCta}
                      className="w-full bg-terra hover:bg-terra-l text-white font-semibold rounded-full px-6 py-4 text-sm transition-colors flex items-center justify-center gap-2 group">
                Quiero ahorrar {ahorro3 > 0 ? fmtEUR.format(Math.round(ahorro3)) : 'esto'}
                <IconArrowRight size={15} className="transition-transform group-hover:translate-x-0.5"/>
              </button>
              <p className="text-[11px] text-white/35 text-center mt-4 max-w-md mx-auto leading-relaxed">
                Sobre un precio de venta medio de <span className="text-white/60">350.000€</span> en Madrid, el ahorro típico con Tu Piso es de más de <span className="text-white/60">9.000€</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Calculadora = Calculadora;
