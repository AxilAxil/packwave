
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

const Cart = () => {
  const { toast } = useToast();
  const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');

  const handlePlaceOrder = () => {
    toast({
      title: "Order Placed",
      description: "Your order has been placed successfully!",
    });
    localStorage.removeItem('cart');
  };

  const total = cartItems.reduce((acc: number, item: CartItem) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-[#1a365d] mb-6">Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty</p>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6">
            {cartItems.map((item: CartItem) => (
              <div key={item.id} className="flex items-center justify-between border-b py-4">
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <p className="font-medium">${item.price * item.quantity}</p>
              </div>
            ))}
            
            <div className="mt-6 flex justify-between items-center">
              <p className="text-xl font-bold">Total: ${total}</p>
              <Button 
                onClick={handlePlaceOrder}
                className="bg-[#f97316] hover:text-[#f97316] hover:bg-white border-2 border-[#f97316]"
              >
                Place Order
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
