import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    
    const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Email:* ${encodeURIComponent(email)}%0A%0A*Message:*%0A${encodeURIComponent(message)}`;
    
    window.open(`https://wa.me/917202031313?text=${whatsappMessage}`, '_blank');
    
    toast({
      title: "Opening WhatsApp",
      description: "Complete sending the message in WhatsApp.",
    });
  };

  return (
    <div className="min-h-screen pt-16 pb-10 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          <div>
            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Your Name
                </label>
                <input
                  required
                  name="name"
                  type="text"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-card text-foreground text-sm sm:text-base"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Phone Number
                </label>
                <input
                  required
                  name="phone"
                  type="tel"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-card text-foreground text-sm sm:text-base"
                  placeholder="(555) 123-4567"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Email Address
                </label>
                <input
                  required
                  name="email"
                  type="email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-card text-foreground text-sm sm:text-base"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent h-28 sm:h-32 bg-card text-foreground text-sm sm:text-base resize-none"
                  placeholder="Please describe how we can help you..."
                />
              </div>
              
              <Button 
                type="submit"
                className="bg-accent hover:bg-primary text-accent-foreground hover:text-primary-foreground border-2 border-accent w-full sm:w-auto"
              >
                Submit Message
              </Button>
            </form>
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">Get In Touch</h2>
              <p className="text-muted-foreground text-sm">Have questions? Contact us directly.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <a 
                href="mailto:packwaveindustries@gmail.com"
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-secondary rounded-lg hover:bg-muted transition-colors sm:col-span-2"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 min-w-[36px] sm:min-w-[40px] bg-accent rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground truncate text-sm sm:text-base">packwaveindustries@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="tel:+917202031313"
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-secondary rounded-lg hover:bg-muted transition-colors"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 min-w-[36px] sm:min-w-[40px] bg-primary rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground">Call Us</p>
                  <p className="font-medium text-foreground text-sm sm:text-base">+91 7202031313</p>
                </div>
              </a>
              
              <a 
                href="https://wa.me/917202031313" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 min-w-[36px] sm:min-w-[40px] bg-[#25D366] rounded-full flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground">WhatsApp</p>
                  <p className="font-medium text-[#25D366] text-sm sm:text-base">Chat Now</p>
                </div>
              </a>
              
              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-secondary rounded-lg sm:col-span-2">
                <div className="w-9 h-9 sm:w-10 sm:h-10 min-w-[36px] sm:min-w-[40px] bg-primary rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-foreground text-sm sm:text-base">Surat, Gujarat</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 sm:mt-6">
              <h3 className="text-base sm:text-lg font-medium text-foreground mb-2 sm:mb-3">Our Location</h3>
              <div className="rounded-lg overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.234567890123!2d72.8!3d21.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA5JzAwLjAiTiA3MsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="PackWave Office Location - Surat"
                  className="sm:h-[250px]"
                ></iframe>
              </div>
              <a 
                href="https://www.google.com/maps/search/Plot+No+24+to+28+Arya+Industrial-4+Near+Radhe+Industrial-2+Olpad+Sayan+Road+Surat+394540"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:underline text-sm mt-2"
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
