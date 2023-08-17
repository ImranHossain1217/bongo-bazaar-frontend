import { configureStore } from "@reduxjs/toolkit";
import authService from "../features/services/authService";
import authSlice from "../features/slices/authSlice";
import categoryService from "../features/services/categoryService";

const store = configureStore({
  reducer: {
    [authService.reducerPath]: authService.reducer,
    authReducer: authSlice,
    [categoryService.reducerPath]: categoryService.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      authService.middleware,
      categoryService.middleware
    );
  },
});

export default store;
