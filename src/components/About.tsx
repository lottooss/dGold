import { Instagram } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop" 
                alt="Dragusha Gold Team Assisting Customer" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-gold/10 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 border border-brand-gold/30 -z-10"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl font-serif text-brand-dark mb-6">
              {t('Historia Jonë: Zemra e Arit në Shkodër', 'Our Story: The Heart of Gold in Shkodër')}
            </h2>
            <div className="w-16 h-1 bg-brand-gold mb-8"></div>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                {t(
                  'Në zemër të Shkodrës, përgjatë Rrugës Nuri Bushati, ndodhet një destinacion që në heshtje është bërë sinonim i besimit, luksit dhe vlerës: ',
                  'In the heart of Shkodër, along Rruga Nuri Bushati, lies a destination that has quietly become synonymous with trust, luxury, and value: '
                )}
                <strong className="text-brand-dark font-serif">Dragusha Gold</strong>.
              </p>
              <p>
                {t(
                  'Ne filluam me një filozofi të thjeshtë—që bizhuteritë e bukura nuk duhet të jenë një luks frikësues i rezervuar për pak njerëz, por një festim i arritshëm i momenteve të jetës për shumë njerëz. Gjatë viteve, ne kemi ndërtuar më shumë se një dyqan; kemi ndërtuar një reputacion. Ne njihemi si vendi ku zgjedhja është e madhe, cilësia është absolute dhe çmimet e bëjnë udhëtimin të vlefshëm.',
                  'We began with a simple philosophy—that fine jewelry should not be an intimidating luxury reserved for the few, but an accessible celebration of life\'s moments for the many. Over the years, we have built more than a store; we have built a reputation. We are known as the place where the selection is vast, the quality is absolute, and the prices make the trip worthwhile.'
                )}
              </p>
              <p>
                {t(
                  'Ekipi ynë e kupton që blerja e arit është personale. Pavarësisht nëse jeni duke kërkuar për unazën e përsosur të fejesës, një pjesë investimi të përjetshme, ose thjesht një dhuratë për të ndriçuar ditën e dikujt, ne e trajtojmë udhëtimin tuaj me respektin dhe vëmendjen që meriton. Ne nuk shesim thjesht bizhuteri; ne kurojmë kujtime dhe garantojmë autenticitetin e tyre për një jetë.',
                  'Our team understands that buying gold is personal. Whether you are searching for the perfect engagement ring, a timeless investment piece, or simply a gift to brighten someone\'s day, we treat your journey with the respect and attention it deserves. We don\'t just sell jewelry; we curate memories and guarantee their authenticity for a lifetime.'
                )}
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-100">
              <a 
                href="https://www.instagram.com/dragusha_gold" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-brand-dark hover:text-brand-gold transition-colors font-medium"
              >
                <Instagram className="w-6 h-6 mr-3" />
                {t('Ndiqni mbërritjet tona të fundit dhe historitë e përditshme @dragusha_gold', 'Follow our latest arrivals and daily stories @dragusha_gold')}
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
