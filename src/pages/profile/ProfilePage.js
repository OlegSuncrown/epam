import { React, useState, useEffect } from "react";
import { Container, Row, Spinner, Tabs, Tab } from "react-bootstrap";
import UserProfileCard from "./UserProfileCard";
import axios from "axios";
import { Pagination } from "../../components";
import UserAvatar from "../../components/sidebar/UserAvatar";

const ProfilePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const [usersList, setUsersList] = useState([]);
  const URL = "https://hwtaweb20201216131958.azurewebsites.net";

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(`${URL}/getAllUsersProfiles`);
      setUsersList(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(fetchUsers, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentUsers = usersList.slice(indexOfFirstPost, indexOfLastPost);
  const howManyPages = Math.ceil(usersList.length / postsPerPage);

  if (!usersList.length) {
    return (
      <>
        <UserAvatar onlyMd="true" />

        <div className="text-center py-4">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      </>
    );
  }

  return (
    <>
      <UserAvatar onlyMd="true" />
      <Tabs defaultActiveKey="users" id="uncontrolled-tab-example">
        <Tab eventKey="Friends" title="Friends"></Tab>
        <Tab eventKey="users" title="All users">
          <Container fluid>
            <Row>
              {currentUsers.map((user, index) => {
                return (
                  <UserProfileCard
                    firstName={user.firstName}
                    // secondName={user.secondName}
                    picture={user.picture}
                    key={user.userId}
                    userId={user.userId}
                  />
                );
              })}
            </Row>
            <div className="pt-4">
              <Pagination
                pages={howManyPages}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </Container>
        </Tab>
      </Tabs>
    </>
  );
};

export default ProfilePage;
