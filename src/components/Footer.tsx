import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Chi Siamo', href: '/about' },
    { label: 'Servizi', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contatti', href: '/contacts' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
    { label: 'Termini e Condizioni', href: '/terms' },
  ];

  const socials = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gradient-to-b from-dark-850 to-dark-900 border-t border-white/5">
      <div className="section-container section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pb-16 border-b border-white/5">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src="/white-logo.png" alt="QuattroSound" className="h-10 w-auto" />
              <span className="font-display text-xl font-bold gradient-text">QuattroSound</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Leader nel noleggio e installazione di schermi LED e impianti audio professionali per eventi memorabili.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 bg-white/5 hover:gradient-accent rounded-lg flex items-center justify-center transition-all group"
                >
                  <Icon size={18} className="text-gray-300 group-hover:text-black transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white">Link Rapidi</h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="text-sm text-gray-400 hover:text-accent-cyan transition-colors flex items-center gap-2 group"
                  >
                    {label}
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="text-sm text-gray-400 hover:text-accent-cyan transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white">Contattaci</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-accent-cyan flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300 font-medium">Telefono</p>
                  <a href="tel:+393208980405" className="text-sm text-gray-400 hover:text-accent-cyan transition-colors">
                    +39 320 898 0405
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-accent-cyan flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300 font-medium">Email</p>
                  <a href="mailto:info@quattrosound.it" className="text-sm text-gray-400 hover:text-accent-cyan transition-colors">
                    info@quattrosound.it
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent-cyan flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300 font-medium">Indirizzo</p>
                  <p className="text-sm text-gray-400">
                    Via Monte Nero 36<br />00012 Guidonia, Roma
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} QuattroSound. Tutti i diritti riservati.
          </p>
          <p className="text-xs text-gray-600">
            Realizzato con <span className="text-accent-cyan">•</span> Qualità Premium
          </p>
        </div>
      </div>
    </footer>
  );
}
