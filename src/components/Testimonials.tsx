import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      quoteSq: "Më të mirët, hyn dhe ndihesh si mbret, komunikim fantastik... shërbim me cilësi të lartë.",
      quoteEn: "The best, you enter and feel like a king, fantastic communication... high quality service.",
      author: "Ergi H.",
      initial: "E"
    },
    {
      quoteSq: "Shumë të furnizuar... Merrni një certifikatë për bizhuteritë që blini. Shitësit janë miqësorë dhe të dobishëm. Ata riparuan vathët e mi falas pas një viti...",
      quoteEn: "Very well-stocked... You get a certificate for the jewelry you buy. The sellers are friendly and helpful. They repaired my earrings for free after a year...",
      author: "Nada S.",
      initial: "N"
    },
    {
      quoteSq: "Nuk ka rëndësi në cilin qytet jeni në Shqipëri — për ar ia vlen të vini këtu.",
      quoteEn: "It doesn't matter which city you are in in Albania — for gold it is worth coming here.",
      author: "Laura D.",
      initial: "L"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 border border-brand-gold/10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 border border-brand-gold/10 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-brand-dark mb-4">
            {t('Zëri i Komunitetit Tonë', 'The Voice of Our Community')}
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t(
              'Ne krenohemi me përvojën që ofrojmë. Por mos na besoni vetëm ne—ja çfarë kanë për të thënë klientët tanë për hyrjen në Dragusha Gold.',
              'We pride ourselves on the experience we provide. But don\'t just take our word for it—here\'s what our clients have to say about walking into Dragusha Gold.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-brand-light p-8 rounded-sm relative border border-gray-100"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-brand-gold/20" />
              <div className="mb-6">
                <p className="text-gray-600 italic leading-relaxed relative z-10">
                  "{t(testimonial.quoteSq, testimonial.quoteEn)}"
                </p>
              </div>
              <div className="flex items-center mt-auto pt-6 border-t border-gray-200">
                <div className="w-10 h-10 rounded-full bg-brand-gold text-white flex items-center justify-center font-serif font-bold mr-4">
                  {testimonial.initial}
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-brand-dark">{testimonial.author}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
