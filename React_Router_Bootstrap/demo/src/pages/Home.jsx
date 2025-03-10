import { Card } from "react-bootstrap";
import UserList from "../Components/UserList";

const Home = () => {
  return (
    <Card>
      <Card.Title as="h1" className="align-items-center">
        Danh sách người dùng
      </Card.Title>
      <UserList />
    </Card>
  );
};

export default Home;
