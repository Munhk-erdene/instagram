import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
const App = () => {
  const [data, setData] = useState("");
  const instance = axios.create({
    baseURL: "https://dummyjson.com/users",
  });

  const getData = async () => {
    const res = await instance.get();
    console.log(res.data.users);
    setData(res.data.users);
  };

  return (
    <div className="container">
      <div className="navbar"></div>
      <Navbar />
    </div>
  );
};
export default App;
