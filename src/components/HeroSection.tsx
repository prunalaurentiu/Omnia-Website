import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section id="home" className="bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden py-20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-32 h-32 bg-slate-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-32 w-48 h-48 bg-slate-300 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <h1 className="text-hero text-slate-900">
              Creștem platforme profitabile prin execuție operațională
            </h1>
            
            <p className="text-body text-slate-600 max-w-3xl mx-auto">
              Nexus Capital combines strategic vision with operational excellence to build 
              and scale profitable technology platforms. We partner with exceptional 
              founders to create sustainable competitive advantages.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" style={{backgroundColor: 'var(--green-corporate)'}} className="hover:opacity-90">
                Partner With Us
              </Button>
              <Button variant="outline" size="lg">
                View Portfolio
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-metric mb-2" style={{color: 'var(--green-corporate)'}}>€462M</div>
                <div className="text-caption text-slate-600">Assets Under Management</div>
              </div>
              <div className="text-center">
                <div className="text-metric mb-2" style={{color: 'var(--green-corporate)'}}>16+</div>
                <div className="text-caption text-slate-600">Portfolio Companies</div>
              </div>
              <div className="text-center">
                <div className="text-metric mb-2" style={{color: 'var(--green-corporate)'}}>95%</div>
                <div className="text-caption text-slate-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}