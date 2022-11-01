import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "../features/itemSlice";
import modalSlice from "../features/modalSlice";
import userSlice from "../features/userSlice";

const store = configureStore({
  reducer: {
    itemData: itemSlice.reducer,
    userData: userSlice.reducer,
    modalData: modalSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
