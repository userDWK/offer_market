import { createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/store";

const userSlice = createSlice({
  name: "userSlice",
  initialState: { user: {}, isLoggedIn: false },
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const { setIsLoggedIn, setUser } = userSlice.actions;
export default userSlice;
