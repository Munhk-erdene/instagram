import { useContext } from "react";
import { NavbarChange } from "../App";
import axios from "axios";
import Search from "./Search";

import NavbarTwo from "./NavbarTwo";

export const instance = axios.create({
  baseURL: `https://dummyjson.com/users`,
  timeout: 2000,
  headers: {
    "Content-type": "application.json; charset=UTF-8",
    "app-id": "63104c3120f6e665ecf628ba",
  },
});

const SearchSwitch = () => {
  const { navbar, setNavbar } = useContext(NavbarChange);
  const click = () => {
    if (navbar === false) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  return (
    <div>
      <NavbarTwo />
      <Search />
    </div>
  );
};
export default SearchSwitch;
