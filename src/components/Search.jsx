import { useContext, useState, useEffect } from "react";
import { NavbarChange } from "../App";
import axios from "axios";
import UsersData from "./UsersData";

export const instance = axios.create({
  baseURL: `https://dummyjson.com/users`,
  timeout: 2000,
  headers: {
    "Content-type": "application.json; charset=UTF-8",
    "app-id": "63104c3120f6e665ecf628ba",
  },
});

const Search = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const { navbar, setNavbar } = useContext(NavbarChange);
  const click = () => {
    if (navbar === false) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  const getData = async () => {
    const res = await axios.get("https://dummyjson.com/users");
    setData(res.data.users);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="SearchContainer">
      <div style={{ fontSize: 20, marginTop: 20, marginLeft: 20 }}>Search</div>
      <input
        className="NavbarInput"
        type="text"
        placeholder="Search"
        onChange={(e) => setValue(e.target.value)}
      />
      <hr style={{ marginTop: 20, marginBottom: 20 }}></hr>
      <div>
        {data &&
          data.map((el, index) => {
            return (
              el.username.includes(value) && (
                <UsersData key={index} value={el} />
              )
            );
          })}
      </div>
    </div>
  );
};
export default Search;
