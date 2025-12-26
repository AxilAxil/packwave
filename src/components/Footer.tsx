import { Copyright, Facebook, Instagram, Linkedin, Mail, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8 sm:py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">PackWave</h3>
            <p className="text-background/70 text-sm sm:text-base">
              Custom packaging solutions for your business needs. Quality, innovation, and sustainability.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-background/70 hover:text-accent transition-colors text-sm sm:text-base">Home</Link></li>
              <li><Link to="/about" className="text-background/70 hover:text-accent transition-colors text-sm sm:text-base">About</Link></li>
              <li><Link to="/contact" className="text-background/70 hover:text-accent transition-colors text-sm sm:text-base">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Contact</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="tel:+917202031313" className="flex items-center gap-2 text-background/70 hover:text-accent transition-colors text-sm sm:text-base">
                  <Phone size={16} className="shrink-0" /> +91 7202031313
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/917202031313" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#25D366] hover:text-[#20ba5a] transition-colors text-sm sm:text-base"
                >
                  <MessageCircle size={16} className="shrink-0" /> WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:packwaveindustries@gmail.com" className="flex items-center gap-2 text-background/70 hover:text-accent transition-colors text-sm sm:text-base">
                  <Mail size={16} className="shrink-0" /> Email Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-background/70 hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-background/70 hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-background/70 hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-6 sm:mt-8 pt-6 sm:pt-8 flex items-center justify-center text-background/60 text-sm">
          <Copyright size={14} className="mr-2" /> {new Date().getFullYear()} PackWave. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
