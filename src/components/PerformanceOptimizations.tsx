import { useEffect, useState, useCallback } from 'react';
import React from 'react';

// Performance monitoring hook
export const usePerformanceMonitoring = () => {
  const [metrics, setMetrics] = useState<{
    fcp?: number;
    lcp?: number;
    cls?: number;
    fid?: number;
  }>({});

  useEffect(() => {
    // Web Vitals monitoring
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        });
      }).observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // Cumulative Layout Shift
      new PerformanceObserver((list) => {
        let cls = 0;
        for (const entry of list.getEntries() as any[]) {
          if (!entry.hadRecentInput) {
            cls += entry.value;
          }
        }
        setMetrics(prev => ({ ...prev, cls }));
      }).observe({ entryTypes: ['layout-shift'] });

      // First Input Delay
      new PerformanceObserver((list) => {
        const firstEntry = list.getEntries()[0] as any;
        if (firstEntry && firstEntry.processingStart && firstEntry.startTime) {
          setMetrics(prev => ({ ...prev, fid: firstEntry.processingStart - firstEntry.startTime }));
        }
      }).observe({ entryTypes: ['first-input'] });
    }

    // Navigation Timing API
    if ('performance' in window && 'getEntriesByType' in performance) {
      const navigationEntries = performance.getEntriesByType('navigation');
      if (navigationEntries.length > 0) {
        const entry = navigationEntries[0] as any;
        if (entry.loadEventEnd && entry.navigationStart && entry.domContentLoadedEventEnd) {
          console.log('Page Load Time:', entry.loadEventEnd - entry.navigationStart);
          console.log('DOM Content Loaded:', entry.domContentLoadedEventEnd - entry.navigationStart);
        }
      }
    }
  }, []);

  return metrics;
};

// Code splitting helper
export const lazyLoadComponent = (importFunc: () => Promise<any>) => {
  return React.lazy(() => 
    importFunc().catch(() => ({ 
      default: () => <div>Error loading component</div> 
    }))
  );
};

// Resource preloading
export const PreloadResources = () => {
  useEffect(() => {
    // Preload critical images
    const criticalImages = [
      '/symassist-logo.png',
      '/public/lovable-uploads/jeremy-aspen.png',
    ];

    criticalImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    // Preload critical fonts
    const fontPreloads = [
      'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
    ];

    fontPreloads.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = href;
      document.head.appendChild(link);
    });

  }, []);

  return null;
};

// Intersection Observer hook for lazy loading
export const useIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
) => {
  const [element, setElement] = useState<Element | null>(null);

  const observer = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      callback(entries, observer);
    },
    [callback]
  );

  useEffect(() => {
    if (!element) return;

    const observerInstance = new IntersectionObserver(observer, {
      rootMargin: '50px',
      threshold: 0.1,
      ...options
    });

    observerInstance.observe(element);

    return () => {
      observerInstance.disconnect();
    };
  }, [element, observer, options]);

  return setElement;
};

// Bundle splitting recommendations
export const BundleOptimizations = () => {
  useEffect(() => {
    // Mark third-party scripts as async/defer
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach(script => {
      const src = script.getAttribute('src');
      if (src && (src.includes('google') || src.includes('calendly'))) {
        script.setAttribute('async', 'true');
      }
    });

    // Remove unused CSS
    const links = document.querySelectorAll('link[rel="stylesheet"]');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href && !document.querySelector(`style[data-href="${href}"]`)) {
        // Track unused stylesheets
        console.log('Potentially unused stylesheet:', href);
      }
    });

  }, []);

  return null;
};

// Main performance optimization component
const PerformanceOptimizations = () => {
  const metrics = usePerformanceMonitoring();

  useEffect(() => {
    // Log performance metrics to analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      Object.entries(metrics).forEach(([key, value]) => {
        if (value !== undefined) {
          (window as any).gtag('event', 'performance_metric', {
            metric_name: key,
            metric_value: Math.round(value),
          });
        }
      });
    }
  }, [metrics]);

  return (
    <>
      <PreloadResources />
      <BundleOptimizations />
    </>
  );
};

export default PerformanceOptimizations;