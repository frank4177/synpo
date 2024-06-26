import { ReviewDataTypes } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



export interface reduxReviewDataType {
  reviews: ReviewDataTypes[] | null
 }

const initialState: reduxReviewDataType = {
  reviews: null
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    reviews: (state, action: PayloadAction<ReviewDataTypes[]>) => {
      state.reviews = action.payload;
    }
  },
});

export const { reviews } =
reviewsSlice.actions;
export default reviewsSlice.reducer;
