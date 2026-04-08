// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./userSlice";
// import moviesReducer from "./moviesSlice";
// import gptReducer from "./gptSlice";
// import configReducer from "./configSlice";

// const appStore = configureStore({
//   reducer: {
//     user: userReducer,
//     movies: moviesReducer,
//     gpt: gptReducer,
//     config: configReducer,
//   },
// });

// export default appStore;


import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";

// ✅ add this
import myListReducer from "./myListSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer,

    // ✅ new reducer
    myList: myListReducer,
  },
});

export default appStore;
