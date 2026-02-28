import { RootState } from "@/redux/store";

export const selectCurrentUser = (state: RootState) => state.user.currentUser;
export const selectIsLoggedIn = (state: RootState) => Boolean(state.user.currentUser);
