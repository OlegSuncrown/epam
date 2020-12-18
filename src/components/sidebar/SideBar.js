import { Nav, Navbar, Container, Row, Col, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import UserAvatar from "./UserAvatar";
import "./sidebar.css";
const SideBar = () => {
  return (
    <div className="d-block d-lg-block mb-4">
      <Container fluid>
        <Row className="p-0">
          <Col className="p-0 mx-auto" lg={12} sm={4}>
            <UserAvatar />
          </Col>
          <Col className="p-0 shadow" lg={12} sm={12}>
            <Button
              variant="flat m-0"
              size="xxl"
              className="w-100"
              exact
              to="/dashboard"
              as={NavLink}
              block
            >
              <i className="fas fa-user-circle mr-3"></i>
              Profile
            </Button>
            <Button
              variant="flat m-0"
              size="xxl"
              to="/dashboard/user-goals"
              as={NavLink}
              block
            >
              <i className="fas fa-dot-circle mr-3"></i>
              User Goals
            </Button>
            <Button
              variant="flat m-0"
              size="xxl"
              to="/dashboard/seasonal-goals"
              as={NavLink}
              block
            >
              <i className="fas fa-globe mr-3"></i>
              Season Goals
            </Button>
            <Button
              variant="flat m-0"
              size="xxl"
              to="/dashboard/add-goal/1"
              as={NavLink}
              block
            >
              <i className="fas fa-plus-circle mr-3"></i>
              Add New Goal
            </Button>
            <Button
              variant="flat m-0"
              size="xxl"
              to="/dashboard/user-bages"
              as={NavLink}
              block
            >
              <i className="fas fa-trophy mr-3"></i>
              Your Awards
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SideBar;
