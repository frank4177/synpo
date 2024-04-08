import { configureStore } from "@reduxjs/toolkit";
import commonSlice from "./features/commonSlice";
import reviewsSlice from "./features/reviewsSlice";


export const store = configureStore({
  reducer: {
    snackbar: commonSlice,
    reviewData: reviewsSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
