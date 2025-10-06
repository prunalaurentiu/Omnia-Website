import { HeroSection } from "../components/HeroSection";
import { StrategySection } from "../components/StrategySection";
import { TeamSection } from "../components/TeamSection";
import { InsightsSection } from "../components/InsightsSection";
import { MediaSection } from "../components/MediaSection";
import { ResultsSection } from "../components/ResultsSection";
import { ContactSection } from "../components/ContactSection";

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <StrategySection />
      <TeamSection />
      <InsightsSection />
      <MediaSection />
      <ResultsSection />
      <ContactSection />
    </main>
  );
}
