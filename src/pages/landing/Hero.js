import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToFeatured = () => {
    let scrollInterval = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos < 970) {
        window.scrollTo(0, pos + 20);
      } else {
        window.clearInterval(scrollInterval);
      }
    }, 16);
  };

  return (
    <Container fluid className="hero">
      <Row>
        <Col className="col-12 col-md-11 mx-auto">
          <h1 className="hero-title text-dark mb-4">
            <strong>
              Want to finally
              <br />
              <span>accomplish your goal?</span>
            </strong>
          </h1>
          <h4 className="text-left text-dark hero-sub-title mb-4">
            <strong>
              Choose from our featured <br /> options or create your custom goal
            </strong>
          </h4>
          <Link
            to="/"
            className="hero-link text-center mr-5"
            onClick={scrollToFeatured}
          >
            <span>Featured</span>
          </Link>
          <Link to={`dashboard/add-goal?title=Default`} className="hero-link">
            <span>Create your own</span>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
