import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOEnhancementsProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

const SEOEnhancements = ({ 
  title, 
  description, 
  keywords, 
  ogImage, 
  canonicalUrl,
  structuredData 
}: SEOEnhancementsProps) => {
  const location = useLocation();

  useEffect(() => {
    // Update page title
    if (title) {
      document.title = title;
    }

    // Create or update meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
      return meta;
    };

    const metaTags: HTMLMetaElement[] = [];

    // Basic meta tags
    if (description) {
      metaTags.push(updateMetaTag('description', description));
    }
    
    if (keywords) {
      metaTags.push(updateMetaTag('keywords', keywords));
    }

    // Open Graph tags
    if (title) {
      metaTags.push(updateMetaTag('og:title', title, true));
    }
    
    if (description) {
      metaTags.push(updateMetaTag('og:description', description, true));
    }
    
    metaTags.push(updateMetaTag('og:type', 'website', true));
    metaTags.push(updateMetaTag('og:url', window.location.href, true));
    
    if (ogImage) {
      metaTags.push(updateMetaTag('og:image', ogImage, true));
    }

    // Twitter Card tags
    metaTags.push(updateMetaTag('twitter:card', 'summary_large_image'));
    
    if (title) {
      metaTags.push(updateMetaTag('twitter:title', title));
    }
    
    if (description) {
      metaTags.push(updateMetaTag('twitter:description', description));
    }
    
    if (ogImage) {
      metaTags.push(updateMetaTag('twitter:image', ogImage));
    }

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl || window.location.href);

    // Structured Data
    if (structuredData) {
      let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
      if (!structuredDataScript) {
        structuredDataScript = document.createElement('script');
        structuredDataScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(structuredDataScript);
      }
      structuredDataScript.textContent = JSON.stringify(structuredData);
    }

    // Add robots meta tag
    metaTags.push(updateMetaTag('robots', 'index, follow'));

    // Add author meta tag
    metaTags.push(updateMetaTag('author', 'SymAssist'));

    // Cleanup function
    return () => {
      // Note: We don't remove meta tags on cleanup as they should persist
      // until the component unmounts or updates with new data
    };
  }, [title, description, keywords, ogImage, canonicalUrl, structuredData, location]);

  return null;
};

// Global SEO setup
export const GlobalSEO = () => {
  useEffect(() => {
    // Add global meta tags that should be on every page
    const globalMetas = [
      { name: 'charset', content: 'UTF-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'theme-color', content: '#3B82F6' },
      { name: 'msapplication-TileColor', content: '#3B82F6' },
      { name: 'apple-mobile-web-app-title', content: 'SymAssist' },
      { name: 'application-name', content: 'SymAssist' },
      { name: 'msapplication-TileImage', content: '/symassist-logo.png' },
      { property: 'og:site_name', content: 'SymAssist' },
      { property: 'og:locale', content: 'en_US' },
    ];

    globalMetas.forEach(({ name, property, content }) => {
      const selector = property ? `meta[property="${property}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', property);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    });

    // Add preconnect links for performance
    const preconnectUrls = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.google-analytics.com',
      'https://rnulxsjbzsvvatcbjmvr.supabase.co'
    ];

    preconnectUrls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = url;
      if (url.includes('gstatic')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });

    // Add DNS prefetch for external domains
    const dnsPrefetchUrls = [
      'https://calendly.com',
      'https://www.googletagmanager.com'
    ];

    dnsPrefetchUrls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = url;
      document.head.appendChild(link);
    });

  }, []);

  return null;
};

export default SEOEnhancements;