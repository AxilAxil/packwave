import { Copyright, Facebook, Instagram, Linkedin, Mail, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">PackWave</h3>
            <p className="text-muted">
              Custom packaging solutions for your business needs. Quality, innovation, and sustainability.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted hover:text-accent">Home</Link></li>
              <li><Link to="/about" className="text-muted hover:text-accent">About</Link></li>
              <li><Link to="/contact" className="text-muted hover:text-accent">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+917202031313" className="flex items-center gap-2 text-muted hover:text-accent">
                  <Phone size={16} /> +91 7202031313
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/917202031313" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#25D366] hover:text-[#20ba5a]"
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:packwaveindustries@gmail.com" className="flex items-center gap-2 text-muted hover:text-accent">
                  <Mail size={16} /> Email Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted hover:text-accent">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted hover:text-accent">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted hover:text-accent">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-muted/30 mt-8 pt-8 flex items-center justify-center text-muted">
          <Copyright size={16} className="mr-2" /> {new Date().getFullYear()} PackWave. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
