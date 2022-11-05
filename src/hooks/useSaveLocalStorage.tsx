import { ItemsArr, purchaseItemsProps } from "../type/interfaces";

export const useSaveLocalStorage = (
  id: string,
  selectItem: purchaseItemsProps
) => {
  const items = localStorage.getItem(id);
  let itemsArr: ItemsArr[] = items ? JSON.parse(items) : [];
  itemsArr =
    itemsArr && itemsArr.filter((item, idx) => item.num !== selectItem.num);
  itemsArr.push(selectItem);
  localStorage.setItem(
    id === "cart" ? "purchaseCart" : "purchaseInterest",
    JSON.stringify(itemsArr)
  );
};
