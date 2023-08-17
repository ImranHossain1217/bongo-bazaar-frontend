import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

const getToken = localStorage.getItem("admin-token");

const verifyToken = () => {
  if (getToken) {
    const decodeToken = jwtDecode(getToken);
    const expiresIn = new Date(decodeToken.exp * 1000);
    if (new Date() > expiresIn) {
      localStorage.removeItem("admin-token");
      return null;
    } else {
      return getToken;
    }
  } else {
    return null;
  }
};

const initialState = {
  adminToken: verifyToken(),
};
const authSlice = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    setAdminToken: (state, action) => {
      state.adminToken = action.payload;
    },
    adminLogout: (state) => {
      state.adminToken = null;
      localStorage.removeItem("admin-token");
    },
  },
});

export const { setAdminToken, adminLogout } = authSlice.actions;

export default authSlice.reducer;
