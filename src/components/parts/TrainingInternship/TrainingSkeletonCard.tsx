const Skeleton = ({ className = "" }: { className?: string }) => (
  <div
    className={`animate-pulse bg-gray-200 dark:bg-gray-800 rounded-xl ${className}`}
  />
);

const TrainingCardSkeleton = () => {
  return (
    <div className="group relative flex flex-col bg-card border border-gray-100 dark:border-gray-800 rounded-[2.5rem] p-8 md:p-10 overflow-hidden h-full">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gray-200/40 dark:bg-gray-700/40 rounded-full blur-3xl -mr-16 -mt-16" />

      {/* Content */}
      <div className="flex flex-col sm:flex-row mb-8 flex-grow">
        {/* Left column */}
        <div className="flex-1 flex flex-col pr-0 sm:pr-8 border-b sm:border-b-0 sm:border-r border-gray-200 dark:border-gray-800 pb-8 sm:pb-0">
          <div className="mb-6 space-y-3">
            <Skeleton className="h-7 w-3/4" />
            <Skeleton className="h-10 w-1/2" />
          </div>

          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-2xl">
            <Skeleton className="h-4 w-4/5" />
          </div>
        </div>

        {/* Right column */}
        <div className="flex-1 flex flex-col pt-8 sm:pt-0 sm:pl-8">
          <Skeleton className="h-3 w-1/2 mb-6" />

          <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center space-x-3">
                <Skeleton className="w-6 h-6 rounded-full" />
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-2 gap-4">
        <Skeleton className="h-14 rounded-2xl" />
        <Skeleton className="h-14 rounded-2xl" />
      </div>
    </div>
  );
};

export default TrainingCardSkeleton;
