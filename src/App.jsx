import HeaderHero from './components/HeaderHero';
import AboutSection from './components/AboutSection';
import NewsGallery from './components/NewsGallery';
import ProductCatalog from './components/ProductCatalog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50 text-emerald-900">
      <HeaderHero />
      <main>
        <AboutSection />
        <NewsGallery />
        <ProductCatalog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
