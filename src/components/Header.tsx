import { Palette } from "lucide-react";
import { useState } from "react";
import { LightColorPicker } from "./LightColorPicker";
import { useLightSectionColors } from "./SectionColorProvider";
import { EditableText } from "./EditableText";
import { useTextContent } from "./TextContentProvider";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import omniaLogo from "figma:asset/626d67c60cf0a38b4d655862987d1e2e4900526f.png";

export function Header() {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const { colors, setColors } = useLightSectionColors();
  const { textContent } = useTextContent();
  
  return (
    <>
      <header className="relative z-20" style={{background: `linear-gradient(to bottom, ${colors.gradientStart}, ${colors.gradientEnd})`, borderBottom: `1px solid ${colors.borderColor}`}}>
        {/* Color Picker Button */}
        <button
          onClick={() => setShowColorPicker(true)}
          className="hidden absolute top-4 right-4 z-30 p-2 bg-black bg-opacity-10 hover:bg-opacity-20 rounded-full transition-all"
          title="Edit Colors"
        >
          <Palette className="w-5 h-5 text-slate-600" />
        </button>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            {/* Large overlapping logo */}
            <div className="relative z-25">
              <ImageWithFallback
                src={omniaLogo}
                alt="Omnia Capital"
                className="h-32 w-auto transform translate-y-10"
                style={{
                  filter: 'invert(1) brightness(0) drop-shadow(0 6px 12px rgba(0,0,0,0.2))',
                  display: 'block'
                }}
              />
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-12">
            <a 
              href="#home" 
              className="text-body transition-colors hover:opacity-80"
              style={{color: 'var(--forest-light)'}}
            >
              <EditableText
                path="header.navigation.home"
                value={textContent.header.navigation.home}
              />
            </a>
            <a 
              href="#strategy" 
              className="text-body transition-colors hover:opacity-80"
              style={{color: 'var(--forest-light)'}}
            >
              <EditableText
                path="header.navigation.strategy"
                value={textContent.header.navigation.strategy}
              />
            </a>
            <a 
              href="#team" 
              className="text-body transition-colors hover:opacity-80"
              style={{color: 'var(--forest-light)'}}
            >
              <EditableText
                path="header.navigation.team"
                value={textContent.header.navigation.team}
              />
            </a>
            <a 
              href="#insights" 
              className="text-body transition-colors hover:opacity-80"
              style={{color: 'var(--forest-light)'}}
            >
              <EditableText
                path="header.navigation.insights"
                value={textContent.header.navigation.insights}
              />
            </a>
            <a 
              href="#results" 
              className="text-body transition-colors hover:opacity-80"
              style={{color: 'var(--forest-light)'}}
            >
              <EditableText
                path="header.navigation.results"
                value={textContent.header.navigation.results}
              />
            </a>
            <a 
              href="#contact" 
              className="text-body transition-colors hover:opacity-80"
              style={{color: 'var(--forest-light)'}}
            >
              <EditableText
                path="header.navigation.contact"
                value={textContent.header.navigation.contact}
              />
            </a>
          </nav>

          {/* Mobile menu placeholder - can be expanded later if needed */}
          <div className="md:hidden">
            <button 
              className="p-2 rounded-md"
              style={{color: 'var(--forest-light)'}}
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
    
    {showColorPicker && (
      <LightColorPicker
        onClose={() => setShowColorPicker(false)}
        onColorsChange={setColors}
        initialColors={colors}
      />
    )}
    </>
  );
}