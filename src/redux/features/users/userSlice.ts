import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  currentUser: {
    id: number;
    name: string;
    email: string;
  } | null;
}

const initialState: UserState = {
  currentUser: null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState["currentUser"]>) {
      state.currentUser = action.payload;
    }
  }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
