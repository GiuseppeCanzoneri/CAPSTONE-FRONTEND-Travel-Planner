import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FaPen } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import { useDispatch } from "react-redux";
import { getDestinationModify, getDestination } from "../redux/actions";

const DestinationSingle = ({ destination, handleShowEdit }) => {
  const dispatch = useDispatch();
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const handleDelete = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`http://localhost:3001/destinations/${destination.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        dispatch(getDestination(`http://localhost:3001/destinations`));
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleCloseConfirmationModal = () => {
    setShowConfirmationModal(false);
  };

  const handleShowConfirmationModal = () => {
    setShowConfirmationModal(true);
  };

  const handleConfirmDelete = () => {
    handleDelete();
    setShowConfirmationModal(false);
  };

  return (
    <div className="d-flex justify-content-between align-items-center">
      <p className="text-dark text-truncate my-0 fs-3">{destination.name}</p>
      <div className="d-flex flex-nowrap">
        <Button onClick={handleShowConfirmationModal} type="button" variant="danger" className="text-white me-3">
          <ImBin />
        </Button>
        <Button
          onClick={() => {
            dispatch(getDestinationModify(destination));
            handleShowEdit();
          }}
          type="button"
          variant="outline-secondary"
        >
          <FaPen />
        </Button>
      </div>

      {/* Modale di conferma eliminazione */}
      <Modal show={showConfirmationModal} onHide={handleCloseConfirmationModal} className="text-dark form-login">
        <Modal.Header closeButton className="bg-dark text-white">
          <Modal.Title>Conferma eliminazione</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">Sei sicuro di voler eliminare questa destination?</Modal.Body>
        <Modal.Footer className="bg-dark text-white">
          <Button variant="secondary" onClick={handleCloseConfirmationModal}>
            Annulla
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Elimina
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DestinationSingle;
