const UsersData = ({ value }) => {
  return (
    <div className="SearchMap">
      <img
        className="SearchImage"
        style={{ width: 50, height: 50 }}
        src={value.image}
        alt=""
      />
      <div>
        <div>{value.username}</div>
      </div>
    </div>
  );
};
export default UsersData;
