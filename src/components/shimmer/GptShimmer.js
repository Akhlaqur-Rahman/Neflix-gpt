const GptShimmer = () => {
  return (
    <div className="p-6">
      <div className="h-8 w-64 shimmer rounded mb-6"></div>

      {Array(2)
        .fill("")
        .map((_, idx) => (
          <div key={idx} className="mb-10">
            <div className="h-6 w-40 shimmer rounded mb-4"></div>
            <div className="flex gap-4 overflow-hidden">
              {Array(8)
                .fill("")
                .map((__, i) => (
                  <div key={i} className="w-36 md:w-48">
                    <div className="h-52 md:h-72 rounded-lg shimmer"></div>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default GptShimmer;
