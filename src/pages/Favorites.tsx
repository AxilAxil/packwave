import { useState } from "react";
import { Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FavoriteItem {
  id: number;
  name: string;
  description: string;
}

const Favorites = () => {
  const [favorites, setFavorites] = useState<FavoriteItem[]>(() => {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
  });
  const { toast } = useToast();

  const removeFavorite = (itemId: number) => {
    const updatedFavorites = favorites.filter(item => item.id !== itemId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    toast({
      title: "Removed from Favorites",
      description: "Item has been removed from your favorites.",
    });
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
              <div key={item.id} className="bg-white rounded-lg shadow-md p-6 relative">
                <button
                  onClick={() => removeFavorite(item.id)}
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
                >
                  <Heart className="h-5 w-5 text-red-500 fill-current" />
                </button>
                <h3 className="font-medium text-lg mb-2 pr-12">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    To place order call: <strong>(555) 123-4567</strong><br />
                    Or email: <strong>info@packwave.com</strong>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;