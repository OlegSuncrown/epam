import { Card, Image } from "react-bootstrap";

const UserAvatar = () => {
  return (
    <Card className="border-light mb-3 text-center">
      <Card.Body className="bg-light">
        <Image
          fluid
          className="mb-3"
          src="https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png"
          roundedCircle
        />
        <Card.Title>User Name</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default UserAvatar;
