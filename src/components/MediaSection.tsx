import { Palette } from "lucide-react";
import { useMemo, useState } from "react";
import { ColorPicker } from "./ColorPicker";
import { useSectionColors } from "./SectionColorProvider";
import { EditableText } from "./EditableText";
import { useTextContent } from "./TextContentProvider";

export function MediaSection() {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const { colors, setColors } = useSectionColors("media", true);
  const { textContent, isEditing } = useTextContent();
  const coverage = textContent.media.coverage;
  const itemsPerView = 3;
  const [startIndex, setStartIndex] = useState(0);

  const visibleCoverage = useMemo(() => {
    if (coverage.length <= itemsPerView) {
      return coverage.map((item, index) => ({ item, index }));
    }

    const items = [] as { item: (typeof coverage)[number]; index: number }[];
    for (let offset = 0; offset < itemsPerView; offset += 1) {
      const index = (startIndex + offset) % coverage.length;
      items.push({ item: coverage[index], index });
    }
    return items;
  }, [coverage, itemsPerView, startIndex]);

  const handleShowMore = () => {
    if (coverage.length <= itemsPerView) return;
    setStartIndex((prev) => (prev + itemsPerView) % coverage.length);
  };

  return (
    <>
      <section
        className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden"
        style={{
          background: `linear-gradient(to bottom, ${colors.gradientStart}, ${colors.gradientEnd})`
        }}
      >
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
              className="text-section text-slate-900 mb-4"
            />
            <EditableText
              path="media.description"
              value={textContent.media.description}
              as="p"
              className="text-body text-slate-600 max-w-3xl mx-auto"
              multiline
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {visibleCoverage.map(({ item, index }) => (
              <a
                key={item.url ?? index}
                href={item.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => {
                  if (isEditing || !item.url) {
                    event.preventDefault();
                  }
                }}
                className="group block h-full"
              >
                <article className="bg-slate-50 rounded-lg p-8 border border-slate-200 transition-shadow group-hover:shadow-lg h-full min-h-[360px] flex flex-col">
                  <EditableText
                    path={`media.coverage.${index}.publication`}
                    value={item.publication}
                    className="text-caption mb-3 uppercase tracking-wide"
                    style={{ color: "var(--blue-corporate)" }}
                  />
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
                    className="text-body text-slate-600 mb-6 flex-1"
                    multiline
                  />
                  <div className="mt-auto flex items-center justify-between text-caption text-slate-500">
                    <EditableText
                      path={`media.coverage.${index}.date`}
                      value={item.date}
                    />
                    <span className="inline-flex items-center text-blue-600 group-hover:text-blue-700">
                      Read article
                    </span>
                  </div>
                </article>
              </a>
            ))}
          </div>

          {coverage.length > itemsPerView && (
            <div className="mt-12 flex justify-center">
              <button
                type="button"
                onClick={handleShowMore}
                className="px-6 py-3 text-sm font-semibold rounded-full bg-slate-900 text-white shadow-md hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
              >
                Click here to see more
              </button>
            </div>
          )}

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-4 text-sm text-slate-500">
              <span>Press inquiries:</span>
              <a href="mailto:invest@omnia.capital" className="text-slate-900 hover:opacity-80 underline">
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