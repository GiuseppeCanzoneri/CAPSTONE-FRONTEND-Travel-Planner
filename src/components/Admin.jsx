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
    <Container className="my-4">
      <div className="d-flex justify-content-between align-items-baseline ">
        <p className="display-3 text-dark">Controllo Destinazione: </p>
        <Button
          onClick={() => {
            handleShow();
          }}
          className="border-0 fs-4"
          style={{
            backgroundColor: "#3f51b5",
          }}
        >
          <FaPlus />
        </Button>
        <AddDestination show={show} handleClose={handleClose} />
        <EditDestination showEdit={showEdit} handleCloseEdit={handleCloseEdit} />
      </div>
      <ListGroup className="mt-3" style={{ boxShadow: "0px 0px 13px 0px #ffffff" }}>
        {destinations.map(destination => (
          <ListGroup.Item key={destination.id} className="bg-warning text-dark">
            <DestinationSingle destination={destination} handleShowEdit={handleShowEdit} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Admin;
