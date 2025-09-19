import { cn } from "@/lib/utils";

interface LoadingStateProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  text?: string;
  fullScreen?: boolean;
}

const LoadingState = ({ 
  className, 
  size = "md", 
  text, 
  fullScreen = false 
}: LoadingStateProps) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8", 
    lg: "h-12 w-12"
  };

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
  };

  const LoadingSpinner = () => (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div 
        className={cn(
          "animate-spin rounded-full border-2 border-muted-foreground border-t-primary",
          sizeClasses[size]
        )}
      />
      {text && (
        <p className={cn(
          "text-muted-foreground font-medium",
          textSizeClasses[size]
        )}>
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className={cn("flex items-center justify-center p-8", className)}>
      <LoadingSpinner />
    </div>
  );
};

// Skeleton loading components
export const SkeletonText = ({ className }: { className?: string }) => (
  <div className={cn("animate-pulse bg-muted rounded h-4", className)} />
);

export const SkeletonCard = ({ className }: { className?: string }) => (
  <div className={cn("animate-pulse bg-muted rounded-lg", className)}>
    <div className="p-6 space-y-4">
      <SkeletonText className="h-6 w-3/4" />
      <SkeletonText className="h-4 w-full" />
      <SkeletonText className="h-4 w-2/3" />
    </div>
  </div>
);

export const SkeletonButton = ({ className }: { className?: string }) => (
  <div className={cn("animate-pulse bg-muted rounded h-10 w-24", className)} />
);

export default LoadingState;