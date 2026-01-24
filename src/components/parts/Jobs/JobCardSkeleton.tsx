const JobCardSkeleton = () => {
  return (
    <div className="max-w-2xl w-full bg-card rounded-[2rem] border-2 border-border shadow-sm overflow-hidden flex flex-col animate-pulse mx-auto">
      <div className="p-8 pb-4 space-y-6">
        {/* Title */}
        <div className="h-8 bg-muted rounded w-1/2"></div>

        {/* Department / Type */}
        <div className="h-4 bg-muted rounded w-1/3"></div>

        {/* Job details */}
        <div className="grid grid-cols-2 gap-y-4">
          <div className="h-4 bg-muted rounded w-3/4"></div>
          <div className="h-4 bg-muted rounded w-1/2"></div>
          <div className="h-4 bg-muted rounded w-full col-span-2"></div>
        </div>

        {/* Key Requirements */}
        <div className="space-y-3">
          <div className="h-5 bg-muted rounded w-1/3"></div>
          <ul className="space-y-2">
            <li className="h-4 bg-muted rounded w-full"></li>
            <li className="h-4 bg-muted rounded w-5/6"></li>
            <li className="h-4 bg-muted rounded w-2/3"></li>
          </ul>
        </div>
      </div>

      {/* Apply button */}
      <div className="px-4 pb-8 flex justify-center">
        <div className="w-[90%] h-12 bg-muted rounded-2xl"></div>
      </div>
    </div>
  );
};

export default JobCardSkeleton;
