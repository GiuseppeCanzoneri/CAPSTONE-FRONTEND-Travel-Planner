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
            <p>
              Travel Planner è un'app di viaggio all'avanguardia che ti aiuta a pianificare le tue avventure in modo
              semplice ed efficiente. Siamo appassionati di esplorare il mondo e vogliamo condividere la nostra passione
              con te. Con il nostro servizio, potrai scoprire le migliori destinazioni, pianificare itinerari
              personalizzati e creare ricordi indimenticabili durante i tuoi viaggi. Unisciti a noi e inizia a
              pianificare la tua prossima avventura!
            </p>
          </Col>
          <Col md={3}>
            <h5>Contact Us</h5>
            <p>30 Via Rocca Pirrone</p>
            <p>Palermo, Prizzi</p>
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
