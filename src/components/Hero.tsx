import { ArrowRight, Zap } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current || !containerRef.current) return;

      const scrolled = window.scrollY;
      contentRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url(/impact3.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/40 via-dark-900/60 to-dark-900" />

        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-electric/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div ref={contentRef} className="relative z-10 section-container">
        <div className="space-y-8 text-center">
          <div className="inline-block">
            <div className="glass px-4 py-2 rounded-full text-sm font-medium text-accent-cyan flex items-center gap-2">
              <Zap size={16} />
              Audio & Lighting Excellence
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-balance leading-tight">
              Trasforma ogni evento in
              <span className="gradient-text"> un'esperienza indimenticabile</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto text-balance leading-relaxed">
              Leader nel noleggio e installazione di schermi LED e impianti audio professionali.
              Dal design al supporto tecnico completo per concerti, conferenze e eventi aziendali.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              to="/contacts"
              className="button-primary inline-flex items-center gap-2 group"
            >
              Scopri i Nostri Servizi
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="tel:+393208980405"
              className="button-secondary inline-flex items-center gap-2"
            >
              <Zap size={20} />
              Contattaci Subito
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
            {[
              { number: '15+', label: 'Anni di Esperienza' },
              { number: '500+', label: 'Eventi Realizzati' },
              { number: '24/7', label: 'Supporto Tecnico' },
              { number: '100%', label: 'Soddisfazione' }
            ].map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold gradient-text">
                  {stat.number}
                </div>
                <p className="text-gray-400 text-sm md:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2 hover:border-accent-cyan transition-colors">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
