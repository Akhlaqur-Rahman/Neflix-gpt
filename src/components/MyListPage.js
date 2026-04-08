import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MyListPage = () => {
  const myListMovies = useSelector((store) => store?.myList?.movies || []);

  return (
    <div className="bg-black min-h-screen text-white px-6 py-20">
      <h1 className="text-3xl font-bold mb-6">✅ My List</h1>

      {myListMovies.length === 0 ? (
        <p className="text-gray-400">No movies in your list yet.</p>
      ) : (
        <div className="flex flex-wrap gap-4">
          {myListMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyListPage;



// import { useDispatch, useSelector } from "react-redux";
// import Header from "./Header";
// import MovieCard from "./MovieCard";

// // ✅ Firestore
// import { fetchMyList, removeMovieFromMyList } from "../utils/myListFirestore";
// import { setMyListMovies } from "../utils/myListSlice";

// const MyListPage = () => {
//   const dispatch = useDispatch();

//   const user = useSelector((store) => store.user);
//   const myListMovies = useSelector((store) => store?.myList?.movies || []);

//   const handleRemove = async (movieId) => {
//     if (!user?.uid) return;

//     await removeMovieFromMyList(user.uid, movieId);

//     // ✅ refresh redux list
//     const latest = await fetchMyList(user.uid);
//     dispatch(setMyListMovies(latest));
//   };

//   return (
//     <div className="bg-black min-h-screen text-white">
//       <Header />

//       <div className="px-6 py-24">
//         <h1 className="text-3xl font-bold mb-6">✅ My List</h1>

//         {myListMovies.length === 0 ? (
//           <p className="text-gray-400">No movies added yet.</p>
//         ) : (
//           <div className="flex flex-wrap gap-6">
//             {myListMovies.map((movie) => (
//               <div key={movie.id} className="relative">
//                 {/* ✅ movie poster */}
//                 <MovieCard movie={movie} />

//                 {/* ✅ remove button */}
//                 <button
//                   onClick={() => handleRemove(movie.id)}
//                   className="absolute top-2 right-2 bg-black/70 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MyListPage;
