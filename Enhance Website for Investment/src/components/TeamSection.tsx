import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Linkedin, Mail, Palette } from "lucide-react";
import { useState } from "react";
import { ColorPicker } from "./ColorPicker";
import { useSectionColors } from "./SectionColorProvider";
import { EditableText } from "./EditableText";
import { useTextContent } from "./TextContentProvider";

export function TeamSection() {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const { colors, setColors } = useSectionColors('team', true);
  const { textContent } = useTextContent();
  const executiveImage = "https://images.unsplash.com/photo-1708195886023-3ecb00ac7a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTA3NDU1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  const teamImage = "https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU5MTA3MjcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  const teamMembers = textContent.team.members.map((member, index) => ({
    ...member,
    image: index % 2 === 0 ? executiveImage : teamImage,
    linkedin: "#",
    email: `${member.name.toLowerCase().replace(' ', '.')}@omnia.capital`
  }));

  return (
    <>
      <section id="team" className="py-20 text-white relative overflow-hidden" style={{background: `linear-gradient(to bottom, ${colors.gradientStart}, ${colors.gradientEnd})`}}>
        {/* Color Picker Button */}
        <button
          onClick={() => setShowColorPicker(true)}
          className="absolute top-4 right-4 z-20 p-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all"
          title="Edit Colors"
        >
          <Palette className="w-5 h-5 text-white" />
        </button>
        
        {/* Geometric accent */}
        <div 
          className="absolute top-0 right-0 w-96 h-96 rounded-full transform translate-x-32 -translate-y-32"
          style={{
            backgroundColor: colors.accentCircle1,
            opacity: colors.accentCircle1Opacity
          }}
        ></div>
        <div 
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full transform -translate-x-16 translate-y-16"
          style={{
            backgroundColor: colors.accentCircle2,
            opacity: colors.accentCircle2Opacity
          }}
        ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <EditableText
            path="team.title"
            value={textContent.team.title}
            as="h2"
            className="text-section text-white mb-4"
          />
          <EditableText
            path="team.description"
            value={textContent.team.description}
            as="p"
            className="text-body text-slate-300 max-w-3xl mx-auto"
            multiline
          />
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
                <EditableText
                  path={`team.members.${index}.name`}
                  value={member.name}
                  as="h3"
                  className="text-card-title text-slate-900 mb-1"
                />
                <EditableText
                  path={`team.members.${index}.role`}
                  value={member.role}
                  as="p"
                  className="text-body mb-3"
                  style={{color: 'var(--green-corporate)'}}
                />
                <EditableText
                  path={`team.members.${index}.bio`}
                  value={member.bio}
                  as="p"
                  className="text-body text-slate-600 mb-4"
                  multiline
                />
                
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
    
    {showColorPicker && (
      <ColorPicker
        sectionId="team"
        sectionName="Team"
        onClose={() => setShowColorPicker(false)}
        onColorsChange={setColors}
        initialColors={colors}
      />
    )}
    </>
  );
}