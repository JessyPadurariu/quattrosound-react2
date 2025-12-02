import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationProps {
  onCartClick: () => void;
}

export default function Navigation({ onCartClick }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveLink = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname === path) return true;
    return false;
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Chi Siamo', path: '/about' },
    { label: 'Servizi', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Contatti', path: '/contacts' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass py-3 md:py-4'
          : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <div className="section-container flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <img src="/white-logo.png" alt="QuattroSound" className="h-10 md:h-12 w-auto" />
          <span className="font-display text-xl md:text-2xl font-bold gradient-text hidden sm:block">
            QuattroSound
          </span>
        </Link>

        <div className="hidden lg:block">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  isActiveLink(item.path)
                    ? 'text-accent-cyan font-semibold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="tel:+393208980405"
            className="hidden sm:block button-secondary text-sm"
          >
            Chiamaci
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-accent-cyan transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden mt-4 glass m-4 rounded-xl p-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 rounded-lg transition-colors ${
                isActiveLink(item.path)
                  ? 'bg-accent-cyan/20 text-accent-cyan font-semibold'
                  : 'text-gray-300 hover:bg-white/5'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
