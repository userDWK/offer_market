//TextForm.tsx interface

export interface TextFormProps {
  input: string;
  purchaseItem: { [key: string]: string };
  setPurchaseItem: React.Dispatch<React.SetStateAction<{}>>;
  setPurchaseImg: React.Dispatch<React.SetStateAction<string>>;
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
