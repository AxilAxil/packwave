import { useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart, Heart, Phone } from 'lucide-react';
import { publicUrl } from "@/lib/publicUrl";

const ContainerDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();

  const containerTypes = {
    1: {
      name: "Regular Slotted Container",
      description: "Standard box with top and bottom flaps that meet in the middle",
      image: publicUrl("lovable-uploads/7f1a93cc-3283-4c06-858b-63cddf0c8cf7.png"),
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
      image: publicUrl("lovable-uploads/9f7341c4-75a6-4766-a89d-b3cd3017c38a.png"),
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
      image: publicUrl("lovable-uploads/c8eb6e7a-8190-4e9b-b63b-e7029672302f.png"),
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
      image: publicUrl("lovable-uploads/b20d83b7-0f28-45c6-83a2-2ab2f2b819a6.png"),
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

  const numericId = id ? parseInt(id) : 0;
  const validId = numericId in containerTypes ? numericId as keyof typeof containerTypes : 1;
  const container = containerTypes[validId];

  const handleCallToOrder = () => {
    window.open('tel:+15551234567');
  };

  const handleAddToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (!favorites.some((item: any) => item.id === validId)) {
      favorites.push({ ...container, id: validId });
      localStorage.setItem('favorites', JSON.stringify(favorites));
      toast({
        title: "Added to Favorites",
        description: `${container.name} has been added to your favorites.`,
      });
    } else {
      toast({
        title: "Already in Favorites",
        description: `${container.name} is already in your favorites.`,
      });
    }
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
              <img 
                src={container.image} 
                alt={container.name}
                className="w-full h-80 object-cover rounded-lg"
              />
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
              
              <div className="flex space-x-4">
                <Button 
                  className="bg-accent hover:bg-primary text-accent-foreground hover:text-primary-foreground"
                  onClick={handleCallToOrder}
                >
                  <Phone className="mr-2" />
                  Call to Order
                </Button>
                <Button
                  variant="outline"
                  onClick={handleAddToFavorites}
                  className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <Heart className="mr-2" />
                  Add to Favorites
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerDetail;
