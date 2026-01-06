import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// Import images as ES6 modules
import regularSlottedImg from "@/assets/regular-slotted-container.png";
import halfSlottedImg from "@/assets/half-slotted-container.png";
import fullOverlapImg from "@/assets/full-overlap-container.png";
import customDesignImg from "@/assets/custom-design.png";

const Home = () => {
  const [showContactInfo, setShowContactInfo] = useState<{ [key: number]: boolean }>({});
  const contactInfoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (contactInfoRef.current && !contactInfoRef.current.contains(event.target as Node)) {
        setShowContactInfo(prev => ({ ...prev, [0]: false }));
      }
    };

    if (showContactInfo[0]) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showContactInfo[0]]);

  const containerTypes = [
    {
      id: 1,
      name: "Regular Slotted Container",
      description: "Standard box with top and bottom flaps that meet in the middle. Ideal for shipping and storage.",
      image: regularSlottedImg
    },
    {
      id: 2,
      name: "Half Slotted Container",
      description: "Similar to RSC but with no top flaps. Perfect for products that need easy access.",
      image: halfSlottedImg
    },
    {
      id: 3,
      name: "Full Overlap Container",
      description: "Box with completely overlapping flaps for extra strength. Best for heavy items.",
      image: fullOverlapImg
    },
    {
      id: 4,
      name: "Custom Design",
      description: "Tailored packaging solutions designed specifically for your unique business requirements.",
      image: customDesignImg
    },
  ];

  return (
    <>
      <SEOHead 
        title="PackWave Industries - Premium Corrugated Boxes & Custom Packaging Solutions India"
        description="PackWave Industries is a leading manufacturer of corrugated boxes, RSC boxes, shipping containers & custom packaging solutions in Gujarat, India. Call +91 7202031313 for orders."
        keywords="corrugated boxes India, packaging manufacturer Gujarat, custom boxes, RSC boxes, shipping containers, cardboard boxes, industrial packaging India, packaging solutions"
        canonicalUrl="https://packwaveindustries.com"
      />
      <StructuredData type="Organization" />
      <StructuredData type="LocalBusiness" />
      <StructuredData type="FAQPage" />
      
      <main className="min-h-screen pt-16 bg-background" role="main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <header className="flex flex-col md:flex-row md:items-start justify-between py-10 sm:py-16 lg:py-20 gap-8">
            <article className="w-full md:w-1/2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                Custom Corrugated Packaging Solutions for Your Business in India
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
                PackWave Industries specializes in manufacturing high-quality corrugated boxes tailored to your specific needs. 
                Transform your packaging experience with our innovative RSC boxes, shipping containers, and custom packaging solutions. 
                Trusted by businesses across Gujarat and India.
              </p>
              <Button 
                className="bg-accent hover:bg-primary text-accent-foreground hover:text-primary-foreground px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto"
                onClick={() => setShowContactInfo(prev => ({ ...prev, [0]: !prev[0] }))}
                aria-expanded={showContactInfo[0]}
                aria-controls="contact-info"
              >
                {showContactInfo[0] ? "Call to Order" : "Order Now - Get Free Quote"}
              </Button>
              {showContactInfo[0] && (
                <aside 
                  id="contact-info"
                  ref={contactInfoRef} 
                  className="mt-4 p-3 sm:p-4 bg-card border border-border rounded-lg shadow-sm"
                  aria-label="Contact information"
                >
                  <address className="not-italic">
                    <p className="text-sm text-foreground">
                      Contact: <strong>Axil Patel</strong><br />
                      Phone: <a href="tel:+917202031313" className="hover:text-accent"><strong>+91 7202031313</strong></a>
                    </p>
                    <p className="text-sm text-foreground mt-1">
                      Email: <a href="mailto:packwaveindustries@gmail.com" className="hover:text-accent"><strong>packwaveindustries@gmail.com</strong></a>
                    </p>
                    <a 
                      href="https://wa.me/917202031313?text=Hi%20PackWave%2C%20I%27m%20interested%20in%20your%20packaging%20solutions" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#25D366] hover:text-[#1da851] text-sm font-medium mt-2"
                      aria-label="Chat with PackWave on WhatsApp"
                    >
                      <span className="text-[#25D366]">💬</span> Chat on WhatsApp
                    </a>
                  </address>
                </aside>
              )}
            </article>
            <figure className="w-full md:w-1/2 md:self-start">
              <img 
                src={fullOverlapImg} 
                alt="Premium corrugated packaging boxes and custom shipping containers manufactured by PackWave Industries India" 
                className="rounded-lg w-full h-64 sm:h-80 lg:h-96 object-cover"
                loading="eager"
                width="600"
                height="400"
              />
            </figure>
          </header>

          {/* Container Types Section */}
          <section 
            className="py-10 sm:py-16 lg:py-20 bg-secondary rounded-2xl -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 mb-8"
            aria-labelledby="container-types-heading"
          >
            <div className="max-w-7xl mx-auto">
              <h2 id="container-types-heading" className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-8 sm:mb-12">
                Our Corrugated Box Types & Packaging Solutions
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-start" role="list">
                {containerTypes.map((type) => (
                  <Link 
                    to={`/container/${type.id}`}
                    key={type.id}
                    role="listitem"
                  >
                    <article 
                      data-container-card
                      className="bg-card border-2 border-border rounded-lg p-4 hover:border-accent transition-colors min-h-[280px] sm:min-h-[300px] flex flex-col"
                    >
                      <figure className="h-32 sm:h-40 overflow-hidden rounded-lg mb-4">
                        <img 
                          src={type.image} 
                          alt={`${type.name} - Corrugated packaging box by PackWave Industries`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          width="300"
                          height="200"
                        />
                      </figure>
                      <h3 className="font-medium text-center mb-2 text-foreground text-sm sm:text-base">{type.name}</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm">{type.description}</p>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us Section - AEO Optimized */}
          <section className="py-10 sm:py-16 lg:py-20" aria-labelledby="why-choose-heading">
            <h2 id="why-choose-heading" className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-8 sm:mb-12">
              Why Choose PackWave Industries for Packaging?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <article className="text-center p-6 bg-card rounded-lg border border-border">
                <h3 className="font-semibold text-lg mb-3 text-foreground">Premium Quality Materials</h3>
                <p className="text-muted-foreground text-sm">
                  We use high-grade corrugated materials ensuring durability and protection for your products during shipping and storage.
                </p>
              </article>
              <article className="text-center p-6 bg-card rounded-lg border border-border">
                <h3 className="font-semibold text-lg mb-3 text-foreground">Custom Design Solutions</h3>
                <p className="text-muted-foreground text-sm">
                  Get packaging tailored to your exact specifications. From size to printing, we customize everything for your brand.
                </p>
              </article>
              <article className="text-center p-6 bg-card rounded-lg border border-border">
                <h3 className="font-semibold text-lg mb-3 text-foreground">Fast Delivery Across India</h3>
                <p className="text-muted-foreground text-sm">
                  Quick turnaround times with reliable delivery services. Serving businesses across Gujarat and all of India.
                </p>
              </article>
            </div>
          </section>

          {/* FAQ Section - SEO & AEO Optimized */}
          <section className="py-10 sm:py-16 lg:py-20 bg-secondary rounded-2xl -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 mb-8" aria-labelledby="faq-heading">
            <div className="max-w-4xl mx-auto">
              <h2 id="faq-heading" className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-8 sm:mb-12">
                Frequently Asked Questions About Corrugated Boxes
              </h2>
              <Accordion type="single" collapsible className="w-full space-y-2">
                <AccordionItem value="item-1" className="bg-card border border-border rounded-lg px-4">
                  <AccordionTrigger className="text-left text-foreground hover:no-underline">
                    What types of corrugated boxes does PackWave manufacture?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    PackWave Industries manufactures Regular Slotted Containers (RSC), Half Slotted Containers (HSC), Full Overlap Containers (FOL), and custom-designed packaging solutions. We specialize in 3-ply and 5-ply corrugated boxes for various industries including e-commerce, FMCG, and industrial sectors.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-4">
                  <AccordionTrigger className="text-left text-foreground hover:no-underline">
                    How can I order custom packaging from PackWave Industries?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    You can order custom packaging by calling us at +91 7202031313, emailing packwaveindustries@gmail.com, or messaging us on WhatsApp. Simply share your requirements including dimensions, quantity, and any special printing needs, and we'll provide a free quote within 24 hours.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-4">
                  <AccordionTrigger className="text-left text-foreground hover:no-underline">
                    Does PackWave deliver packaging boxes across India?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, PackWave Industries delivers corrugated boxes and packaging solutions across India. We are based in Gujarat and offer fast delivery to all major cities and industrial areas. Bulk orders receive priority shipping with competitive freight rates.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-4">
                  <AccordionTrigger className="text-left text-foreground hover:no-underline">
                    What is the minimum order quantity for corrugated boxes?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Our minimum order quantity varies based on box size and customization requirements. For standard boxes, we typically require a minimum of 100 pieces. Custom printed boxes may have higher minimums. Contact us for specific MOQ details for your requirements.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-card border border-border rounded-lg px-4">
                  <AccordionTrigger className="text-left text-foreground hover:no-underline">
                    What are the best corrugated boxes for shipping?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    For shipping, we recommend Regular Slotted Containers (RSC) for general products, and Full Overlap Containers (FOL) for heavy or fragile items. The choice depends on product weight, fragility, and shipping distance. Our team can help you select the optimal box type for your needs.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="bg-card border border-border rounded-lg px-4">
                  <AccordionTrigger className="text-left text-foreground hover:no-underline">
                    Where is PackWave Industries located?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    PackWave Industries is located in Gujarat, India. We serve businesses across Gujarat and throughout India with our corrugated packaging solutions. Our central location allows for efficient delivery to major industrial hubs across the country.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="bg-card border border-border rounded-lg px-4">
                  <AccordionTrigger className="text-left text-foreground hover:no-underline">
                    Does PackWave offer custom printed boxes?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, we offer custom printing on corrugated boxes including your logo, brand colors, product information, and handling instructions. We provide both flexographic and digital printing options depending on your quantity and design requirements.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="bg-card border border-border rounded-lg px-4">
                  <AccordionTrigger className="text-left text-foreground hover:no-underline">
                    What is the price of corrugated boxes in India?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Corrugated box prices vary based on size, ply (3-ply, 5-ply, 7-ply), quantity, and customization. PackWave Industries offers competitive pricing with bulk discounts. Contact us with your specifications for a free, no-obligation quote tailored to your requirements.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
