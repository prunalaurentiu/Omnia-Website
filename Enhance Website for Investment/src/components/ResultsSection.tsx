import { Progress } from "./ui/progress";
import { TrendingUp, Users, DollarSign, Briefcase, Palette, Target, Award } from "lucide-react";
import { useState } from "react";
import { LightColorPicker } from "./LightColorPicker";
import { useSectionColors } from "./SectionColorProvider";
import { EditableText } from "./EditableText";
import { useTextContent } from "./TextContentProvider";

export function ResultsSection() {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const { colors, setColors } = useSectionColors('results', false);
  const { textContent } = useTextContent();
  
  const performanceMetrics = [
    { label: "Portfolio Growth", value: 85, description: "Year-over-year portfolio value increase" },
    { label: "Operational Efficiency", value: 92, description: "Process optimization and cost reduction" },
    { label: "Market Expansion", value: 78, description: "New market penetration success rate" },
    { label: "Revenue Growth", value: 89, description: "Portfolio company revenue increase" }
  ];

  const keyAchievements = [
    {
      icon: DollarSign,
      title: textContent.results.metrics[1].value,
      subtitle: textContent.results.metrics[1].label,
      description: textContent.results.metrics[1].description
    },
    {
      icon: Briefcase,
      title: textContent.results.metrics[2].value,
      subtitle: textContent.results.metrics[2].label,
      description: textContent.results.metrics[2].description
    },
    {
      icon: TrendingUp,
      title: textContent.results.metrics[3].value,
      subtitle: textContent.results.metrics[3].label,
      description: textContent.results.metrics[3].description
    }
  ];

  const investorPerformance = [
    { metric: "Net IRR", value: "15.2%", description: "Internal Rate of Return" },
    { metric: "DPI Multiple", value: "2.8x", description: "Distributions to Paid-In Capital" },
    { metric: "Success Rate", value: "95%", description: "Profitable Exits" }
  ];

  return (
    <>
      <section id="results" className="py-20 relative overflow-hidden" style={{background: `linear-gradient(to bottom, ${colors.gradientStart}, ${colors.gradientEnd})`}}>
        {/* Color Picker Button */}
        <button
          onClick={() => setShowColorPicker(true)}
          className="absolute top-4 right-4 z-20 p-2 bg-black bg-opacity-10 hover:bg-opacity-20 rounded-full transition-all"
          title="Edit Colors"
        >
          <Palette className="w-5 h-5 text-slate-600" />
        </button>
        
        {/* Subtle background pattern */}
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
            path="results.title"
            value={textContent.results.title}
            as="h2"
            className="text-section text-slate-900 mb-4"
          />
          <EditableText
            path="results.description"
            value={textContent.results.description}
            as="p"
            className="text-body text-slate-600 max-w-3xl mx-auto"
            multiline
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Performance Metrics with Progress Bars */}
          <div className="space-y-8">
            <h3 className="text-card-title text-slate-900 mb-8">Performance Metrics</h3>
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="group hover:scale-105 transition-all duration-200 cursor-pointer">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg border transition-shadow duration-200" style={{borderColor: colors.borderColor}}>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-body text-slate-700 font-medium">{metric.label}</span>
                    <span className="text-body font-semibold" style={{color: colors.primaryAccent}}>{metric.value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                    <div 
                      className="h-3 rounded-full transition-all duration-700 ease-out"
                      style={{
                        width: `${metric.value}%`,
                        backgroundColor: colors.primaryAccent
                      }}
                    ></div>
                  </div>
                  <p className="text-caption text-slate-500">{metric.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Key Achievements */}
          <div className="space-y-6">
            <h3 className="text-card-title text-slate-900 mb-8">Key Achievements</h3>
            {keyAchievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="group hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-pointer">
                  <div className="bg-white rounded-lg p-6 border shadow-md transition-shadow duration-200" style={{borderColor: colors.borderColor}}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200" style={{backgroundColor: colors.primaryAccent}}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <EditableText
                          path={`results.metrics.${index + 1}.value`}
                          value={achievement.title}
                          className="text-metric text-slate-900 mb-1 block"
                        />
                        <EditableText
                          path={`results.metrics.${index + 1}.label`}
                          value={achievement.subtitle}
                          className="text-body mb-2 block"
                          style={{color: colors.primaryAccent}}
                        />
                        <EditableText
                          path={`results.metrics.${index + 1}.description`}
                          value={achievement.description}
                          className="text-caption text-slate-600"
                          multiline
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Investor Performance Section */}
        <div className="mt-20">
          <div className="bg-white rounded-xl p-8 shadow-lg border" style={{borderColor: colors.borderColor}}>
            <div className="text-center mb-8">
              <h3 className="text-card-title text-slate-900 mb-2">Investor Performance</h3>
              <p className="text-body text-slate-600">Track record of delivering exceptional returns to our investors</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {investorPerformance.map((item, index) => (
                <div key={index} className="text-center group hover:scale-110 transition-all duration-200 cursor-pointer">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                    <div className="text-metric group-hover:scale-105 transition-transform duration-200" style={{color: colors.primaryAccent}}>
                      {item.value}
                    </div>
                    <div className="text-body text-slate-700 font-semibold mb-1">{item.metric}</div>
                    <div className="text-caption text-slate-500">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    
    {showColorPicker && (
      <LightColorPicker
        sectionId="results"
        sectionName="Results"
        onClose={() => setShowColorPicker(false)}
        onColorsChange={setColors}
        initialColors={colors}
      />
    )}
    </>
  );
}