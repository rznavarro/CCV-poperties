function ServiciosPlan() {
  const servicios = [
    'Valoración realista basada en ventas reales de la zona',
    'Reportaje fotográfico y vídeo profesional',
    'Plano del inmueble incluido',
    'Publicación en todos los portales principales',
    'Gestión de agenda de visitas (no tienes que estar presente)',
    'Filtrado de compradores y negociación experta',
    'Asesoría legal y fiscal hasta firma en notaría',
    'Gestión post-venta completa',
  ];

  return (
    <section id="plan" className="bg-ink-mid py-20 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
            <IconShield size={13} className="text-terra"/>
            <span className="text-[11px] font-medium text-white/75 tracking-wide uppercase">El Plan SIN</span>
          </div>
          <h2 className="font-display font-normal text-white text-3xl sm:text-4xl md:text-5xl tracking-tightd leading-[1.05]">
            Todo incluido.<br/>
            <span className="text-white/50">Sin letra pequeña.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          {servicios.map((s, i) => (
            <div key={i} className="flex items-start gap-4 bg-ink rounded-xl p-5 border border-white/8 hover:border-white/15 transition-colors">
              <div className="w-7 h-7 rounded-full bg-terra/15 border border-terra/25 grid place-items-center flex-shrink-0 mt-0.5">
                <IconCheck size={14} className="text-terra"/>
              </div>
              <p className="text-[13.5px] text-white/80 leading-relaxed pt-1">{s}</p>
            </div>
          ))}
        </div>

        {/* Price card */}
        <div className="relative mt-10 rounded-2xl border border-terra/25 overflow-hidden">
          <div className="absolute inset-0 bg-terra/10"/>
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-terra/15 blur-3xl"/>
          <div className="absolute -bottom-32 -left-20 w-72 h-72 rounded-full bg-terra/10 blur-3xl"/>
          <div className="relative p-10 sm:p-12 text-center">
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/55 mb-3 font-semibold">Todo esto por solo</p>
            <div className="flex items-baseline justify-center gap-1">
              <span className="font-display font-normal text-white text-5xl sm:text-6xl md:text-7xl tracking-tightd">1.500€</span>
              <span className="text-white/55 text-xl sm:text-2xl font-display tracking-tight">+ IVA</span>
            </div>
            <p className="text-sm text-white/55 mt-4">
              Pago único · Solo si vendes · Sin exclusivas
            </p>

            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center mt-8">
              <a href="#cta"
                 className="bg-terra hover:bg-terra-l text-white font-semibold rounded-full px-7 py-3.5 text-sm transition-colors inline-flex items-center gap-2 group">
                Solicitar valoración gratuita
                <IconArrowRight size={15} className="transition-transform group-hover:translate-x-0.5"/>
              </a>
              <a href="#calc"
                 className="text-white/75 hover:text-white text-sm font-semibold px-4 py-3 transition-colors inline-flex items-center gap-2">
                Ver mi ahorro
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.ServiciosPlan = ServiciosPlan;
