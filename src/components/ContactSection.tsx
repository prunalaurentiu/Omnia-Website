import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Mail, Phone, MapPin, Clock, Palette } from "lucide-react";
import { useState, ChangeEvent, FormEvent } from "react";
import { ColorPicker } from "./ColorPicker";
import { useSectionColors } from "./SectionColorProvider";
import { EditableText } from "./EditableText";
import { useTextContent } from "./TextContentProvider";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactSection() {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const { colors, setColors } = useSectionColors('contact', true);
  const { textContent } = useTextContent();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formFeedback, setFormFeedback] = useState("");

  const handleInputChange = (
    field: keyof typeof formData
  ) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = event.target.value;
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.firstName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus("error");
      setFormFeedback("Please complete the required fields before submitting.");
      return;
    }

    setFormStatus("submitting");
    setFormFeedback("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 600));

      setFormStatus("success");
      setFormFeedback("Thanks for reaching out. Our team will respond within 24 hours.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      setFormStatus("error");
      setFormFeedback("Something went wrong. Please try again.");
    }
  };

  const isSubmitting = formStatus === "submitting";
  
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
      value: "Monday – Friday, 09:00 AM – 06:00 PM (EET)",
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
                <li>• Technology-enabled or traditional sectors requiring modernization</li>
                <li>• Revenue stage businesses with ≥ €1M ARR and strong unit economics</li>
                <li>• Eastern European presence with potential for regional expansion</li>
                <li>• Scalable models via organic growth, buy-and-build or technology adoption</li>
                <li>• Founders committed to partnership, professionalization and ESG best practices</li>
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
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      autoComplete="given-name"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange('firstName')}
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      autoComplete="family-name"
                      value={formData.lastName}
                      onChange={handleInputChange('lastName')}
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange('email')}
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    placeholder="Your Company"
                    autoComplete="organization"
                    value={formData.company}
                    onChange={handleInputChange('company')}
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Investment Opportunity"
                    autoComplete="off"
                    value={formData.subject}
                    onChange={handleInputChange('subject')}
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your company and how we can help..."
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleInputChange('message')}
                    disabled={isSubmitting}
                  />
                </div>

                <Button
                  className="w-full"
                  size="lg"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending…' : 'Send Message'}
                </Button>

                <div
                  className={`text-center text-caption ${
                    formStatus === 'success'
                      ? 'text-emerald-600'
                      : formStatus === 'error'
                        ? 'text-red-600'
                        : 'text-slate-500'
                  }`}
                  aria-live="polite"
                >
                  {formFeedback || 'By submitting this form, you agree to our privacy policy.'}
                </div>
              </form>
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