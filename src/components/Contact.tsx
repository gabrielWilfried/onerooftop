import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Clock, Phone, MessageCircle, Mail, Navigation } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: MapPin,
      label: t('contact.address'),
      action: null,
    },
    {
      icon: Clock,
      label: t('contact.hours'),
      action: null,
    },
  ];

  const contactActions = [
    {
      icon: Phone,
      label: t('contact.phone'),
      href: 'tel:+237671033333',
      value: '+237 671 033 333',
    },
    {
      icon: MessageCircle,
      label: t('contact.whatsapp'),
      href: 'https://wa.me/237671033333',
      value: 'Chat with us',
      isWhatsApp: true,
    },
    {
      icon: Mail,
      label: t('contact.email'),
      href: 'mailto:reservations@onerooftop.cm',
      value: 'reservations@onerooftop.cm',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-jet relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent" />

      <div className="container-custom relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold tracking-[0.3em] uppercase text-sm font-medium">
              {t('contact.label')}
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-cream mt-4 mb-8">
              {t('contact.title')}
            </h2>

            {/* Info Items */}
            <div className="space-y-6 mb-10">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-cream/80 text-lg">{item.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Contact Actions */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactActions.map((action, index) => (
                <motion.a
                  key={index}
                  href={action.href}
                  target={action.isWhatsApp ? '_blank' : undefined}
                  rel={action.isWhatsApp ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className={`flex items-center gap-3 p-4 rounded-lg border transition-all duration-300 ${
                    action.isWhatsApp
                      ? 'bg-green-600/20 border-green-500/30 hover:bg-green-600/30 hover:border-green-500/50'
                      : 'bg-gold/5 border-gold/20 hover:bg-gold/10 hover:border-gold/40'
                  }`}
                >
                  <action.icon className={`w-5 h-5 ${action.isWhatsApp ? 'text-green-400' : 'text-gold'}`} />
                  <div>
                    <p className="text-cream/60 text-xs uppercase tracking-wider">{action.label}</p>
                    <p className="text-cream font-medium">{action.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Directions Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8"
            >
              <Button
                variant="goldOutline"
                size="lg"
                className="gap-2"
                onClick={() => window.open('https://maps.google.com/?q=One+Rooftop+Douala+Cameroon', '_blank')}
              >
                <Navigation className="w-4 h-4" />
                {t('contact.directions')}
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - Map or Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-square lg:aspect-auto lg:h-full min-h-[400px] rounded-lg overflow-hidden border border-gold/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15924.077893481684!2d9.683769349999998!3d4.046881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610d93d0c3b8d9%3A0x9b3b19e31cdfc01f!2sBonanjo%2C%20Douala%2C%20Cameroon!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(90%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="One Rooftop Location"
              />
            </div>
            
            {/* Overlay Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-jet/90 backdrop-blur-md border border-gold/30 rounded-lg p-6">
              <h3 className="font-display text-xl text-cream mb-2">One Rooftop</h3>
              <p className="text-cream/60 text-sm">1163 Rue Njo-Njo, Douala, Cameroon</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
