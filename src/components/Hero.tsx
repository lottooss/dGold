import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2940&auto=format&fit=crop")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight"
        >
          {t("Thesari i Arit në Shkodër.", "Shkodër's Treasury of Gold.")}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-200 mb-10 font-light max-w-2xl mx-auto"
        >
          {t(
            "Zbuloni zgjedhjen më të mirë të bizhuterive të certifikuara në Shqipëri. Aty ku cilësia e jashtëzakonshme takohet me vlerën e pakrahasueshme.",
            "Discover Albania's finest selection of certified jewelry. Where exceptional quality meets unmatched value."
          )}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#contact" 
            className="px-8 py-4 bg-brand-gold text-brand-dark font-medium tracking-wide hover:bg-yellow-500 transition-colors w-full sm:w-auto text-center"
          >
            {t("Vizitoni Dyqanin Tonë", "Visit Our Showroom")}
          </a>
          <a 
            href="#collection" 
            className="px-8 py-4 bg-transparent border border-white text-white font-medium tracking-wide hover:bg-white hover:text-brand-dark transition-colors w-full sm:w-auto text-center"
          >
            {t("Eksploroni Koleksionin", "Explore the Collection")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
