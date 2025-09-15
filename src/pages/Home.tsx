
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Home = () => {
  const [showContactInfo, setShowContactInfo] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if click is outside any container card
      const containerCards = document.querySelectorAll('[data-container-card]');
      let clickedOutside = true;
      
      containerCards.forEach(card => {
        if (card.contains(event.target as Node)) {
          clickedOutside = false;
        }
      });
      
      if (clickedOutside) {
        setShowContactInfo({});
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCallToOrder = (typeId: number) => {
    setShowContactInfo(prev => ({ ...prev, [typeId]: !prev[typeId] }));
  };

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
        <div className="flex flex-col lg:flex-row items-center justify-between py-12 sm:py-16 lg:py-20">
          <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a365d] mb-4 sm:mb-6">
              Custom Packaging Solutions for Your Business
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
              PackWave specializes in manufacturing high-quality corrugated boxes tailored to your specific needs. Transform your packaging experience with our innovative solutions.
            </p>
            <Button 
              className="bg-[#f97316] hover:text-white hover:bg-[#1a365d] text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg"
              onClick={() => setShowContactInfo(prev => ({ ...prev, [0]: !prev[0] }))}
            >
              {showContactInfo[0] ? "Call to Order" : "Get Started"}
            </Button>
            {showContactInfo[0] && (
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  To place order call: <strong>(555) 123-4567</strong><br />
                  Or email: <strong>info@packwave.com</strong>
                </p>
              </div>
            )}
          </div>
          <div className="lg:w-1/2 w-full max-w-md lg:max-w-none">
            <img 
              src="/lovable-uploads/c8eb6e7a-8190-4e9b-b63b-e7029672302f.png" 
              alt="Packaging Solutions" 
              className="rounded-lg w-full h-64 sm:h-80 lg:h-96 object-cover"
            />
          </div>
        </div>

        {/* Container Types Section */}
        <div className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a365d] text-center mb-8 sm:mb-12">Our Container Types</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {containerTypes.map((type) => (
                <div 
                  key={type.id}
                  data-container-card
                  className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors h-full flex flex-col"
                >
                  <div className="h-32 sm:h-40 overflow-hidden rounded-lg mb-4 flex-shrink-0">
                    <img 
                      src={type.image} 
                      alt={type.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col flex-grow">
                    <h3 className="font-medium text-center mb-2 text-sm sm:text-base">{type.name}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm flex-grow">{type.description}</p>
                    <div className="mt-4">
                      <Button 
                        className="w-full bg-[#f97316] hover:text-white hover:bg-[#1a365d] text-sm"
                        onClick={() => handleCallToOrder(type.id)}
                      >
                        Get Quote
                      </Button>
                      {showContactInfo[type.id] && (
                        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                          <p className="text-xs sm:text-sm text-gray-700">
                            To place order call: <strong>(555) 123-4567</strong><br />
                            Or email: <strong>info@packwave.com</strong>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
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
