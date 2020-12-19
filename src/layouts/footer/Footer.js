import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import instagramIcon from "../../assets/instagramIcon.svg";
import facebookIcon from "../../assets/facebookIcon.svg";

const Footer = () => {
  return (
    <Row className="p-5 footer">
      <Col>
        <img className="footer-logo" src={Logo}></img>
      </Col>
      <Col>How it works</Col>
      <Col>About us</Col>
      <Col>Terms of use</Col>
      <Col className="d-flex justify-content-end col-6 col-md-1 pl-5">
        <img className="footer-icon" src={instagramIcon}></img>
      </Col>
      <Col className="d-flex justify-content-start col-6 col-md-1">
        <img className="footer-icon-fb" src={facebookIcon}></img>
      </Col>
    </Row>
  );
};

export default Footer;
