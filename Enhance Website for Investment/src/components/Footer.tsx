import { Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  const footerLinks = {
    Company: [
      { name: "About Us", href: "#" },
      { name: "Team", href: "#team" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" }
    ],
    Investment: [
      { name: "Portfolio", href: "#" },
      { name: "Strategy", href: "#strategy" },
      { name: "Insights", href: "#insights" },
      { name: "Results", href: "#results" }
    ],
    Resources: [
      { name: "Reports", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "FAQ", href: "#" }
    ],
    Legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Compliance", href: "#" },
      { name: "Risk Disclosure", href: "#" }
    ]
  };

  return (
    <footer className="text-white" style={{background: 'linear-gradient(135deg, var(--racing-black), var(--racing-deep))'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-card-title text-white mb-4">NEXUS CAPITAL</h3>
            <p className="text-body text-slate-300 mb-6">
              Building profitable technology platforms through strategic partnerships 
              and operational excellence. We invest in the future of Eastern European innovation.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{backgroundColor: 'var(--racing-medium)', color: '#0077B5'}}
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity text-white"
                style={{backgroundColor: 'var(--racing-medium)'}}
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contact@nexuscapital.com" 
                className="w-10 h-10 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity text-white"
                style={{backgroundColor: 'var(--racing-medium)'}}
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-body text-white mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-caption text-slate-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t mt-12 pt-8" style={{borderColor: 'var(--racing-medium)'}}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-caption text-slate-300">
              © 2024 Nexus Capital. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-caption text-slate-300">
              <span>Regulated by the Romanian Financial Supervisory Authority</span>
              <span>Fund License: PIF-123456</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}