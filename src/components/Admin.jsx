import { Button, Container, ListGroup } from "react-bootstrap";
import DestinationSingle from "./DestinationSingle";
import { useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import AddDestination from "./AddDestination";
import EditDestination from "./EditDestination";

const Admin = () => {
  const destinations = useSelector(state => state.home.destinations);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  return (
    <div className="admin-container">
      <Container className="my-4">
        <div className="d-flex justify-content-between align-items-baseline">
          <h1 className="display-3 text-dark">Controllo Destinazione:</h1>
          <Button
            onClick={() => handleShow()}
            variant="success"
            className="round-button d-flex align-items-center justify-content-center fs-3"
          >
            <FaPlus className="fs-5" />
          </Button>
          <AddDestination show={show} handleClose={handleClose} />
          <EditDestination showEdit={showEdit} handleCloseEdit={handleCloseEdit} />
        </div>
        <ListGroup className="mt-3" style={{ boxShadow: "0px 0px 13px 0px #f5f5f5" }}>
          {destinations.map(destination => (
            <ListGroup.Item key={destination.id} className="bg-light text-dark rounded">
              <DestinationSingle destination={destination} handleShowEdit={handleShowEdit} />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </div>
  );
};

export default Admin;
