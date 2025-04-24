
import { useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ContainerDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();

  const containerTypes = {
    1: {
      name: "Regular Slotted Container",
      description: "Standard box with top and bottom flaps that meet in the middle",
      features: [
        "Most common box style",
        "Economical and versatile",
        "Suitable for most products",
        "Easy to assemble",
      ],
      specifications: {
        material: "Corrugated cardboard",
        closure: "Tape or glue",
        strength: "Regular to heavy-duty",
      },
    },
    2: {
      name: "Half Slotted Container",
      description: "Similar to RSC but with no top flaps",
      features: [
        "Open top design",
        "Perfect for display purposes",
        "Easy access to contents",
        "Stackable design",
      ],
      specifications: {
        material: "Corrugated cardboard",
        closure: "Lid required",
        strength: "Light to medium-duty",
      },
    },
    3: {
      name: "Full Overlap Container",
      description: "Box with top and bottom flaps that completely overlap",
      features: [
        "Maximum stacking strength",
        "Extra protection",
        "Ideal for heavy items",
        "Superior durability",
      ],
      specifications: {
        material: "Heavy-duty corrugated",
        closure: "Tape or glue",
        strength: "Heavy-duty",
      },
    },
    4: {
      name: "Custom Design",
      description: "Tailored to your specific requirements",
      features: [
        "Fully customizable",
        "Unique specifications",
        "Branded design options",
        "Tailored solutions",
      ],
      specifications: {
        material: "Various options",
        closure: "As required",
        strength: "As specified",
      },
    },
  };

  const container = containerTypes[id as keyof typeof containerTypes];

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart",
      description: `${container.name} has been added to your cart.`,
    });
  };

  if (!container) {
    return <div className="p-8">Container not found</div>;
  }

  return (
    <div className="min-h-screen pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="h-80 bg-gray-100 flex items-center justify-center rounded-lg mb-4">
                <span className="text-gray-500">Box Image</span>
              </div>
            </div>
            
            <div>
              <h1 className="text-3xl font-bold text-[#1a365d] mb-4">{container.name}</h1>
              <p className="text-gray-600 mb-6">{container.description}</p>
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-[#1a365d] mb-3">Features</h2>
                <ul className="list-disc list-inside space-y-2">
                  {container.features.map((feature, index) => (
                    <li key={index} className="text-gray-600">{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-[#1a365d] mb-3">Specifications</h2>
                <div className="space-y-2">
                  {Object.entries(container.specifications).map(([key, value]) => (
                    <p key={key} className="text-gray-600">
                      <span className="font-medium capitalize">{key}:</span> {value}
                    </p>
                  ))}
                </div>
              </div>
              
              <Button 
                className="bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-2 text-lg"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerDetail;
