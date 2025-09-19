import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

// A/B Test Configuration
interface ABTest {
  id: string;
  name: string;
  variants: {
    id: string;
    name: string;
    weight: number; // Percentage of traffic (0-100)
  }[];
  active: boolean;
}

interface ABTestContextType {
  getVariant: (testId: string) => string | null;
  trackConversion: (testId: string, conversionType: string) => void;
}

const ABTestContext = createContext<ABTestContextType | null>(null);

// A/B Test configuration
const AB_TESTS: ABTest[] = [
  {
    id: 'hero_cta_text',
    name: 'Hero CTA Button Text',
    variants: [
      { id: 'control', name: 'Get Started Today', weight: 50 },
      { id: 'variant_a', name: 'Start Free Trial', weight: 50 }
    ],
    active: true
  },
  {
    id: 'pricing_display',
    name: 'Pricing Section Layout',
    variants: [
      { id: 'control', name: 'Standard Pricing Cards', weight: 50 },
      { id: 'variant_a', name: 'Comparison Table', weight: 50 }
    ],
    active: true
  },
  {
    id: 'demo_modal_trigger',
    name: 'Demo Request Trigger',
    variants: [
      { id: 'control', name: 'Button in Header', weight: 50 },
      { id: 'variant_a', name: 'Floating Action Button', weight: 50 }
    ],
    active: true
  }
];

// A/B Test Provider
interface ABTestProviderProps {
  children: ReactNode;
}

export const ABTestProvider = ({ children }: ABTestProviderProps) => {
  const [userVariants, setUserVariants] = useState<Record<string, string>>({});

  useEffect(() => {
    // Load user variants from localStorage or assign new ones
    const storedVariants = localStorage.getItem('ab_test_variants');
    let variants: Record<string, string> = {};

    if (storedVariants) {
      variants = JSON.parse(storedVariants);
    }

    // Assign variants for new tests
    AB_TESTS.forEach(test => {
      if (test.active && !variants[test.id]) {
        const randomNum = Math.random() * 100;
        let cumulativeWeight = 0;
        
        for (const variant of test.variants) {
          cumulativeWeight += variant.weight;
          if (randomNum <= cumulativeWeight) {
            variants[test.id] = variant.id;
            break;
          }
        }
      }
    });

    setUserVariants(variants);
    localStorage.setItem('ab_test_variants', JSON.stringify(variants));
  }, []);

  const getVariant = (testId: string): string | null => {
    return userVariants[testId] || null;
  };

  const trackConversion = (testId: string, conversionType: string) => {
    const variant = userVariants[testId];
    if (!variant) return;

    // Track conversion in analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'ab_test_conversion', {
        test_id: testId,
        variant_id: variant,
        conversion_type: conversionType,
      });
    }

    // Log for debugging
    console.log(`A/B Test Conversion: ${testId} - ${variant} - ${conversionType}`);
  };

  return (
    <ABTestContext.Provider value={{ getVariant, trackConversion }}>
      {children}
    </ABTestContext.Provider>
  );
};

// Hook to use A/B testing
export const useABTest = () => {
  const context = useContext(ABTestContext);
  if (!context) {
    throw new Error('useABTest must be used within ABTestProvider');
  }
  return context;
};

// Component wrapper for A/B testing
interface ABTestComponentProps {
  testId: string;
  variants: Record<string, ReactNode>;
  fallback?: ReactNode;
}

export const ABTestComponent = ({ testId, variants, fallback }: ABTestComponentProps) => {
  const { getVariant } = useABTest();
  const variant = getVariant(testId);

  if (!variant || !variants[variant]) {
    return fallback || variants.control || null;
  }

  return <>{variants[variant]}</>;
};

// Specific A/B test components
export const HeroCTATest = () => {
  const { getVariant, trackConversion } = useABTest();
  const variant = getVariant('hero_cta_text');

  const handleClick = () => {
    trackConversion('hero_cta_text', 'click');
    // Add actual CTA logic here
  };

  const buttonText = variant === 'variant_a' ? 'Start Free Trial' : 'Get Started Today';

  return (
    <button
      onClick={handleClick}
      className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-semibold transition-colors"
    >
      {buttonText}
    </button>
  );
};

export const DemoTriggerTest = () => {
  const { getVariant } = useABTest();
  const variant = getVariant('demo_modal_trigger');

  if (variant === 'variant_a') {
    // Floating Action Button
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-primary text-primary-foreground rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow">
          📅 Demo
        </button>
      </div>
    );
  }

  // Control: Button in header (handled by Navigation component)
  return null;
};

// Analytics dashboard component for viewing test results
export const ABTestDashboard = () => {
  const [testResults, setTestResults] = useState<Record<string, any>>({});

  useEffect(() => {
    // In a real implementation, this would fetch data from your analytics service
    // For now, we'll show the current configuration
    const results = AB_TESTS.reduce((acc, test) => {
      acc[test.id] = {
        name: test.name,
        variants: test.variants,
        active: test.active
      };
      return acc;
    }, {} as Record<string, any>);

    setTestResults(results);
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">A/B Test Dashboard</h2>
      {Object.entries(testResults).map(([testId, test]) => (
        <div key={testId} className="mb-6 p-4 border rounded">
          <h3 className="text-lg font-semibold">{test.name}</h3>
          <p className="text-sm text-gray-600 mb-2">Test ID: {testId}</p>
          <p className="text-sm mb-2">
            Status: <span className={test.active ? 'text-green-600' : 'text-red-600'}>
              {test.active ? 'Active' : 'Inactive'}
            </span>
          </p>
          <div className="grid grid-cols-2 gap-2">
            {test.variants.map((variant: any) => (
              <div key={variant.id} className="p-2 bg-gray-50 rounded">
                <p className="font-medium">{variant.name}</p>
                <p className="text-sm text-gray-600">{variant.weight}% traffic</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ABTestProvider;