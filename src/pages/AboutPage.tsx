import { Award, Target, Users, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Chi <span className="text-cyan-400">Siamo</span>
          </h1>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            La nostra storia, i nostri valori e la passione che ci guida ogni giorno
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="/about.jpeg"
              alt="Event Setup"
              className="rounded-lg shadow-2xl"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6">La Nostra Storia</h2>
            <p className="text-lg text-white leading-relaxed">
              Con oltre <strong className="text-cyan-400">15 anni di esperienza</strong> nel settore audiovisivo, siamo specializzati nel noleggio e nell'installazione di <strong className="text-white">LED wall</strong> e <strong className="text-cyan-400">impianti audio professionali</strong> per eventi di ogni tipo e dimensione.
            </p>

            <p className="text-lg text-white leading-relaxed">
              La nostra missione è trasformare ogni evento in un'esperienza indimenticabile attraverso tecnologie all'avanguardia e un servizio impeccabile. Dalla progettazione alla realizzazione finale, seguiamo ogni fase con dedizione e professionalità.
            </p>

            <p className="text-lg text-white leading-relaxed">
              Lavoriamo con passione per garantire la massima qualità audio e video, offrendo soluzioni personalizzate che si adattano perfettamente alle esigenze di ogni cliente. Il nostro team di tecnici esperti è sempre pronto a supportarti in ogni momento.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">I Nostri Valori</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-cyan-500/10 p-8 rounded-lg border border-gray-700 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all group">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                <Award className="text-cyan-400" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Qualità Premium</h3>
              <p className="text-gray-400">
                Utilizziamo solo attrezzature professionali dei migliori brand internazionali
              </p>
            </div>

            <div className="bg-cyan-500/10 p-8 rounded-lg border border-gray-700 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all group">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                <Users className="text-cyan-400" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Team Esperto</h3>
              <p className="text-gray-400">
                Tecnici certificati con anni di esperienza nel settore eventi live
              </p>
            </div>

            <div className="bg-cyan-500/10 p-8 rounded-lg border border-gray-700 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all group">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                <Target className="text-cyan-400" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Soluzioni Su Misura</h3>
              <p className="text-gray-400">
                Progetti personalizzati studiati sulle specifiche esigenze del tuo evento
              </p>
            </div>

            <div className="bg-cyan-500/10 p-8 rounded-lg border border-gray-700 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all group">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                <Zap className="text-cyan-400" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Supporto H24</h3>
              <p className="text-gray-400">
                Assistenza tecnica continua prima, durante e dopo l'evento
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg p-12 border border-cyan-500/20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Perché Scegliere QuattroSound</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Siamo il partner ideale per il tuo evento grazie alla nostra esperienza consolidata e al nostro approccio professionale
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-3">15+</div>
              <div className="text-gray-300 text-lg">Anni di Esperienza</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-3">500+</div>
              <div className="text-gray-300 text-lg">Eventi Realizzati</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-3">100%</div>
              <div className="text-gray-300 text-lg">Clienti Soddisfatti</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
