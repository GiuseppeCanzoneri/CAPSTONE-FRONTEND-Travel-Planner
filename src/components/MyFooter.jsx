import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const MyFooter = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row>
          <Col md={6}>
            <h5>About Us</h5>
            <p>Lorem ipsum dolor.</p>
          </Col>
          <Col md={3}>
            <h5>Contact Us</h5>
            <p>123 Travel Street</p>
            <p>City, Country</p>
            <p>info@travelplanner.com</p>
          </Col>
          <Col md={3}>
            <h5>Follow Us</h5>
            <div className="d-flex">
              <a href="#" className="me-2 text-light">
                <FaFacebookF />
              </a>
              <a href="#" className="me-2 text-light">
                <FaTwitter />
              </a>
              <a href="#" className="me-2 text-light">
                <FaInstagram />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="text-center mt-3">&copy; {new Date().getFullYear()} Travel Planner. All rights reserved.</div>
    </footer>
  );
};

export default MyFooter;
