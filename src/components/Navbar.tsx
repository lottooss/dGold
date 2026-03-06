import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Globe } from 'lucide-react';
import { cn } from '../lib/utils';
import { useLanguage } from '../contexts/LanguageContext';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { nameSq: 'Kreu', nameEn: 'Home', href: '#home' },
    { nameSq: 'Koleksioni Unik', nameEn: 'Signature Collection', href: '#collection' },
    { nameSq: 'Rreth Nesh', nameEn: 'About Us', href: '#about' },
    { nameSq: 'Shërbimet', nameEn: 'Services', href: '#services' },
    { nameSq: 'Dëshmitë', nameEn: 'Testimonials', href: '#testimonials' },
    { nameSq: 'Kontakt', nameEn: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className="text-2xl font-serif font-bold tracking-wider text-brand-dark">
              DRAGUSHA <span className="text-brand-gold">GOLD</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium tracking-wide transition-colors hover:text-brand-gold',
                  isScrolled ? 'text-gray-800' : 'text-gray-100'
                )}
              >
                {t(link.nameSq, link.nameEn)}
              </a>
            ))}
            
            <div className="flex items-center space-x-4 border-l border-gray-300/30 pl-4">
              <button
                onClick={toggleLanguage}
                className={cn(
                  'flex items-center text-sm font-medium transition-colors hover:text-brand-gold',
                  isScrolled ? 'text-gray-800' : 'text-gray-100'
                )}
              >
                <Globe className="w-4 h-4 mr-1" />
                {language === 'sq' ? 'EN' : 'AL'}
              </button>
              
              <a
                href="https://www.instagram.com/dragusha_gold"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'transition-colors hover:text-brand-gold',
                  isScrolled ? 'text-gray-800' : 'text-gray-100'
                )}
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className={cn(
                'flex items-center text-sm font-medium transition-colors hover:text-brand-gold',
                isScrolled ? 'text-gray-800' : 'text-gray-100'
              )}
            >
              <Globe className="w-4 h-4 mr-1" />
              {language === 'sq' ? 'EN' : 'AL'}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'focus:outline-none',
                isScrolled ? 'text-gray-800' : 'text-gray-100'
              )}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-800 hover:text-brand-gold hover:bg-gray-50 rounded-md"
              >
                {t(link.nameSq, link.nameEn)}
              </a>
            ))}
            <a
              href="https://www.instagram.com/dragusha_gold"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-3 text-base font-medium text-gray-800 hover:text-brand-gold hover:bg-gray-50 rounded-md"
            >
              <Instagram className="w-5 h-5 mr-2" />
              {t('Na ndiqni në Instagram', 'Follow on Instagram')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
