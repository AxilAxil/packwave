
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";

const Home = () => {
  const [showContactInfo, setShowContactInfo] = useState<{ [key: number]: boolean }>({});
  const contactInfoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (contactInfoRef.current && !contactInfoRef.current.contains(event.target as Node)) {
        setShowContactInfo(prev => ({ ...prev, [0]: false }));
      }
    };

    if (showContactInfo[0]) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showContactInfo[0]]);

  const containerTypes = [
    {
      id: 1,
      name: "Regular Slotted Container",
      description: "Standard box with top and bottom flaps that meet in the middle",
      image: "/lovable-uploads/7f1a93cc-3283-4c06-858b-63cddf0c8cf7.png"
    },
    {
      id: 2,
      name: "Half Slotted Container",
      description: "Similar to RSC but with no top flaps",
      image: "/lovable-uploads/9f7341c4-75a6-4766-a89d-b3cd3017c38a.png"
    },
    {
      id: 3,
      name: "Full Overlap Container",
      description: "Box with top and bottom flaps that completely overlap",
      image: "/lovable-uploads/c8eb6e7a-8190-4e9b-b63b-e7029672302f.png"
    },
    {
      id: 4,
      name: "Custom Design",
      description: "Tailored to your specific requirements",
      image: "/lovable-uploads/b20d83b7-0f28-45c6-83a2-2ab2f2b819a6.png"
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-20">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-6">
              Custom Packaging Solutions for Your Business
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              PackWave specializes in manufacturing high-quality corrugated boxes tailored to your specific needs. Transform your packaging experience with our innovative solutions.
            </p>
            <Button 
              className="bg-[#f97316] hover:text-white hover:bg-[#1a365d] text-white px-8 py-6 text-lg"
              onClick={() => setShowContactInfo(prev => ({ ...prev, [0]: !prev[0] }))}
            >
              {showContactInfo[0] ? "Call to Order" : "Order now"}
            </Button>
            {showContactInfo[0] && (
              <div ref={contactInfoRef} className="mt-4 p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  Contact: <strong>Axil Patel</strong><br />
                  Phone: <strong>+91 7202031313</strong>
                </p>
                <a 
                  href="https://wa.me/917202031313" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#25D366] hover:underline text-sm font-medium mt-2"
                >
                  💬 Chat on WhatsApp
                </a>
                <p className="text-sm text-gray-700 mt-1">
                  Email: <strong>packwaveindustries@gmail.com</strong>
                </p>
              </div>
            )}
          </div>
          <div className="md:w-1/2">
            <img 
              src="/lovable-uploads/c8eb6e7a-8190-4e9b-b63b-e7029672302f.png" 
              alt="Packaging Solutions" 
              className="rounded-lg w-full h-96 object-cover"
            />
          </div>
        </div>

        {/* Container Types Section */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1a365d] text-center mb-12">Our Container Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
              {containerTypes.map((type) => (
                <div 
                  key={type.id}
                  data-container-card
                  className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors h-80 flex flex-col"
                >
                  <div className="h-40 overflow-hidden rounded-lg mb-4">
                    <img 
                      src={type.image} 
                      alt={type.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-medium text-center mb-2">{type.name}</h3>
                  <p className="text-gray-600 text-sm">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
