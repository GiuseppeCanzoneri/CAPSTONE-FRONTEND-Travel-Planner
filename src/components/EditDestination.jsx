import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getDestination } from "../redux/actions";

const EditDestination = ({ showEdit, handleCloseEdit }) => {
  const dispatch = useDispatch();

  const [destination, setdestination] = useState(null);
  const meta = useSelector(state => state.home.destinationEdit);

  useEffect(() => {
    if (!meta) return;
    setdestination({
      name: meta.name,
      urlCopertina: meta.urlCopertina,
      description: meta.description,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meta]);

  const editdestination = async e => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`http://localhost:3001/destinations/${meta.id}`, {
        method: "PUT",
        body: JSON.stringify(destination),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        dispatch(getDestination(`http://localhost:3001/destinations`));
        handleCloseEdit();
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Modal show={showEdit} onHide={handleCloseEdit} className="text-white form-login">
      <Modal.Header className="bg-dark text-white" closeButton>
        <Modal.Title>Modifica destination</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-white">
        {destination !== null && (
          <Form onSubmit={editdestination}>
            <Form.Group className="mb-3 text-dark" controlId="nome">
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
            <Form.Group className="mb-3 text-dark" controlId="urlCopertina">
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
            <Form.Group className="mb-3 text-dark " controlId="descrizione">
              <Form.Label>Description</Form.Label>
              <Form.Control
                className="bg-white text-dark input-login"
                as="textarea"
                rows={3}
                placeholder="Es: Giorno 1 eccc...."
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
              Modifica
            </Button>
          </Form>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default EditDestination;
