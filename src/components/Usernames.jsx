import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "../App.css";
const Usernames = () => {
  const [isFollowed, setIsFollowed] = useState("Follow");
  const [boolean, setBoolean] = useState(true);
  const follow = () => {
    if (isFollowed === "Follow") {
      setIsFollowed("Following");
      setBoolean(false);
    } else {
      setIsFollowed("Follow");
      setBoolean(true);
    }
  };
  const styles = {
    follow: {
      color: boolean ? "#0095f6" : "gray",
    },
  };
  return (
    <div onClick={follow} style={styles.follow}>
      {isFollowed}
    </div>
  );
};

export default Usernames;
