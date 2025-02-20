import React, { useState, useEffect } from "react";

const DisplayInfor = ({ listUser, handleDeleteUser }) => {
  const [isShowHideListUser, setShowHideListUser] = useState(true);

  const handleShowHideListUser = () => {
    setShowHideListUser((prev) => !prev);
  };

  useEffect(() => {
    if (listUser.length === 0) {
      alert("You deleted all users!");
    }
    console.log("useEffect called: listUser changed");
  }, [listUser]);

  return (
    <div>
      <span
        onClick={handleShowHideListUser}
        style={{ cursor: "pointer", color: "blue", fontWeight: "bold" }}
        className="show-hide"
      >
        {isShowHideListUser ? "🔽 Hide list User" : "▶ Show list User"}
      </span>
      {isShowHideListUser && (
        <div>
          {listUser.map((user) => (
            <div key={user.id} className={user.Age < 18 ? "red" : "blue"}>
              <div>My name is🛒😀: {user.Name}</div>
              <div>My age is: {user.Age}</div>
              <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplayInfor;
