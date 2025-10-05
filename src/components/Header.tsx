import { Palette } from "lucide-react";
import { useEffect, useState } from "react";
import { LightColorPicker } from "./LightColorPicker";
import { useLightSectionColors } from "./SectionColorProvider";
import { EditableText } from "./EditableText";
import { useTextContent } from "./TextContentProvider";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import omniaLogo from "figma:asset/626d67c60cf0a38b4d655862987d1e2e4900526f.png";

export function Header() {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { colors, setColors } = useLightSectionColors();
  const { textContent } = useTextContent();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const navLinks = [
    {
      href: "#home",
      path: "header.navigation.home",
      value: textContent.header.navigation.home
    },
    {
      href: "#team",
      path: "header.navigation.team",
      value: textContent.header.navigation.team
    },
    {
      href: "#strategy",
      path: "header.navigation.strategy",
      value: textContent.header.navigation.strategy
    },
    {
      href: "#insights",
      path: "header.navigation.insights",
      value: textContent.header.navigation.insights
    },
    {
      href: "#results",
      path: "header.navigation.results",
      value: textContent.header.navigation.results
    },
    {
      href: "#contact",
      path: "header.navigation.contact",
      value: textContent.header.navigation.contact
    }
  ];

  const closeMenu = () => setIsMenuOpen(false);
  
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
                className="h-16 w-auto sm:h-24 lg:h-32 transform lg:translate-y-10"
                style={{
                  filter: 'invert(1) brightness(0) drop-shadow(0 6px 12px rgba(0,0,0,0.2))',
                  display: 'block'
                }}
              />
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-body transition-colors hover:opacity-80"
                style={{ color: 'var(--forest-light)' }}
              >
                <EditableText
                  path={link.path}
                  value={link.value}
                />
              </a>
            ))}
          </nav>

          {/* Mobile menu placeholder - can be expanded later if needed */}
          <div className="md:hidden">
            <button
              className="p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500"
              style={{color: 'var(--forest-light)'}}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>

    {isMenuOpen && (
      <div className="fixed inset-0 z-30 md:hidden">
        <div
          className="absolute inset-0 bg-slate-900/60"
          onClick={closeMenu}
          aria-hidden="true"
        ></div>
        <div
          className="relative ml-auto h-full w-72 max-w-full bg-white shadow-xl border-l border-slate-200 flex flex-col"
          role="dialog"
          aria-modal="true"
        >
          <div className="px-6 pt-6 pb-4">
            <button
              onClick={closeMenu}
              className="ml-auto flex items-center justify-center rounded-md p-2 text-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-6 pb-8 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-lg font-medium text-slate-800 py-2 border-b border-slate-200 last:border-b-0"
                onClick={closeMenu}
              >
                <EditableText
                  path={link.path}
                  value={link.value}
                />
              </a>
            ))}
          </nav>
        </div>
      </div>
    )}

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