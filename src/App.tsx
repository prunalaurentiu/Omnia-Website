import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { StrategySection } from "./components/StrategySection";
import { TeamSection } from "./components/TeamSection";
import { InsightsSection } from "./components/InsightsSection";
import { MediaSection } from "./components/MediaSection";
import { ResultsSection } from "./components/ResultsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { SectionColorProvider } from "./components/SectionColorProvider";
import { TextContentProvider } from "./components/TextContentProvider";
import { TextEditingToolbar } from "./components/TextEditingToolbar";

export default function App() {
  return (
    <TextContentProvider>
      <SectionColorProvider>
        <div className="min-h-screen bg-white">
          <TextEditingToolbar />
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
      </SectionColorProvider>
    </TextContentProvider>
  );
}