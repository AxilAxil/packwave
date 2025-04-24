
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Order = () => {
  const [orderType, setOrderType] = useState<string>("");
  
  return (
    <div className="min-h-screen pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-6">Place Your Order</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-[#1a365d] mb-4">Select Box Type</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {["Regular Slotted Container", "Half Slotted Container", "Full Overlap Container", "Custom Design"].map((type) => (
              <div 
                key={type}
                className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                  orderType === type ? "border-[#f97316] bg-orange-50" : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setOrderType(type)}
              >
                <div className="h-40 bg-gray-100 flex items-center justify-center mb-4 rounded">
                  <span className="text-gray-500">Box Image</span>
                </div>
                <h3 className="font-medium text-center">{type}</h3>
              </div>
            ))}
          </div>
          
          {orderType && (
            <div className="text-center">
              <p className="mb-4 text-lg">You selected: <span className="font-semibold">{orderType}</span></p>
              <Button 
                className="bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-2 text-lg"
                onClick={() => alert("Order form will be implemented in the next phase")}
              >
                Continue to Specifications
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Order;
