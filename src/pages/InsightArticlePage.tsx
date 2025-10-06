import { useEffect } from "react";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { EditableText } from "../components/EditableText";
import { useTextContent } from "../components/TextContentProvider";

export function InsightArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const { textContent } = useTextContent();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  const articleIndex = textContent.insights.articles.findIndex(
    (article) => article.slug === slug
  );

  if (articleIndex === -1) {
    return (
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-lg text-slate-700 mb-6">
            The requested insight could not be found.
          </p>
          <Link
            to={{ pathname: "/", hash: "#insights" }}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Return to insights overview
          </Link>
        </div>
      </section>
    );
  }

  const article = textContent.insights.articles[articleIndex];

  return (
    <article className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        <Link
          to={{ pathname: "/", hash: "#insights" }}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to insights overview
        </Link>

        <EditableText
          path={`insights.articles.${articleIndex}.category`}
          value={article.category}
          className="text-sm uppercase tracking-wide text-blue-600 mb-4 block"
        />

        <EditableText
          path={`insights.articles.${articleIndex}.title`}
          value={article.title}
          as="h1"
          className="text-4xl font-semibold text-slate-900 leading-tight mb-6"
        />

        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 mb-10">
          <span className="inline-flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            <EditableText
              path={`insights.articles.${articleIndex}.date`}
              value={article.date}
            />
          </span>
          <span className="inline-flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            <EditableText
              path={`insights.articles.${articleIndex}.readTime`}
              value={article.readTime}
            />
          </span>
        </div>

        <EditableText
          path={`insights.articles.${articleIndex}.excerpt`}
          value={article.excerpt}
          as="p"
          className="text-xl text-slate-700 mb-10"
          multiline
        />

        <EditableText
          path={`insights.articles.${articleIndex}.content`}
          value={article.content}
          as="div"
          className="prose prose-lg max-w-none text-slate-700 [&>p]:mb-6"
          style={{ whiteSpace: "pre-line" }}
          multiline
        />
      </div>
    </article>
  );
}
