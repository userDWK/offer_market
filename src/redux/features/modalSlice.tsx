import { createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/store";

const modalSlice = createSlice({
  name: "modalSlice",
  initialState: { isModal: false, message: { page: "", type: "", text: "" } },
  reducers: {
    setIsModal: (state, action) => {
      state.isModal = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const { setIsModal, setMessage } = modalSlice.actions;
export default modalSlice;
