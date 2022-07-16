import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Home(props) {
  const [requestData, setRequestData] = useState("No Data....");
  const navigate = useNavigate()
  const getData = () => {
    axios.get("http://localhost:3000").then((response) => {
      setRequestData(response.data);

    });
  };
  return (
    <div>
      <h1>Home</h1>
      <p>{requestData}</p>
      <button onClick={getData}>get Data</button>
      <br/>
      <button onClick={()=>navigate("/books")}>go to books</button>
    </div>
  );
}

export default Home;