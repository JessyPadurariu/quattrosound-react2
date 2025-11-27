import { useState } from 'react';
import { X } from 'lucide-react';

export default function PortfolioPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      image: '/impact.jpeg',
      title: 'Evento Impactful',
      description: 'Grande schermo LED e regia professionale per evento corporate',
      category: 'Conferenze'
    },
    {
      image: '/impact2.jpeg',
      title: 'Convention Internazionale',
      description: 'Multiple schermi LED e setup audio completo per evento multi-sala',
      category: 'Eventi Aziendali'
    },
    {
      image: '/impact3.jpeg',
      title: 'Setup Palco Professionale',
      description: 'Illuminazione, LED wall e impianto audio line array per concerto live',
      category: 'Concerti'
    },
    {
      image: '/impact4.jpeg',
      title: 'Orchestra Live',
      description: 'Microfonazione orchestrale e impianto audio di precisione',
      category: 'Concerti'
    },
    {
      image: '/impact5.jpeg',
      title: 'Sistema Lighting Avanzato',
      description: 'Traliccio motorizzato con luci intelligenti e controllo DMX',
      category: 'Lighting'
    },
    {
      image: '/impact6.jpeg',
      title: 'Evento di Prestigio',
      description: 'Palco completo con LED wall e illuminazione coordinata',
      category: 'Concerti'
    },
    {
      image: '/impact7.jpeg',
      title: 'Setup Audio Professionale',
      description: 'Sistema audio line array con microfonazione wireless',
      category: 'Audio'
    },
    {
      image: '/impact8.jpeg',
      title: 'Evento Corporate Premium',
      description: 'LED wall gigante e regia tecnica completa',
      category: 'Eventi Aziendali'
    },
    {
      image: '/impact9.jpeg',
      title: 'Concerto Live',
      description: 'Setup completo con schermi LED e audio professionale',
      category: 'Concerti'
    }
  ];

  const categories = ['All', 'Concerti', 'Conferenze', 'Eventi Aziendali', 'Lighting', 'Audio'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Il Nostro <span className="text-cyan-400">Portfolio</span>
          </h1>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Scopri alcuni dei progetti che abbiamo realizzato con passione e dedizione
          </p>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  selectedCategory === category
                    ? 'gradient-gold text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(project.image)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block bg-cyan-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg p-12 border border-cyan-500/20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Vuoi vedere altri esempi?</h2>
          <p className="text-gray-400 text-lg mb-8">
            Hai bisogno di vedere altri esempi del nostro lavoro per il tuo progetto specifico?
          </p>
          <a
            href="/contacts"
            className="inline-block gradient-gold text-black px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:shadow-lg hover:shadow-yellow-500/20"
          >
            Richiedi il Portfolio Completo
          </a>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-cyan-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
