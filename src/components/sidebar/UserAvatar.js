import React, { useContext } from "react";
import { Card, Image, Spinner } from "react-bootstrap";
import { AuthContext } from "../../context/auth/AuthContext";
import FileUploader from "./FileUploader";

const UserAvatar = (props) => {
  const { userImage, user } = useContext(AuthContext);

  if (!userImage) {
    return (
      <div className="text-center py-4">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (props.onlyMd) {
    return (
      <Card className="border-light text-center shadow d-block d-lg-none ">
        <Card.Body className="p-1">
          <Image className="mb-2 avatar" src={userImage} />
          <Card.Title className="p-0">
            <h2 className="text-secondary">
              <strong>{user ? user.firstName : "loading..."}</strong>
            </h2>
            <FileUploader />
          </Card.Title>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card className="border-light text-center shadow d-none d-lg-block ">
      <Card.Body className="p-1">
        <Image className="mb-2 avatar" src={userImage} />
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
