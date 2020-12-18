import React from "react";
import { Container, Col, Row, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import instagramIcon from "../../assets/instagramIcon.svg";
import facebookIcon from "../../assets/facebookIcon.svg";
import "./footer.css";
const Footer = () => {
  return (
    <Row className="py-4 bg-dark">
      <Col className="d-flex justify-content-center align-items-center col-md-4 col-12 py-3">
        <img className="footer-logo" src={Logo}></img>
      </Col>
      <Col className="d-flex flex-column justify-content-center align-items-center">
        <Link className="text-light">How it works</Link>
        <Link className="text-light">About us</Link>
        <Link className="text-light">Terms of use</Link>
      </Col>

      <Col className="d-flex justify-content-center align-items-center">
        <i class="fab fa-facebook-square mr-4 shadow"></i>
        <i class="fab fa-instagram-square shadow"></i>

        {/* <img className='footer-icon' src={instagramIcon} />
        <img className='footer-icon' src={facebookIcon} /> */}
      </Col>
    </Row>
  );
};

export default Footer;
