import { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    { image: '/impact.jpeg', title: 'Evento Corporate', category: 'Conferenze' },
    { image: '/impact2.jpeg', title: 'Convention Internazionale', category: 'Eventi Aziendali' },
    { image: '/impact3.jpeg', title: 'Setup Palco Professionale', category: 'Concerti' },
    { image: '/impact4.jpeg', title: 'Orchestra Live', category: 'Concerti' },
    { image: '/impact5.jpeg', title: 'Sistema Lighting Avanzato', category: 'Lighting' },
    { image: '/impact6.jpeg', title: 'Evento di Prestigio', category: 'Concerti' },
    { image: '/impact7.jpeg', title: 'Setup Audio Professionale', category: 'Audio' },
    { image: '/impact8.jpeg', title: 'Evento Corporate Premium', category: 'Eventi Aziendali' },
    { image: '/impact9.jpeg', title: 'Concerto Live', category: 'Concerti' },
  ];

  const handleSelectImage = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const handlePrevImage = () => {
    const newIndex = currentImageIndex === 0 ? projects.length - 1 : currentImageIndex - 1;
    setSelectedImage(projects[newIndex].image);
    setCurrentImageIndex(newIndex);
  };

  const handleNextImage = () => {
    const newIndex = (currentImageIndex + 1) % projects.length;
    setSelectedImage(projects[newIndex].image);
    setCurrentImageIndex(newIndex);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImage) {
        if (e.key === 'ArrowLeft') handlePrevImage();
        if (e.key === 'ArrowRight') handleNextImage();
        if (e.key === 'Escape') setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, currentImageIndex]);

  return (
    <section id="gallery" className="section-padding bg-gradient-to-br from-dark-900 to-dark-850">
      <div className="section-container space-y-16">
        <div className="text-center space-y-4">
          <div className="inline-block separator" />
          <h2>Il Nostro <span className="gradient-text">Portfolio</span></h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Scopri i progetti che abbiamo realizzato con eccellenza e dedizione
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-xl cursor-pointer h-full"
              onClick={() => handleSelectImage(project.image, idx)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="inline-block w-fit px-3 py-1 bg-accent-cyan/20 border border-accent-cyan/50 text-accent-cyan text-xs font-semibold rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
          <p className="text-gray-400 mb-6">Desideri vedere il portfolio completo?</p>
          <a
            href="/portfolio"
            className="button-primary inline-block"
          >
            Visualizza Tutti i Progetti
          </a>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-accent-cyan transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-accent-cyan transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              handlePrevImage();
            }}
          >
            <ChevronLeft size={32} />
          </button>

          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-accent-cyan transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              handleNextImage();
            }}
          >
            <ChevronRight size={32} />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4">
            <span className="text-white text-sm">
              {currentImageIndex + 1} / {projects.length}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
