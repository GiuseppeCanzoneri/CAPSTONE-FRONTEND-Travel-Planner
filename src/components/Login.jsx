import { useState } from "react";
import { Alert, Button, Container, Form, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserLoggedAction } from "../redux/actions";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
    showPassword: false,
  });

  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setLogin({ ...login, showPassword: !login.showPassword });
  };

  const sendLogin = async e => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3001/auth/login`, {
        method: "POST",
        body: JSON.stringify(login),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();

        localStorage.setItem("token", data.accessToken);

        setLogin({
          username: "",
          password: "",
          showPassword: false,
        });
        dispatch(getUserLoggedAction());
        navigate("/");
      }
    } catch (error) {
      setError(error);
      setErrorMessage("Credenziali errate, ritenta!");
    }
  };

  return (
    <Container className="text-dark d-flex justify-content-center align-items-center">
      {error && (
        <Alert variant="danger" onClose={() => setError(null)} dismissible>
          {errorMessage}
        </Alert>
      )}
      <h5 className="text-dark display-4 fs-3">
        Siete appassionati di viaggi e avete bisogno di un modo semplice <br /> per pianificare le vostre avventure?
        Allora dovete assolutamente <br /> dare un'occhiata al nostro sito!
      </h5>
      <Form className="rounded p-5 mt-5 form-login" onSubmit={sendLogin}>
        <Form.Group className="mb-3 text-dark">
          <Form.Label>Username</Form.Label>
          <Form.Control
            required
            type="text"
            className="bg-white text-dark input-login"
            placeholder="Inserisci il tuo username"
            value={login.username}
            onChange={e => setLogin({ ...login, username: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3 text-dark">
          <Form.Label>Password</Form.Label>
          <InputGroup>
            <Form.Control
              required
              type={login.showPassword ? "text" : "password"}
              className="bg-white text-dark input-login"
              placeholder="Inserisci la tua password"
              value={login.password}
              onChange={e => setLogin({ ...login, password: e.target.value })}
            />
            <Button variant="outline-secondary" onClick={togglePasswordVisibility}>
              <FontAwesomeIcon icon={login.showPassword ? faEyeSlash : faEye} />
            </Button>
          </InputGroup>
        </Form.Group>
        <div className="d-flex justify-content-end">
          <Button
            className="border-0"
            style={{
              backgroundColor: "#3f51b5",
            }}
            type="submit"
          >
            Entra
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
