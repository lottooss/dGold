import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-brand-dark mb-4">
            {t('Na Gjeni në Shkodër', 'Find Us in Shkodër')}
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t(
              'Ne ndodhemi në rrugën kryesore të Shkodrës, duke pritur t\'ju mirëpresim me një buzëqeshje dhe një përzgjedhje që rivalizon kryeqytetin. Pavarësisht nëse jeni vendas apo vizitoni nga një qytet tjetër, bëjeni Dragusha Gold ndalesën tuaj të parë për luks dhe vlerë.',
              'We are located on the main thoroughfare of Shkodër, waiting to welcome you with a smile and a selection that rivals the capital. Whether you are a local or visiting from another city, make Dragusha Gold your first stop for luxury and value.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white shadow-sm rounded-sm overflow-hidden">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-10 lg:p-16 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-serif text-brand-dark mb-8">
              {t('Vendndodhja & Detajet', 'Location & Details')}
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-brand-gold mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-brand-dark mb-1">{t('Adresa', 'Address')}</h4>
                  <p className="text-gray-600">Rruga Nuri Bushati, Shkodër, Albania</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-6 h-6 text-brand-gold mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-brand-dark mb-1">{t('Telefoni', 'Phone')}</h4>
                  <p className="text-gray-600">+355 67 405 1361</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-brand-gold mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-brand-dark mb-1">Email</h4>
                  <a href="mailto:info@dragushagold.al" className="text-gray-600 hover:text-brand-gold transition-colors">
                    info@dragushagold.al
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Instagram className="w-6 h-6 text-brand-gold mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-brand-dark mb-1">Instagram</h4>
                  <a 
                    href="https://www.instagram.com/dragusha_gold" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-brand-gold transition-colors"
                  >
                    @dragusha_gold
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100">
              <h3 className="text-2xl font-serif text-brand-dark mb-6">
                {t('Orari i Punës', 'Hours of Operation')}
              </h3>
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-brand-gold mr-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-600 mb-2">
                    {t('Ne jemi të hapur çdo ditë për t\'iu përshtatur orarit tuaj.', 'We are open every single day to accommodate your schedule.')}
                  </p>
                  <p className="font-medium text-brand-dark">
                    {t('E Hënë – E Diel: 8:00 AM – 9:00 PM', 'Monday – Sunday: 8:00 AM – 9:00 PM')}
                  </p>
                  <p className="text-sm text-brand-gold italic mt-1">
                    {t('Nuk kemi ditë pushimi. Ne jemi këtu për ju.', 'No closing days. We are here for you.')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map & Storefront */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full min-h-[400px] flex flex-col"
          >
            {/* Storefront Image */}
            <div className="h-1/2 relative">
              <img 
                src="https://images.unsplash.com/photo-1573497019230-1cbdf00e1234?q=80&w=1000&auto=format&fit=crop" 
                alt="Dragusha Gold Storefront" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
            
            {/* Google Maps Placeholder */}
            <div className="h-1/2 bg-gray-200 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2951.107026601452!2d19.5034!3d42.0683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134e005f0b0b0b0b%3A0x0!2zNDLCsDA0JzA1LjkiTiAxOcKwMzAnMTIuMiJF!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
                title="Dragusha Gold Location"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
