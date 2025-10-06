import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { EditableText } from "./EditableText";
import { useTextContent } from "./TextContentProvider";

export function InsightsSection() {
  const { textContent, isEditing } = useTextContent();
  const insights = textContent.insights.articles;

  return (
    <section id="insights" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 left-20 w-40 h-40 bg-slate-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-slate-300 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <EditableText
            path="insights.title"
            value={textContent.insights.title}
            as="h2"
            className="text-section text-slate-900 mb-4"
          />
          <EditableText
            path="insights.description"
            value={textContent.insights.description}
            as="p"
            className="text-body text-slate-600 max-w-3xl mx-auto"
            multiline
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <Link
              key={insight.slug}
              to={`/insights/${insight.slug}`}
              onClick={(event) => {
                if (isEditing) {
                  event.preventDefault();
                }
              }}
              className="group block"
            >
              <article className="bg-slate-50 rounded-lg p-8 border border-slate-200 transition-shadow group-hover:shadow-lg">
                <EditableText
                  path={`insights.articles.${index}.category`}
                  value={insight.category}
                  className="text-caption mb-3 uppercase tracking-wide"
                  style={{ color: "var(--blue-corporate)" }}
                />
                <EditableText
                  path={`insights.articles.${index}.title`}
                  value={insight.title}
                  as="h3"
                  className="text-card-title text-slate-900 mb-3"
                />
                <EditableText
                  path={`insights.articles.${index}.excerpt`}
                  value={insight.excerpt}
                  as="p"
                  className="text-body text-slate-600 mb-6"
                  multiline
                />

                <div className="flex items-center justify-between text-caption text-slate-500">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <EditableText
                      path={`insights.articles.${index}.date`}
                      value={insight.date}
                    />
                  </div>
                  <div>
                    <EditableText
                      path={`insights.articles.${index}.readTime`}
                      value={insight.readTime}
                    />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <Link
              to={insights.length ? `/insights/${insights[0].slug}` : "/"}
              onClick={(event) => {
                if (isEditing) {
                  event.preventDefault();
                }
              }}
              className="inline-flex items-center"
            >
              View All Insights
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}