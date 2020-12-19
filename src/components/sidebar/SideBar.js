import { Container, Row, Col, Button } from "react-bootstrap";
import SideNav from "./SideNav";
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
            <SideNav />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SideBar;
