import { Mail, Palette } from "lucide-react";
import { useState } from "react";
import { ColorPicker } from "./ColorPicker";
import { useDarkSectionColors } from "./SectionColorProvider";
import { EditableText } from "./EditableText";
import { useTextContent } from "./TextContentProvider";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import omniaLogo from "figma:asset/626d67c60cf0a38b4d655862987d1e2e4900526f.png";

export function Footer() {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const { colors, setColors } = useDarkSectionColors();
  const { textContent } = useTextContent();
  
  const footerSections = [
    {
      title: textContent.footer.sections.company.title,
      links: textContent.footer.sections.company.links
    },
    {
      title: textContent.footer.sections.investors.title,
      links: textContent.footer.sections.investors.links
    },
    {
      title: textContent.footer.sections.legal.title,
      links: textContent.footer.sections.legal.links
    }
  ];

  return (
    <>
      <footer className="text-white relative overflow-hidden" style={{background: `linear-gradient(to bottom, ${colors.gradientStart}, ${colors.gradientEnd})`}}>
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
          className="absolute top-0 right-0 w-80 h-80 rounded-full transform translate-x-24 -translate-y-24"
          style={{
            backgroundColor: colors.accentCircle1,
            opacity: colors.accentCircle1Opacity
          }}
        ></div>
        <div 
          className="absolute bottom-0 left-0 w-56 h-56 rounded-full transform -translate-x-12 translate-y-12"
          style={{
            backgroundColor: colors.accentCircle2,
            opacity: colors.accentCircle2Opacity
          }}
        ></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <ImageWithFallback
              src={omniaLogo}
              alt="Omnia Capital"
              className="h-16 w-auto mb-4"
              style={{
                filter: 'brightness(0) invert(1)',
                display: 'block'
              }}
            />
            <EditableText
              path="footer.description"
              value={textContent.footer.description}
              as="p"
              className="text-body text-slate-300 mb-6"
              multiline
            />
            
            <div className="flex space-x-4">
              <a 
                href="mailto:invest@omnia.capital" 
                className="w-10 h-10 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity text-white"
                style={{backgroundColor: 'var(--blue-medium)'}}
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {footerSections.map((section, sectionIndex) => (
            <div key={`footer-section-${sectionIndex}`}>
              <h4 className="text-body text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={`${sectionIndex}-${linkIndex}`}>
                    <a 
                      href={link.href} 
                      className="text-caption text-slate-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t mt-12 pt-8" style={{borderColor: 'var(--blue-medium)'}}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <EditableText
              path="footer.copyright"
              value={textContent.footer.copyright}
              className="text-caption text-slate-300"
            />
            

          </div>
        </div>
      </div>
    </footer>
    
    {showColorPicker && (
      <ColorPicker
        onClose={() => setShowColorPicker(false)}
        onColorsChange={setColors}
        initialColors={colors}
      />
    )}
    </>
  );
}