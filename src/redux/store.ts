import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/redux/features/users/userSlice";
import uiReducer from "@/redux/features/ui/uiSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    ui: uiReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
