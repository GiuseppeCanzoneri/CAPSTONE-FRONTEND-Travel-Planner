import { Button, Card, Alert, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPreferiti } from "../redux/actions";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { useNavigate } from "react-router";

const Preferiti = () => {
  const dispatch = useDispatch();
  const preferiti = useSelector(state => state.home.preferiti);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPreferiti());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = async destinationId => {
    const token = localStorage.getItem("token");
    const url = `http://localhost:3001/users/me/preferiti/${destinationId}`;

    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        dispatch(getPreferiti());
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Container className="my-4">
      {preferiti.length > 0 ? (
        <>
          <p className="display-3 text-dark">Destinazioni preferite:</p>
          <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4 row-gap-3">
            {preferiti.map(destination => (
              <Col key={destination.idDestination}>
                <Card className="bg-dark">
                  <Card.Img
                    width="200px"
                    height="400px"
                    className="image-fluid rounded-2 position-relative"
                    style={{ objectFit: "cover" }}
                    variant="top"
                    src={destination.urlCopertina}
                  />
                  <h5 className="text-center mt-1 text-white">{destination.name}</h5>
                  <Button
                    variant="danger"
                    type="button"
                    onClick={() => handleDelete(destination.id)}
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                    }}
                  >
                    <ImCross />
                  </Button>
                  <Button
                    type="button"
                    onClick={() => {
                      navigate(`/destinations/${destination.id}`);
                    }}
                    style={{
                      position: "absolute",
                      top: "11px",
                      right: "170px",
                      backgroundColor: "#3f51b5",
                      border: "0",
                    }}
                  >
                    Leggi di più...
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      ) : (
        <Alert
          className="fs-4 text-light"
          style={{
            border: "1px solid #3f51b5 !important",
            backgroundColor: "#3f51b559",
          }}
        >
          Non ci sono preferiti salvati! Aggiungine qualcuno per visualizzarlo in questa sezione.{" "}
          <Link className="text-light" to={"/"}>
            Torna alla home.
          </Link>
        </Alert>
      )}
    </Container>
  );
};

export default Preferiti;
