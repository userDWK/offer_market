//TextForm.tsx interface
export interface TextFormProps {
  inputKey: "inputs" | "etcInputs";
  handleImg: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
  handleInputData: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface InputsProps {
  [key: string]: InputProps[];
}

export interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  id: string;
  name: string;
  text: string;
  // defaultValue : string | null;
  placeholder?: string;
  maxLength?: number | undefined;
  minLength?: number | undefined;
  accept?: string | undefined;
}

//  itemSlice.tsx interface

export interface initialStateProps {
  sellItems: sellItemsProps[];
  purchaseItems: purchaseItemsProps[];
  selectItem: { [key: string]: string };
}

export interface sellItemsProps {
  bundle: { amount: ""; capacity: ""; price: "" }[];
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
  // amount: "";
  // capacity: "";
  // category: "";
  // etc: "";
  // img: "";
  // num: "";
  // paymentMethod: "";
  // title: "";
  // price: "";
  // residence: "";
  // date: "";
  // uid: "";
  [key: string]: string;
}

//Modal.tsx interface

export interface ModalmsgProps {
  show: boolean;
  msg: {
    msg?: string | undefined;
    type?: string | undefined;
    page?: string | undefined;
  };
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

// useSaveLocalStorage.tex interface

export interface ItemsArr {
  [key: string]: string;
}
