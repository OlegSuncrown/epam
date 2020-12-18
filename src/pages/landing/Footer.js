import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import instagramIcon from "../../assets/instagramIcon.svg";
import facebookIcon from "../../assets/facebookIcon.svg";

const Footer = () => {
  return (
    <Container fluid className="p-5 footer">
      <Row>
        <Col>
          <img className="footer-logo" src={Logo}></img>
        </Col>
        <Col>How it works</Col>
        <Col>About us</Col>
        <Col>Terms of use</Col>
        <Col>
          <img className="footer-icon" src={instagramIcon}></img>
        </Col>
        <Col>
          <img className="footer-icon" src={facebookIcon}></img>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
