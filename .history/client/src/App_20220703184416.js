import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import { addAuthentication, removeAuthentication } from "./store/slicers/user";
import { axiosInstance, axiosTokenInstance } from "./network/axiosInstance";
function App() {
  const dispatch = useDispatch();
  const authenticationData = useSelector((state) => state.user.authenticationData);

  useEffect(() => {
      axiosInstance
        .get("/autologin")
        .then((response) => {
          dispatch(addAuthentication(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;