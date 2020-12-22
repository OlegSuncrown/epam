import { React, useState, useContext } from "react";
import { Container, Row, Spinner, Tabs, Tab } from "react-bootstrap";
import UserProfileCard from "./UserProfileCard";
import { Pagination } from "../../components";
import UserAvatar from "../../components/sidebar/UserAvatar";
import { UsersContext } from "../../context/users/UsersContext";

const ProfilePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const { usersList, friendsList, setIsLoaded, isLoaded } = useContext(
    UsersContext
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentUsers = usersList.slice(indexOfFirstPost, indexOfLastPost);
  const currentFriends = friendsList.slice(indexOfFirstPost, indexOfLastPost);
  const howManyPages = Math.ceil(usersList.length / postsPerPage);

  if (!isLoaded) {
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
      <Tabs defaultActiveKey="Friends" id="uncontrolled-tab-example">
        <Tab eventKey="Friends" title="Friends">
          <Container fluid>
            <Row>
              {currentFriends.map((friend, index) => {
                return (
                  <UserProfileCard
                    setIsLoaded={setIsLoaded}
                    isFriend={true}
                    firstName={friend.firstName}
                    secondName={friend.secondName}
                    picture={friend.picture}
                    key={friend.userId}
                    userId={friend.userId}
                  />
                );
              })}
            </Row>
            {currentFriends.length ? (
              <div className="pt-4">
                <Pagination
                  pages={howManyPages}
                  setCurrentPage={setCurrentPage}
                />
              </div>
            ) : (
              <h2 className="text-center">You have no friends yet.</h2>
            )}
          </Container>
        </Tab>

        <Tab eventKey="Users" title="All users">
          <Container fluid>
            <Row>
              {currentUsers.map((user, index) => {
                return (
                  <UserProfileCard
                    setIsLoaded={setIsLoaded}
                    firstName={user.firstName}
                    secondName={user.secondName}
                    picture={user.picture}
                    key={user.userId}
                    userId={user.userId}
                  />
                );
              })}
            </Row>
            {currentUsers.length ? (
              <div className="pt-4">
                <Pagination
                  pages={howManyPages}
                  setCurrentPage={setCurrentPage}
                />
              </div>
            ) : (
              <h2 className="text-center">
                You are so lonely in this cruel world!
              </h2>
            )}
          </Container>
        </Tab>
      </Tabs>
    </>
  );
};

export default ProfilePage;
