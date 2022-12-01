import { useEffect, useState, useRef } from "react";
import axios from "axios";

export default function App() {
  const [data, setData] = useState({});
  const [id, setId] = useState(1);
  const [user, setUser] = useState("");

  const instance = axios.create({
    baseURL: "https://dummyjson.com/users",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "app-id": "63104c3120f6e665ecf628ba",
    },
  });

  const searchData = async () => {
    const res = await instance.get();
    console.log(res.data.users[id].firstName);

    console.log(res.data.users);
    setData(res.data.users);
    setUser(res.data.users[id].username);
  };

  return (
    <div>
      <div>
        <input type="number" onChange={(e) => setId(e.target.value)}></input>
        <button onClick={searchData}>search</button>
      </div>
      {user && (
        <div>
          <div>username : {user}</div>
        </div>
      )}
    </div>
  );
}
