function ProcesoTimeline() {
  const pasos = [
    { num: '01', Icon: IconCamera,    title: 'Visita y valoración',
      body: 'Un asesor visita tu piso y te da una valoración profesional basada en ventas reales de la zona. Sin compromiso.' },
    { num: '02', Icon: IconImage,     title: 'Reportaje profesional',
      body: 'Fotografía y vídeo de alta calidad. Plano del inmueble. Todo incluido en los 1.500€.' },
    { num: '03', Icon: IconGlobe,     title: 'Publicación en portales',
      body: 'Tu piso en Idealista, Fotocasa, Habitaclia y más en menos de 48 horas.' },
    { num: '04', Icon: IconUsers,     title: 'Visitas y negociación',
      body: 'Gestionamos todas las llamadas, filtramos compradores serios y negociamos el mejor precio para ti.' },
    { num: '05', Icon: IconFileCheck, title: 'Firma y post-venta',
      body: 'Te acompañamos en notaría y resolvemos cualquier gestión después de la firma.' },
  ];

  return (
    <section id="proceso" className="bg-ink py-20 sm:py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-terra"/>
            <span className="text-[11px] font-medium text-white/75 tracking-wide uppercase">El proceso</span>
          </div>
          <h2 className="font-display font-normal text-white text-3xl sm:text-4xl md:text-5xl tracking-tightd max-w-2xl mx-auto">
            ¿Qué pasa después de contactarnos?
          </h2>
          <p className="text-white/55 text-sm sm:text-base mt-5 max-w-lg mx-auto">
            Un proceso transparente, sin sorpresas. Desde la primera visita hasta la firma en notaría.
          </p>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="hidden md:block relative">
          <div className="absolute top-[34px] left-[6%] right-[6%] border-t border-dashed border-white/12"/>
          <div className="grid grid-cols-5 gap-4 relative">
            {pasos.map((p, i) => (
              <div key={i} className="text-center px-2">
                <div className="relative inline-grid place-items-center mb-5">
                  <div className="w-[68px] h-[68px] rounded-full bg-ink border border-white/10 grid place-items-center">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 grid place-items-center">
                      <p.Icon size={20} className="text-terra"/>
                    </div>
                  </div>
                </div>
                <div className="text-[10px] font-semibold text-white/25 tracking-[0.22em] mb-2">PASO {p.num}</div>
                <h3 className="font-semibold text-white text-[15px] mb-2 tracking-tight">{p.title}</h3>
                <p className="text-[12.5px] text-white/50 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden relative pl-6">
          <div className="absolute left-[14px] top-2 bottom-2 w-px bg-white/10"/>
          <ul className="space-y-7">
            {pasos.map((p, i) => (
              <li key={i} className="relative">
                <div className="absolute -left-6 top-0 w-7 h-7 rounded-full bg-ink border border-white/15 grid place-items-center">
                  <p.Icon size={14} className="text-terra"/>
                </div>
                <div className="pl-4">
                  <div className="text-[10px] font-semibold text-white/25 tracking-[0.22em] mb-1">PASO {p.num}</div>
                  <h3 className="font-semibold text-white text-[15px] mb-1.5 tracking-tight">{p.title}</h3>
                  <p className="text-[12.5px] text-white/50 leading-relaxed">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

window.ProcesoTimeline = ProcesoTimeline;
