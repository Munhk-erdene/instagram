import "../App.css";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const UserNavbar = () => {
  const [data, setData] = useState("");
  const instance = axios.create({
    baseURL: "https://dummyjson.com/users",
  });

  const getData = async () => {
    const res = await instance.get();
    console.log(res.data.users);
    setData(res.data.users);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="userContainer">
      {data &&
        data.map((e) => {
          return (
            <div className="overflow">
              <img
                className="userImages"
                src={e.image}
                alt=""
                style={{ width: "50px", height: "50px" }}
              />
              <div style={{ marginLeft: 10 }}>{e.username}</div>
            </div>
          );
        })}
    </div>
  );
};

export default UserNavbar;
