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
      "name": "FlowIQ",
      "url": "https://flowiq.com",
      "logo": "https://flowiq.com/lovable-uploads/1dc3e303-8477-4a7e-813e-189d1d0aa011.png",
      "description": "AI Operating System for Professional Practices",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "url": "https://flowiq.com/contact"
      },
      "sameAs": [
        "https://calendly.com/jason-flow-iq"
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
                "description": "AI automation for professional practices including scheduling, insurance verification, claims processing, and patient communication"
              }
            },
            {
              "@type": "WebSite",
              "name": "FlowIQ",
              "url": "https://flowiq.com",
              "description": "Transform your practice with FlowIQ's AI agents. Automate scheduling, insurance verification, appointment reminders, patient follow-up, claims processing, and business intelligence.",
              "publisher": {
                "@type": "Organization",
                "name": "FlowIQ"
              }
            },
            {
              "@type": "Service",
              "name": "AI Practice Automation",
              "description": "Comprehensive AI automation solutions for professional practices",
              "provider": baseOrganization,
              "serviceType": "Software as a Service",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "FlowIQ AI Agents",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Scheduling Automation",
                      "description": "AI-powered appointment scheduling and management"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Insurance Verification",
                      "description": "Automated insurance eligibility verification"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Claims Processing",
                      "description": "Intelligent claims processing and revenue cycle management"
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
          "name": "FlowIQ AI Agents",
          "description": "12 specialized AI agents for practice automation including scheduling, insurance verification, claims processing, and patient communication",
          "brand": baseOrganization,
          "category": "Practice Management Software",
          "offers": {
            "@type": "Offer",
            "description": "AI automation for professional practices",
            "seller": baseOrganization
          },
          "hasFeature": [
            {
              "@type": "Feature",
              "name": "Automated Scheduling",
              "description": "AI-powered appointment scheduling and management"
            },
            {
              "@type": "Feature", 
              "name": "Insurance Verification",
              "description": "Real-time insurance eligibility verification"
            },
            {
              "@type": "Feature",
              "name": "Claims Processing",
              "description": "Intelligent claims processing and revenue cycle management"
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
              "name": "How long does it take to implement FlowIQ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most practices are fully operational with FlowIQ within 2-4 weeks. Our implementation process includes discovery (1-2 weeks), setup and integration (1-2 weeks), and launch optimization (ongoing)."
              }
            },
            {
              "@type": "Question",
              "name": "Is FlowIQ HIPAA compliant?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, FlowIQ is fully HIPAA compliant and SOC 2 Type II certified. We use enterprise-grade encryption, secure data centers, and maintain strict access controls."
              }
            },
            {
              "@type": "Question",
              "name": "How much does FlowIQ cost?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "FlowIQ pricing is based on your practice size and selected modules. Most practices see ROI within 60-90 days through reduced staff time, fewer no-shows, and faster claims processing."
              }
            },
            {
              "@type": "Question",
              "name": "Can the AI agents be customized for my specialty?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. Each AI agent is trained and customized for your specific practice type, terminology, and workflows. Whether you're in dental, medical, veterinary, or legal practice, the AI adapts to your specialty's unique requirements."
              }
            }
          ]
        };
        break;

      case 'contact':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact FlowIQ",
          "description": "Contact FlowIQ to learn how our AI agents can transform your practice operations",
          "mainEntity": baseOrganization
        };
        break;

      case 'about':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About FlowIQ",
          "description": "Learn about FlowIQ's mission to transform professional practices with AI automation",
          "mainEntity": baseOrganization
        };
        break;

      case 'how-it-works':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How FlowIQ Transforms Your Practice",
          "description": "Learn how FlowIQ's AI agents work together to transform practice operations in 30 days",
          "step": [
            {
              "@type": "HowToStep",
              "name": "Discovery & Assessment",
              "text": "We analyze your current workflows and identify optimization opportunities tailored to your practice.",
              "position": 1
            },
            {
              "@type": "HowToStep", 
              "name": "Setup & Integration",
              "text": "Our expert team seamlessly integrates FlowIQ with your existing systems and processes.",
              "position": 2
            },
            {
              "@type": "HowToStep",
              "name": "Launch & Optimization", 
              "text": "Watch your practice transform as FlowIQ continuously learns and optimizes your operations.",
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
          "name": "FlowIQ ROI Calculator",
          "description": "Calculate your ROI with FlowIQ's AI automation tools",
          "url": "https://flowiq.com/roi-calculator",
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