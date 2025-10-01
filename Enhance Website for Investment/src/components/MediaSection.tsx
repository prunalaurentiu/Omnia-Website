import { ExternalLink, Award, FileText } from "lucide-react";

export function MediaSection() {
  const mediaItems = [
    {
      type: "Press Release",
      title: "Nexus Capital Announces €50M Fund for Eastern European Tech",
      source: "TechCrunch Europe",
      date: "January 15, 2024",
      icon: FileText
    },
    {
      type: "Award",
      title: "Best Private Equity Firm - Eastern Europe 2023",
      source: "Financial Times",
      date: "December 1, 2023",
      icon: Award
    },
    {
      type: "Interview",
      title: "Building Sustainable Tech Platforms: A Strategic Approach",
      source: "Forbes Romania",
      date: "November 20, 2023",
      icon: ExternalLink
    }
  ];

  return (
    <section className="py-20 text-white relative overflow-hidden" style={{background: 'linear-gradient(135deg, var(--green-corporate), var(--forest-deep))'}}>
      {/* Subtle geometric elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-40 h-40 bg-white rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 left-32 w-56 h-56 bg-green-300 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-section text-white mb-4">Media</h2>
          <p className="text-body text-green-100 max-w-2xl mx-auto">
            Recent press coverage, awards, and thought leadership from Nexus Capital 
            and our portfolio companies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {mediaItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5" style={{color: 'var(--green-corporate)'}} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-caption mb-1" style={{color: 'var(--green-corporate)'}}>{item.type}</div>
                    <h3 className="text-card-title text-slate-900 mb-2">{item.title}</h3>
                    <div className="flex items-center justify-between text-caption text-slate-500">
                      <span>{item.source}</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 text-sm text-blue-100">
            <span>Press inquiries:</span>
            <a href="mailto:press@nexuscapital.com" className="text-white hover:opacity-80 underline">
              press@nexuscapital.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}