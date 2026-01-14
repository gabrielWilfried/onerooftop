import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Wine, UtensilsCrossed, Martini } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useLanguage } from '../contexts/LanguageContext';

const MenuSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const menuCategories = [
    {
      icon: Martini,
      titleKey: 'menu.cocktails.title',
      descKey: 'menu.cocktails.description',
      items: ['Golden Sunset', 'Wouri Breeze', 'Douala Nights', 'Rooftop Spritz'],
    },
    {
      icon: UtensilsCrossed,
      titleKey: 'menu.cuisine.title',
      descKey: 'menu.cuisine.description',
      items: ['Grilled Prawns', 'Ndolé Fusion', 'Wagyu Brochettes', 'Tropical Ceviche'],
    },
    {
      icon: Wine,
      titleKey: 'menu.wines.title',
      descKey: 'menu.wines.description',
      items: ['Dom Pérignon', 'Château Margaux', 'Opus One', 'Veuve Clicquot'],
    },
  ];

  return (
    <section id="menu" className="section-padding bg-charcoal relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--gold)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold tracking-[0.3em] uppercase text-sm font-medium">
            {t('menu.label')}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream mt-4 mb-6">
            {t('menu.title')}
          </h2>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto">
            {t('menu.description')}
          </p>
        </motion.div>

        {/* Menu Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {menuCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
              className="group"
            >
              <div className="bg-jet/50 backdrop-blur-sm border border-gold/20 rounded-lg p-8 h-full hover:border-gold/40 transition-all duration-500 hover:shadow-gold">
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-8 h-8 text-jet" />
                </div>

                {/* Title & Description */}
                <h3 className="font-display text-2xl text-cream mb-3">
                  {t(category.titleKey)}
                </h3>
                <p className="text-cream/60 mb-6">
                  {t(category.descKey)}
                </p>

                {/* Sample Items */}
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-cream/80 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button variant="goldOutline" size="lg">
            {t('menu.cta')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
