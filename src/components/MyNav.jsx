import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faMapMarkerAlt, faSignInAlt, faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { getUserLoggedAction, logoutUserAction } from "../redux/actions/index";
import logo from "../assets/icons/logo.png";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const MyNav = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector(state => state.home.user);

  useEffect(() => {
    dispatch(getUserLoggedAction());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutUserAction());
  };

  return (
    <Navbar className="sticky-top" bg="white" variant="white">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="Logo" width="100" height="100" />
          Travel Planner
        </Navbar.Brand>

        <Nav className="me-auto">
          {location.pathname !== "/login" && location.pathname !== "/register" && (
            <Link className="nav-link" to={"/"}>
              <FontAwesomeIcon className="me-1" icon={faHome} />
              Home
            </Link>
          )}
        </Nav>

        {location.pathname !== "/login" && location.pathname !== "/register" && (
          <>
            {user ? (
              <NavDropdown
                style={{ width: "130px", height: "30px" }}
                className="bg-success rounded-2 "
                title={
                  <>
                    <FontAwesomeIcon className="ms-3" icon={faUser} /> {user.nome}
                  </>
                }
              >
                <NavDropdown.Item className="bg-danger rounded-2" onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Link className="nav-link" to={"/login"}>
                <FontAwesomeIcon className="me-1" icon={faSignInAlt} />
                Login/Register
              </Link>
            )}
          </>
        )}

        {location.pathname === "/login" && (
          <Link className="nav-link" to={"/register"}>
            <FontAwesomeIcon className="me-1" icon={faUserPlus} />
            Registration
          </Link>
        )}

        {location.pathname === "/register" && (
          <Link className="nav-link" to={"/login"}>
            <FontAwesomeIcon className="me-1" icon={faSignInAlt} />
            Login
          </Link>
        )}
      </Container>
    </Navbar>
  );
};

export default MyNav;
