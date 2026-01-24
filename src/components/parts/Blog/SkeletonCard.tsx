import React from "react";

const SkeletonCard: React.FC = () => {
  return (
    <div className="flex flex-col bg-card rounded-xl overflow-hidden border border-border animate-pulse">
      <div className="aspect-video w-full bg-muted" />
      <div className="p-6">
        <div className="h-4 w-24 bg-muted rounded-full mb-4" />
        <div className="h-6 w-full bg-muted rounded mb-2" />
        <div className="h-6 w-3/4 bg-muted rounded mb-4" />
        <div className="h-4 w-full bg-muted rounded mb-2" />
        <div className="h-4 w-1/2 bg-muted rounded mb-8" />
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div className="h-4 w-20 bg-muted rounded" />
          <div className="h-4 w-16 bg-muted rounded" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
