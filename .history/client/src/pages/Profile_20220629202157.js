import axios from "axios";
import React, { useEffect, useState ,useLayoutEffect} from "react";
import { useNavigate } from "react-router-dom";
import {axiosInstance,axiosTokenInstance} from "../network/axiosInstance";

function Profile(props) {
  const [profileData, setProfileData] = useState();
  const navigate = useNavigate();
  //   const getProfileData = () => {

  //     });

  useLayoutEffect(() => {
    axiosTokenInstance
      .get("/profile")
      .then((response) => {
        setProfileData(response.data);
      })
      .catch((error) => {
        console.log(error)
      });
  }, []);
  return (
    <>
      {console.log({ ...profileData })}
    </>
  );
}

export default Profile;