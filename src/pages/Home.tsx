
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
    <div className="min-h-screen pt-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-10 sm:py-16 lg:py-20 gap-8">
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Custom Packaging Solutions for Your Business
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
              PackWave specializes in manufacturing high-quality corrugated boxes tailored to your specific needs. Transform your packaging experience with our innovative solutions.
            </p>
            <Button 
              className="bg-accent hover:bg-primary text-accent-foreground hover:text-primary-foreground px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto"
              onClick={() => setShowContactInfo(prev => ({ ...prev, [0]: !prev[0] }))}
            >
              {showContactInfo[0] ? "Call to Order" : "Order now"}
            </Button>
            {showContactInfo[0] && (
              <div ref={contactInfoRef} className="mt-4 p-3 sm:p-4 bg-card border border-border rounded-lg shadow-sm">
                <p className="text-sm text-foreground">
                  Contact: <strong>Axil Patel</strong><br />
                  Phone: <strong>+91 7202031313</strong>
                </p>
                <a 
                  href="https://wa.me/917202031313" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#25D366] hover:text-[#1da851] text-sm font-medium mt-2"
                >
                  <span className="text-[#25D366]">💬</span> Chat on WhatsApp
                </a>
                <p className="text-sm text-foreground mt-1">
                  Email: <strong>packwaveindustries@gmail.com</strong>
                </p>
              </div>
            )}
          </div>
          <div className="w-full md:w-1/2">
            <img 
              src="/lovable-uploads/c8eb6e7a-8190-4e9b-b63b-e7029672302f.png" 
              alt="Packaging Solutions" 
              className="rounded-lg w-full h-64 sm:h-80 lg:h-96 object-cover"
            />
          </div>
        </div>

        {/* Container Types Section */}
        <div className="py-10 sm:py-16 lg:py-20 bg-secondary rounded-2xl -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 mb-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-8 sm:mb-12">Our Container Types</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-start">
              {containerTypes.map((type) => (
                <div 
                  key={type.id}
                  data-container-card
                  className="bg-card border-2 border-border rounded-lg p-4 hover:border-accent transition-colors min-h-[280px] sm:min-h-[300px] flex flex-col"
                >
                  <div className="h-32 sm:h-40 overflow-hidden rounded-lg mb-4">
                    <img 
                      src={type.image} 
                      alt={type.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-medium text-center mb-2 text-foreground text-sm sm:text-base">{type.name}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">{type.description}</p>
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
