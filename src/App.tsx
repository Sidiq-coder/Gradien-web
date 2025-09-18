import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { Articles } from './components/Articles';
import { Ecommerce } from './components/Ecommerce';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Articles />
        <Ecommerce />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}