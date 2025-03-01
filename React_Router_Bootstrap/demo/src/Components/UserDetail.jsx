import { useParams } from "react-router-dom";

const users = [
  {
    id: 1,
    name: "Phạm Đắc Thịnh",
    age: 21,
    email: "phamdacthinh2301@gmail.com",
  },
  {
    id: 2,
    name: "Trần Nguyễn Trường Giang",
    age: 21,
    email: "truonggiang@gmail.com",
  },
  {
    id: 3,
    name: "Nguyễn Hoàng Sang",
    age: 21,
    email: "hoangsang123456789123456789@gmail.com",
  },
];

const UserDetail = () => {
  const { id } = useParams();
  const user = users.find((u) => u.id === Number(id)); // Ép kiểu ID về số

  if (!user) {
    return <h2>Người dùng không tồn tại</h2>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Tuổi: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserDetail;
