import { createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { initialStateProps } from "../../type/interfaces";
import { RootState } from "../store/store";

const initialState: initialStateProps = {
  sellItems: [],
  purchaseItems: [],
  selectItem: {},
};

const itemSlice = createSlice({
  name: "itemSlice",
  initialState,
  reducers: {
    setSellItems: (state, action) => {
      state.sellItems = action.payload;
    },
    setPurchaseItems: (state, action) => {
      state.purchaseItems = action.payload;
    },
    setSelectItem: (state, action) => {
      state.selectItem = action.payload;
    },
  },
});

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const { setSellItems, setPurchaseItems, setSelectItem } =
  itemSlice.actions;
export default itemSlice;
