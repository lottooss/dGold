import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Services() {
  const { t } = useLanguage();

  const servicesList = [
    {
      titleSq: 'Shitje Bizhuterish Premium',
      titleEn: 'Premium Jewelry Sales',
      descSq: 'Hyni në dyqanin tonë dhe eksploroni një inventar masiv, të kuruar me përpikëri. Nga dizajnet klasike shqiptare te stilet bashkëkohore ndërkombëtare, koleksioni ynë është më i furnizuari në rajon. Çfarëdo që po kërkoni, me gjasë e kemi në ar.',
      descEn: 'Step into our showroom and explore a massive, meticulously curated inventory. From classic Albanian designs to contemporary international styles, our collection is the most well-stocked in the region. Whatever you are looking for, we likely have it in gold.',
      noteSq: 'Shikoni pjesët tona të fundit në Instagram @dragusha_gold.',
      noteEn: 'See our latest pieces on Instagram @dragusha_gold.'
    },
    {
      titleSq: 'Besim & Certifikim i Përjetshëm',
      titleEn: 'Lifetime Trust & Certification',
      descSq: 'Ne besojmë në transparencë totale. Çdo blerje mbështetet nga premtimi ynë i autenticitetit. Ju do të merrni një certifikatë zyrtare për bizhuteritë tuaja, duke ju dhënë besim absolut në cilësinë dhe pastërtinë e arit tuaj.',
      descEn: 'We believe in total transparency. Every purchase is backed by our promise of authenticity. You will receive an official certificate for your jewelry, giving you absolute confidence in the quality and purity of your gold.'
    },
    {
      titleSq: 'Riparim & Kujdes Ekspert',
      titleEn: 'Expert Repair & Aftercare',
      descSq: 'Shërbimi cilësor shtrihet te kujdesi. Ne ofrojmë shërbime riparimi të besueshme për të rikthyer pjesët tuaja të dashura. Për klientët tanë besnikë, jemi krenarë të ofrojmë riparime falas* si një gjest mirënjohjeje, duke u siguruar që bizhuteritë tuaja të qëndrojnë me ju për breza.',
      descEn: 'Quality service extends to care. We offer reliable repair services to restore your beloved pieces. For our loyal customers, we are proud to offer complimentary repairs* as a gesture of our gratitude, ensuring your jewelry stays with you for generations to come.',
      noteSq: '*Zbatohen termat dhe kushtet për riparimet falas për klientët besnikë.',
      noteEn: '*Terms and conditions apply for complimentary repairs for loyal customers.'
    }
  ];

  return (
    <section id="services" className="py-24 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">
            {t('Shërbime Përtej Shitjes', 'Services Beyond the Sale')}
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t(
              'Në Dragusha Gold, marrëdhënia jonë me ju nuk përfundon kur dilni nga dyqani. Ne jemi të përkushtuar të sigurojmë që thesaret tuaja të mbeten po aq të shkëlqyera sa ditën që i bletë.',
              'At Dragusha Gold, our relationship with you doesn\'t end when you leave the store. We are committed to ensuring your treasures remain as brilliant as the day you bought them.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {servicesList.map((service, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-medium mb-3">
                    {t(service.titleSq, service.titleEn)}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-2">
                    {t(service.descSq, service.descEn)}
                  </p>
                  {service.noteSq && (
                    <p className="text-sm text-brand-gold/80 italic">
                      {t(service.noteSq, service.noteEn!)}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4 h-full"
          >
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1589674781759-c21c37956a44?q=80&w=800&auto=format&fit=crop" 
                alt="Jewelry Repair" 
                className="w-full h-64 object-cover rounded-sm"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop" 
                alt="Gold Details" 
                className="w-full h-48 object-cover rounded-sm"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img 
                src="https://images.unsplash.com/photo-1599643478514-4a11018c5000?q=80&w=800&auto=format&fit=crop" 
                alt="Display Case" 
                className="w-full h-48 object-cover rounded-sm"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=800&auto=format&fit=crop" 
                alt="Jewelry Display" 
                className="w-full h-64 object-cover rounded-sm"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
