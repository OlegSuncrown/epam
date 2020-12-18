import React, { useContext, useState } from "react";
import { Card, Image } from "react-bootstrap";
import { AuthContext } from "../../context/auth/AuthContext";
import FileUploader from "./FileUploader";

const UserAvatar = () => {
  const { user, axios } = useContext(AuthContext);
  const [avatar, setAvatar] = useState("");
  const URL = "https://hwtaweb20201216131958.azurewebsites.net";

  //to be refactored
  const updateAvatar = async (event) => {
    setAvatar(event.target.files[0]);

    try {
      const { data } = await axios.post(`${URL}/api/User`, {
        body: avatar,
      });

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
