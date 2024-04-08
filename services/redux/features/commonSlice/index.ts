import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface snackbarData {
 message?: string;
 status?: string;
 duration?: number
}

export interface snackbarDataType {
  snackbar: snackbarData
 }

const initialState: snackbarDataType = {
  snackbar: {}
};

const commonSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    showToast: (state, action: PayloadAction<snackbarData>) => {
      const duration = action.payload.duration ? action.payload.duration : 3000
      state.snackbar = {
        message: action.payload.message,
        status: action.payload.status,
        duration: duration
      };


      // setTimeout(() => {
      //   state.snackbar = {}
      // }, duration);
    }
  },
});

export const { showToast } =
commonSlice.actions;
export default commonSlice.reducer;
