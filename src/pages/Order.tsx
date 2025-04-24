
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
    },
    {
      id: 2,
      name: "Half Slotted Container",
      description: "Similar to RSC but with no top flaps",
    },
    {
      id: 3,
      name: "Full Overlap Container",
      description: "Box with top and bottom flaps that completely overlap",
    },
    {
      id: 4,
      name: "Custom Design",
      description: "Tailored to your specific requirements",
    },
  ];

  return (
    <div className="min-h-screen pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-6">Place Your Order</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-[#1a365d] mb-4">Select Box Type</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {containerTypes.map((type) => (
              <div 
                key={type.id}
                className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                  orderType === type.name ? "border-[#f97316] bg-orange-50" : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setOrderType(type.name)}
              >
                <div className="h-40 bg-gray-100 flex items-center justify-center mb-4 rounded">
                  <span className="text-gray-500">Box Image</span>
                </div>
                <h3 className="font-medium text-center mb-2">{type.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                <div className="text-center">
                  <Link to={`/container/${type.id}`}>
                    <Button 
                      className="bg-[#f97316] hover:bg-[#ea580c] text-white"
                    >
                      View Details
                    </Button>
                  </Link>
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
