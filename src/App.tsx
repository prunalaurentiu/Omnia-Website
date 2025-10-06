import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SectionColorProvider } from "./components/SectionColorProvider";
import { TextContentProvider } from "./components/TextContentProvider";
import { TextEditingToolbar } from "./components/TextEditingToolbar";
import { HomePage } from "./pages/HomePage";
import { InsightArticlePage } from "./pages/InsightArticlePage";
import { AllInsightsPage } from "./pages/AllInsightsPage";

export default function App() {
  return (
    <BrowserRouter>
      <TextContentProvider>
        <SectionColorProvider>
          <div className="min-h-screen bg-white flex flex-col">
            <TextEditingToolbar />
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/insights" element={<AllInsightsPage />} />
              <Route path="/insights/:slug" element={<InsightArticlePage />} />
            </Routes>
            <Footer />
          </div>
        </SectionColorProvider>
      </TextContentProvider>
    </BrowserRouter>
  );
}