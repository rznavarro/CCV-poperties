function Testimonios() {
  const items = [
    {
      initials: 'JR',
      quote: 'Vendimos en pocas semanas al precio que esperábamos. El equipo gestionó todo — nosotros no tuvimos que preocuparnos de nada.',
      name: 'J. Ramírez',
      detail: 'Departamento en Las Condes · venta',
      featured: false,
    },
    {
      initials: 'AG',
      quote: 'Rapidez y profesionalismo excepcionales. Nos acompañaron incluso después de la firma.',
      name: 'A. Gutiérrez',
      detail: 'Casa en Rancagua · venta',
      featured: true,
    },
    {
      initials: 'MC',
      quote: 'Arrendaron nuestro departamento con total transparencia y se encargaron del estudio de antecedentes de los arrendatarios.',
      name: 'M. Contreras',
      detail: 'Departamento en Providencia · arriendo',
      featured: false,
    },
  ];

  return (
    <section id="testimonios" className="bg-ink py-20 sm:py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="md:flex md:items-end md:justify-between gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
              <IconStar size={12} className="text-terra"/>
              <span className="text-[11px] font-medium text-white/75 tracking-wide uppercase">Clientes de CCV Propiedades</span>
            </div>
            <h2 className="font-display font-normal text-white text-3xl sm:text-4xl md:text-5xl tracking-tightd max-w-xl leading-[1.05]">
              Lo que dicen quienes ya confiaron en nosotros.
            </h2>
          </div>
          <p className="text-white/55 text-sm sm:text-base max-w-sm mt-5 md:mt-0">
            Cada testimonio incluye la comuna y el tipo de operación. Prueba real, no copy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <article key={i}
                     className={"relative bg-ink-mid rounded-2xl p-7 transition-all duration-300 hover:-translate-y-0.5 " +
                                (t.featured ? 'border border-terra/30' : 'border border-white/8')}>
              {t.featured && (
                <div className="absolute -top-2.5 right-6 text-[9px] font-semibold tracking-widest text-ink uppercase px-2.5 py-1 rounded-full bg-terra">
                  Más reciente
                </div>
              )}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-terra/15 border border-terra/30 grid place-items-center text-terra font-semibold text-sm">
                  {t.initials}
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <IconStar key={k} size={12} className="text-terra"/>
                  ))}
                </div>
              </div>
              <blockquote className="text-white/85 text-[15px] leading-relaxed mt-5 mb-6 font-display font-normal tracking-tight">
                <span className="text-terra/60 font-display text-2xl leading-none mr-1 align-top">"</span>
                {t.quote}
              </blockquote>
              <div className="border-t border-white/8 pt-4">
                <p className="text-white font-medium text-sm tracking-tight">{t.name}</p>
                <p className="text-white/40 text-xs mt-1">{t.detail}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Aggregate proof row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center">
          <div className="flex items-center gap-2.5">
            <div className="flex gap-0.5">{Array.from({length:5}).map((_,k)=><IconStar key={k} size={13} className="text-terra"/>)}</div>
            <span className="text-white/70 text-sm font-medium">Reseñas verificadas</span>
            <span className="text-white/35 text-xs">· Google Business</span>
          </div>
          <div className="text-white/70 text-sm font-medium">
            <span className="text-white">Amable, profesional y cercano</span>
            <span className="text-white/40"> — así nos describen nuestros clientes</span>
          </div>
        </div>
        <p className="text-[10px] text-white/25 text-center mt-6 max-w-md mx-auto leading-relaxed">
          Testimonios de ejemplo — reemplázalos con reseñas reales de clientes de CCV Propiedades antes de publicar.
        </p>
      </div>
    </section>
  );
}

window.Testimonios = Testimonios;
