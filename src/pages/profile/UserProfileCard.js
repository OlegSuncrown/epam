import axios from "axios";
import { React, useState, useContext } from "react";
import {
  Card,
  Col,
  Modal,
  Button,
  Figure,
  NavLink,
  Row,
  Container,
  Spinner,
} from "react-bootstrap";
import profilePictureDefault from "../../assets/profilePicture.jpg";
import { UsersContext } from "../../context/users/UsersContext";

const UserProfileCard = ({
  firstName,
  secondName,
  picture,
  userId,
  isFriend,
  setIsLoaded,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const showProfile = () => setShow(true);
  const URL = "https://hwtaweb20201216131958.azurewebsites.net";
  const { loadFriends } = useContext(UsersContext);

  const addFriend = async () => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };

    setIsLoaded(false);
    try {
      const { data } = await axios.post(
        `${URL}/AddFriend`,
        { friendId: userId },
        config
      );

      handleClose();
      loadFriends();
      setIsLoaded(true);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteFriend = async () => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    setIsLoaded(false);
    try {
      await axios.delete(
        `${URL}/deleteFriend`,
        { data: { friendId: userId } },
        config
      );

      handleClose();
      loadFriends();
      setIsLoaded(true);
    } catch (err) {
      console.log(err);
    }
  };

  if (!picture) {
    picture = profilePictureDefault;
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body className="align-self-center mr-3">
          <Figure onClick={showProfile}>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={picture}
              className="avatar"
            />
          </Figure>
          <div>{firstName}</div>
          {/* <div>{firstName + " " + secondName}</div> */}
        </Modal.Body>
        <Modal.Footer>
          <Container>
            <Row className="d-flex justify-content-between">
              <Col className="col-12 col-md-6">
                <Button
                  onClick={isFriend ? deleteFriend : addFriend}
                  variant="flat m-0"
                  size="l"
                  to="/dashboard/add-goal"
                  as={NavLink}
                  className="d-flex justify-content-center align-items-center"
                >
                  <i className="fas fa-plus-circle mr-3"></i>
                  {isFriend ? "DeleteFriend" : "Add Friend"}
                </Button>
              </Col>
              <Col className="col-12 col-md-6">
                <Button
                  onClick={handleClose}
                  variant="flat m-0"
                  size="l"
                  to="/dashboard/add-goal"
                  as={NavLink}
                  block
                  className="d-flex justify-content-center "
                >
                  <i className="fas mr-3"></i>
                  Close
                </Button>
              </Col>
            </Row>
          </Container>
        </Modal.Footer>
      </Modal>

      <Col className="col-12 col-sm-6 col-md-3 my-2 btn" onClick={showProfile}>
        <Card className="shadow d-flex align-items-center userCard">
          <Card.Img className="avatar" variant="top" src={picture} />
          <Card.Body>
            <Card.Title className="text-center">
              {firstName + " " + secondName}
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default UserProfileCard;
