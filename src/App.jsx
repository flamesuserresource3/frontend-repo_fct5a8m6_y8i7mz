import HeaderHero from "./components/HeaderHero";
import AboutSection from "./components/AboutSection";
import NewsGallery from "./components/NewsGallery";
import ProductCatalog from "./components/ProductCatalog";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-emerald-50">
      <HeaderHero />
      <AboutSection />
      <NewsGallery />
      <ProductCatalog />
      <Footer />
    </div>
  );
}

export default App;
