const NavbarItems = ({ image, name }) => {
  console.log(image);
  return (
    <div style={{ display: "flex", marginLeft: 30, marginTop: 40 }}>
      <img
        style={{ marginRight: 15 }}
        src={image}
        alt=""
        width={"22px"}
        height={"22px"}
      />
      <div>{name}</div>
    </div>
  );
};
export default NavbarItems;
