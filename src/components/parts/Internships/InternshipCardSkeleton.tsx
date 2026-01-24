const InternshipCardSkeleton = () => {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm animate-pulse space-y-4">
      {/* Header: title + duration/stipend/location */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="space-y-2 flex-1">
          <div className="h-6 bg-muted rounded w-1/4"></div> {/* Title */}
          <div className="h-4 bg-muted rounded w-[20%]"></div>{" "}
          {/* Duration/Stipend/Location */}
        </div>
        <div className="h-10 bg-muted rounded w-32 md:w-24"></div>{" "}
        {/* Apply button */}
      </div>

      {/* Description */}
      <div className="h-4 bg-muted rounded w-3/4"></div>

      {/* Requirements */}
      <div className="flex flex-wrap gap-2 mt-2">
        {Array.from({ length: 3 }).map((_, idx) => (
          <div key={idx} className="h-6 w-20 bg-muted rounded-full"></div>
        ))}
      </div>
    </div>
  );
};

export default InternshipCardSkeleton;
