import { Card, Container, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const users = [
  { id: 1, name: "Phạm Đắc Thịnh" },
  { id: 2, name: "Trần Nguyễn Trường Giang" },
  { id: 3, name: "Nguyễn Hoàng Sang" },
];

const UserList = () => {
  return (
    <>
      {users.map((user) => (
        <ListGroup as="ol" numbered>
          <ListGroupItem variant="primary" action href={`/user/${user.id}`}>
            {user.name}
          </ListGroupItem>
        </ListGroup>
      ))}
    </>
  );
};

export default UserList;
