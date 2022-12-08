import { Link } from "react-router-dom";
import "../App.css";
const ProfileTwo = () => {
  return (
    <div className="UserProfile">
      <div className="sidebar">
        <div>
          <img
            style={{ display: "flex", marginLeft: 30, paddingTop: 40 }}
            className="inst"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
            alt=""
          />
        </div>
        <div style={{ marginTop: 30 }} className="SideBarItems">
          <svg
            style={{ width: 22, height: 22, marginLeft: 20 }}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-house-door-fill"
            viewBox="0 0 16 16"
          >
            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
          </svg>
          <Link
            style={{ textDecoration: "none", marginLeft: 15, color: "black" }}
            to="/Home"
          >
            Home
          </Link>
        </div>
        <div className="SideBarItems">
          <svg
            style={{ width: 22, height: 22, marginLeft: 20 }}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <div style={{ marginLeft: 15 }}>Search</div>
        </div>
        <div className="SideBarItems">
          <img
            style={{ width: 22, height: 22, marginLeft: 20 }}
            src="http://cdn.onlinewebfonts.com/svg/img_119257.png"
            alt=""
          />
          <div style={{ marginLeft: 15 }}>Explore</div>
        </div>
        <div className="SideBarItems">
          <img
            style={{ width: 22, height: 22, marginLeft: 20 }}
            src="https://img.icons8.com/ios/500/instagram-reel.png"
            alt=""
          />
          <div style={{ marginLeft: 15 }}>Reels</div>
        </div>
        <div className="SideBarItems">
          <img
            style={{ width: 22, height: 22, marginLeft: 20 }}
            src="https://e7.pngegg.com/pngimages/602/699/png-clipart-computer-icons-facebook-messenger-symbol-miscellaneous-angle-thumbnail.png"
            alt=""
          />
          <div style={{ marginLeft: 15 }}>Messages</div>
        </div>
        <div className="SideBarItems">
          <svg
            style={{ width: 22, height: 22, marginLeft: 20 }}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-heart"
            viewBox="0 0 16 16"
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
          </svg>
          <div style={{ marginLeft: 15 }}>Notifications</div>
        </div>
        <div className="SideBarItems">
          <img
            style={{ width: 22, height: 22, marginLeft: 20 }}
            src="https://cdn0.iconfinder.com/data/icons/instagram-ui-1/24/Instagram-UI_post-1024.png"
            alt=""
          />
          <div style={{ marginLeft: 15 }}>Create</div>
        </div>
        <div className="SideBarItems">
          <img
            style={{ width: 22, height: 22, marginLeft: 20 }}
            src="https://www.kindpng.com/picc/m/364-3648551_minecraft-new-village-blueprints-hd-png-download.png"
            alt=""
          />
          <Link
            style={{ textDecoration: "none", marginLeft: 15, color: "black" }}
            to="/Profile"
          >
            Profile
          </Link>
        </div>
        <div style={{ marginTop: 460 }} className="SideBarItems">
          <svg
            style={{ width: 22, height: 22, marginLeft: 20 }}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
          <div style={{ marginLeft: 15 }}>More</div>
        </div>
      </div>
      <div style={{ marginLeft: 850 }}>
        <div className="ProfileTwo">
          <div className="topProfile">
            <img
              style={{
                width: 130,
                height: 130,
                borderRadius: "50%",
                marginLeft: 50,
                marginTop: 30,
              }}
              src="https://i.pinimg.com/originals/94/cd/01/94cd014566f95669514a5b0b3947f06c.jpg"
              alt=""
            />
            <div
              style={{
                display: "flex",
                marginTop: 40,
                marginLeft: 70,
                fontWeight: "bold",
              }}
            >
              <div style={{ fontSize: 20 }}> Балданпүрэв</div>
              <div
                style={{
                  borderRadius: "5px",
                  border: "1px solid black",
                  height: 20,
                  marginTop: 3,
                  marginLeft: 20,
                }}
              >
                Edit profile
              </div>
            </div>
            <div>
              <div>
                <div>69</div>
                <div>following</div>
              </div>
              <div>
                <div>1023</div>
                <div>followers</div>
              </div>
              <div></div>
            </div>
          </div>
          <hr style={{ marginTop: 40 }}></hr>
        </div>
      </div>
    </div>
  );
};
export default ProfileTwo;
