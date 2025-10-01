import { Progress } from "./ui/progress";
import { TrendingUp, Users, DollarSign, Briefcase } from "lucide-react";

export function ResultsSection() {
  const metrics = [
    { label: "Portfolio Growth", value: 85, color: "bg-blue-600" },
    { label: "Operational Efficiency", value: 92, color: "bg-green-600" },
    { label: "Market Expansion", value: 78, color: "bg-purple-600" },
    { label: "Revenue Growth", value: 89, color: "bg-orange-600" }
  ];

  const achievements = [
    {
      icon: DollarSign,
      title: "€462M AUM",
      subtitle: "Assets Under Management",
      description: "Total capital deployed across our portfolio"
    },
    {
      icon: Briefcase,
      title: "16+ Portfolio",
      subtitle: "Active Investments",
      description: "Companies in various stages of growth"
    },
    {
      icon: TrendingUp,
      title: "3.2x Average",
      subtitle: "Return Multiple",
      description: "Consistent outperformance across exits"
    }
  ];

  return (
    <section id="results" className="py-20 text-white relative overflow-hidden" style={{background: 'linear-gradient(135deg, var(--racing-black), var(--racing-deep), var(--racing-medium))'}}>
      {/* Financial charts inspired background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <polyline
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            points="0,50 20,30 40,45 60,25 80,35 100,20"
          />
          <polyline
            fill="none"
            stroke="white"
            strokeWidth="0.3"
            points="0,70 15,65 30,80 50,60 70,75 85,55 100,50"
          />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-section text-white mb-4">Results</h2>
          <p className="text-body text-slate-300 max-w-2xl mx-auto">
            Our track record demonstrates consistent value creation through 
            strategic partnerships and operational excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-card-title text-white mb-6">Performance Metrics</h3>
            {metrics.map((metric, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-body text-slate-300">{metric.label}</span>
                  <span className="text-body font-semibold text-white">{metric.value}%</span>
                </div>
                <Progress value={metric.value} className="h-3" />
              </div>
            ))}
          </div>

          <div className="grid gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="backdrop-blur-sm rounded-lg p-6 flex items-start space-x-4 border" style={{backgroundColor: 'rgba(26, 61, 46, 0.4)', borderColor: 'rgba(77, 124, 89, 0.3)'}}>
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: 'var(--emerald-accent)'}}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-metric text-white mb-1">{achievement.title}</div>
                    <div className="text-body mb-2" style={{color: 'var(--emerald-light)'}}>{achievement.subtitle}</div>
                    <div className="text-caption text-slate-300">{achievement.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 rounded-lg p-8 text-center border" style={{background: 'linear-gradient(to right, var(--green-corporate), var(--forest-deep))', borderColor: 'rgba(22, 160, 133, 0.3)'}}>
          <h3 className="text-xl text-white mb-4">Investor Performance</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl text-white mb-2">15.2%</div>
              <div style={{color: 'var(--emerald-light)'}}>Net IRR</div>
            </div>
            <div>
              <div className="text-3xl text-white mb-2">2.8x</div>
              <div style={{color: 'var(--emerald-light)'}}>DPI Multiple</div>
            </div>
            <div>
              <div className="text-3xl text-white mb-2">95%</div>
              <div style={{color: 'var(--emerald-light)'}}>Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}