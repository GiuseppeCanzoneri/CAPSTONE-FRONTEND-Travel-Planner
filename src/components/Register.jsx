import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useNavigate } from "react-router-dom";

const Register = () => {
  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: "",
    nome: "",
    cognome: "",
  });

  const [showPassword, setShowPassword] = useState(false); // Stato per mostrare o nascondere la password

  const navigate = useNavigate();

  const sendRegister = async e => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3001/auth/register`, {
        method: "POST",
        body: JSON.stringify(register),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        setRegister({
          username: "",
          email: "",
          password: "",
          nome: "",
          cognome: "",
        });

        navigate("/login");
      }
    } catch (error) {
      alert(error);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container className="text-dark d-flex justify-content-center align-items-center">
      <Form className="rounded p-5 mt-5 form-register" onSubmit={sendRegister}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            required
            type="text"
            className="bg-white text-dark input-login"
            placeholder="Inserisci il tuo username"
            value={register.username}
            onChange={e => setRegister({ ...register, username: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            className="bg-white text-dark input-login"
            placeholder="Inserisci la tua email"
            value={register.email}
            onChange={e => setRegister({ ...register, email: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <div className="input-with-icon">
            <Form.Control
              required
              type={showPassword ? "text" : "password"} // Utilizza il tipo "text" o "password" in base allo stato di showPassword
              className="bg-white text-dark input-login"
              placeholder="Inserisci la tua password"
              value={register.password}
              onChange={e => setRegister({ ...register, password: e.target.value })}
            />
            {/* Icona per mostrare o nascondere la password */}
            <div className="password-icon" onClick={toggleShowPassword}>
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                style={{ fontSize: "14px", cursor: "pointer" }}
              />
            </div>
          </div>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            required
            type="text"
            className="bg-white text-dark input-login"
            placeholder="Inserisci il tuo nome"
            value={register.nome}
            onChange={e => setRegister({ ...register, nome: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Cognome</Form.Label>
          <Form.Control
            required
            type="text"
            className="bg-white text-dark input-login"
            placeholder="Inserisci il tuo cognome"
            value={register.cognome}
            onChange={e => setRegister({ ...register, cognome: e.target.value })}
          />
        </Form.Group>
        <div className="d-flex justify-content-end">
          <Button
            className="border-0"
            style={{
              backgroundColor: "#3f51b5",
            }}
            type="submit"
          >
            Registrati
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Register;
