const Loading = () => {
  return (
      <div className="min-h-[60vh] flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
              <span className="loading loading-bars loading-lg text-brand-600"></span>
              <p className="text-sm text-ink-500">Loading, please wait...</p>
          </div>
      </div>
  );
};

export default Loading;