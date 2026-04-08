// import openai from "../utils/openai";
// import { useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import lang from "../utils/languageConstants";
// import { API_OPTIONS } from "../utils/constants";
// import { addGptMovieResult } from "../utils/gptSlice";

// const GptSearchBar = () => {
//   const dispatch = useDispatch();
//   const langKey = useSelector((store) => store.config.lang);
//   const searchText = useRef(null);

//   // search movie in TMDB
//   const searchMovieTMDB = async (movie) => {
//     const data = await fetch(
//       "https://api.themoviedb.org/3/search/movie?query=" +
//         movie +
//         "&include_adult=false&language=en-US&page=1",
//       API_OPTIONS
//     );
//     const json = await data.json();

//     return json.results;
//   };

//   const handleGptSearchClick = async () => {
//     console.log(searchText.current.value);
//     // Make an API call to GPT API and get Movie Results

//     const gptQuery =
//       "Act as a Movie Recommendation system and suggest some movies for the query : " +
//       searchText.current.value +
//       ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

//     const gptResults = await openai.chat.completions.create({
//       messages: [{ role: "user", content: gptQuery }],
//       model: "gpt-3.5-turbo",
//     });

//     if (!gptResults.choices) {
//       // TODO: Write Error Handling
//     }

//     console.log(gptResults.choices?.[0]?.message?.content);

//     // Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan
//     const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

//     // ["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"]

//     // For each movie I will search TMDB API

//     const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
//     // [Promise, Promise, Promise, Promise, Promise]

//     const tmdbResults = await Promise.all(promiseArray);

//     console.log(tmdbResults);

//     dispatch(
//       addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
//     );
//   };

//   return (
//     <div className="pt-[35%] md:pt-[10%] flex justify-center">
//       <form
//         className="w-full md:w-1/2 bg-black grid grid-cols-12"
//         onSubmit={(e) => e.preventDefault()}
//       >
//         <input
//           ref={searchText}
//           type="text"
//           className=" p-4 m-4 col-span-9"
//           placeholder={lang[langKey].gptSearchPlaceholder}
//         />
//         <button
//           className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
//           onClick={handleGptSearchClick}
//         >
//           {lang[langKey].search}
//         </button>
//       </form>
//     </div>
//   );
// };
// export default GptSearchBar;


import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

import useVoiceSearch from "../hooks/useVoiceSearch";
import VoiceSearchButton from "./VoiceSearchButton";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const [query, setQuery] = useState("");

  // ✅ Voice Search Hook
  const { isSupported, isListening, startListening } = useVoiceSearch({
    onResult: (transcript) => {
      setQuery(transcript);
      if (searchText.current) searchText.current.value = transcript;

      // ✅ Optional: auto search after voice input
      handleGptSearchClick(transcript);
    },
  });

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async (voiceQuery) => {
    const finalQuery = voiceQuery || query || searchText.current?.value;
    if (!finalQuery) return;

    // 🔥 tumhare existing GPT logic ke according yaha call hoga
    const tmdbResults = await searchMovieTMDB(finalQuery);

    dispatch(
      addGptMovieResult({
        movieNames: [finalQuery],
        movieResults: [tmdbResults],
      })
    );
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12 gap-2 p-4 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 col-span-8 rounded-md"
          placeholder="Search movies..."
        />

        <button
          className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-2"
          onClick={() => handleGptSearchClick()}
        >
          Search
        </button>

        {/* ✅ Voice Button */}
        <div className="col-span-2 flex justify-end">
          <VoiceSearchButton
            isListening={isListening}
            onClick={startListening}
            disabled={!isSupported}
          />
        </div>
      </form>
    </div>
  );
};

export default GPTSearchBar;
