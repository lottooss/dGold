import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function SignatureCollection() {
  const { t } = useLanguage();

  const collection = [
    {
      titleSq: 'Byzylyku Sovran',
      titleEn: 'The Sovereign Link Bracelet',
      descSq: 'Një pjesë e veçantë për njohësit modernë. I rëndë, i punuar me dorë dhe i dizajnuar për t\'u mbajtur çdo ditë.',
      descEn: 'A statement piece for the modern connoisseur. Heavy, hand-finished, and designed to be worn every day.',
      image: 'https://images.unsplash.com/photo-1599643478514-4a11018c5000?q=80&w=1000&auto=format&fit=crop',
    },
    {
      titleSq: 'Vathë Tradicionalë Filigran',
      titleEn: 'Traditional Filigree Drops',
      descSq: 'Një homazh për trashëgiminë shqiptare. Të punuar me përpikëri me fije të përdredhura ari për një pamje të përjetshme.',
      descEn: 'A tribute to Albanian heritage. Meticulously crafted with twisted threads of gold for a timeless look.',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop',
    },
    {
      titleSq: 'Rrethi i Përjetshëm',
      titleEn: 'The Eternal Band',
      descSq: 'Simbolizon përjetësinë. Në dispozicion në gjerësi dhe përfundime të ndryshme, i vulosur për pastërti.',
      descEn: 'Symbolizing forever. Available in various widths and finishes, hallmarked for purity.',
      image: 'https://images.unsplash.com/photo-1605100804763-247f66126e28?q=80&w=1000&auto=format&fit=crop',
    },
    {
      titleSq: 'Byzylyk Delikat',
      titleEn: 'Delicate Link Bracelet',
      descSq: 'Elegancë e lehtë. Pjesa perfekte për t\'u kombinuar ose një dhuratë delikate për dikë të veçantë.',
      descEn: 'Effortless elegance. The perfect layering piece or a subtle gift for someone special.',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop',
    },
    {
      titleSq: 'Vathë Rreth Venecianë',
      titleEn: 'Venetian Hoops',
      descSq: 'Të guximshëm, të shkëlqyer dhe padyshim elegantë. Një element kryesor për çdo garderobë bizhuterish.',
      descEn: 'Bold, brilliant, and undeniably chic. A staple for any jewelry wardrobe.',
      image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=1000&auto=format&fit=crop',
    },
    {
      titleSq: 'Varëse Solitare',
      titleEn: 'The Solitaire Pendant',
      descSq: 'E thjeshtë, e pastër dhe rrezatuese. Një simbol besimi ose një deklaratë minimaliste.',
      descEn: 'Simple, pure, and radiant. A symbol of faith or a minimalist statement.',
      image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1000&auto=format&fit=crop',
    }
  ];

  return (
    <section id="collection" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-brand-dark mb-4">
            {t('Koleksioni Ynë Unik', 'Our Signature Collection')}
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t(
              'Zbuloni pjesë që përcaktojnë elegancën. Nga mjeshtëria tradicionale shqiptare te dizajnet moderne minimaliste.',
              'Discover pieces that define elegance. From traditional Albanian craftsmanship to modern minimalist designs.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collection.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-white aspect-[4/5] mb-4">
                <img 
                  src={item.image} 
                  alt={t(item.titleSq, item.titleEn)} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-serif font-medium text-brand-dark mb-2">
                {t(item.titleSq, item.titleEn)}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t(item.descSq, item.descEn)}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-serif text-brand-dark mb-6">
            {t('Gjeni thesarin tuaj të radhës.', 'Find your next treasure.')}
          </h3>
          <a 
            href="#contact" 
            className="inline-block px-10 py-4 bg-brand-dark text-white font-medium tracking-wide hover:bg-brand-gold transition-colors"
          >
            {t('Vizitoni Dyqanin Tonë', 'Visit Our Showroom')}
          </a>
        </div>
      </div>
    </section>
  );
}
