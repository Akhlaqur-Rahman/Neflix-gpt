import { createSlice } from "@reduxjs/toolkit";

const myListSlice = createSlice({
  name: "myList",
  initialState: {
    movies: [],
    loading: false,
  },
  reducers: {
    setMyListMovies: (state, action) => {
      state.movies = action.payload;
    },
    clearMyListMovies: (state) => {
      state.movies = [];
    },
  },
});

export const { setMyListMovies, clearMyListMovies } = myListSlice.actions;
export default myListSlice.reducer;
