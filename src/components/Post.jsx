import "../App.css";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Usernames from "./Usernames";
import Heart from "../Icons/Heart";
import Messages from "../Icons/Messages";
import Send from "../Icons/Send";
const Post = () => {
  const [data, setData] = useState("");
  const instance = axios.create({
    baseURL: "https://dummyjson.com/posts",
  });
  const getData = async () => {
    const res = await instance.get();
    console.log(res.data.posts);
    setData(res.data.posts);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {data &&
        data.map((e) => {
          return (
            <div className="Post">
              <Usernames />
              <img
                style={{ width: 470, height: 350 }}
                src="https://th.bing.com/th/id/OIP.0L4nSzrZ0kSv3mYHBB_6nAHaFj?pid=ImgDet&rs=1"
                alt=""
              />
              <div style={{ marginTop: 10, marginLeft: 15 }} className="Icons">
                <Heart />
                <Messages />
                <Send />
              </div>

              <div className="reactions">{e.reactions}likes</div>
              <div className="title">{e.title}</div>

              <div className="tags">
                #{e.tags[0]} {e.tags[1]} {e.tags[2]}
              </div>
              <hr style={{ marginBottom: -8, color: "Grey" }}></hr>
              <div className="comment">
                <svg
                  style={{ marginLeft: 15 }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-emoji-smile"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                </svg>
                <div style={{ marginLeft: 15 }}>Add a comment...</div>
                <div style={{ marginLeft: 250 }}>Post</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Post;
