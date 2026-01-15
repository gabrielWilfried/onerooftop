import React, { createContext, useContext, useState, useEffect  } from 'react';
import type {ReactNode} from 'react';


type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.menu': 'Menu',
    'nav.events': 'Events',
    'nav.reviews': 'Reviews',
    'nav.contact': 'Contact',
    'nav.reserve': 'Reserve',
    
    // Hero
    'hero.subtitle': 'Rooftop Bar & Lounge',
    'hero.headline': 'Elevate Your Evening',
    'hero.description': 'Experience Douala from above at the city\'s most exclusive rooftop destination. Craft cocktails, gourmet cuisine, and breathtaking panoramic views of the Cameroonian skyline.',
    'hero.cta.reserve': 'Book a Table',
    'hero.cta.menu': 'View Menu',
    
    // About
    'about.label': 'Our Story',
    'about.title': 'Where Sky Meets Sophistication',
    'about.p1': 'Perched atop Douala\'s vibrant cityscape, One Rooftop offers an unparalleled escape from the ordinary. Our vision was simple yet bold: create a sanctuary where the energy of Cameroon\'s economic capital meets world-class hospitality.',
    'about.p2': 'Every detail has been meticulously crafted—from our handpicked selection of premium spirits to our chef\'s innovative fusion cuisine that celebrates both local flavors and international excellence. As the sun sets over the Wouri River, watch the city transform into a sea of lights while savoring moments that become memories.',
    'about.p3': 'Whether you\'re celebrating a milestone, hosting an intimate gathering, or simply seeking an extraordinary night out, One Rooftop promises an experience that transcends the ordinary.',
    
    // Menu
    'menu.label': 'Culinary Excellence',
    'menu.title': 'Taste the Heights',
    'menu.description': 'Our menu is a journey through flavors—from signature cocktails crafted by award-winning mixologists to dishes that blend Cameroonian heritage with contemporary flair.',
    'menu.cocktails.title': 'Signature Cocktails',
    'menu.cocktails.description': 'Hand-crafted libations featuring premium spirits and local ingredients',
    'menu.cuisine.title': 'Gourmet Cuisine',
    'menu.cuisine.description': 'A fusion of African flavors and international culinary traditions',
    'menu.wines.title': 'Wine & Champagne',
    'menu.wines.description': 'Curated selection from the world\'s finest vineyards',
    'menu.cta': 'Full Menu',
    
    // Events
    'events.label': 'Unforgettable Moments',
    'events.title': 'Events & Celebrations',
    'events.description': 'From intimate dinners to grand celebrations, our dedicated events team transforms your vision into reality. Private dining, corporate gatherings, and exclusive parties—all with the backdrop of Douala\'s stunning skyline.',
    'events.private.title': 'Private Dining',
    'events.private.description': 'Exclusive spaces for intimate celebrations',
    'events.corporate.title': 'Corporate Events',
    'events.corporate.description': 'Impress clients with unforgettable venues',
    'events.parties.title': 'Special Occasions',
    'events.parties.description': 'Birthdays, anniversaries, and more',
    'events.cta': 'Plan Your Event',
    
    // Reviews
    'reviews.label': 'Guest Experiences',
    'reviews.title': 'What They Say',
    'reviews.1.text': 'An absolutely magical evening. The sunset views, the cocktails, the service—everything was impeccable. One Rooftop is now my go-to for special occasions.',
    'reviews.1.author': 'Marie-Claire D.',
    'reviews.1.role': 'Local Business Owner',
    'reviews.2.text': 'As a frequent traveler, I\'ve visited rooftop bars worldwide. One Rooftop stands among the best. The atmosphere is sophisticated yet welcoming, and the food is exceptional.',
    'reviews.2.author': 'Jean-Pierre M.',
    'reviews.2.role': 'International Consultant',
    'reviews.3.text': 'We hosted our company anniversary here and it exceeded all expectations. The team made everything seamless, and our guests are still talking about it.',
    'reviews.3.author': 'Aminata K.',
    'reviews.3.role': 'Marketing Director',
    
    // Contact
    'contact.label': 'Get in Touch',
    'contact.title': 'Visit Us',
    'contact.address': '1163 street Njo-Njo Bonapriso, Douala, Cameroon',
    'contact.hours': 'Open Daily: 5PM - 2AM',
    'contact.phone': 'Call Us',
    'contact.whatsapp': 'WhatsApp',
    'contact.email': 'Email',
    'contact.directions': 'Get Directions',
    
    // Footer
    'footer.tagline': 'Douala\'s Premier Rooftop Experience',
    'footer.rights': 'All rights reserved.',
    'footer.follow': 'Follow Us',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.menu': 'Menu',
    'nav.events': 'Événements',
    'nav.reviews': 'Avis',
    'nav.contact': 'Contact',
    'nav.reserve': 'Réserver',
    
    // Hero
    'hero.subtitle': 'Bar & Lounge Rooftop',
    'hero.headline': 'Élevez Votre Soirée',
    'hero.description': 'Découvrez Douala d\'en haut dans la destination rooftop la plus exclusive de la ville. Cocktails artisanaux, cuisine gastronomique et vues panoramiques à couper le souffle sur la skyline camerounaise.',
    'hero.cta.reserve': 'Réserver une Table',
    'hero.cta.menu': 'Voir le Menu',
    
    // About
    'about.label': 'Notre Histoire',
    'about.title': 'Là Où le Ciel Rencontre le Raffinement',
    'about.p1': 'Perché au sommet du paysage urbain vibrant de Douala, One Rooftop offre une évasion incomparable de l\'ordinaire. Notre vision était simple mais audacieuse : créer un sanctuaire où l\'énergie de la capitale économique du Cameroun rencontre l\'hospitalité de classe mondiale.',
    'about.p2': 'Chaque détail a été méticuleusement élaboré—de notre sélection soignée de spiritueux premium à la cuisine fusion innovante de notre chef qui célèbre à la fois les saveurs locales et l\'excellence internationale. Au coucher du soleil sur le fleuve Wouri, regardez la ville se transformer en une mer de lumières tout en savourant des moments qui deviennent des souvenirs.',
    'about.p3': 'Que vous célébriez une étape importante, organisiez un rassemblement intime ou cherchiez simplement une soirée extraordinaire, One Rooftop promet une expérience qui transcende l\'ordinaire.',
    
    // Menu
    'menu.label': 'Excellence Culinaire',
    'menu.title': 'Goûtez les Hauteurs',
    'menu.description': 'Notre menu est un voyage à travers les saveurs—des cocktails signatures créés par des mixologues primés aux plats qui mêlent l\'héritage camerounais à une touche contemporaine.',
    'menu.cocktails.title': 'Cocktails Signatures',
    'menu.cocktails.description': 'Créations artisanales avec spiritueux premium et ingrédients locaux',
    'menu.cuisine.title': 'Cuisine Gastronomique',
    'menu.cuisine.description': 'Une fusion des saveurs africaines et des traditions culinaires internationales',
    'menu.wines.title': 'Vins & Champagne',
    'menu.wines.description': 'Sélection soignée des meilleurs vignobles du monde',
    'menu.cta': 'Menu Complet',
    
    // Events
    'events.label': 'Moments Inoubliables',
    'events.title': 'Événements & Célébrations',
    'events.description': 'Des dîners intimes aux grandes célébrations, notre équipe dédiée aux événements transforme votre vision en réalité. Dîners privés, réunions d\'entreprise et fêtes exclusives—le tout avec la skyline époustouflante de Douala en toile de fond.',
    'events.private.title': 'Dîner Privé',
    'events.private.description': 'Espaces exclusifs pour célébrations intimes',
    'events.corporate.title': 'Événements Corporate',
    'events.corporate.description': 'Impressionnez vos clients avec des lieux inoubliables',
    'events.parties.title': 'Occasions Spéciales',
    'events.parties.description': 'Anniversaires, célébrations et plus encore',
    'events.cta': 'Planifier Votre Événement',
    
    // Reviews
    'reviews.label': 'Expériences Clients',
    'reviews.title': 'Ce Qu\'ils Disent',
    'reviews.1.text': 'Une soirée absolument magique. Les vues au coucher du soleil, les cocktails, le service—tout était impeccable. One Rooftop est maintenant mon choix pour les occasions spéciales.',
    'reviews.1.author': 'Marie-Claire D.',
    'reviews.1.role': 'Cheffe d\'entreprise locale',
    'reviews.2.text': 'En tant que voyageur fréquent, j\'ai visité des bars rooftop dans le monde entier. One Rooftop figure parmi les meilleurs. L\'atmosphère est sophistiquée mais accueillante, et la nourriture est exceptionnelle.',
    'reviews.2.author': 'Jean-Pierre M.',
    'reviews.2.role': 'Consultant International',
    'reviews.3.text': 'Nous avons organisé l\'anniversaire de notre entreprise ici et cela a dépassé toutes nos attentes. L\'équipe a tout rendu fluide, et nos invités en parlent encore.',
    'reviews.3.author': 'Aminata K.',
    'reviews.3.role': 'Directrice Marketing',
    
    // Contact
    'contact.label': 'Contactez-Nous',
    'contact.title': 'Rendez-Nous Visite',
    'contact.address': '1163 Rue Njo-Njo Bonapriso, Douala, Cameroun',
    'contact.hours': 'Ouvert tous les jours : 17h - 2h',
    'contact.phone': 'Appelez-Nous',
    'contact.whatsapp': 'WhatsApp',
    'contact.email': 'Email',
    'contact.directions': 'Itinéraire',
    
    // Footer
    'footer.tagline': 'L\'Expérience Rooftop Premier de Douala',
    'footer.rights': 'Tous droits réservés.',
    'footer.follow': 'Suivez-Nous',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Detect browser language
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'fr') {
      setLanguage('fr');
    }
  }, []);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
