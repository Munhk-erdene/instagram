import axios from "axios";
import Posts from "./components/Posts";
import Profile from "./components/Profile";
import UserNavbar from "./components/UserNavbar.jsx";
import { useEffect, useState } from "react";
import { createContext } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchSwitch from "./components/SearchSwitch";
import ProfileTwo from "./pages/ProfileTwo";
import Home from "./pages/Home";
export const NavbarChange = createContext();
const App = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Profile" element={<ProfileTwo />} />
      </Routes>
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
          <Profile />
          <div style={{ marginTop: 20 }}>
            <Posts />
          </div>
        </div>
        <div className="rightContainer"></div>
      </div>
    </BrowserRouter>
  );
};
export default App;
