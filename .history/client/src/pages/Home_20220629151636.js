import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import axiosInstance from "../network/axiosInstance";
function Home(props) {
  const [requestData, setRequestData] = useState("No Data....");
  // const navigate = useNavigate()
  const getData = () => {
    axios.get("http://localhost:4000/",{withCredentials:true}).then((response) => {
      console.log(response.data)
    });
  };
  return (
    <>
      <h1>This is Home</h1>
      <button onClick={getData} className="btn btn-primary">get data</button>
    </>
  );
}

export default Home;
