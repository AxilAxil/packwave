
interface FavoriteItem {
  id: number;
  name: string;
  description: string;
}

const Favorites = () => {
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

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
