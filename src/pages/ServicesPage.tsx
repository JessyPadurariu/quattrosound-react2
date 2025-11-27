import { Monitor, Volume2, Cable, Headphones, Truck, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const services = [
    {
      icon: Monitor,
      title: 'Noleggio LED Wall',
      description: 'Schermi LED di ogni dimensione per interni ed esterni, con risoluzioni HD e 4K. Ideali per concerti, conferenze, fiere e presentazioni aziendali.',
      features: ['Indoor & Outdoor', 'Risoluzioni fino a 4K', 'Dimensioni personalizzabili', 'Massima luminosità'],
      details: 'I nostri LED wall sono disponibili in diverse configurazioni, dal pixel pitch fine per eventi indoor alle soluzioni ad alta luminosità per esterni. Offriamo schermi modulari che possono essere configurati in qualsiasi forma e dimensione.'
    },
    {
      icon: Volume2,
      title: 'Impianti Audio Professionali',
      description: 'Sistemi audio line array e point source delle migliori marche, progettati per garantire una copertura sonora perfetta in ogni ambiente.',
      features: ['Line Array Systems', 'Mixer digitali', 'Microfonazione wireless', 'Acustica ottimizzata'],
      details: 'Utilizziamo sistemi audio di ultima generazione che garantiscono una copertura uniforme e una qualità sonora cristallina. Dai piccoli eventi ai grandi concerti, abbiamo la soluzione perfetta per ogni esigenza.'
    },
    {
      icon: Cable,
      title: 'Installazione e Cablaggio',
      description: 'Montaggio professionale di tutte le attrezzature con cablaggio ordinato e sicuro secondo le normative vigenti.',
      features: ['Montaggio certificato', 'Cablaggio professionale', 'Test pre-evento', 'Documentazione tecnica'],
      details: 'Il nostro team di tecnici certificati si occupa di ogni aspetto dell\'installazione, dal montaggio delle strutture al cablaggio completo, garantendo massima sicurezza e affidabilità.'
    },
    {
      icon: Headphones,
      title: 'Supporto Tecnico On-Site',
      description: 'Tecnici specializzati presenti durante tutto l\'evento per gestire audio, video e risolvere qualsiasi imprevisto.',
      features: ['Presenza costante', 'Regia audio/video', 'Troubleshooting rapido', 'Consulenza live'],
      details: 'Durante l\'evento, il nostro team tecnico è sempre presente per gestire la regia audio e video, apportare modifiche in tempo reale e garantire che tutto funzioni perfettamente.'
    },
    {
      icon: Truck,
      title: 'Trasporto e Logistica',
      description: 'Servizio completo di trasporto, carico e scarico delle attrezzature con mezzi idonei e personale qualificato.',
      features: ['Mezzi attrezzati', 'Assicurazione completa', 'Puntualità garantita', 'Gestione ritiro'],
      details: 'Disponiamo di mezzi di trasporto dedicati e assicurati per garantire che tutte le attrezzature arrivino in perfette condizioni e nei tempi concordati.'
    },
    {
      icon: Wrench,
      title: 'Manutenzione Preventiva',
      description: 'Tutte le nostre attrezzature sono sottoposte a controlli regolari e manutenzione preventiva per garantire affidabilità assoluta.',
      features: ['Check completi', 'Attrezzature certificate', 'Backup disponibili', 'Affidabilità 100%'],
      details: 'Ogni attrezzatura viene controllata e testata prima di ogni evento. Manteniamo sempre unità di backup disponibili per garantire la continuità del servizio.'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            I Nostri <span className="text-cyan-400">Servizi</span>
          </h1>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Soluzioni complete per eventi di successo: dal noleggio all'assistenza tecnica
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-cyan-400 transition-all group hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="w-16 h-16 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors group-hover:scale-110 transform duration-300">
                <service.icon className="text-cyan-400" size={32} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <p className="text-sm text-gray-500 leading-relaxed">{service.details}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg p-12 border border-cyan-500/20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Eventi Chiavi in Mano
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Gestiamo ogni aspetto tecnico del tuo evento: dalla progettazione iniziale alla realizzazione finale.
              Ti liberiamo da ogni preoccupazione tecnica così puoi concentrarti sul successo del tuo evento.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-gray-800 px-6 py-3 rounded-lg text-cyan-400 font-semibold">Concerti</span>
              <span className="bg-gray-800 px-6 py-3 rounded-lg text-cyan-400 font-semibold">Conferenze</span>
              <span className="bg-gray-800 px-6 py-3 rounded-lg text-cyan-400 font-semibold">Fiere</span>
              <span className="bg-gray-800 px-6 py-3 rounded-lg text-cyan-400 font-semibold">Matrimoni</span>
              <span className="bg-gray-800 px-6 py-3 rounded-lg text-cyan-400 font-semibold">Eventi Aziendali</span>
              <span className="bg-gray-800 px-6 py-3 rounded-lg text-cyan-400 font-semibold">Chiese</span>
            </div>
            <Link
              to="/contacts"
              className="inline-block gradient-gold text-black px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:shadow-lg hover:shadow-yellow-500/20"
            >
              Richiedi un Preventivo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
