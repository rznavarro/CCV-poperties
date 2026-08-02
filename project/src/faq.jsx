const { useState: useStateFAQ } = React;

function FAQAccordion() {
  const [open, setOpen] = useStateFAQ(0);
  const items = [
    {
      q: '¿Qué tengo que hacer para vender o arrendar con CCV?',
      a: 'Solo tienes que solicitar una tasación gratuita. Un asesor visitará tu propiedad, te dará un precio realista basado en el mercado de tu comuna y, si decides trabajar con nosotros, coordinamos los siguientes pasos. Sin pagos por adelantado.',
    },
    {
      q: '¿Qué servicios ofrece CCV Propiedades?',
      a: 'Corretaje de venta y arriendo de casas, departamentos, oficinas, locales, parcelas y terrenos. Además, administración de propiedades, estudio de antecedentes de compradores y arrendatarios, y gestión de toda la documentación hasta la firma.',
    },
    {
      q: '¿Cobran comisión? ¿Cuánto?',
      a: 'Sí, como todo corredor de propiedades. La comisión se calcula según el tipo de operación y se confirma contigo antes de firmar cualquier cosa — nada de sorpresas al final. Puedes simular una referencia en nuestra calculadora más arriba.',
    },
    {
      q: '¿Hay que pagar por adelantado?',
      a: 'No. La comisión se cobra únicamente cuando la venta o el arriendo se concreta. Si tu propiedad no se vende o arrienda, no pagas nada.',
    },
    {
      q: '¿En qué zonas trabajan?',
      a: 'Trabajamos principalmente en la Región Metropolitana y en la VI Región de O’Higgins, con oficina en Las Condes, Santiago.',
    },
    {
      q: '¿Qué es el estudio de antecedentes?',
      a: 'Es la revisión de antecedentes comerciales y financieros de los interesados en comprar o arrendar tu propiedad, para asegurarnos de que la operación sea segura antes de avanzar.',
    },
    {
      q: '¿Tengo que estar presente en las visitas?',
      a: 'No necesariamente. Coordinamos la agenda de visitas y filtramos a los interesados serios. Tú decides si quieres estar presente o prefieres que nuestro equipo se encargue.',
    },
    {
      q: '¿Administran propiedades en arriendo?',
      a: 'Sí. Ofrecemos administración de propiedades para propietarios que arriendan: cobro de rentas, seguimiento del contrato y gestión de incidencias con el arrendatario.',
    },
    {
      q: '¿Cómo publican mi propiedad?',
      a: 'Con reportaje fotográfico y de vídeo profesional, más plano del inmueble, publicado en los principales portales inmobiliarios de Chile en menos de 48 horas.',
    },
    {
      q: '¿Puedo poner el precio que quiera?',
      a: 'Sí. La tasación que te entregamos es una recomendación basada en el mercado de tu comuna, pero la decisión final del precio de salida es siempre tuya.',
    },
  ];

  return (
    <section id="faq" className="bg-ink py-20 sm:py-24 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
            <span className="text-[11px] font-medium text-white/75 tracking-wide uppercase">FAQ</span>
          </div>
          <h2 className="font-display font-normal text-white text-3xl sm:text-4xl md:text-5xl tracking-tightd">
            Preguntas frecuentes.
          </h2>
          <p className="text-white/55 text-sm sm:text-base mt-5 max-w-md mx-auto">
            Las dudas que más nos hacen los propietarios antes de contratar.
          </p>
        </div>

        <div className="border-t border-white/8">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-white/8">
                <button onClick={() => setOpen(isOpen ? null : i)}
                        className="w-full flex items-center justify-between gap-4 text-left py-5 sm:py-6 group">
                  <span className={"text-sm sm:text-[15px] font-medium tracking-tight pr-2 transition-colors " + (isOpen ? 'text-white' : 'text-white/85 group-hover:text-white')}>
                    {it.q}
                  </span>
                  <span className={"flex-shrink-0 w-7 h-7 rounded-full grid place-items-center border transition-all duration-300 " +
                                   (isOpen ? 'rotate-180 border-terra/40 bg-terra/10 text-terra' : 'border-white/15 bg-white/5 text-white/50')}>
                    <IconChevronDown size={14}/>
                  </span>
                </button>
                <div className={"overflow-hidden transition-all duration-300 ease-in-out " + (isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0')}>
                  <p className="text-[13.5px] sm:text-sm text-white/60 leading-relaxed pb-6 pr-10">
                    {it.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center bg-ink-mid border border-white/8 rounded-2xl p-6">
          <p className="text-white text-sm font-medium">¿Tu pregunta no está aquí?</p>
          <p className="text-white/55 text-xs mt-1.5 mb-4">Llámanos o escríbenos por WhatsApp y la respondemos al momento.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="tel:+56985022517" className="inline-flex items-center gap-2 bg-white text-ink text-xs font-semibold px-4 py-2 rounded-full hover:bg-white/90 transition-colors">
              <IconPhone size={13}/> +56 9 8502 2517
            </a>
            <a href="https://wa.me/56985022517?text=Hola%20CCV%20Propiedades%2C%20estoy%20interesad%40%20en%20una%20propiedad."
               target="_blank" rel="noopener"
               className="inline-flex items-center gap-2 bg-[#25D366] text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#20BA5C] transition-colors">
              <IconMessageCircle size={13}/> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

window.FAQAccordion = FAQAccordion;
