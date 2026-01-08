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
                  "priceCurrency": "INR",
                  "price": "0",
                  "priceValidUntil": "2027-12-31",
                  "availability": "https://schema.org/InStock",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Regular Slotted Container (RSC)",
                    "description": "Standard corrugated box with top and bottom flaps that meet in the middle",
                    "image": "https://packwaveindustries.com/regular-slotted-container.png",
                    "brand": {
                      "@type": "Brand",
                      "name": "PackWave Industries"
                    },
                    "offers": {
                      "@type": "Offer",
                      "priceCurrency": "INR",
                      "price": "0",
                      "priceValidUntil": "2027-12-31",
                      "availability": "https://schema.org/InStock",
                      "url": "https://packwaveindustries.com/container/1",
                      "shippingDetails": {
                        "@type": "OfferShippingDetails",
                        "shippingDestination": {
                          "@type": "DefinedRegion",
                          "addressCountry": "IN"
                        },
                        "deliveryTime": {
                          "@type": "ShippingDeliveryTime",
                          "handlingTime": {
                            "@type": "QuantitativeValue",
                            "minValue": 1,
                            "maxValue": 3,
                            "unitCode": "DAY"
                          },
                          "transitTime": {
                            "@type": "QuantitativeValue",
                            "minValue": 2,
                            "maxValue": 7,
                            "unitCode": "DAY"
                          }
                        }
                      },
                      "hasMerchantReturnPolicy": {
                        "@type": "MerchantReturnPolicy",
                        "applicableCountry": "IN",
                        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
                        "merchantReturnDays": 7,
                        "returnMethod": "https://schema.org/ReturnByMail",
                        "returnFees": "https://schema.org/FreeReturn"
                      }
                    },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.8",
                      "reviewCount": "150"
                    }
                  }
                },
                {
                  "@type": "Offer",
                  "priceCurrency": "INR",
                  "price": "0",
                  "priceValidUntil": "2027-12-31",
                  "availability": "https://schema.org/InStock",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Half Slotted Container",
                    "description": "Corrugated box similar to RSC but with no top flaps",
                    "image": "https://packwaveindustries.com/half-slotted-container.png",
                    "brand": {
                      "@type": "Brand",
                      "name": "PackWave Industries"
                    },
                    "offers": {
                      "@type": "Offer",
                      "priceCurrency": "INR",
                      "price": "0",
                      "priceValidUntil": "2027-12-31",
                      "availability": "https://schema.org/InStock",
                      "url": "https://packwaveindustries.com/container/2",
                      "shippingDetails": {
                        "@type": "OfferShippingDetails",
                        "shippingDestination": {
                          "@type": "DefinedRegion",
                          "addressCountry": "IN"
                        },
                        "deliveryTime": {
                          "@type": "ShippingDeliveryTime",
                          "handlingTime": {
                            "@type": "QuantitativeValue",
                            "minValue": 1,
                            "maxValue": 3,
                            "unitCode": "DAY"
                          },
                          "transitTime": {
                            "@type": "QuantitativeValue",
                            "minValue": 2,
                            "maxValue": 7,
                            "unitCode": "DAY"
                          }
                        }
                      },
                      "hasMerchantReturnPolicy": {
                        "@type": "MerchantReturnPolicy",
                        "applicableCountry": "IN",
                        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
                        "merchantReturnDays": 7,
                        "returnMethod": "https://schema.org/ReturnByMail",
                        "returnFees": "https://schema.org/FreeReturn"
                      }
                    },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.7",
                      "reviewCount": "95"
                    }
                  }
                },
                {
                  "@type": "Offer",
                  "priceCurrency": "INR",
                  "price": "0",
                  "priceValidUntil": "2027-12-31",
                  "availability": "https://schema.org/InStock",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Full Overlap Container",
                    "description": "Heavy-duty box with completely overlapping flaps for extra strength",
                    "image": "https://packwaveindustries.com/full-overlap-container.png",
                    "brand": {
                      "@type": "Brand",
                      "name": "PackWave Industries"
                    },
                    "offers": {
                      "@type": "Offer",
                      "priceCurrency": "INR",
                      "price": "0",
                      "priceValidUntil": "2027-12-31",
                      "availability": "https://schema.org/InStock",
                      "url": "https://packwaveindustries.com/container/3",
                      "shippingDetails": {
                        "@type": "OfferShippingDetails",
                        "shippingDestination": {
                          "@type": "DefinedRegion",
                          "addressCountry": "IN"
                        },
                        "deliveryTime": {
                          "@type": "ShippingDeliveryTime",
                          "handlingTime": {
                            "@type": "QuantitativeValue",
                            "minValue": 1,
                            "maxValue": 3,
                            "unitCode": "DAY"
                          },
                          "transitTime": {
                            "@type": "QuantitativeValue",
                            "minValue": 2,
                            "maxValue": 7,
                            "unitCode": "DAY"
                          }
                        }
                      },
                      "hasMerchantReturnPolicy": {
                        "@type": "MerchantReturnPolicy",
                        "applicableCountry": "IN",
                        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
                        "merchantReturnDays": 7,
                        "returnMethod": "https://schema.org/ReturnByMail",
                        "returnFees": "https://schema.org/FreeReturn"
                      }
                    },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.9",
                      "reviewCount": "120"
                    }
                  }
                },
                {
                  "@type": "Offer",
                  "priceCurrency": "INR",
                  "price": "0",
                  "priceValidUntil": "2027-12-31",
                  "availability": "https://schema.org/InStock",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Custom Design Boxes",
                    "description": "Tailored packaging solutions designed for specific business requirements",
                    "image": "https://packwaveindustries.com/custom-design.png",
                    "brand": {
                      "@type": "Brand",
                      "name": "PackWave Industries"
                    },
                    "offers": {
                      "@type": "Offer",
                      "priceCurrency": "INR",
                      "price": "0",
                      "priceValidUntil": "2027-12-31",
                      "availability": "https://schema.org/InStock",
                      "url": "https://packwaveindustries.com/container/4",
                      "shippingDetails": {
                        "@type": "OfferShippingDetails",
                        "shippingDestination": {
                          "@type": "DefinedRegion",
                          "addressCountry": "IN"
                        },
                        "deliveryTime": {
                          "@type": "ShippingDeliveryTime",
                          "handlingTime": {
                            "@type": "QuantitativeValue",
                            "minValue": 1,
                            "maxValue": 3,
                            "unitCode": "DAY"
                          },
                          "transitTime": {
                            "@type": "QuantitativeValue",
                            "minValue": 2,
                            "maxValue": 7,
                            "unitCode": "DAY"
                          }
                        }
                      },
                      "hasMerchantReturnPolicy": {
                        "@type": "MerchantReturnPolicy",
                        "applicableCountry": "IN",
                        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
                        "merchantReturnDays": 7,
                        "returnMethod": "https://schema.org/ReturnByMail",
                        "returnFees": "https://schema.org/FreeReturn"
                      }
                    },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.8",
                      "reviewCount": "85"
                    }
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
                  "text": "PackWave Industries manufactures Regular Slotted Containers (RSC), Half Slotted Containers, Full Overlap Containers, and Custom Design boxes tailored to your specific needs. We offer boxes in various sizes, thicknesses (3-ply, 5-ply, 7-ply), and custom printing options."
                }
              },
              {
                "@type": "Question",
                "name": "How can I order custom packaging from PackWave Industries?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can order custom packaging by calling +91-7202031313, emailing packwaveindustries@gmail.com, or chatting with us on WhatsApp for instant quotes and assistance."
                }
              },
              {
                "@type": "Question",
                "name": "Does PackWave deliver packaging boxes across India?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, PackWave Industries provides corrugated box manufacturing and delivery services across Gujarat and all of India with fast turnaround times."
                }
              },
              {
                "@type": "Question",
                "name": "What is the minimum order quantity for corrugated boxes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Minimum order quantities vary based on box type and size. Contact PackWave Industries at +91-7202031313 for specific requirements and customized pricing."
                }
              },
              {
                "@type": "Question",
                "name": "What are the best corrugated boxes for shipping?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Regular Slotted Containers (RSC) are ideal for general shipping. For heavy items, Full Overlap Containers provide extra strength. PackWave helps you choose the right box for your needs."
                }
              },
              {
                "@type": "Question",
                "name": "Where is PackWave Industries located?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "PackWave Industries is based in Gujarat, India. We serve businesses across India with premium corrugated packaging solutions."
                }
              },
              {
                "@type": "Question",
                "name": "Does PackWave offer custom printed boxes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, PackWave Industries offers custom printed corrugated boxes with your logo, branding, and design specifications. Contact us for custom packaging solutions."
                }
              },
              {
                "@type": "Question",
                "name": "What is the price of corrugated boxes in India?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Corrugated box prices vary based on size, thickness, quantity, and customization. Contact PackWave Industries at +91-7202031313 for competitive pricing and free quotes."
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
