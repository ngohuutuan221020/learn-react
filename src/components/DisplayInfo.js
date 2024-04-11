import React, { useEffect, useState } from "react";

const DisplayInfo = (props) => {
  const { users } = props;
  const [isShowUser, setIsShowUser] = useState(true);

  const ShowHideUser = () => {
    setIsShowUser(!isShowUser);
  };
  useEffect(() => {
    console.log("useEffect");
    if (users.length === 0) {
      alert("No users");
    }
  }, [users]);
  console.log("DisplayInfo");
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <button onClick={() => ShowHideUser()}>
          {isShowUser === false ? "Show DisplayInfo" : "Hide DisplayInfo"}
        </button>
      </div>
      {isShowUser === true && (
        <div>
          {users.map((user, index) => (
            <div
              key={index}
              style={{
                margin: "1rem 5rem ",
                padding: "1rem",
                border: "1px solid black",
                borderRadius: "5rem",
                backgroundColor: user.age >= 24 ? "white" : "pink",
              }}
              className={user.age <= 20 ? "active" : "disabled"}
            >
              <div>Tên: {user.name}</div>
              <div>Thành phố: {user.addresses.city}</div>
              <div>Tuổi: {user.age}</div>
              <button type="button" onClick={() => props.delete(user.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
export default DisplayInfo;
