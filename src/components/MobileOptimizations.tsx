import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

// Hook to detect mobile device
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return isMobile;
};

// Mobile-specific component wrapper
interface MobileOptimizedProps {
  children: React.ReactNode;
  mobileClassName?: string;
  desktopClassName?: string;
}

export const MobileOptimized = ({ 
  children, 
  mobileClassName, 
  desktopClassName 
}: MobileOptimizedProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={cn(
      isMobile ? mobileClassName : desktopClassName
    )}>
      {children}
    </div>
  );
};

// Touch-optimized button component
interface TouchButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

export const TouchButton = ({ 
  children, 
  onClick, 
  className, 
  disabled 
}: TouchButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "min-h-[44px] min-w-[44px] touch-manipulation", // iOS recommended touch target size
        "active:scale-95 transition-transform duration-100", // Touch feedback
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        className
      )}
      style={{ 
        WebkitTapHighlightColor: 'transparent' // Remove iOS tap highlight
      }}
    >
      {children}
    </button>
  );
};

// Mobile navigation optimizations
export const MobileNavOptimizations = () => {
  useEffect(() => {
    // Prevent zoom on input focus for iOS
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      if (input.getAttribute('type') !== 'range') {
        input.setAttribute('autocomplete', 'off');
        input.setAttribute('autocorrect', 'off');
        input.setAttribute('autocapitalize', 'off');
        input.setAttribute('spellcheck', 'false');
      }
    });

    // Add viewport meta tag for proper mobile scaling
    let viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      viewportMeta = document.createElement('meta');
      viewportMeta.setAttribute('name', 'viewport');
      document.head.appendChild(viewportMeta);
    }
    viewportMeta.setAttribute(
      'content', 
      'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
    );

    // Add mobile web app meta tags
    const webAppMeta = document.createElement('meta');
    webAppMeta.setAttribute('name', 'mobile-web-app-capable');
    webAppMeta.setAttribute('content', 'yes');
    document.head.appendChild(webAppMeta);

    const appleMobileMeta = document.createElement('meta');
    appleMobileMeta.setAttribute('name', 'apple-mobile-web-app-capable');
    appleMobileMeta.setAttribute('content', 'yes');
    document.head.appendChild(appleMobileMeta);

    const appleStatusBarMeta = document.createElement('meta');
    appleStatusBarMeta.setAttribute('name', 'apple-mobile-web-app-status-bar-style');
    appleStatusBarMeta.setAttribute('content', 'black-translucent');
    document.head.appendChild(appleStatusBarMeta);

    // Cleanup
    return () => {
      document.head.removeChild(webAppMeta);
      document.head.removeChild(appleMobileMeta);
      document.head.removeChild(appleStatusBarMeta);
    };
  }, []);

  return null;
};

// Swipe gesture handler
interface SwipeHandlerProps {
  children: React.ReactNode;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  threshold?: number;
  className?: string;
}

export const SwipeHandler = ({
  children,
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  threshold = 50,
  className
}: SwipeHandlerProps) => {
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  const [touchEnd, setTouchEnd] = useState<{ x: number; y: number } | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    });
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distanceX = touchStart.x - touchEnd.x;
    const distanceY = touchStart.y - touchEnd.y;
    const isLeftSwipe = distanceX > threshold;
    const isRightSwipe = distanceX < -threshold;
    const isUpSwipe = distanceY > threshold;
    const isDownSwipe = distanceY < -threshold;

    if (Math.abs(distanceX) > Math.abs(distanceY)) {
      // Horizontal swipe
      if (isLeftSwipe && onSwipeLeft) {
        onSwipeLeft();
      }
      if (isRightSwipe && onSwipeRight) {
        onSwipeRight();
      }
    } else {
      // Vertical swipe
      if (isUpSwipe && onSwipeUp) {
        onSwipeUp();
      }
      if (isDownSwipe && onSwipeDown) {
        onSwipeDown();
      }
    }
  };

  return (
    <div
      className={className}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </div>
  );
};

export default MobileNavOptimizations;