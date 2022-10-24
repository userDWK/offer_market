import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import { authService, dbService } from "./fbase";
import { Home } from "./pages/Home";
import {
  setIsLoggedIn,
  setUser,
  useAppSelector,
} from "./redux/features/userSlice";

function App(): JSX.Element {
  const user = useAppSelector((state) => state.userData.user);
  const isLoggedIn = useAppSelector((state) => state.userData.isLoggedIn);
  const dispatch = useDispatch();

  const TrackLoggedIn = () => {
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
  };

  useEffect(() => {
    TrackLoggedIn();
    // sellDis();
    // purchaseDis();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
