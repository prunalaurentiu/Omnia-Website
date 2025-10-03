import { ExternalLink, Award, FileText, Palette } from "lucide-react";
import { useState } from "react";
import { ColorPicker } from "./ColorPicker";
import { useSectionColors } from "./SectionColorProvider";

export function MediaSection() {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const { colors, setColors } = useSectionColors('media', true);
  const mediaItems = [
    {
      type: "Press Release",
      title: "Omnia Capital Announces €50M Fund for Eastern European Tech",
      source: "TechCrunch Europe",
      date: "January 15, 2024",
      icon: FileText
    },
    {
      type: "Award",
      title: "Best Private Equity Firm - Eastern Europe 2023",
      source: "Financial Times",
      date: "December 1, 2023",
      icon: Award
    },
    {
      type: "Interview",
      title: "Building Sustainable Tech Platforms: A Strategic Approach",
      source: "Forbes Romania",
      date: "November 20, 2023",
      icon: ExternalLink
    }
  ];

  return (
    <>
      <section className="py-20 text-white relative overflow-hidden" style={{background: `linear-gradient(to bottom, ${colors.gradientStart}, ${colors.gradientEnd})`}}>
        {/* Color Picker Button */}
        <button
          onClick={() => setShowColorPicker(true)}
          className="absolute top-4 right-4 z-20 p-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all"
          title="Edit Colors"
        >
          <Palette className="w-5 h-5 text-white" />
        </button>
        
        {/* Geometric accent circles */}
        <div 
          className="absolute top-0 right-0 w-96 h-96 rounded-full transform translate-x-32 -translate-y-32"
          style={{
            backgroundColor: colors.accentCircle1,
            opacity: colors.accentCircle1Opacity
          }}
        ></div>
        <div 
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full transform -translate-x-16 translate-y-16"
          style={{
            backgroundColor: colors.accentCircle2,
            opacity: colors.accentCircle2Opacity
          }}
        ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-section text-white mb-4">Media</h2>
          <p className="text-body text-blue-100 max-w-2xl mx-auto">
            Recent press coverage, awards, and thought leadership from Omnia Capital 
            and our portfolio companies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {mediaItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: 'var(--sky-cool)'}}>
                    <Icon className="w-6 h-6" style={{color: 'var(--blue-corporate)'}} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-caption mb-2 uppercase tracking-wide" style={{color: 'var(--blue-corporate)'}}>{item.type}</div>
                    <h3 className="text-card-title text-slate-900 mb-3">{item.title}</h3>
                    <div className="flex items-center justify-between text-caption text-slate-500">
                      <span>{item.source}</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 text-sm text-blue-100">
            <span>Press inquiries:</span>
            <a href="mailto:invest@omnia.capital" className="text-white hover:opacity-80 underline">
              invest@omnia.capital
            </a>
          </div>
        </div>
      </div>
    </section>
    
    {showColorPicker && (
      <ColorPicker
        sectionId="media"
        sectionName="Media"
        onClose={() => setShowColorPicker(false)}
        onColorsChange={setColors}
        initialColors={colors}
      />
    )}
    </>
  );
}