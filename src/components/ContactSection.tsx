import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Mail, Phone, MapPin, Clock, Palette } from "lucide-react";
import { useState } from "react";
import { ColorPicker } from "./ColorPicker";
import { useSectionColors } from "./SectionColorProvider";
import { EditableText } from "./EditableText";
import { useTextContent } from "./TextContentProvider";

export function ContactSection() {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const { colors, setColors } = useSectionColors('contact', true);
  const { textContent } = useTextContent();
  
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: textContent.contact.office.email,
      href: `mailto:${textContent.contact.office.email}`
    },
    {
      icon: Phone,
      label: "Phone", 
      value: textContent.contact.office.phone,
      href: `tel:${textContent.contact.office.phone.replace(/\s/g, '')}`
    },
    {
      icon: MapPin,
      label: "Address",
      value: textContent.contact.office.address,
      href: "#"
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: "Monday - Friday, 9:00 AM - 6:00 PM",
      href: "#"
    }
  ];

  return (
    <>
      <section id="contact" className="py-20 text-white relative overflow-hidden" style={{background: `linear-gradient(to bottom, ${colors.gradientStart}, ${colors.gradientEnd})`}}>
        {/* Color Picker Button */}
        <button
          onClick={() => setShowColorPicker(true)}
          className="hidden absolute top-4 right-4 z-20 p-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all"
          title="Edit Colors"
        >
          <Palette className="w-5 h-5 text-white" />
        </button>
        
        {/* Geometric accent circles */}
        <div 
          className="absolute top-0 right-0 w-80 h-80 rounded-full transform translate-x-24 -translate-y-24"
          style={{
            backgroundColor: colors.accentCircle1,
            opacity: colors.accentCircle1Opacity
          }}
        ></div>
        <div 
          className="absolute bottom-0 left-0 w-56 h-56 rounded-full transform -translate-x-12 translate-y-12"
          style={{
            backgroundColor: colors.accentCircle2,
            opacity: colors.accentCircle2Opacity
          }}
        ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <EditableText
            path="contact.title"
            value={textContent.contact.title}
            as="h2"
            className="text-section text-white mb-4"
          />
          <EditableText
            path="contact.description"
            value={textContent.contact.description}
            as="p"
            className="text-body text-blue-100 max-w-2xl mx-auto"
            multiline
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-card-title text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-caption text-blue-100 mb-1">{info.label}</div>
                        {info.href.startsWith('#') ? (
                          <div className="text-body text-white">{info.value}</div>
                        ) : (
                          <a 
                            href={info.href} 
                            className="text-body text-white hover:text-blue-200 transition-colors underline"
                          >
                            {info.value}
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="backdrop-blur-sm rounded-lg p-6 border" style={{backgroundColor: 'rgba(45, 90, 69, 0.3)', borderColor: 'rgba(74, 124, 89, 0.3)'}}>
              <h4 className="text-card-title text-white mb-3">Investment Criteria</h4>
              <ul className="space-y-2 text-body text-blue-100">
                <li>• Technology-focused companies</li>
                <li>• Revenue stage businesses ($1M+ ARR)</li>
                <li>• Eastern European market presence</li>
                <li>• Scalable business models</li>
                <li>• Strong founding teams</li>
              </ul>
            </div>
          </div>

          <Card className="bg-slate-50 border-slate-200">
            <CardHeader>
              <CardTitle className="text-card-title text-slate-900">Send us a Message</CardTitle>
              <CardDescription className="text-body text-slate-600">
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@company.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Your Company" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Investment Opportunity" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your company and how we can help..."
                  rows={6}
                />
              </div>

              <Button className="w-full" size="lg">
                Send Message
              </Button>

              <div className="text-center text-caption text-slate-500">
                By submitting this form, you agree to our privacy policy.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
    
    {showColorPicker && (
      <ColorPicker
        onClose={() => setShowColorPicker(false)}
        onColorsChange={setColors}
        initialColors={colors}
      />
    )}
    </>
  );
}