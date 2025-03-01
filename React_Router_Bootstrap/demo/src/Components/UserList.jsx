import { Link } from "react-router-dom";

const users = [
  { id: 1, name: "Phạm Đắc Thịnh" },
  { id: 2, name: "Trần Nguyễn Trường Giang" },
  { id: 3, name: "Nguyễn Hoàng Sang" },
];

const UserList = () => {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
