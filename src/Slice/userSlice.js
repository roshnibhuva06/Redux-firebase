import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
  error: null,
};   

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},

});
export const selectCurrentUser = (state) => state.user.user;
export default userSlice.reducer;
