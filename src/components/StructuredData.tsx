import { useEffect } from 'react';

interface StructuredDataProps {
  type: 'homepage' | 'product' | 'faq' | 'contact' | 'about' | 'how-it-works' | 'roi-calculator';
}

export const StructuredData = ({ type }: StructuredDataProps) => {
  useEffect(() => {
    // Remove existing structured data script if any
    const existingScript = document.querySelector('script[data-structured-data]');
    if (existingScript) {
      existingScript.remove();
    }

    let structuredData: any = {};

    // Base organization data
    const baseOrganization = {
      "@type": "Organization",
      "name": "SymAssist",
      "url": "https://symassist.com",
      "logo": "https://symassist.com/lovable-uploads/1dc3e303-8477-4a7e-813e-189d1d0aa011.png",
      "description": "AI-Powered Property Management Assistant",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "url": "https://symassist.com/contact"
      },
      "sameAs": [
        "https://calendly.com/jason-symassist"
      ]
    };

    switch (type) {
      case 'homepage':
        structuredData = {
          "@context": "https://schema.org",
          "@graph": [
            {
              ...baseOrganization,
              "offers": {
                "@type": "Offer",
                "description": "AI automation for property management including maintenance coordination, tenant communication, vendor dispatch, and financial management"
              }
            },
            {
              "@type": "WebSite",
              "name": "SymAssist",
              "url": "https://symassist.com",
              "description": "Transform your property management with SymAssist's AI-powered platform. Automate maintenance coordination, tenant communication, vendor dispatch, and operations with 24/7 human oversight.",
              "publisher": {
                "@type": "Organization",
                "name": "SymAssist"
              }
            },
            {
              "@type": "Service",
              "name": "AI Property Management Automation",
              "description": "Comprehensive AI automation solutions for property management",
              "provider": baseOrganization,
              "serviceType": "Software as a Service",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "SymAssist AI Assistants",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Maintenance Coordination",
                      "description": "AI-powered maintenance triage and vendor dispatch"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Tenant Communication",
                      "description": "Automated multi-channel tenant communication"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Financial Management",
                      "description": "Intelligent financial processing and reporting"
                    }
                  }
                ]
              }
            }
          ]
        };
        break;

      case 'product':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "SymAssist AI Assistants",
          "description": "5 specialized AI assistants for property management including maintenance coordination, tenant communication, vendor management, financial processing, and analytics",
          "brand": baseOrganization,
          "category": "Property Management Software",
          "offers": {
            "@type": "Offer",
            "description": "AI automation for property management",
            "seller": baseOrganization
          },
          "hasFeature": [
            {
              "@type": "Feature",
              "name": "Automated Maintenance Coordination",
              "description": "AI-powered maintenance triage and vendor dispatch"
            },
            {
              "@type": "Feature", 
              "name": "Tenant Communication",
              "description": "Multi-channel automated tenant communication"
            },
            {
              "@type": "Feature",
              "name": "Financial Management",
              "description": "Intelligent financial processing and reporting"
            }
          ]
        };
        break;

      case 'faq':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How long does it take to implement SymAssist?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most properties are fully operational with SymAssist within 2-4 weeks. Our implementation process includes discovery (1-2 weeks), setup and integration (1-2 weeks), and launch optimization (ongoing)."
              }
            },
            {
              "@type": "Question",
              "name": "Is SymAssist secure and compliant?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, SymAssist is fully secure and SOC 2 Type II certified. We use enterprise-grade encryption, secure data centers, and maintain strict access controls for all property data."
              }
            },
            {
              "@type": "Question",
              "name": "How much does SymAssist cost?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "SymAssist pricing is based on your property portfolio size and selected modules. Most property managers see ROI within 60-90 days through reduced staff time, faster maintenance responses, and improved tenant satisfaction."
              }
            },
            {
              "@type": "Question",
              "name": "Can the AI assistants be customized for my property type?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. Each AI assistant is trained and customized for your specific property types, terminology, and workflows. Whether you manage residential, commercial, or mixed-use properties, the AI adapts to your unique requirements."
              }
            }
          ]
        };
        break;

      case 'contact':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact SymAssist",
          "description": "Contact SymAssist to learn how our AI assistants can transform your property operations",
          "mainEntity": baseOrganization
        };
        break;

      case 'about':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About SymAssist",
          "description": "Learn about SymAssist's mission to transform property management with AI automation",
          "mainEntity": baseOrganization
        };
        break;

      case 'how-it-works':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How SymAssist Transforms Your Property Management",
          "description": "Learn how SymAssist's AI assistants work together to transform property operations in 30 days",
          "step": [
            {
              "@type": "HowToStep",
              "name": "Discovery & Assessment",
              "text": "We analyze your current property management workflows and identify optimization opportunities tailored to your portfolio.",
              "position": 1
            },
            {
              "@type": "HowToStep", 
              "name": "Setup & Integration",
              "text": "Our expert team seamlessly integrates SymAssist with your existing property management systems and processes.",
              "position": 2
            },
            {
              "@type": "HowToStep",
              "name": "Launch & Optimization", 
              "text": "Watch your property operations transform as SymAssist continuously learns and optimizes your workflows.",
              "position": 3
            }
          ],
          "totalTime": "P30D"
        };
        break;

      case 'roi-calculator':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "SymAssist ROI Calculator",
          "description": "Calculate your ROI with SymAssist's AI automation tools",
          "url": "https://symassist.com/roi-calculator",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "provider": baseOrganization
        };
        break;

      default:
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Organization",
          ...baseOrganization
        };
    }

    // Create script element and add to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-structured-data', type);
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const scriptToRemove = document.querySelector(`script[data-structured-data="${type}"]`);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type]);

  return null;
};