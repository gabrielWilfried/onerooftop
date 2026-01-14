import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Briefcase, PartyPopper } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useLanguage } from '../contexts/LanguageContext';

const Events = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const eventTypes = [
    {
      icon: Users,
      titleKey: 'events.private.title',
      descKey: 'events.private.description',
    },
    {
      icon: Briefcase,
      titleKey: 'events.corporate.title',
      descKey: 'events.corporate.description',
    },
    {
      icon: PartyPopper,
      titleKey: 'events.parties.title',
      descKey: 'events.parties.description',
    },
  ];

  return (
    <section id="events" className="section-padding bg-jet relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold tracking-[0.3em] uppercase text-sm font-medium">
              {t('events.label')}
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-cream mt-4 mb-6">
              {t('events.title')}
            </h2>
            <p className="text-cream/70 text-lg mb-8 leading-relaxed">
              {t('events.description')}
            </p>

            <Button variant="gold" size="lg">
              {t('events.cta')}
            </Button>
          </motion.div>

          {/* Right - Event Types */}
          <div className="space-y-6">
            {eventTypes.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
                className="flex items-start gap-6 p-6 bg-charcoal/50 backdrop-blur-sm border border-gold/10 rounded-lg hover:border-gold/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                  <event.icon className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-cream mb-2">
                    {t(event.titleKey)}
                  </h3>
                  <p className="text-cream/60">
                    {t(event.descKey)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
