import { TrendingUp, Cog, Target, Palette } from "lucide-react";
import { useState } from "react";
import { LightColorPicker } from "./LightColorPicker";
import { useSectionColors } from "./SectionColorProvider";
import { EditableText } from "./EditableText";
import { useTextContent } from "./TextContentProvider";

export function StrategySection() {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const { colors, setColors } = useSectionColors('strategy', false);
  const { textContent } = useTextContent();
  
  const strategies = [
    {
      icon: TrendingUp,
      title: textContent.strategy.pillars.development.title,
      description: textContent.strategy.pillars.development.description,
      features: textContent.strategy.pillars.development.features,
      path: "strategy.pillars.development"
    },
    {
      icon: Cog,
      title: textContent.strategy.pillars.operations.title,
      description: textContent.strategy.pillars.operations.description,
      features: textContent.strategy.pillars.operations.features,
      path: "strategy.pillars.operations"
    },
    {
      icon: Target,
      title: textContent.strategy.pillars.outcomes.title,
      description: textContent.strategy.pillars.outcomes.description,
      features: textContent.strategy.pillars.outcomes.features,
      path: "strategy.pillars.outcomes"
    }
  ];

  return (
    <>
      <section id="strategy" className="py-20 relative overflow-hidden" style={{background: `linear-gradient(to bottom, ${colors.gradientStart}, ${colors.gradientEnd})`}}>
        {/* Color Picker Button */}
        <button
          onClick={() => setShowColorPicker(true)}
          className="absolute top-4 right-4 z-20 p-2 bg-black bg-opacity-10 hover:bg-opacity-20 rounded-full transition-all"
          title="Edit Colors"
        >
          <Palette className="w-5 h-5 text-slate-600" />
        </button>
        
        {/* Subtle background elements */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-20 right-20 w-40 h-40 rounded-full blur-3xl"
            style={{
              backgroundColor: colors.accentCircle1,
              opacity: colors.accentCircle1Opacity
            }}
          ></div>
          <div 
            className="absolute bottom-20 left-20 w-56 h-56 rounded-full blur-3xl"
            style={{
              backgroundColor: colors.accentCircle2,
              opacity: colors.accentCircle2Opacity
            }}
          ></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <EditableText
            path="strategy.title"
            value={textContent.strategy.title}
            as="h2"
            className="text-section text-slate-900 mb-4"
          />
          <EditableText
            path="strategy.description"
            value={textContent.strategy.description}
            as="p"
            className="text-body text-slate-600 max-w-3xl mx-auto"
            multiline
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {strategies.map((strategy, index) => {
            const Icon = strategy.icon;
            return (
              <div key={index} className="bg-white rounded-lg p-8 hover:shadow-lg hover:scale-105 transition-all duration-200 border" style={{borderColor: colors.borderColor}}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6" style={{backgroundColor: colors.primaryAccent}}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <EditableText
                  path={`${strategy.path}.title`}
                  value={strategy.title}
                  as="h3"
                  className="text-card-title text-slate-900 mb-4"
                />
                <EditableText
                  path={`${strategy.path}.description`}
                  value={strategy.description}
                  as="p"
                  className="text-body text-slate-600 mb-6"
                  multiline
                />
                
                <ul className="space-y-2">
                  {strategy.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-caption text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full mr-3" style={{backgroundColor: colors.primaryAccent}}></div>
                      <EditableText
                        path={`${strategy.path}.features.${featureIndex}`}
                        value={feature}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    
    {showColorPicker && (
      <LightColorPicker
        sectionId="strategy"
        sectionName="Strategy"
        onClose={() => setShowColorPicker(false)}
        onColorsChange={setColors}
        initialColors={colors}
      />
    )}
    </>
  );
}