import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Reviews = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const reviews = [
    {
      textKey: 'reviews.1.text',
      authorKey: 'reviews.1.author',
      roleKey: 'reviews.1.role',
    },
    {
      textKey: 'reviews.2.text',
      authorKey: 'reviews.2.author',
      roleKey: 'reviews.2.role',
    },
    {
      textKey: 'reviews.3.text',
      authorKey: 'reviews.3.author',
      roleKey: 'reviews.3.role',
    },
  ];

  return (
    <section id="reviews" className="section-padding bg-charcoal relative overflow-hidden">
      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold tracking-[0.3em] uppercase text-sm font-medium">
            {t('reviews.label')}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream mt-4">
            {t('reviews.title')}
          </h2>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
              className="relative"
            >
              <div className="bg-jet/50 backdrop-blur-sm border border-gold/10 rounded-lg p-8 h-full hover:border-gold/30 transition-all duration-300">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-gold/30 mb-4" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-cream/80 mb-6 leading-relaxed italic">
                  "{t(review.textKey)}"
                </p>

                {/* Author */}
                <div className="border-t border-gold/10 pt-4">
                  <p className="text-cream font-medium">
                    {t(review.authorKey)}
                  </p>
                  <p className="text-cream/50 text-sm">
                    {t(review.roleKey)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
