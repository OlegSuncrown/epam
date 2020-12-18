import React, { useContext } from "react";
import { Card, Image } from "react-bootstrap";
import { AuthContext } from "../../context/auth/AuthContext";
import FileUploader from "./FileUploader";

const UserAvatar = () => {
  const { user } = useContext(AuthContext);

  return (
    <Card className="border-light mb-3 text-center">
      <Card.Body className="bg-light">
        <Image
          fluid
          className="mb-3"
          src="https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png"
          roundedCircle
        />
        <FileUploader />
        <Card.Title>
          <strong>{user ? user.firstName : "loading..."}</strong>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default UserAvatar;
