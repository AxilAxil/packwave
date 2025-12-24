
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

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
              <h2 className="text-2xl font-semibold text-[#1a365d] mb-4">Get In Touch</h2>
              <p className="text-gray-600 mb-4">
                Have questions about our products or services? Our team is here to help. Fill out the form or use the contact information below to reach us.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-[#1a365d] mb-2">Office Hours</h3>
              <p className="text-gray-600">Monday-Friday: 8:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-[#1a365d] mb-2">Contact Information</h3>
              <p className="text-gray-600">Contact Person: Axil Patel</p>
              <p className="text-gray-600">Phone: +91 7202031313</p>
              <a 
                href="https://wa.me/917202031313" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#25D366] hover:underline mt-1"
              >
                💬 Chat on WhatsApp
              </a>
              <p className="text-gray-600 mt-2">Email: packwaveindustries@gmail.com</p>
              <p className="text-gray-600">Address: Plot No: 24 to 28, Arya Industrial-4, Near Radhe Industrial-2, Olpad Sayan Road, Surat - 394540</p>
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
