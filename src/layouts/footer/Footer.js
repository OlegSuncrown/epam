import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
// import instagramIcon from "../../assets/instagramIcon.svg";
// import facebookIcon from "../../assets/facebookIcon.svg";
import "./footer.css";
const Footer = () => {
  return (
    <Row className="footer m-0 py-4">
      <Col className="d-flex justify-content-center align-items-center col-md-4 col-12 pb-2">
        <img className="footer-logo" src={Logo}></img>
      </Col>
      <Col className="d-flex flex-column justify-content-center align-items-center">
        <Link className="text-light">How it works</Link>
        <Link className="text-light">About us</Link>
        <Link className="text-light">Terms of use</Link>
      </Col>

      <Col className="d-flex justify-content-center align-items-center">
        <i className="fab fa-facebook-square mr-4 shadow"></i>
        <i className="fab fa-instagram-square shadow"></i>

        {/* <img className='footer-icon' src={instagramIcon} />
        <img className='footer-icon' src={facebookIcon} /> */}
      </Col>
    </Row>
  );
};

export default Footer;
