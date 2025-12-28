import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  type?: 'website' | 'article' | 'product';
}

const SEOHead = ({
  title = "PackWave Industries - Premium Corrugated Packaging Solutions in India",
  description = "PackWave Industries manufactures high-quality corrugated boxes, custom packaging solutions, RSC boxes, and shipping containers. Trusted packaging partner in Gujarat, India.",
  keywords = "corrugated boxes, packaging solutions, custom boxes, shipping containers, RSC boxes, packaging manufacturer India, Gujarat packaging, cardboard boxes, industrial packaging",
  canonicalUrl = "https://packwaveindustries.com",
  ogImage = "https://packwaveindustries.com/og-image.png",
  type = "website"
}: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Basic SEO meta tags
    updateMeta('description', description);
    updateMeta('keywords', keywords);
    updateMeta('author', 'PackWave Industries');
    updateMeta('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    
    // Open Graph tags
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('og:type', type, true);
    updateMeta('og:url', canonicalUrl, true);
    updateMeta('og:image', ogImage, true);
    updateMeta('og:site_name', 'PackWave Industries', true);
    updateMeta('og:locale', 'en_IN', true);

    // Twitter Card tags
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', ogImage);

    // Additional SEO tags
    updateMeta('geo.region', 'IN-GJ');
    updateMeta('geo.placename', 'Gujarat');
    updateMeta('geo.position', '22.3072;73.1812');
    updateMeta('ICBM', '22.3072, 73.1812');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

  }, [title, description, keywords, canonicalUrl, ogImage, type]);

  return null;
};

export default SEOHead;
