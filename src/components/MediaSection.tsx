import { ExternalLink, Award, FileText, Palette, ArrowLeft, ArrowRight } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { ColorPicker } from "./ColorPicker";
import { useSectionColors } from "./SectionColorProvider";
import { EditableText } from "./EditableText";
import { useTextContent } from "./TextContentProvider";

export function MediaSection() {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const { colors, setColors } = useSectionColors('media', true);
  const { textContent, isEditing } = useTextContent();

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const mediaItems = useMemo(() => {
    const icons = [FileText, Award, ExternalLink];
    return textContent.media.coverage.map((item, index) => ({
      ...item,
      icon: icons[index % icons.length]
    }));
  }, [textContent.media.coverage]);

  const handleScroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const card = container.querySelector<HTMLAnchorElement>("a[data-media-card]");
    const cardWidth = card ? card.offsetWidth : container.clientWidth / 3;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth"
    });
  };

  return (
    <>
      <section className="py-20 text-white relative overflow-hidden" style={{background: `linear-gradient(to bottom, ${colors.gradientStart}, ${colors.gradientEnd})`}}>
        {/* Color Picker Button */}
        <button
          onClick={() => setShowColorPicker(true)}
          className="hidden absolute top-4 right-4 z-20 p-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all"
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
          <EditableText
            path="media.title"
            value={textContent.media.title}
            as="h2"
            className="text-section text-white mb-4"
          />
          <EditableText
            path="media.description"
            value={textContent.media.description}
            as="p"
            className="text-body text-blue-100 max-w-2xl mx-auto"
            multiline
          />
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory px-1"
          >
            {mediaItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.url ?? index}
                  href={item.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={event => {
                    if (isEditing || !item.url) {
                      event.preventDefault();
                    }
                  }}
                  data-media-card
                  className="snap-start shrink-0 w-[calc(100%_-_2rem)] sm:w-[calc(100%_-_2rem)] md:w-[calc(50%_-_2rem)] lg:w-[calc(33.333%_-_2rem)] xl:w-[calc(33.333%_-_2rem)] bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: 'var(--sky-cool)'}}>
                      <Icon className="w-6 h-6" style={{color: 'var(--blue-corporate)'}} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <EditableText
                        path={`media.coverage.${index}.title`}
                        value={item.title}
                        as="h3"
                        className="text-card-title text-slate-900 mb-3"
                      />
                      <EditableText
                        path={`media.coverage.${index}.excerpt`}
                        value={item.excerpt}
                        as="p"
                        className="text-body text-slate-600 mb-3"
                        multiline
                      />
                      <div className="flex items-center justify-between text-caption text-slate-500">
                        <EditableText
                          path={`media.coverage.${index}.publication`}
                          value={item.publication}
                        />
                        <EditableText
                          path={`media.coverage.${index}.date`}
                          value={item.date}
                        />
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center justify-between pointer-events-none">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              className="pointer-events-auto absolute -left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur rounded-full p-3 shadow-md hover:bg-white"
              aria-label="Scroll media left"
            >
              <ArrowLeft className="w-5 h-5 text-slate-700" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll("right")}
              className="pointer-events-auto absolute -right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur rounded-full p-3 shadow-md hover:bg-white"
              aria-label="Scroll media right"
            >
              <ArrowRight className="w-5 h-5 text-slate-700" />
            </button>
          </div>
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