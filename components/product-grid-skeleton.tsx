export function ProductGridSkeleton() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="animate-pulse">
          <div className="aspect-[4/5] bg-surface-strong" />
          <div className="mt-4 h-4 w-3/4 bg-surface-strong" />
          <div className="mt-3 h-4 w-1/3 bg-surface-strong" />
        </div>
      ))}
    </div>
  );
}
