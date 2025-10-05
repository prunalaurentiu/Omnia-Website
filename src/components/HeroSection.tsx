import { Button } from "./ui/button";
import { Palette } from "lucide-react";
import { useState } from "react";
import { LightColorPicker } from "./LightColorPicker";
import { useSectionColors } from "./SectionColorProvider";
import { EditableText, EditableButton } from "./EditableText";
import { useTextContent } from "./TextContentProvider";

export function HeroSection() {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const { colors, setColors } = useSectionColors('hero', false);
  const { textContent } = useTextContent();
  
  return (
    <>
      <section id="home" className="relative overflow-hidden py-20" style={{background: `linear-gradient(to bottom right, ${colors.gradientStart}, ${colors.gradientEnd})`}}>
        {/* Color Picker Button */}
        <button
          onClick={() => setShowColorPicker(true)}
          className="hidden absolute top-4 right-4 z-20 p-2 bg-black bg-opacity-10 hover:bg-opacity-20 rounded-full transition-all"
          title="Edit Colors"
        >
          <Palette className="w-5 h-5 text-slate-600" />
        </button>
        
        {/* Subtle background pattern */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-20 right-20 w-32 h-32 rounded-full blur-3xl"
            style={{
              backgroundColor: colors.accentCircle1,
              opacity: colors.accentCircle1Opacity
            }}
          ></div>
          <div 
            className="absolute bottom-32 left-32 w-48 h-48 rounded-full blur-3xl"
            style={{
              backgroundColor: colors.accentCircle2,
              opacity: colors.accentCircle2Opacity
            }}
          ></div>
        </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <EditableText
              path="hero.headline"
              value={textContent.hero.headline}
              as="h1"
              className="text-hero text-slate-900"
            />
            
            <EditableText
              path="hero.description"
              value={textContent.hero.description}
              as="p"
              className="text-body text-slate-600 max-w-3xl mx-auto"
              multiline
            />

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <EditableButton
                path="hero.buttons.primary"
                value={textContent.hero.buttons.primary}
                className="px-6 py-3 rounded-md text-white hover:opacity-90 hover:scale-105 transition-all duration-200"
                style={{backgroundColor: colors.primaryAccent}}
              />
              <EditableButton
                path="hero.buttons.secondary"
                value={textContent.hero.buttons.secondary}
                className="px-6 py-3 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 hover:scale-105 transition-all duration-200"
              />
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 max-w-2xl mx-auto">
              <div className="text-center hover:scale-105 transition-transform duration-200">
                <div className="mb-3">
                  <EditableText
                    path="hero.metrics.aum.value"
                    value={textContent.hero.metrics.aum.value}
                    className="text-metric block"
                    style={{color: colors.primaryAccent}}
                  />
                </div>
                <EditableText
                  path="hero.metrics.aum.label"
                  value={textContent.hero.metrics.aum.label}
                  className="text-caption text-slate-600 block"
                />
              </div>
              <div className="text-center hover:scale-105 transition-transform duration-200">
                <div className="mb-3">
                  <EditableText
                    path="hero.metrics.companies.value"
                    value={textContent.hero.metrics.companies.value}
                    className="text-metric block"
                    style={{color: colors.primaryAccent}}
                  />
                </div>
                <EditableText
                  path="hero.metrics.companies.label"
                  value={textContent.hero.metrics.companies.label}
                  className="text-caption text-slate-600 block"
                />
              </div>
              <div className="text-center hover:scale-105 transition-transform duration-200">
                <div className="mb-3">
                  <EditableText
                    path="hero.metrics.successRate.value"
                    value={textContent.hero.metrics.successRate.value}
                    className="text-metric block"
                    style={{color: colors.primaryAccent}}
                  />
                </div>
                <EditableText
                  path="hero.metrics.successRate.label"
                  value={textContent.hero.metrics.successRate.label}
                  className="text-caption text-slate-600 block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    {showColorPicker && (
      <LightColorPicker
        sectionId="hero"
        sectionName="Hero"
        onClose={() => setShowColorPicker(false)}
        onColorsChange={setColors}
        initialColors={colors}
      />
    )}
    </>
  );
}