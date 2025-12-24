import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you soon!",
    });
    // Form will be connected to email service later
  };

  return (
    <div className="min-h-screen pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-6">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  required
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f97316]"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  required
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f97316]"
                  placeholder="(555) 123-4567"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f97316]"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f97316] h-32"
                  placeholder="Please describe how we can help you..."
                />
              </div>
              
              <Button 
                type="submit"
                className="bg-[#f97316] hover:text-[#f97316] hover:bg-white border-2 border-[#f97316]"
              >
                Submit Message
              </Button>
            </form>
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-[#1a365d] mb-2">Get In Touch</h2>
              <p className="text-gray-600 text-sm">Have questions? Contact us directly.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href="tel:+917202031313"
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-10 h-10 min-w-[40px] bg-[#1a365d] rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-gray-500">Call Us</p>
                  <p className="font-medium text-gray-800">+91 7202031313</p>
                </div>
              </a>
              
              <a 
                href="https://wa.me/917202031313" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
              >
                <div className="w-10 h-10 min-w-[40px] bg-[#25D366] rounded-full flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-gray-500">WhatsApp</p>
                  <p className="font-medium text-[#25D366]">Chat Now</p>
                </div>
              </a>
              
              <a 
                href="mailto:packwaveindustries@gmail.com"
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors sm:col-span-2"
              >
                <div className="w-10 h-10 min-w-[40px] bg-[#f97316] rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-gray-800 truncate">packwaveindustries@gmail.com</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg sm:col-span-2">
                <div className="w-10 h-10 min-w-[40px] bg-[#1a365d] rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium text-gray-800">Surat, Gujarat</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-lg font-medium text-[#1a365d] mb-3">Our Location</h3>
              <div className="rounded-lg overflow-hidden border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.234567890123!2d72.8!3d21.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA5JzAwLjAiTiA3MsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="PackWave Office Location - Surat"
                ></iframe>
              </div>
              <a 
                href="https://www.google.com/maps/search/Plot+No+24+to+28+Arya+Industrial-4+Near+Radhe+Industrial-2+Olpad+Sayan+Road+Surat+394540"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#f97316] hover:underline text-sm mt-2"
              >
                📍 Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
