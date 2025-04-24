
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-6">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f97316]"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f97316]"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f97316]"
                  placeholder="Inquiry about custom boxes"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f97316] h-32"
                  placeholder="Please describe how we can help you..."
                />
              </div>
              
              <Button 
                className="bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-2"
                onClick={() => alert("Contact form will be implemented in the next phase")}
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
              <p className="text-gray-600">Email: info@packwave.com</p>
              <p className="text-gray-600">Phone: (555) 123-4567</p>
              <p className="text-gray-600">Address: 1234 Box Avenue, Packaging City, PC 12345</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
