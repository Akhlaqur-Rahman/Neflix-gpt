const MainContainerShimmer = () => {
  return (
    <div className="pt-[30%] bg-black">
      <div className="w-full h-[60vh] shimmer"></div>

      <div className="absolute top-0 left-0 w-full h-full px-6 md:px-12 pt-[18%]">
        <div className="h-10 w-72 shimmer rounded"></div>
        <div className="mt-4 h-4 w-[80%] md:w-[40%] shimmer rounded"></div>
        <div className="mt-2 h-4 w-[70%] md:w-[35%] shimmer rounded"></div>

        <div className="mt-6 flex gap-4">
          <div className="h-10 w-28 shimmer rounded"></div>
          <div className="h-10 w-36 shimmer rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default MainContainerShimmer;
