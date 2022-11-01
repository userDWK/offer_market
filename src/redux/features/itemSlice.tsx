import { createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/store";

interface ItemProps {
  [key: string]: string;
}

const itemSlice = createSlice({
  name: "itemSlice",
  initialState: {
    sellItems: {
      bundle: { amount: "", capacity: "", price: "" },
      courier: "",
      etc: "",
      img: "",
      num: "",
      parcelPrice: "",
      productName: "",
      resistDate: "",
      salePrice: "",
      sellPrice: "",
      seller: "",
      uid: "",
    },
    purchaseItems: {
      amount: "",
      capacity: "",
      category: "",
      etc: "",
      img: "",
      num: "",
      paymentMethod: "",
      productName: "",
      purchasePrice: "",
      residence: "",
      resistData: "",
      uid: "",
    },
  },
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
