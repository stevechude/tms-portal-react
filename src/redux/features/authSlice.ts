import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  userEmail: "",
  userOtp: "",
};

const authSlice = createSlice({
  name: "tmsAuth",
  initialState,
  reducers: {
    setUserEmail: (state, action: PayloadAction<string>) => {
      state.userEmail = action.payload;
    },
    setUserOtp: (state, action: PayloadAction<string>) => {
      state.userOtp = action.payload;
    },
  },
});

export const { setUserEmail, setUserOtp } = authSlice.actions;

export default authSlice.reducer;
