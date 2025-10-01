import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { StrategySection } from "./components/StrategySection";
import { TeamSection } from "./components/TeamSection";
import { InsightsSection } from "./components/InsightsSection";
import { MediaSection } from "./components/MediaSection";
import { ResultsSection } from "./components/ResultsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <StrategySection />
        <TeamSection />
        <InsightsSection />
        <MediaSection />
        <ResultsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}