import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

interface NavigationProps {
  onCartClick: () => void;
}

export default function Navigation({ onCartClick }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { itemCount } = useCart();
  const location = useLocation();

  const isActiveLink = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname === path) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-gray-800">
      <div className="mx-2 px-4 py-2 my-2 sm:mx-2 sm:pl-4 sm:pr-8  md:px-8 md:mx-8 lg:px-16 xl:mx-24 2xl:mx-64 2xl:py-2 rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-400/10 backdrop-blur ">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center text-3xl font-bold text-white">
              <img className="w-20 py-4" src="/white-logo.png" alt="logo" />
              <span className="text-gradient-blue text-sm">QuattroSound</span>
            </Link>
          </div>

          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className={`audiowide-regular hover:accent-gold transition-colors px-3 py-2 text-sm font-medium ${isActiveLink('/') ? 'accent-gold' : 'text-white-400'}`}>
                Home
              </Link>
              <Link to="/about" className={`audiowide-regular hover:accent-gold transition-colors px-3 py-2 text-sm font-medium ${isActiveLink('/about') ? 'accent-gold' : 'text-white-400'}`}>
                Chi Siamo
              </Link>
              <Link to="/services" className={`audiowide-regular hover:accent-gold transition-colors px-3 py-2 text-sm font-medium ${isActiveLink('/services') ? 'accent-gold' : 'text-white-400'}`}>
                Servizi
              </Link>
              <Link to="/portfolio" className={`audiowide-regular hover:accent-gold transition-colors px-3 py-2 text-sm font-medium ${isActiveLink('/portfolio') ? 'accent-gold' : 'text-white-400'}`}>
                Portfolio
              </Link>
              <Link to="/contacts" className={`audiowide-regular hover:accent-gold transition-colors px-3 py-2 text-sm font-medium ${isActiveLink('/contacts') ? 'accent-gold' : 'text-white-400'}`}>
                Contatti
              </Link>
            </div>
          </div>

          <div className="lg:hidden flex items-center gap-4">
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
              <Link to="/" onClick={() => setIsOpen(false)} className={`audiowide-regular hover:accent-gold block px-3 py-2 text-base font-medium ${isActiveLink('/') ? 'accent-gold' : 'text-gray-400'}`}>
                Home
              </Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className={`audiowide-regular hover:accent-gold block px-3 py-2 text-base font-medium ${isActiveLink('/about') ? 'accent-gold' : 'text-gray-400'}`}>
                Chi Siamo
              </Link>
              <Link to="/services" onClick={() => setIsOpen(false)} className={`audiowide-regular hover:accent-gold block px-3 py-2 text-base font-medium ${isActiveLink('/services') ? 'accent-gold' : 'text-gray-400'}`}>
                Servizi
              </Link>
              <Link to="/portfolio" onClick={() => setIsOpen(false)} className={`audiowide-regular hover:accent-gold block px-3 py-2 text-base font-medium ${isActiveLink('/portfolio') ? 'accent-gold' : 'text-gray-400'}`}>
                Portfolio
              </Link>
              <Link to="/contacts" onClick={() => setIsOpen(false)} className={`audiowide-regular hover:accent-gold block px-3 py-2 text-base font-medium ${isActiveLink('/contacts') ? 'accent-gold' : 'text-gray-400'}`}>
                Contatti
              </Link>
            </div>
          </div>
        )
      }
    </nav >
  );
}
