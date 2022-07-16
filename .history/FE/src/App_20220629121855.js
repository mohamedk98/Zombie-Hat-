// import logo from './logo.svg';
// import './App.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axiosInstance from "./network/axiosInstance";
import Error from "./pages/error/Error";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Reset from "./pages/reset/Reset";
import { autoLogin } from "./store/userSlice/UserSlice";

function App() {
  const authenticationData = useSelector(
    (state) => state.user.authenticationData
  );
  const dispatch = useDispatch();

  const checkingLogin = async () => {
    const autoLogimDispatch = new Promise();
    return await dispatch(autoLogin());
  };
  useEffect(() => {
    let existingRefreshToken = localStorage.getItem("refreshToken");
    let existingRefreshTokenId = localStorage.getItem("refreshTokenId");
    let existingHasExpiry = localStorage.getItem("hasExpiry");

    axiosInstance
      .post("/token", {
        refreshToken: existingRefreshToken,
        refreshTokenId: existingRefreshTokenId,
        hasExpiry: existingHasExpiry,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;