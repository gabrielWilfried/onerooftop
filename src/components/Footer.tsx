import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import logoIcon from '../assets/logo-icon.png';

const Footer = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/one_rooftop', label: 'Instagram' },
    { icon: Facebook, href: 'https://web.facebook.com/onerooftopdouala', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/onerooftop', label: 'Twitter' },
  ];

  return (
    <footer className="bg-jet border-t border-gold/10">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <img src={logoIcon} alt="One Rooftop" className="h-12 w-auto" />
            <p className="text-cream/50 text-sm">{t('footer.tagline')}</p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-cream/50 text-sm uppercase tracking-wider">
              {t('footer.follow')}
            </span>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-jet transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-gold/10 text-center">
          <p className="text-cream/40 text-sm">
            © {new Date().getFullYear()} One Rooftop. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
