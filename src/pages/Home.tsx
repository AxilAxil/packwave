
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-20">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-6">
              Custom Packaging Solutions for Your Business
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              PackWave specializes in manufacturing high-quality corrugated boxes tailored to your specific needs. Transform your packaging experience with our innovative solutions.
            </p>
            <Button 
              className="bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-6 text-lg"
              onClick={() => navigate("/order")}
            >
              Order Now
            </Button>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <span className="text-gray-500">Hero Image Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
