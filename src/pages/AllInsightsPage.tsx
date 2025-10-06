import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import { useTextContent } from "../components/TextContentProvider";
import { EditableText } from "../components/EditableText";
import { Button } from "../components/ui/button";

const ITEMS_PER_PAGE = 6;

export function AllInsightsPage() {
  const { textContent, isEditing } = useTextContent();
  const [page, setPage] = useState(1);

  const articles = textContent.insights.articles;
  const totalPages = Math.max(1, Math.ceil(articles.length / ITEMS_PER_PAGE));

  const currentPageArticles = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return articles.slice(start, start + ITEMS_PER_PAGE);
  }, [articles, page]);

  const handleChangePage = (nextPage: number) => {
    setPage(Math.min(Math.max(nextPage, 1), totalPages));
  };

  return (
    <main className="py-16 sm:py-24 bg-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <EditableText
            path="insights.title"
            value={textContent.insights.title}
            as="h1"
            className="text-4xl sm:text-5xl font-semibold text-slate-900"
          />
          <EditableText
            path="insights.description"
            value={textContent.insights.description}
            as="p"
            className="text-lg text-slate-600 max-w-3xl mx-auto"
            multiline
          />
          <p className="text-sm text-slate-500 max-w-2xl mx-auto">
            Add new articles directly from the editing toolbar. Each entry needs
            a unique slug, short excerpt, and the full body content so it can be
            displayed here and on the detail page.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {currentPageArticles.map((insight, index) => {
            const globalIndex = (page - 1) * ITEMS_PER_PAGE + index;
            return (
              <Link
                key={insight.slug || globalIndex}
                to={isEditing ? "#" : `/insights/${insight.slug}`}
                onClick={(event) => {
                  if (isEditing) {
                    event.preventDefault();
                  }
                }}
                className="group block bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-slate-200 p-8"
              >
                <EditableText
                  path={`insights.articles.${globalIndex}.category`}
                  value={insight.category}
                  className="text-xs font-semibold uppercase tracking-wide text-indigo-600 mb-3"
                />
                <EditableText
                  path={`insights.articles.${globalIndex}.title`}
                  value={insight.title}
                  as="h2"
                  className="text-2xl font-semibold text-slate-900 mb-3 group-hover:text-indigo-700 transition-colors"
                />
                <EditableText
                  path={`insights.articles.${globalIndex}.excerpt`}
                  value={insight.excerpt}
                  as="p"
                  className="text-base text-slate-600 mb-6"
                  multiline
                />
                <div className="flex flex-wrap items-center justify-between text-sm text-slate-500">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <EditableText
                      path={`insights.articles.${globalIndex}.date`}
                      value={insight.date}
                    />
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <EditableText
                      path={`insights.articles.${globalIndex}.readTime`}
                      value={insight.readTime}
                    />
                  </span>
                  <span className="flex items-center gap-2 text-slate-400 group-hover:text-indigo-600 transition-colors">
                    Read insight <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center justify-between mt-12">
          <Button
            variant="outline"
            onClick={() => handleChangePage(page - 1)}
            disabled={page === 1}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" /> Previous
          </Button>
          <p className="text-sm text-slate-500">
            Page {page} of {totalPages}
          </p>
          <Button
            variant="outline"
            onClick={() => handleChangePage(page + 1)}
            disabled={page === totalPages}
            className="flex items-center gap-2"
          >
            Next <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </main>
  );
}
