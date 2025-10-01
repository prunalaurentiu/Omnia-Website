import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Linkedin, Mail } from "lucide-react";

export function TeamSection() {
  const executiveImage = "https://images.unsplash.com/photo-1708195886023-3ecb00ac7a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTA3NDU1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  const teamImage = "https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU5MTA3MjcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  const teamMembers = [
    {
      name: "Marcus Stevens",
      title: "Managing Partner",
      image: executiveImage,
      bio: "20+ years in private equity and technology. Former McKinsey & Company partner.",
      linkedin: "#",
      email: "marcus@nexuscapital.com"
    },
    {
      name: "Isabella Martinez",
      title: "Senior Partner",
      image: teamImage,
      bio: "Former tech executive with expertise in scaling operations and strategic partnerships.",
      linkedin: "#",
      email: "isabella@nexuscapital.com"
    },
    {
      name: "David Chen",
      title: "Investment Director",
      image: executiveImage,
      bio: "Investment professional with deep expertise in technology and growth-stage companies.",
      linkedin: "#",
      email: "david@nexuscapital.com"
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-stone-900 to-stone-800 text-white relative overflow-hidden" style={{background: 'linear-gradient(to bottom, var(--racing-black), var(--racing-deep))'}}>
      {/* Geometric accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-600 opacity-5 rounded-full transform translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-400 opacity-10 rounded-full transform -translate-x-16 translate-y-16"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-section text-white mb-4">Team</h2>
          <p className="text-body text-slate-300 max-w-3xl mx-auto">
            Our experienced team combines deep investment expertise with operational knowledge 
            to help portfolio companies achieve exceptional growth and sustainable success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-card-title text-slate-900 mb-1">{member.name}</h3>
                <p className="text-body mb-3" style={{color: 'var(--green-corporate)'}}>{member.title}</p>
                <p className="text-body text-slate-600 mb-4">{member.bio}</p>
                
                <div className="flex space-x-3">
                  <a 
                    href={member.linkedin}
                    className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                    style={{backgroundColor: '#0077B5'}}
                  >
                    <Linkedin className="w-4 h-4 text-white" />
                  </a>
                  <a 
                    href={`mailto:${member.email}`}
                    className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}