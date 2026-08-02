const { useState: useStateCTA } = React;

function CTAFinal() {
  const [sent, setSent] = useStateCTA(false);
  const [submitting, setSubmitting] = useStateCTA(false);
  const submit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSent(true); }, 800);
  };

  return (
    <section id="cta" className="relative bg-ink-mid py-24 sm:py-28 border-t border-white/5 overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-terra/10 blur-3xl pointer-events-none"/>
      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 md:px-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
          <IconShield size={13} className="text-terra"/>
          <span className="text-[11px] font-medium text-white/75 tracking-wide uppercase">Hablemos de tu propiedad</span>
        </div>
        <h2 className="font-display font-normal text-white text-4xl sm:text-5xl md:text-6xl tracking-tightd leading-[1.02]">
          Conversemos sobre<br/>
          <span className="text-terra">tu propiedad.</span>
        </h2>
        <p className="text-white/65 text-sm sm:text-base leading-relaxed max-w-md mx-auto mt-6">
          Tasación gratuita en Santiago y la VI Región. Sin compromiso, sin presión.
        </p>

        <div className="mt-10 max-w-md mx-auto bg-ink border border-white/10 rounded-2xl p-6 sm:p-7 text-left">
          {!sent ? (
            <form onSubmit={submit} className="space-y-3">
              <div>
                <label className="block text-[11px] font-semibold text-white/45 uppercase tracking-widest mb-2">Nombre completo</label>
                <input required type="text" placeholder="Ej. Carmen Rodríguez"
                       className="ring-terra w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-white/35 focus:outline-none transition-colors"/>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-white/45 uppercase tracking-widest mb-2">Teléfono</label>
                  <input required type="tel" placeholder="+56 9 1234 5678"
                         className="ring-terra w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-white/35 focus:outline-none transition-colors"/>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-white/45 uppercase tracking-widest mb-2">Email</label>
                  <input required type="email" placeholder="tu@email.com"
                         className="ring-terra w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-white/35 focus:outline-none transition-colors"/>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-white/45 uppercase tracking-widest mb-2">Operación</label>
                  <select className="ring-terra w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors">
                    <option value="venta">Venta</option>
                    <option value="arriendo">Arriendo</option>
                    <option value="administracion">Administración</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-white/45 uppercase tracking-widest mb-2">
                    Comuna <span className="text-white/30 normal-case font-normal tracking-normal">(opcional)</span>
                  </label>
                  <input type="text" placeholder="Ej. Las Condes"
                         className="ring-terra w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-white/35 focus:outline-none transition-colors"/>
                </div>
              </div>
              <button disabled={submitting} type="submit"
                      className="w-full bg-terra hover:bg-terra-l text-ink font-semibold rounded-xl py-4 text-sm transition-colors flex items-center justify-center gap-2 mt-2 disabled:opacity-60">
                {submitting ? 'Enviando…' : <>Quiero mi tasación gratuita <IconArrowRight size={15}/></>}
              </button>
              <p className="text-[10.5px] text-white/35 text-center mt-3 leading-relaxed">
                Respondemos en menos de 24h · Datos protegidos · Sin spam
              </p>
            </form>
          ) : (
            <div className="text-center py-6">
              <div className="w-14 h-14 mx-auto rounded-full bg-terra/15 border border-terra/30 grid place-items-center mb-4">
                <IconCheck size={26} className="text-terra"/>
              </div>
              <p className="text-white text-lg font-semibold tracking-tight">¡Solicitud recibida!</p>
              <p className="text-white/55 text-sm mt-2 max-w-xs mx-auto">
                Un asesor te llamará en menos de 24h al teléfono que has indicado.
              </p>
              <div className="mt-5 pt-5 border-t border-white/8 text-xs text-white/45">
                ¿Prefieres no esperar? Llámanos al <a href="tel:+56985022517" className="text-terra hover:text-terra-l">+56 9 8502 2517</a>
              </div>
            </div>
          )}
        </div>

        {/* Trust footer */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/45">
          <span className="inline-flex items-center gap-1.5"><IconShield size={12} className="text-terra"/> Datos protegidos (Ley 19.628)</span>
          <span className="inline-flex items-center gap-1.5"><IconCheck size={12} className="text-terra"/> Sin pagos por adelantado</span>
          <span className="inline-flex items-center gap-1.5"><IconCheck size={12} className="text-terra"/> Se paga solo si se concreta</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink-mid border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-white/80">
            <img src={(window.__resources && window.__resources.logoLight) || "assets/logo-light.png"} alt="CCV Propiedades" className="h-7 w-auto object-contain opacity-80"/>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-xs text-white/35">
            <a href="#" className="hover:text-white/70 transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white/70 transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-white/70 transition-colors">Cookies</a>
          </div>
          <div className="text-xs text-white/35">
            <a href="tel:+56985022517" className="hover:text-white/70 transition-colors">+56 9 8502 2517</a>
          </div>
        </div>
        <p className="text-[11px] text-white/25 text-center mt-6">© 2026 CCV Propiedades · Los Militares 5620, Of. 1003, Las Condes, Santiago</p>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  const [show, setShow] = useStateCTA(false);
  React.useEffect(() => {
    const t = setTimeout(() => setShow(true), 1500);
    return () => clearTimeout(t);
  }, []);
  return (
    <a href="https://wa.me/56985022517?text=Hola%20CCV%20Propiedades%2C%20estoy%20interesad%40%20en%20una%20propiedad."
       target="_blank" rel="noopener"
       aria-label="WhatsApp"
       className={"fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 group transition-all duration-500 " + (show ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0')}>
      <span className="absolute right-16 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-2 bg-ink border border-white/10 rounded-lg px-3.5 py-2 text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg">
        Escríbenos por WhatsApp
      </span>
      <span className="relative flex w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5C] shadow-2xl shadow-black/40 transition-all duration-300 group-hover:scale-110 items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" style={{ animationDuration: '2.5s' }}/>
        <span className="relative text-white">
          <IconMessageCircle size={24}/>
        </span>
      </span>
    </a>
  );
}

window.CTAFinal = CTAFinal;
window.Footer = Footer;
window.WhatsAppButton = WhatsAppButton;
