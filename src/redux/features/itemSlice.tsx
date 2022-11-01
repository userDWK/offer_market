import { createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/store";

export interface sellItemsProps {
  bundle: { amount: ""; capacity: ""; price: "" };
  courier: "";
  etc: "";
  img: "";
  num: "";
  parcelPrice: "";
  title: "";
  date: "";
  price: "";
  originPrice: "";
  seller: "";
  uid: "";
}

export interface purchaseItemsProps {
  amount: "";
  capacity: "";
  category: "";
  etc: "";
  img: "";
  num: "";
  paymentMethod: "";
  title: "";
  price: "";
  residence: "";
  date: "";
  uid: "";
}

interface initialStateProps {
  sellItems: sellItemsProps[];
  purchaseItems: purchaseItemsProps[];
}

const initialState: initialStateProps = {
  sellItems: [],
  purchaseItems: [],
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
  },
});

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const { setSellItems, setPurchaseItems } = itemSlice.actions;
export default itemSlice;
