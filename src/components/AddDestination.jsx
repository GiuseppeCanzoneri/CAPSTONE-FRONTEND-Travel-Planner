import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getDestination } from "../redux/actions";

const AddDestination = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  const url = `http://localhost:3001/destinations`;
  const [destination, setdestination] = useState({
    name: "",
    description: "",
    urlCopertina: "",
  });

  const adddestination = async e => {
    const token = localStorage.getItem("token");
    e.preventDefault();

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(destination),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        setdestination({
          name: "",
          description: "",
          urlCopertina: "",
        });
        dispatch(getDestination(url));
        handleClose();
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <Modal show={show} onHide={handleClose} className="text-dark form-login">
      <Modal.Header className="bg-white text-dark" closeButton>
        <Modal.Title>Aggiungi destination</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-white">
        <Form onSubmit={adddestination}>
          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome destination</Form.Label>
            <Form.Control
              className="bg-white text-dark input-login"
              type="text"
              placeholder="Es: Madrid"
              autoFocus
              required
              value={destination.name}
              onChange={e => setdestination({ ...destination, name: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="urlCopertina">
            <Form.Label>Url copertina</Form.Label>
            <Form.Control
              className="bg-white text-dark input-login"
              type="text"
              placeholder="Es: http://www..."
              autoFocus
              required
              value={destination.urlCopertina}
              onChange={e => setdestination({ ...destination, urlCopertina: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>description</Form.Label>
            <Form.Control
              className="bg-white text-dark input-login"
              as="textarea"
              rows={3}
              placeholder="Es: giorno 1 ecc..."
              autoFocus
              required
              value={destination.description}
              onChange={e => setdestination({ ...destination, description: e.target.value })}
            />
          </Form.Group>

          <Button
            className="me-auto"
            style={{
              backgroundColor: "#3f51b5",
              border: "0",
            }}
            type="submit"
          >
            Salva
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default AddDestination;
