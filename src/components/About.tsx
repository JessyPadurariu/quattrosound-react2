import { Award, Users, Zap, Target } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const ScrollAnimatedCard = ({ children, delay }: { children: React.ReactNode; delay: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
};

export default function About() {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-dark-850 to-dark-900">
      <div className="section-container space-y-20">
        <div className="text-center space-y-4">
          <div className="inline-block separator" />
          <h2>Chi <span className="gradient-text">Siamo</span></h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Con oltre 15 anni di esperienza nel settore audiovisivo, abbiamo trasformato più di 500 eventi
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-0.5 gradient-accent rounded-2xl opacity-20 blur-xl" />
            <img
              src="/about.jpeg"
              alt="Event Setup"
              className="relative rounded-2xl shadow-xl-dark w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3>Passione e Professionalità</h3>
              <p className="text-gray-400 leading-relaxed">
                Trasformiamo ogni evento in un'esperienza indimenticabile attraverso tecnologie all'avanguardia
                e un servizio impeccabile. Dalla progettazione alla realizzazione finale, seguiamo ogni fase
                con dedizione e professionalità.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl">Soluzioni Personalizzate</h3>
              <p className="text-gray-400 leading-relaxed">
                Offriamo soluzioni completamente personalizzate che si adattano perfettamente alle tue esigenze.
                Il nostro team di tecnici esperti è sempre pronto a supportarti in ogni momento.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {['LED Wall', 'Audio Professionale', 'Lighting', 'Installazione', 'Supporto 24/7'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-accent-cyan/10 text-accent-cyan text-sm font-medium rounded-full border border-accent-cyan/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Award, title: 'Qualità Premium', description: 'Attrezzature professionali dei migliori brand' },
            { icon: Users, title: 'Team Esperto', description: 'Tecnici certificati con anni di esperienza' },
            { icon: Target, title: 'Soluzioni Su Misura', description: 'Progetti personalizzati per ogni evento' },
            { icon: Zap, title: 'Innovazione', description: 'Tecnologie all\'avanguardia sempre' }
          ].map((item, idx) => (
            <ScrollAnimatedCard key={idx} delay={idx * 100}>
              <div className="glass rounded-xl p-6 hover:glass-sm transition-all group cursor-pointer">
                <div className="w-14 h-14 bg-gradient-to-br from-accent-cyan/20 to-accent-electric/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="text-accent-cyan" size={28} />
                </div>
                <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            </ScrollAnimatedCard>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 pt-8">
          {[
            { number: '15+', label: 'Anni di Esperienza', icon: Award },
            { number: '500+', label: 'Eventi Realizzati', icon: Zap },
            { number: '100%', label: 'Cliente Soddisfatti', icon: Users },
          ].map((stat, idx) => (
            <ScrollAnimatedCard key={idx} delay={idx * 150}>
              <div className="text-center">
                <div className="inline-block w-16 h-16 bg-gradient-to-br from-accent-cyan/20 to-accent-electric/10 rounded-lg flex items-center justify-center mb-4">
                  <stat.icon className="text-accent-cyan" size={32} />
                </div>
                <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            </ScrollAnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
