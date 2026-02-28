import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UiState {
  theme: "light" | "dark";
  sidebarOpen: boolean;
}

const initialState: UiState = {
  theme: "light",
  sidebarOpen: true
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<UiState["theme"]>) {
      state.theme = action.payload;
    },
    toggleSidebar(state) {
      state.sidebarOpen = !state.sidebarOpen;
    }
  }
});

export const { setTheme, toggleSidebar } = uiSlice.actions;
export default uiSlice.reducer;
