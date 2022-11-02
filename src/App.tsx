import { getDocs } from "firebase/firestore";
import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { authService, dbService } from "./fbase";
import Home from "./pages/home/Home";
import Purchase from "./pages/purchase/Purchase";
import Sell from "./pages/sell/Sell";
import { setPurchaseItems, setSellItems } from "./redux/features/itemSlice";

import {
  setIsLoggedIn,
  setUser,
  useAppSelector,
} from "./redux/features/userSlice";
import "./styles/styles.css";

function App(): JSX.Element {
  const user = useAppSelector((state) => state.userData.user);
  const isLoggedIn = useAppSelector((state) => state.userData.isLoggedIn);
  const dispatch = useDispatch();

  const getSellItemsFromDb = useCallback(async () => {
    const sellRef = dbService.collection("sell");
    const q = sellRef.orderBy("resistDate", "desc");
    const data = await getDocs(q);
    dispatch(setSellItems(data.docs.map((doc) => doc.data())));
  }, []);

  const getPurchaseItemsFromDb = useCallback(async () => {
    const purchaseRef = dbService.collection("purchase");
    const q = purchaseRef.orderBy("resistDate", "desc");
    const data = await getDocs(q);
    dispatch(setPurchaseItems(data.docs.map((doc) => doc.data())));
  }, []);

  //로그인 상태 추적 후, 로그인 상태 시, 유저 정보 dispatch.
  const TrackLoggedIn = useCallback(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setIsLoggedIn(true));
        dbService.collection("users").onSnapshot((doc) => {
          doc.docs.forEach((document) => {
            if (document.data().uid === user.uid) {
              dispatch(
                setUser({
                  ...document.data(),
                })
              );
            }
          });
        });
      } else {
        dispatch(setIsLoggedIn(false));
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);

  const Time = () => {
    const now = new Date();
    let year = now.getFullYear().toString();
    let month = (now.getMonth() + 1).toString();
    let date = now.getDate().toString();
    let hours = now.getHours().toString();
    let minutes = now.getMinutes().toString();
    let seconds = now.getSeconds().toString();
    let milliseconds = now.getMilliseconds().toString();
    return (
      year +
      (month.length === 1 ? "0" + month : month) +
      (date.length === 1 ? "0" + date : date) +
      (hours.length === 1 ? "0" + hours : hours) +
      (minutes.length === 1 ? "0" + minutes : minutes) +
      (seconds.length === 1 ? "0" + seconds : seconds) +
      (milliseconds.length < 3
        ? milliseconds.length === 1
          ? "00" + milliseconds
          : "0" + milliseconds
        : milliseconds)
    );
  };

  useEffect(() => {
    TrackLoggedIn();
    getSellItemsFromDb();
    getPurchaseItemsFromDb();
  }, [TrackLoggedIn, getSellItemsFromDb, getPurchaseItemsFromDb]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sell/*" element={<Sell />} />
        <Route path="/purchase/*" element={<Purchase />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
