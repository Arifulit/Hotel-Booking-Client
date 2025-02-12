const Loading = () => {
    return (
      <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="z-10 text-center text-white">
          <span className="loading loading-bars loading-lg mb-4"></span>
          <p className="text-xl font-semibold">Loading, please wait...</p>
        </div>
      </div>
    );
  };
  
  export default Loading;
  