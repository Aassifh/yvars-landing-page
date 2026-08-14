import Nav from './components/Nav';
import Hero from './components/Hero';
import ProductStory from './components/ProductStory';
import UseCases from './components/UseCases';
import Audience from './components/Audience';
import Workspace from './components/Workspace';
import Why from './components/Why';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileCta from './components/MobileCta';
import { useLocale } from './lib/LocaleContext';

export default function App() {
  const { copy } = useLocale();

  return (
    <>
      <a
        href="#produit"
        className="absolute top-4 start-4 z-50 -translate-y-[220%] rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm focus-visible:translate-y-0"
      >
        {copy.a11y.skip}
      </a>
      <Nav />
      <div className="relative z-10 pb-[calc(5.75rem+env(safe-area-inset-bottom))] md:pb-0">
        <main>
          <Hero />
          <ProductStory />
          <UseCases />
          <Audience />
          <Workspace />
          <Why />
          <Faq />
          <Contact />
        </main>
        <Footer />
      </div>
      <MobileCta />
    </>
  );
}
