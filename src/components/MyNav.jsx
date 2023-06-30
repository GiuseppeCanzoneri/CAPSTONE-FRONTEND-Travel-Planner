import { Navbar, Container, Button, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faMapMarkerAlt, faSignInAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/icons/logo.png";
import "../";
const MyNav = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" className="logo-mini" />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Item>
            <Nav.Link href="#home">
              <FontAwesomeIcon className="me-1" icon={faHome} />
              <span>Home</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#destination">
              <FontAwesomeIcon className="me-1" icon={faMapMarkerAlt} />
              <span>Destinazione</span>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Button className="ms-5" variant="outline-dark">
          <FontAwesomeIcon className="me-1" icon={faUser} />
          <span>Profilo</span>
        </Button>
        <Button className="ms-5" variant="success">
          <FontAwesomeIcon className="me-1" icon={faSignInAlt} />
          <span>Login</span>
        </Button>
      </Container>
    </Navbar>
  );
};

export default MyNav;
