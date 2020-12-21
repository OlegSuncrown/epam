import { React, useState } from "react";
import { Container, Row } from "react-bootstrap";
import UserProfileCard from "./UserProfileCard";
import axios from "axios";
import profilePicture from "../../assets/profilePicture.jpg";
import { Pagination } from "../../components";
import UserAvatar from "../../components/sidebar/UserAvatar";

const ProfilePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const [usersList, setUsersList] = useState([
    { name: "User1" },
    { name: "User2" },
    { name: "User2" },
    { name: "User2" },
    { name: "User2" },
    { name: "User2" },
    { name: "User2" },
    { name: "User2" },
    { name: "User2" },
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

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentUsers = usersList.slice(indexOfFirstPost, indexOfLastPost);
  const howManyPages = Math.ceil(usersList.length / postsPerPage);

  return (
    <>
      <UserAvatar onlyMd="true" />
      <Container fluid>
        <Row>
          {currentUsers.map((user) => {
            return (
              <UserProfileCard name={user.name} picture={profilePicture} />
            );
          })}
        </Row>
        <div className="pt-4">
          <Pagination pages={howManyPages} setCurrentPage={setCurrentPage} />
        </div>
      </Container>
    </>
  );
};

export default ProfilePage;
