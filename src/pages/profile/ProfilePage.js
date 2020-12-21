import { React, useState } from "react";
import { Container, Row } from "react-bootstrap";
import UserProfileCard from "./UserProfileCard";
import axios from "axios";
import profilePicture from "../../assets/profilePicture.jpg";

const ProfilePage = () => {
  const [usersList, setUsersList] = useState([
    { name: "User1", profilePicture },
    { name: "User2", profilePicture },
    { name: "User2", profilePicture },
    { name: "User2", profilePicture },
    { name: "User2", profilePicture },
    { name: "User2", profilePicture },
    { name: "User2", profilePicture },
    { name: "User2", profilePicture },
  ]);
  const URL = "https://hwtaweb20201216131958.azurewebsites.net";

  const fetchUsers = async () => {
    try {
      const { users } = await axios.get(`${URL}/getUsersList`);
      setUsersList(users);
    } catch (e) {
      console.log(e);
    }
  };

  // fetchUsers();

  console.log(usersList);

  return (
    <Container fluid>
      <Row>
        {usersList.map((user) => {
          return <UserProfileCard name={user.name} picture={profilePicture} />;
        })}
      </Row>
    </Container>
  );
};

export default ProfilePage;
