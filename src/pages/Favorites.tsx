
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Heart, ShoppingCart } from "lucide-react";

interface FavoriteItem {
  id: number;
  name: string;
  description: string;
}

const Favorites = () => {
  const { toast } = useToast();
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

  const moveToCart = (item: FavoriteItem) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push({ ...item, quantity: 1, price: 99.99 });
    localStorage.setItem('cart', JSON.stringify(cart));
    
    const newFavorites = favorites.filter((fav: FavoriteItem) => fav.id !== item.id);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    
    toast({
      title: "Added to Cart",
      description: `${item.name} has been moved to your cart.`,
    });
    window.location.reload();
  };

  return (
    <div className="min-h-screen pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-[#1a365d] mb-6">My Favorites</h1>
        
        {favorites.length === 0 ? (
          <p className="text-gray-600">No favorites yet</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((item: FavoriteItem) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-medium text-lg mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Button 
                  onClick={() => moveToCart(item)}
                  className="bg-[#f97316] hover:text-[#f97316] hover:bg-white border-2 border-[#f97316]"
                >
                  <ShoppingCart className="mr-2" />
                  Move to Cart
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
