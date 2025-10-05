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
  
  const performanceMetrics = textContent.results.performanceMetrics;

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

  const investorPerformance = textContent.results.investorPerformance;

  return (
    <>
      <section id="results" className="py-20 relative overflow-hidden" style={{background: `linear-gradient(to bottom, ${colors.gradientStart}, ${colors.gradientEnd})`}}>
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
                    <EditableText
                      path={`results.performanceMetrics.${index}.label`}
                      value={metric.label}
                      className="text-body text-slate-700 font-medium"
                    />
                    <span className="text-body font-semibold" style={{color: colors.primaryAccent}}>
                      <EditableText
                        path={`results.performanceMetrics.${index}.value`}
                        value={metric.value.toString()}
                      />%
                    </span>
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
                  <EditableText
                    path={`results.performanceMetrics.${index}.description`}
                    value={metric.description}
                    className="text-caption text-slate-500"
                  />
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

        {/* Portfolio Highlights */}
        <div className="mt-20">
          <div className="bg-white rounded-xl p-8 shadow-lg border" style={{borderColor: colors.borderColor}}>
            <div className="text-center mb-8">
              <h3 className="text-card-title text-slate-900 mb-2">Portfolio Highlights</h3>
              <p className="text-body text-slate-600">Key investments demonstrating our operational excellence approach</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Company</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Industry</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Investment</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Outcome</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Multiple</th>
                  </tr>
                </thead>
                <tbody>
                  {textContent.results.portfolioHighlights.map((highlight, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium text-slate-900">
                        <EditableText
                          path={`results.portfolioHighlights.${index}.company`}
                          value={highlight.company}
                        />
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        <EditableText
                          path={`results.portfolioHighlights.${index}.industry`}
                          value={highlight.industry}
                        />
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        <EditableText
                          path={`results.portfolioHighlights.${index}.investment`}
                          value={highlight.investment}
                        />
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        <EditableText
                          path={`results.portfolioHighlights.${index}.outcome`}
                          value={highlight.outcome}
                        />
                      </td>
                      <td className="py-3 px-4 font-semibold text-green-600">
                        <EditableText
                          path={`results.portfolioHighlights.${index}.multiple`}
                          value={highlight.multiple}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
                      <EditableText
                        path={`results.investorPerformance.${index}.value`}
                        value={item.value}
                      />
                    </div>
                    <div className="text-body text-slate-700 font-semibold mb-1">
                      <EditableText
                        path={`results.investorPerformance.${index}.metric`}
                        value={item.metric}
                      />
                    </div>
                    <div className="text-caption text-slate-500">
                      <EditableText
                        path={`results.investorPerformance.${index}.description`}
                        value={item.description}
                      />
                    </div>
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