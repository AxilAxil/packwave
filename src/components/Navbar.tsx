import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-[#1a365d]">PackWave</span>
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link to="/" className="text-gray-600 hover:text-[#f97316]">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-[#f97316]">About</Link>
            <Link to="/favorites" className="text-gray-600 hover:text-[#f97316]">Favorites</Link>
            <Link to="/contact" className="text-gray-600 hover:text-[#f97316]">Contact Us</Link>
            <Button variant="ghost" className="text-gray-600 hover:text-[#f97316]">
              <User className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="sm:hidden">
            <Button variant="ghost" size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
