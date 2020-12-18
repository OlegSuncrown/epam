import React, { useContext, useState } from "react";
import { Card, Image } from "react-bootstrap";
import { AuthContext } from "../../context/auth/AuthContext";
import FileUploader from "./FileUploader";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";

const UserAvatar = () => {
  const { user } = useContext(AuthContext);
  const URL = "https://hwtaweb20201216131958.azurewebsites.net";

  const updateAvatar = async (event) => {
    const formData = new FormData();

    formData.append("avatar", event.target.files[0]);
    setAuthToken(localStorage.AuthToken);

    try {
      const { data } = await axios.post(`${URL}/api/User`, formData);

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className="border-light text-center d-none d-lg-block shadow pb-3">
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
          <FileUploader handleSubmit={updateAvatar} />
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default UserAvatar;
