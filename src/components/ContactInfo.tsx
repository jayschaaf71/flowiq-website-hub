
import { Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ContactInfo = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: "Phone",
      description: "Speak with our team",
      details: "(314) 420-5637",
      action: () => window.location.href = 'tel:+13144205637'
    },
    {
      icon: <Mail className="h-6 w-6 text-teal-600" />,
      title: "Email",
      description: "Send us a message",
      details: "jason@flow-iq.ai",
      action: () => window.open('mailto:jason@flow-iq.ai', '_self')
    },
    {
      icon: <Clock className="h-6 w-6 text-slate-600" />,
      title: "Response Time",
      description: "We respond quickly",
      details: "Within 4 hours"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Other Ways to Reach Us</h2>
          <p className="text-gray-600">Prefer a different communication method? We're here to help.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <Card 
              key={index} 
              className={`border-none shadow-lg hover:shadow-xl transition-shadow duration-300 text-center ${
                info.action ? 'cursor-pointer hover:bg-gray-50' : ''
              }`}
              onClick={info.action}
            >
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit">
                  {info.icon}
                </div>
                <CardTitle className="text-xl">{info.title}</CardTitle>
                <CardDescription>{info.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-medium">{info.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
