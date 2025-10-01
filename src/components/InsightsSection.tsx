import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function InsightsSection() {
  const insights = [
    {
      category: "Investment Strategy",
      title: "The Convergence of Technology and Operational Excellence",
      excerpt: "How modern investment strategies combine technological innovation with proven operational frameworks to create sustainable competitive advantages.",
      date: "December 15, 2023",
      readTime: "5 min read"
    },
    {
      category: "Market Analysis", 
      title: "Emerging Markets in Eastern Europe: Opportunities for Growth",
      excerpt: "Our analysis of high-growth markets in Eastern Europe and the strategies that drive exceptional returns in emerging economies.",
      date: "December 8, 2023",
      readTime: "7 min read"
    },
    {
      category: "Portfolio Update",
      title: "Operational Excellence in Practice: Case Studies from Our Portfolio",
      excerpt: "Real-world examples of how our operational expertise has helped portfolio companies achieve 300%+ growth rates.",
      date: "November 28, 2023",
      readTime: "6 min read"
    }
  ];

  return (
    <section id="insights" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 left-20 w-40 h-40 bg-slate-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-slate-300 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-section text-slate-900 mb-4">Insights</h2>
            <p className="text-body text-slate-600 max-w-2xl">
              Strategic perspectives on investment trends, market opportunities, 
              and operational excellence from our experienced team.
            </p>
          </div>
          <Button variant="outline" className="hidden lg:flex">
            View All Insights
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <article key={index} className="bg-slate-50 rounded-lg p-8 hover:shadow-lg transition-shadow cursor-pointer border border-slate-200">
              <div className="text-caption mb-3" style={{color: 'var(--green-corporate)'}}>{insight.category}</div>
              <h3 className="text-card-title text-slate-900 mb-3">{insight.title}</h3>
              <p className="text-body text-slate-600 mb-6">{insight.excerpt}</p>
              
              <div className="flex items-center justify-between text-caption text-slate-500">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {insight.date}
                </div>
                <div>{insight.readTime}</div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12 lg:hidden">
          <Button variant="outline">
            View All Insights
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}