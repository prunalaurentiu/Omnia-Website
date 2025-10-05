import { Palette } from "lucide-react";
import { useState } from "react";
import { LightColorPicker } from "./LightColorPicker";
import { useSectionColors } from "./SectionColorProvider";
import { EditableText } from "./EditableText";
import { useTextContent } from "./TextContentProvider";

export function ResultsSection() {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const { colors, setColors } = useSectionColors('results', false);
  const { textContent } = useTextContent();
  
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

          {/* Portfolio Highlights */}
          <div className="mt-16">
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