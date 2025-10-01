import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@nexuscapital.com",
      href: "mailto:contact@nexuscapital.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+40 21 123 4567",
      href: "tel:+40211234567"
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Calea Victoriei 155, Bucharest, Romania",
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
    <section id="contact" className="py-20 text-white relative overflow-hidden" style={{background: 'linear-gradient(135deg, var(--green-corporate), var(--forest-deep))'}}>
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-44 h-44 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-300 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-section text-white mb-4">Contact</h2>
          <p className="text-body text-blue-100 max-w-2xl mx-auto">
            Ready to partner with us? Get in touch to discuss investment opportunities 
            and how we can help accelerate your growth.
          </p>
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
  );
}