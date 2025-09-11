import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, HeartOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Order = () => {
  const [orderType, setOrderType] = useState<string>("");
  const [showContactInfo, setShowContactInfo] = useState<{ [key: number]: boolean }>({});
  const [favorites, setFavorites] = useState<number[]>(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved).map((item: any) => item.id) : [];
  });
  const { toast } = useToast();
  
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
    window.open('tel:+15551234567');
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
    <div className="min-h-screen pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-6">Place Your Order</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-[#1a365d] mb-4">Our Box Types</h2>
          <p className="text-gray-600 mb-6">To place an order, please call us at (555) 123-4567 or email info@packwave.com</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {containerTypes.map((type) => (
              <div 
                key={type.id}
                className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                  orderType === type.name ? "border-[#f97316] bg-orange-50" : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setOrderType(type.name)}
              >
              <div className="relative h-40 overflow-hidden rounded-lg mb-4">
                <img 
                  src={type.image} 
                  alt={type.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(type);
                  }}
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
                    Call to Order
                  </Button>
                  {showContactInfo[type.id] && (
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-700">
                        Call on this number to place order: <strong>(555) 123-4567</strong><br />
                        Or drop an email at: <strong>info@packwave.com</strong>
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
  );
};

export default Order;
