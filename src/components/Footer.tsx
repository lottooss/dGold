import { Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <a href="#home" className="text-2xl font-serif font-bold tracking-wider text-white block mb-4">
              DRAGUSHA <span className="text-brand-gold">GOLD</span>
            </a>
            <p className="text-gray-400 font-serif italic mb-6">
              {t('Cilësi e Certifikuar. Trajtim Mbretëror.', 'Certified Quality. Royal Treatment.')}
            </p>
            <a 
              href="https://www.instagram.com/dragusha_gold" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-400 hover:text-brand-gold transition-colors"
            >
              <Instagram className="w-5 h-5 mr-2" />
              @dragusha_gold
            </a>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-2 flex flex-col md:flex-row md:justify-end gap-8 md:gap-16">
            <div>
              <h4 className="text-lg font-serif font-medium mb-4 text-white">{t('Eksploro', 'Explore')}</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-400 hover:text-brand-gold transition-colors">{t('Kreu', 'Home')}</a></li>
                <li><a href="#collection" className="text-gray-400 hover:text-brand-gold transition-colors">{t('Koleksioni Unik', 'Signature Collection')}</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-brand-gold transition-colors">{t('Rreth Nesh', 'About Us')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-serif font-medium mb-4 text-white">{t('Informacion', 'Information')}</h4>
              <ul className="space-y-3">
                <li><a href="#services" className="text-gray-400 hover:text-brand-gold transition-colors">{t('Shërbimet', 'Services')}</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-brand-gold transition-colors">{t('Dëshmitë', 'Testimonials')}</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-brand-gold transition-colors">{t('Kontakt', 'Contact')}</a></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Dragusha Gold. {t('Të gjitha të drejtat e rezervuara.', 'All rights reserved.')}
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Shkodër, Albania
          </p>
        </div>
      </div>
    </footer>
  );
}
