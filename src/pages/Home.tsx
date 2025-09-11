
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
              className="bg-[#f97316] hover:text-white hover:bg-[#1a365d] text-white px-8 py-6 text-lg"
              onClick={() => window.open('tel:+15551234567')}
            >
              Call to Order
            </Button>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/lovable-uploads/19b44ba9-72ce-4c1c-83de-c21631592a10.png" 
              alt="Packaging Solutions" 
              className="rounded-lg w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
