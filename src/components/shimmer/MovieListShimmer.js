import MovieCardShimmer from "./MovieCardShimmer";

const MovieListShimmer = ({ title = "Loading..." }) => {
  return (
    <div className="px-6">
      <div className="h-6 w-40 shimmer rounded mb-4"></div>

      <div className="flex overflow-x-hidden">
        <div className="flex">
          {Array(10)
            .fill("")
            .map((_, idx) => (
              <MovieCardShimmer key={idx} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieListShimmer;
