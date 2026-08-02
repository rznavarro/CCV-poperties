function App() {
  return (
    <div className="bg-ink min-h-screen text-white">
      <HeroSection/>
      <Calculadora/>
      <TrustBar/>
      <ProcesoTimeline/>
      <ServiciosPlan/>
      <Testimonios/>
      <FAQAccordion/>
      <CTAFinal/>
      <Footer/>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
