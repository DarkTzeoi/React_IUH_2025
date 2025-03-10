import { useParams } from "react-router-dom";
import { Card, Col, Container, Row, Image } from "react-bootstrap";
const users = [
  {
    id: 1,
    name: "Phạm Đắc Thịnh",
    mssv: 22691361,
    birth: "23/01/2004",
    age: 21,
    email: "phamdacthinh2301@gmail.com",
  },
  {
    id: 2,
    name: "Trần Nguyễn Trường Giang",
    mssv: 22691361,
    birth: "23/01/2004",
    age: 21,
    email: "truonggiang@gmail.com",
  },
  {
    id: 3,
    name: "Nguyễn Hoàng Sang",
    mssv: 22691361,
    birth: "23/01/2004",
    age: 21,
    email: "hoangsang123456789123456789@gmail.com",
  },
];

const UserDetail = () => {
  const { id } = useParams();
  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return <h2>Người dùng không tồn tại</h2>;
  }

  return (
    <Container style={{ width: "1000px" }}>
      <Row className="align-items-center">
        <Col>
          <Card>
            <Card.Header style={{ textAlign: "center" }}>
              {user.name}
            </Card.Header>
            <Card.Text>Tuổi: {user.age}</Card.Text>
            <Card.Text>Email: {user.email}</Card.Text>
            <Card.Text>MSSV: {user.mssv}</Card.Text>
            <Card.Text>Birth: {user.birth}</Card.Text>
            <Card.Text></Card.Text>
          </Card>
        </Col>
        <Col>
          <Image src="" />
        </Col>
      </Row>
    </Container>
  );
};

export default UserDetail;
