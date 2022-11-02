import { Route, Routes } from "react-router-dom";
import PurchaseItem from "./PurchaseItem";
import PurchaseMain from "./PurchaseMain";
import PurchaseRegist from "./PurchaseRegist";

const Purchase = () => {
  return (
    <Routes>
      <Route path={"/*"} element={<PurchaseMain />} />
      <Route path={"/regist"} element={<PurchaseRegist />} />
      <Route path={"/item/*"} element={<PurchaseItem />} />
    </Routes>
  );
};

export default Purchase;
