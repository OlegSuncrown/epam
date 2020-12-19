import React, { useContext } from "react";
import { Card, Image, Spinner } from "react-bootstrap";
import { AuthContext } from "../../context/auth/AuthContext";
import FileUploader from "./FileUploader";

const UserAvatar = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }
  return (
    <Card className="border-light text-center d-none d-lg-block shadow">
      <Card.Body className="p-1">
        <Image fluid className="mb-2" src={user.image} roundedCircle />
        <Card.Title className="p-0">
          <h2 className="text-secondary">
            <strong>{user ? user.firstName : "loading..."}</strong>
          </h2>
          <FileUploader />
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default UserAvatar;
