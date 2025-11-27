import { Menu, X, ShoppingCart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';


interface NavigationProps {
  onCartClick: () => void;
}

export default function Navigation({ onCartClick }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { itemCount } = useCart();
  const [activeSection, setActiveSection] = useState<string>('home');


  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = 'home';

      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const offset = window.innerHeight / 3; // trigger prima che la sezione sia tutta visibile
        if (sectionTop <= offset) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // set iniziale
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getButtonClasses = (id: string, baseClasses: string) =>
    `${baseClasses} ${activeSection === id ? 'bg-orange-500 text-black rounded-full' : ''}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-gray-800">
      <div className="mx-2 px-4 py-2 my-2 sm:mx-2 sm:pl-4 sm:pr-8  md:px-8 md:mx-8 lg:px-16 xl:mx-24 2xl:mx-64 2xl:py-2 rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-400/10 backdrop-blur ">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="flex items-center text-3xl font-bold text-white">
              <img className="w-20 py-4" src="/white-logo.png" alt="logo" />
              <span className="text-gradient-blue text-sm">QuattroSound</span>
            </h1>
          </div>

          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('home')} className=" audiowide-regular text-white-400 hover:accent-gold transition-colors px-3 py-2 text-sm font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="audiowide-regular text-white-400 hover:accent-gold transition-colors px-3 py-2 text-sm font-medium">
                Chi Siamo
              </button>
              <button onClick={() => scrollToSection('services')} className="audiowide-regular text-white-400 hover:accent-gold transition-colors px-3 py-2 text-sm font-medium">
                Servizi
              </button>
              <button onClick={() => scrollToSection('gallery')} className="audiowide-regular text-white-400 hover:accent-gold transition-colors px-3 py-2 text-sm font-medium">
                Portfolio
              </button>
              {/* <button onClick={() => scrollToSection('products')} className="text-white-400 hover:accent-gold transition-colors px-3 py-2 text-sm font-medium">
                Shop
              </button> */}
              <button onClick={() => scrollToSection('contact')} className="audiowide-regular text-white-400 hover:accent-gold transition-colors px-3 py-2 text-sm font-medium">
                Contatti
              </button>
              {/* <button
                onClick={onCartClick}
                className="relative gradient-gold text-black px-6 py-2 rounded-lg text-sm font-medium transition-all hover:shadow-lg hover:shadow-yellow-500/20 flex items-center gap-2"
              >
                <ShoppingCart size={18} />
                Carrello
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button> */}
            </div>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            {/* <button
              onClick={onCartClick}
              className="relative text-gray-400 hover:accent-gold transition-colors"
            >
              <ShoppingCart size={24} />
              {~itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button> */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:accent-gold"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {
        isOpen && (
          <div className="lg:hidden  bg-gradient-to-r from-blue-900/90 to-cyan-700/90 border-t border-gray-800 px-8 mx-8 rounded-xl">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button onClick={() => scrollToSection('home')} className="audiowide-regular text-white-400 hover:accent-gold block px-3 py-2 text-base font-medium w-full text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="audiowide-regular text-gray-400 hover:accent-gold block px-3 py-2 text-base font-medium w-full text-left">
                Chi Siamo
              </button>
              <button onClick={() => scrollToSection('services')} className="audiowide-regular text-gray-400 hover:accent-gold block px-3 py-2 text-base font-medium w-full text-left">
                Servizi
              </button>
              <button onClick={() => scrollToSection('gallery')} className="audiowide-regular text-gray-400 hover:accent-gold block px-3 py-2 text-base font-medium w-full text-left">
                Portfolio
              </button>
              {/* <button onClick={() => scrollToSection('products')} className="audiowide-regular text-gray-400 hover:accent-gold block px-3 py-2 text-base font-medium w-full text-left">
                Shop
              </button> */}
              <button onClick={() => scrollToSection('contact')} className="audiowide-regular text-gray-400 hover:accent-gold block px-3 py-2 text-base font-medium w-full text-left">
                Contatti
              </button>
            </div>
          </div>
        )
      }
    </nav >
  );
}
