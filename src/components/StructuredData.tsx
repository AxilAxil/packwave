import { useEffect } from 'react';

interface StructuredDataProps {
  type: 'Organization' | 'LocalBusiness' | 'Product' | 'FAQPage' | 'BreadcrumbList';
  data?: Record<string, unknown>;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  useEffect(() => {
    const getStructuredData = () => {
      switch (type) {
        case 'Organization':
          return {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "PackWave Industries",
            "alternateName": "PackWave",
            "url": "https://packwaveindustries.com",
            "logo": "https://packwaveindustries.com/logo.png",
            "description": "Leading manufacturer of corrugated boxes and custom packaging solutions in India",
            "foundingDate": "2020",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Gujarat",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-7202031313",
              "contactType": "sales",
              "email": "packwaveindustries@gmail.com",
              "availableLanguage": ["English", "Hindi", "Gujarati"]
            },
            "sameAs": [
              "https://wa.me/917202031313"
            ],
            ...data
          };
        
        case 'LocalBusiness':
          return {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://packwaveindustries.com/#business",
            "name": "PackWave Industries",
            "image": "https://packwaveindustries.com/og-image.png",
            "description": "Premium corrugated box manufacturer offering custom packaging solutions for businesses across India",
            "url": "https://packwaveindustries.com",
            "telephone": "+91-7202031313",
            "email": "packwaveindustries@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Gujarat",
              "addressRegion": "Gujarat",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 22.3072,
              "longitude": 73.1812
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "09:00",
              "closes": "18:00"
            },
            "priceRange": "$$",
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Packaging Solutions",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Regular Slotted Container (RSC)",
                    "description": "Standard corrugated box with top and bottom flaps that meet in the middle"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Half Slotted Container",
                    "description": "Corrugated box similar to RSC but with no top flaps"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Full Overlap Container",
                    "description": "Heavy-duty box with completely overlapping flaps for extra strength"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Custom Design Boxes",
                    "description": "Tailored packaging solutions designed for specific business requirements"
                  }
                }
              ]
            },
            ...data
          };

        case 'FAQPage':
          return {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What types of corrugated boxes does PackWave manufacture?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "PackWave manufactures Regular Slotted Containers (RSC), Half Slotted Containers, Full Overlap Containers, and Custom Design boxes tailored to your specific needs."
                }
              },
              {
                "@type": "Question",
                "name": "How can I order custom packaging from PackWave?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can order by calling +91-7202031313, emailing packwaveindustries@gmail.com, or chatting with us on WhatsApp for quick assistance."
                }
              },
              {
                "@type": "Question",
                "name": "Does PackWave deliver packaging across India?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, PackWave Industries provides packaging solutions and delivery services across India."
                }
              },
              {
                "@type": "Question",
                "name": "What is the minimum order quantity for custom boxes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Minimum order quantities vary based on the type and size of boxes. Contact us for specific requirements and we'll provide a customized quote."
                }
              }
            ],
            ...data
          };

        case 'BreadcrumbList':
          return {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": data?.items || []
          };

        case 'Product':
          return {
            "@context": "https://schema.org",
            "@type": "Product",
            ...data
          };

        default:
          return null;
      }
    };

    const structuredData = getStructuredData();
    if (!structuredData) return;

    // Remove existing script if present
    const existingScript = document.querySelector(`script[data-structured-data="${type}"]`);
    if (existingScript) {
      existingScript.remove();
    }

    // Add new script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-structured-data', type);
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [type, data]);

  return null;
};

export default StructuredData;
