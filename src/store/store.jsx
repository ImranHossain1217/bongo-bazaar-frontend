import { configureStore } from "@reduxjs/toolkit";
import authService from "../features/services/authService";
import authSlice from "../features/slices/authSlice";

const store = configureStore({
  reducer: {
    [authService.reducerPath]: authService.reducer,
    authReducer: authSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(authService.middleware);
  },
});

export default store;
