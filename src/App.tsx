import { useEffect } from "react";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { TeamSection } from "./components/TeamSection";
import { StrategySection } from "./components/StrategySection";
import { InsightsSection } from "./components/InsightsSection";
import { MediaSection } from "./components/MediaSection";
import { ResultsSection } from "./components/ResultsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { SectionColorProvider } from "./components/SectionColorProvider";
import { TextContentProvider } from "./components/TextContentProvider";
import { TextEditingToolbar } from "./components/TextEditingToolbar";
import { InsightArticlePage } from "./pages/InsightArticlePage";

function Layout() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-white">
      <TextEditingToolbar />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function HomePage() {
  return (
    <>
      <HeroSection />
      <TeamSection />
      <StrategySection />
      <InsightsSection />
      <MediaSection />
      <ResultsSection />
      <ContactSection />
    </>
  );
}

export default function App() {
  return (
    <TextContentProvider>
      <SectionColorProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="insights/:slug" element={<InsightArticlePage />} />
          </Route>
        </Routes>
      </SectionColorProvider>
    </TextContentProvider>
  );
}