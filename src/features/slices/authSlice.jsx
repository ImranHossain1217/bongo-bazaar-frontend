import { createSlice } from "@reduxjs/toolkit";

const getToken = localStorage.getItem("admin-token");

const initialState = {
  adminToken: getToken ? getToken : null,
};
const authSlice = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    setAdminToken: (state, action) => {
      state.adminToken = action.payload;
    },
  },
});

export const { setAdminToken } = authSlice.actions;

export default authSlice.reducer;
