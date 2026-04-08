// import { createSlice } from "@reduxjs/toolkit";

// const moviesSlice = createSlice({
//   name: "movies",
//   initialState: {
//     nowPlayingMovies: null,
//     popularMovies: null,
//     trailerVideo: null,
//   },
//   reducers: {
//     addNowPlayingMovies: (state, action) => {
//       state.nowPlayingMovies = action.payload;
//     },
//     addPopularMovies: (state, action) => {
//       state.popularMovies = action.payload;
//     },
//     addTrailerVideo: (state, action) => {
//       state.trailerVideo = action.payload;
//     },
//   },
// });

// export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies } =
//   moviesSlice.actions;

// export default moviesSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    trailerVideo: null,

    // ✅ NEW
    selectedMovie: null,
    showMovieModal: false,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },

    // ✅ NEW ACTIONS
    openMovieModal: (state, action) => {
      state.selectedMovie = action.payload;
      state.showMovieModal = true;
    },
    closeMovieModal: (state) => {
      state.selectedMovie = null;
      state.showMovieModal = false;
      state.trailerVideo = null; // reset trailer
    },
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addTrailerVideo,

  // ✅ export new actions
  openMovieModal,
  closeMovieModal,
} = moviesSlice.actions;

export default moviesSlice.reducer;
