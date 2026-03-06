import { ShieldCheck, Gem, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-brand-gold" />,
      titleSq: '100% Autentike e Certifikuar',
      titleEn: '100% Certified Authentic',
      descSq: 'Çdo bizhuteri shoqërohet me një certifikatë zyrtare autenticiteti, duke garantuar pastërtinë dhe cilësinë e investimit tuaj.',
      descEn: 'Every piece of jewelry is accompanied by an official certificate of authenticity, guaranteeing the purity and quality of your investment.'
    },
    {
      icon: <Gem className="w-10 h-10 text-brand-gold" />,
      titleSq: 'Vlerë e Pakrahasueshme',
      titleEn: 'Unbeatable Value',
      descSq: 'Ne ofrojmë çmime konkurruese që tejkalojnë rajonet fqinje. Pse të shkoni në Mal të Zi apo Serbi? Vlera më e mirë është pikërisht këtu në Shkodër.',
      descEn: 'We offer competitive pricing that surpasses neighboring regions. Why go to Montenegro or Serbia? The best value is right here in Shkodër.'
    },
    {
      icon: <HeartHandshake className="w-10 h-10 text-brand-gold" />,
      titleSq: 'Trajtim Mbretëror',
      titleEn: 'The Royal Treatment',
      descSq: 'Nga momenti që hyni, stafi ynë ekspert sigurohet që të ndiheni si mbretërorë, duke ofruar udhëzime me durim dhe profesionalizëm.',
      descEn: 'From the moment you enter, our expert staff ensures you feel like royalty, offering guidance with patience and professionalism.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-4">
            {t('Standardi i Besimit në Bizhuteri', 'The Standard of Trust in Fine Jewelry')}
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-6 p-4 bg-gray-50 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-brand-dark">
                {t(feature.titleSq, feature.titleEn)}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t(feature.descSq, feature.descEn)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
