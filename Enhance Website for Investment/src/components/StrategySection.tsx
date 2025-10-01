import { TrendingUp, Cog, Target } from "lucide-react";

export function StrategySection() {
  const strategies = [
    {
      icon: TrendingUp,
      title: "Development",
      description: "We identify and develop emerging technology platforms with strong market potential and scalable business models.",
      features: [
        "Market analysis",
        "Product development",
        "Technology infrastructure",
        "Team building"
      ]
    },
    {
      icon: Cog,
      title: "Operations",
      description: "Our operational expertise helps portfolio companies optimize processes, improve efficiency, and accelerate growth.",
      features: [
        "Process optimization",
        "Operational excellence",
        "Strategic partnerships",
        "Resource allocation"
      ]
    },
    {
      icon: Target,
      title: "Outcomes",
      description: "We focus on sustainable, measurable outcomes that create long-term value for all stakeholders.",
      features: [
        "Performance metrics",
        "Value creation",
        "Exit strategies",
        "Stakeholder returns"
      ]
    }
  ];

  return (
    <section id="strategy" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-section text-slate-900 mb-4">Strategy</h2>
          <p className="text-body text-slate-600 max-w-3xl mx-auto">
            Our three-pillar approach ensures sustainable growth and exceptional returns 
            through strategic development, operational excellence, and outcome-focused execution.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {strategies.map((strategy, index) => {
            const Icon = strategy.icon;
            return (
              <div key={index} className="bg-slate-50 rounded-lg p-8 hover:shadow-lg transition-shadow border border-slate-200">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6" style={{backgroundColor: 'var(--green-corporate)'}}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-card-title text-slate-900 mb-4">{strategy.title}</h3>
                <p className="text-body text-slate-600 mb-6">{strategy.description}</p>
                
                <ul className="space-y-2">
                  {strategy.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-caption text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full mr-3" style={{backgroundColor: 'var(--green-corporate)'}}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}