import React from "react";

const ProjectCardSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card animate-pulse">
      <div className="grid lg:grid-cols-5">
        {/* Website Preview */}
        <div className="relative lg:col-span-2 h-64 lg:h-auto bg-muted rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none" />

        {/* Content */}
        <div className="p-6 lg:col-span-3 lg:p-8 space-y-4">
          {/* Title */}
          <div className="h-7 bg-muted rounded w-3/4" />

          {/* Description */}
          <div className="h-4 bg-muted rounded w-full" />
          <div className="h-4 bg-muted rounded w-5/6" />
          <div className="h-4 bg-muted rounded w-2/3" />

          {/* Feedback */}
          <div className="space-y-2">
            <div className="h-4 bg-muted rounded w-1/4" />{" "}
            {/* Client Feedback header */}
            <div className="bg-muted/30 h-20 rounded-xl p-4 flex flex-col justify-between">
              <div className="h-3 bg-muted rounded w-full" />{" "}
              {/* Feedback text */}
              <div className="flex items-center gap-2 mt-2">
                <div className="h-6 w-6 rounded-full bg-muted" />{" "}
                {/* User icon */}
                <div className="h-3 bg-muted rounded w-1/4" />{" "}
                {/* Client name */}
                <div className="flex ml-auto gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="h-3 w-3 bg-muted rounded-full" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="space-y-1">
            <div className="h-4 bg-muted rounded w-1/3" />{" "}
            {/* Technologies header */}
            <div className="flex flex-wrap gap-2 mt-1">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-6 w-16 bg-muted rounded-full" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ProjectsSkeletonProps {
  count?: number;
}

const ProjectsSkeleton: React.FC<ProjectsSkeletonProps> = ({ count = 4 }) => {
  return (
    <div className="container-padding mx-auto max-w-7xl">
      <div className="space-y-12">
        {Array.from({ length: count }).map((_, idx) => (
          <ProjectCardSkeleton key={idx} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSkeleton;
