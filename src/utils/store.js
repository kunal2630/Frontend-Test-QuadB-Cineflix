import { configureStore } from "@reduxjs/toolkit";

import movieDetailsReducer from "./movieDetailsSlice";

const appstore = configureStore({
  reducer: {
    movieDetails: movieDetailsReducer,
  },
});

export default appstore;
