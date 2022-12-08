import "../App.css";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Usernames from "./Usernames";

const Profile = () => {
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
    <div className="Profile">
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          style={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            border: "0.5px solid black",
            margin: 15,
          }}
          src="https://i.pinimg.com/originals/94/cd/01/94cd014566f95669514a5b0b3947f06c.jpg"
          alt=""
        />
        <div>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/Profile"
          >
            Балданпүрэв
          </Link>
          <div style={{ fontSize: 10, color: "gray" }}>Bayn_Agaa</div>
        </div>
        <div style={{ color: "#0095f6", fontSize: 13, marginLeft: 100 }}>
          Switch
        </div>
      </div>
      <div style={{ display: "flex", marginLeft: 15 }}>
        <div style={{ color: "gray", fontSize: 15 }}>Suggestions For You</div>
        <div style={{ color: "black", fontSize: 14, marginLeft: 130 }}>
          See all
        </div>
      </div>

      {data &&
        data.map((e) => {
          return (
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  border: "0.5px solid gray",
                  backgroundColor: "black",
                  marginLeft: 20,
                  marginTop: 7,
                }}
                src={e.image}
                alt=""
              />
              <div style={{ justifyContent: "center", marginLeft: 10 }}>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: 12,
                  }}
                  to="/Profile"
                >
                  {e.username}
                </Link>
                <div style={{ color: "gray", fontSize: 10 }}>
                  Suggestions For You
                </div>
              </div>
              <div style={{ fontSize: 10, marginLeft: 130 }}>
                <Usernames />
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default Profile;
