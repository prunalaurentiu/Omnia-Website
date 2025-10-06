import { Link, useParams } from "react-router-dom";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { useMemo } from "react";

import { useTextContent } from "../components/TextContentProvider";
import { EditableText } from "../components/EditableText";
import { Button } from "../components/ui/button";

export function InsightArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const { textContent } = useTextContent();

  const { article, index } = useMemo(() => {
    const idx = textContent.insights.articles.findIndex(
      (item) => item.slug === slug,
    );

    return {
      article: idx >= 0 ? textContent.insights.articles[idx] : undefined,
      index: idx,
    };
  }, [slug, textContent.insights.articles]);

  if (!article || index < 0) {
    return (
      <main className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl font-semibold text-slate-900">
            Insight not found
          </h1>
          <p className="text-lg text-slate-600">
            We couldn’t find the article you were looking for. It may have been
            unpublished or the link may be outdated.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild>
              <Link to="/">Return home</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/insights">Browse all insights</Link>
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <Button variant="ghost" className="pl-0" asChild>
            <Link to="/insights">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to insights
            </Link>
          </Button>
        </div>
        <EditableText
          path={`insights.articles.${index}.category`}
          value={article.category}
          className="text-sm uppercase tracking-wide text-indigo-600"
        />
        <div className="text-xs uppercase tracking-wide text-slate-400 mb-2">URL Slug</div>
        <EditableText
          path={`insights.articles.${index}.slug`}
          value={article.slug}
          className="text-sm font-mono text-slate-500 mb-6"
        />
        <EditableText
          path={`insights.articles.${index}.title`}
          value={article.title}
          as="h1"
          className="text-4xl sm:text-5xl font-semibold text-slate-900 mb-6"
        />
        <EditableText
          path={`insights.articles.${index}.excerpt`}
          value={article.excerpt}
          as="p"
          className="text-xl text-slate-600 mb-8"
          multiline
        />
        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 mb-12">
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <EditableText
              path={`insights.articles.${index}.date`}
              value={article.date}
              className="text-sm"
            />
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <EditableText
              path={`insights.articles.${index}.readTime`}
              value={article.readTime}
              className="text-sm"
            />
          </span>
        </div>
        <EditableText
          path={`insights.articles.${index}.content`}
          value={article.content}
          as="div"
          className="prose prose-lg max-w-none text-slate-700 whitespace-pre-line"
          multiline
        />
      </div>
    </main>
  );
}
