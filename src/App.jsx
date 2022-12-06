import axios from "axios";
import Posts from "./components/Posts";
import Profile from "./components/Profile";
import UserNavbar from "./components/UserNavbar";
import { useEffect, useState } from "react";
import { createContext } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchSwitch from "./components/SearchSwitch";
export const NavbarChange = createContext();
const App = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="container">
      <div></div>
      <div className="navbar">
        <NavbarChange.Provider value={{ navbar, setNavbar }}>
          <div className="App">{navbar ? <SearchSwitch /> : <Navbar />}</div>
        </NavbarChange.Provider>
      </div>
      <div className="midContainer">
        <div className="userNavbar">
          <UserNavbar />
        </div>
        <Posts />
      </div>
      <div className="rightContainer">
        <Profile />
      </div>
    </div>
  );
};
export default App;
