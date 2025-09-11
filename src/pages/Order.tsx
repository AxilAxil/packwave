import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const Order = () => {
  const [orderType, setOrderType] = useState<string>("");
  
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
                <div className="h-40 overflow-hidden rounded-lg mb-4">
                  <img 
                    src={type.image} 
                    alt={type.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium text-center mb-2">{type.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                <div className="text-center">
                  <Button 
                    className="bg-[#f97316] hover:text-white hover:bg-[#1a365d]"
                    onClick={() => window.open('tel:+15551234567')}
                  >
                    Call to Order
                  </Button>
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
