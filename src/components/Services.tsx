import { Monitor, Volume2, Cable, Headphones, Truck, Wrench } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, description, features, index }: {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="glass rounded-xl p-8 h-full hover:glass-sm transition-all group hover:-translate-y-1">
        <div className="w-12 h-12 bg-gradient-to-br from-accent-cyan/30 to-accent-electric/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <Icon className="text-accent-cyan" size={24} />
        </div>

        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">{description}</p>

        <ul className="space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
              <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full mt-1.5 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function Services() {
  const services = [
    {
      icon: Monitor,
      title: 'Noleggio LED Wall',
      description: 'Schermi LED ad alte prestazioni per interni ed esterni con risoluzioni fino a 4K',
      features: ['Indoor & Outdoor', 'Risoluzioni fino a 4K', 'Dimensioni personalizzabili', 'Massima luminosità']
    },
    {
      icon: Volume2,
      title: 'Impianti Audio Professionali',
      description: 'Sistemi audio line array dalle migliori marche internazionali',
      features: ['Line Array Systems', 'Mixer digitali', 'Microfonazione wireless', 'Acustica ottimizzata']
    },
    {
      icon: Cable,
      title: 'Installazione e Cablaggio',
      description: 'Montaggio professionale con cablaggio ordinato secondo le normative',
      features: ['Montaggio certificato', 'Cablaggio professionale', 'Test pre-evento', 'Documentazione tecnica']
    },
    {
      icon: Headphones,
      title: 'Supporto Tecnico On-Site',
      description: 'Team tecnico specializzato presente durante l\'intero evento',
      features: ['Presenza costante', 'Regia audio/video', 'Troubleshooting rapido', 'Consulenza live']
    },
    {
      icon: Truck,
      title: 'Trasporto e Logistica',
      description: 'Servizio completo di trasporto e movimentazione attrezzature',
      features: ['Mezzi attrezzati', 'Assicurazione completa', 'Puntualità garantita', 'Gestione ritiro']
    },
    {
      icon: Wrench,
      title: 'Manutenzione Preventiva',
      description: 'Controlli regolari e manutenzione per garantire affidabilità',
      features: ['Check completi', 'Attrezzature certificate', 'Backup disponibili', 'Affidabilità 100%']
    }
  ];

  return (
    <section id="services" className="section-padding bg-dark-900">
      <div className="section-container space-y-20">
        <div className="text-center space-y-4">
          <div className="inline-block separator" />
          <h2>I Nostri <span className="gradient-text">Servizi</span></h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Soluzioni complete e integrate per il successo del tuo evento
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} index={idx} />
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3>Gestione Completa dell'Evento</h3>
              <p className="text-gray-400 leading-relaxed">
                Dalla consulenza iniziale alla realizzazione finale, gestiamo ogni aspetto tecnico del tuo evento.
                Non devi preoccuparti di nulla, noi ci pensiamo a tutto.
              </p>

              <div className="space-y-4 pt-4">
                {['Concerti', 'Conferenze', 'Fiere', 'Matrimoni', 'Eventi Aziendali', 'Chiese'].map((event) => (
                  <div key={event} className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-gradient-accent rounded-full" />
                    {event}
                  </div>
                ))}
              </div>

              <Link
                to="/services"
                className="button-primary inline-block mt-6"
              >
                Scopri Tutti i Servizi
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 gradient-accent rounded-2xl opacity-15 blur-2xl" />
              <div className="relative glass rounded-2xl p-8 space-y-6">
                <div>
                  <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
                  <p className="text-sm text-gray-400">Supporto tecnico sempre disponibile</p>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                  <p className="text-sm text-gray-400">Clienti soddisfatti dei nostri servizi</p>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                  <p className="text-sm text-gray-400">Eventi realizzati con successo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
