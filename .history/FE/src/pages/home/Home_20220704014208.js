import React, { useState, useEffect } from "react";
import LeftSideBar from "../../components/home/LeftSideBar/LeftSideBar";
import { axiosTokenInstance } from "../../network/axiosInstance";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Home = () => {
  const [profileData, setProfileData] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axiosTokenInstance
      .get("/profile")
      .then((response) => {
        setProfileData(response.data);
      })
      .catch((error) => {
        console.log(error);
        navigate("/login");
      });
  }, [navigate,profileData]);
  return (
    <>
    {console.log(profileData)}
      <LeftSideBar />
    </>
  );
};

export default Home;