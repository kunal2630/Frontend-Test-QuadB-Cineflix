import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: null,
  reducers: {
    addMovieDetails: (state, action) => {
      return action.payload;
    },

  },
});

export default movieDetailsSlice.reducer;
export const { addMovieDetails } = movieDetailsSlice.actions;