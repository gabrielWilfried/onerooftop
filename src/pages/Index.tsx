import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import MenuSection from '../components/MenuSection';
import Events from '../components/Events';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <main className="bg-jet text-cream overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <MenuSection />
      <Events />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
