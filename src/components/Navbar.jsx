import "../App.css";
import React from "react";
import NavbarItems from "./NavbarItems";
const Navbar = ({}) => {
  return (
    <div className="sidebar">
      <div>
        <img
          style={{ display: "flex", marginLeft: 30, paddingTop: 40 }}
          className="inst"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
          alt=""
        />
      </div>
      <NavbarItems
        name={"Home"}
        image={
          "https://www.vhv.rs/dpng/d/557-5572135_png-file-svg-vector-instagram-home-icon-transparent.png"
        }
      />
      <NavbarItems
        name={"Search"}
        image={
          "https://www.pngfind.com/pngs/m/104-1043692_search-icon-transparent-white-search-icon-apple-png.png"
        }
      />
      <NavbarItems
        name={"Explore"}
        image={"http://cdn.onlinewebfonts.com/svg/img_119257.png"}
      />
      <NavbarItems
        name={"Reels"}
        image={"https://img.icons8.com/ios/500/instagram-reel.png"}
      />
      <NavbarItems
        name={"Messages"}
        image={
          "https://mpng.subpng.com/20180417/zje/kisspng-facebook-messenger-computer-icons-instant-messagin-peace-symbol-5ad5c9ed0867a1.0510507515239603010344.jpg"
        }
      />
      <NavbarItems
        name={"Notifications"}
        image={
          "https://www.pngfind.com/pngs/m/560-5601084_heart-outline-svg-vector-logos-love-instagram-hd.png"
        }
      />
      <NavbarItems
        name={"Create"}
        image={
          "https://cdn0.iconfinder.com/data/icons/instagram-ui-1/24/Instagram-UI_post-1024.png"
        }
      />
      <NavbarItems
        name={"Profile"}
        image={
          "https://www.kindpng.com/picc/m/364-3648551_minecraft-new-village-blueprints-hd-png-download.png"
        }
      />
      <div style={{ display: "flex", marginLeft: 30, marginTop: 530 }}>
        <img
          style={{ width: 22, height: 22 }}
          src="https://banner2.cleanpng.com/20180706/xkp/kisspng-hamburger-button-computer-icons-menu-5b3f6c27174392.5425091015308831110953.jpg"
          alt=""
        />
        <div style={{ marginLeft: 15 }}>More</div>
      </div>
    </div>
  );
};

export default Navbar;
