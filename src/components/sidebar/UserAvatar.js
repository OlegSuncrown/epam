import React, { useContext } from "react";
import { Card, Image } from "react-bootstrap";
import { AuthContext } from "../../context/auth/AuthContext";
const UserAvatar = () => {
  const { user } = useContext(AuthContext);
  return (
    <Card className="border-light text-center d-none d-lg-block shadow">
      <Card.Body className="p-1">
        <Image
          fluid
          className="mb-2"
          src="https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png"
          roundedCircle
        />
        <Card.Title className="p-0">
          <h2 className="text-secondary">
            <strong>{user ? user.firstName : "loading..."}</strong>
          </h2>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default UserAvatar;
