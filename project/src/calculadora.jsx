const { useState: useStateCalc, useEffect: useEffectCalc, useMemo: useMemoCalc } = React;

const fmtCLP = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 });
const fmtN   = new Intl.NumberFormat('es-CL', { maximumFractionDigits: 0 });

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

const IVA = 0.19;

function Calculadora() {
  const [operacion, setOperacion] = useStateCalc('venta'); // 'venta' | 'arriendo'
  const [rawVenta, setRawVenta] = useStateCalc('90000000');
  const [rawArriendo, setRawArriendo] = useStateCalc('500000');

  const raw = operacion === 'venta' ? rawVenta : rawArriendo;
  const setRaw = operacion === 'venta' ? setRawVenta : setRawArriendo;
  const monto = parseFloat(raw) || 0;

  // Referencias de mercado en Chile: venta ~2% + IVA · arriendo ~50% de un mes + IVA
  const tasaVenta = 0.02;
  const tasaArriendo = 0.5;
  const comisionNeta = operacion === 'venta' ? monto * tasaVenta : monto * tasaArriendo;
  const comisionTotal = comisionNeta * (1 + IVA);

  const animComision = useAnimatedNumber(comisionTotal);

  const handleChange = (e) => {
    const cleaned = e.target.value.replace(/[^\d]/g, '');
    if (cleaned.length <= 12) setRaw(cleaned);
  };

  const chipsVenta = [60000000, 90000000, 150000000, 250000000];
  const chipsArriendo = [300000, 500000, 800000, 1200000];
  const chips = operacion === 'venta' ? chipsVenta : chipsArriendo;

  const scrollToCta = () => {
    const el = document.getElementById('cta');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="calc" className="relative bg-ink py-20 sm:py-24 border-t border-white/5">
      {/* Subtle gold glow */}
      <div className="absolute inset-x-0 top-0 h-72 pointer-events-none opacity-40"
           style={{ background: 'radial-gradient(60% 100% at 50% 0%, rgba(228,178,54,0.16) 0%, transparent 70%)' }}/>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
            <IconSparkle size={14} className="text-terra"/>
            <span className="text-[11px] font-medium text-white/75 tracking-wide">Simulador de comisión</span>
          </div>
          <h2 className="font-display font-normal text-white text-3xl sm:text-4xl md:text-5xl tracking-tightd">
            ¿Cuánto cuesta el corretaje?
          </h2>
          <p className="text-white/55 text-sm sm:text-base mt-4 max-w-lg mx-auto">
            Simula una referencia de mercado para la comisión de venta o arriendo. La propuesta final se confirma contigo antes de firmar cualquier cosa.
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <div className="inline-flex bg-ink-mid border border-white/10 rounded-full p-1">
            {[['venta','Venta'],['arriendo','Arriendo']].map(([key,label]) => (
              <button key={key} onClick={() => setOperacion(key)}
                      className={"px-5 py-2 text-sm font-semibold rounded-full transition-colors " + (operacion === key ? 'bg-terra text-ink' : 'text-white/60 hover:text-white/85')}>
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 items-stretch">
          {/* Input column */}
          <div className="lg:col-span-2 bg-ink-mid border border-white/10 rounded-2xl p-7">
            <label className="block text-[11px] font-semibold text-white/45 uppercase tracking-widest mb-3">
              {operacion === 'venta' ? 'Precio estimado de venta' : 'Renta mensual de arriendo'}
            </label>
            <div className="relative">
              <input
                value={raw ? fmtN.format(parseInt(raw, 10)) : ''}
                onChange={handleChange}
                inputMode="numeric"
                placeholder={operacion === 'venta' ? '90.000.000' : '500.000'}
                className="ring-terra w-full bg-white/5 border border-white/15 rounded-xl pl-5 pr-16 py-5 text-2xl sm:text-3xl font-display font-normal text-white tracking-tightd focus:outline-none transition-colors"
              />
              <span className="absolute right-5 top-1/2 -translate-y-1/2 text-lg sm:text-xl text-white/40 font-display">CLP</span>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {chips.map(c => (
                <button key={c} onClick={() => setRaw(String(c))}
                        className={"text-xs font-medium px-3 py-1.5 rounded-full border transition-all " + (parseInt(raw,10) === c ? 'border-terra/40 bg-terra/15 text-terra' : 'border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white/80')}>
                  {fmtN.format(c)}
                </button>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-white/8">
              <p className="text-[11px] text-white/35 leading-relaxed">
                Referencia de mercado: <span className="text-white/70">{operacion === 'venta' ? '2% del precio de venta' : '50% de un mes de arriendo'}</span> + IVA.
                Valores solo ilustrativos, sujetos a evaluación de tu propiedad.
              </p>
            </div>
          </div>

          {/* Results column */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Base */}
            <div className="bg-ink-mid/60 border border-white/8 rounded-2xl p-5 flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-white/35 font-semibold">
                {operacion === 'venta' ? 'Precio de venta' : 'Renta mensual'}
              </span>
              <span className="text-[10px] text-white/30 mb-3">Monto ingresado</span>
              <div className="mt-auto">
                <span className="text-2xl font-display font-normal text-white/80 tracking-tightd">
                  {fmtCLP.format(Math.round(monto))}
                </span>
                <p className="text-[11px] text-white/40 mt-2">Base de cálculo</p>
              </div>
            </div>

            {/* Comisión estimada */}
            <div className="bg-terra/10 border border-terra/25 rounded-2xl p-5 flex flex-col relative overflow-hidden">
              <div className="absolute top-3 right-3 text-[9px] font-semibold tracking-widest text-terra uppercase px-2 py-0.5 rounded-full bg-terra/15 border border-terra/30">
                Referencial
              </div>
              <span className="text-[10px] uppercase tracking-widest text-terra font-semibold">Comisión estimada</span>
              <span className="text-[10px] text-terra/70 mb-3">Con IVA incluido</span>
              <div className="mt-auto">
                <span className="text-2xl sm:text-3xl font-display font-normal text-terra tracking-tightd">
                  {fmtCLP.format(Math.round(animComision))}
                </span>
                <p className="text-[11px] text-terra/70 mt-2">Solo si se concreta la operación</p>
              </div>
            </div>

            {/* CTA row spanning */}
            <div className="sm:col-span-2 mt-1">
              <button onClick={scrollToCta}
                      className="w-full bg-terra hover:bg-terra-l text-ink font-semibold rounded-full px-6 py-4 text-sm transition-colors flex items-center justify-center gap-2 group">
                Quiero cotizar mi propiedad
                <IconArrowRight size={15} className="transition-transform group-hover:translate-x-0.5"/>
              </button>
              <p className="text-[11px] text-white/35 text-center mt-4 max-w-md mx-auto leading-relaxed">
                Sin pagos por adelantado: la comisión se cobra solo cuando la venta o el arriendo se concreta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Calculadora = Calculadora;
