
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Home = () => {
  const [showContactInfo, setShowContactInfo] = useState<{ [key: number]: boolean }>({});
  const [favorites, setFavorites] = useState<number[]>(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved).map((item: any) => item.id) : [];
  });
  const { toast } = useToast();
  const containerRef = useRef<HTMLDivElement>(null);

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
  
  const toggleFavorite = (type: any) => {
    const isFavorite = favorites.includes(type.id);
    let updatedFavorites;
    
    if (isFavorite) {
      updatedFavorites = favorites.filter(id => id !== type.id);
      const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      const filteredFavorites = savedFavorites.filter((item: any) => item.id !== type.id);
      localStorage.setItem('favorites', JSON.stringify(filteredFavorites));
      toast({
        title: "Removed from Favorites",
        description: `${type.name} has been removed from your favorites.`,
      });
    } else {
      updatedFavorites = [...favorites, type.id];
      const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      savedFavorites.push(type);
      localStorage.setItem('favorites', JSON.stringify(savedFavorites));
      toast({
        title: "Added to Favorites",
        description: `${type.name} has been added to your favorites.`,
      });
    }
    
    setFavorites(updatedFavorites);
  };

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
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  To place order call: <strong>(555) 123-4567</strong><br />
                  Or email: <strong>info@packwave.com</strong>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {containerTypes.map((type) => (
                <div 
                  key={type.id}
                  data-container-card
                  className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors"
                >
                  <div className="relative h-40 overflow-hidden rounded-lg mb-4">
                    <img 
                      src={type.image} 
                      alt={type.name}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => toggleFavorite(type)}
                      className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
                    >
                      {favorites.includes(type.id) ? (
                        <Heart className="h-5 w-5 text-red-500 fill-current" />
                      ) : (
                        <Heart className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                  <h3 className="font-medium text-center mb-2">{type.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                  <div className="text-center">
                    <Button 
                      className="bg-[#f97316] hover:text-white hover:bg-[#1a365d]"
                      onClick={() => handleCallToOrder(type.id)}
                    >
                      {showContactInfo[type.id] ? "Call to Order" : "Order now"}
                    </Button>
                    {showContactInfo[type.id] && (
                      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-700">
                          To place order call: <strong>(555) 123-4567</strong><br />
                          Or email: <strong>info@packwave.com</strong>
                        </p>
                      </div>
                    )}
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
