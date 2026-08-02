const { useState: useStateFAQ } = React;

function FAQAccordion() {
  const [open, setOpen] = useStateFAQ(0);
  const items = [
    {
      q: '¿Qué tengo que hacer para contratar vuestros servicios?',
      a: 'Solo tienes que solicitar una valoración gratuita. Un asesor visitará tu piso, te dará un precio realista basado en ventas reales de la zona y, si decides contratarnos, firmamos el contrato del Plan SIN. Sin permanencias, sin pagos por adelantado.',
    },
    {
      q: '¿Qué otros servicios puedo contratar?',
      a: 'Además del Plan SIN, ofrecemos certificado energético, gestión de la cédula de habitabilidad, home staging, y asesoría hipotecaria para los compradores. Todos como servicios opcionales y siempre con precio cerrado por adelantado.',
    },
    {
      q: '¿Hay que pagar por adelantado?',
      a: 'No. El Plan SIN se paga únicamente cuando se vende el piso, justo antes de la firma en notaría. Si tu piso no se vende, no pagas nada. Cero riesgo para el propietario.',
    },
    {
      q: '¿No cobráis comisiones?',
      a: 'Correcto: no cobramos comisión porcentual sobre el precio de venta. Nuestro precio es fijo: 1.500€ + IVA, vendas por 150.000€ o por 600.000€. Eso es lo que significa "Plan SIN".',
    },
    {
      q: '¿Qué ocurre si no se vende?',
      a: 'Si no se vende, no pagas nada. Cuando aceptas nuestra valoración trabajamos para encontrar comprador en el menor tiempo posible. Si transcurridos los meses pactados no hemos vendido, puedes cancelar sin coste alguno.',
    },
    {
      q: '¿Puedo poner el precio que quiera?',
      a: 'Sí. La valoración que te ofrecemos es una recomendación basada en ventas reales y datos de mercado, pero la decisión final del precio de salida es siempre tuya. Lo importante es que sea un precio realista para que el piso se venda en un tiempo razonable.',
    },
    {
      q: '¿Qué es la Agenda de visitas?',
      a: 'Es el servicio por el que gestionamos nosotros todas las llamadas, filtramos a los compradores serios y coordinamos las visitas en el horario que mejor te convenga. Tú no tienes que atender al teléfono ni estar presente en las visitas.',
    },
    {
      q: '¿Tendré que enseñar yo el piso?',
      a: 'No. Nuestros asesores se encargan de todas las visitas al piso. Tú decides si quieres estar presente o no. La mayoría de propietarios prefiere no estar para que el comprador se sienta más cómodo.',
    },
    {
      q: '¿Cómo puede ser tan barato el Plan SIN?',
      a: 'Porque hemos eliminado de la operación todo lo que encarece a las agencias tradicionales: comerciales a comisión, oficinas en la calle, publicidad masiva. Trabajamos con un equipo experto, herramientas profesionales y procesos eficientes — y trasladamos el ahorro al propietario.',
    },
    {
      q: 'Hay otros aún más baratos. ¿Por qué contar con vosotros?',
      a: 'Porque incluimos absolutamente todo lo necesario para vender bien: fotografía y vídeo profesional, plano, publicación en todos los portales, gestión de visitas, negociación, asesoría legal y firma en notaría. Otros servicios "low cost" cobran aparte cada uno de estos extras y al final terminan costando más.',
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
            <a href="tel:+34911192966" className="inline-flex items-center gap-2 bg-white text-ink text-xs font-semibold px-4 py-2 rounded-full hover:bg-white/90 transition-colors">
              <IconPhone size={13}/> 91 119 29 66
            </a>
            <a href="https://wa.me/34911192966?text=Hola,%20quiero%20información%20sobre%20vender%20mi%20piso"
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
