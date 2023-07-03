import { useEffect } from "react";
import { Alert, Badge, Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getItinerary, getPreferitiAction } from "../redux/actions";
import { FaRegStar, FaStar } from "react-icons/fa";

const Itinerary = () => {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const url = `http://localhost:3001/destinations/${params.id}`;
    dispatch(getItinerary(url));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  const destination = useSelector(state => state.home.destination);
  //   const preferiti = useSelector(state => state.home.preferiti);

  //   const isPreferito = preferiti.length > 0 && preferiti.find(favourite => favourite.id === params.idFilm);

  //   const filmPref = { idFilm: params.idFilm };

  const token = localStorage.getItem("token");

  //   const addPreferito = async () => {
  //     try {
  //       const response = await fetch(`http://localhost:3001/users/me/preferiti`, {
  //         method: "POST",
  //         body: JSON.stringify(filmPref),
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       if (response.ok) {
  //         dispatch(getPreferitiAction());
  //       }
  //     } catch (error) {
  //       Alert(error);
  //     }
  //   };

  //   const handleDelete = async () => {
  //     try {
  //       const response = await fetch(`http://localhost:3001/users/me/preferiti/${film.id}`, {
  //         method: "DELETE",
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       if (response.ok) {
  //         dispatch(getPreferitiAction());
  //       }
  //     } catch (error) {
  //       alert(error);
  //     }
  //   };

  return (
    <Container fluid className="text-dark mt-5">
      {destination !== null && (
        <>
          <Row className="justify-content-center gy-5">
            <Col md={8} className="order-2 order-md-1">
              <Row className="justify-content-center gy-5">
                <Col md={10} className="text-center border border-1 rounded-3 position-relative">
                  <h2 className="mb-3 display-3">{destination.name}</h2>
                  {destination.description.split("\n\n").map((itinerary, index) => {
                    const lines = itinerary.split("\n").filter(line => line.trim() !== "");
                    const [day, ...activities] = lines;
                    return (
                      <div key={index}>
                        <p>
                          <strong>{day.replace(":", "")}</strong>
                        </p>
                        {activities.map((activity, index) => {
                          const [time, description] = activity.split(": ");
                          return (
                            <p key={index}>
                              <strong>{time.replace(":", "")}:</strong> {description}
                            </p>
                          );
                        })}
                      </div>
                    );
                  })}
                  {/* {isPreferito ? (
                    <Button
                      onClick={handleDelete}
                      type="button"
                      className="fs-2"
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        backgroundColor: "transparent",
                        border: "0",
                      }}
                    >
                      <FaStar className="stelle" />
                    </Button>
                  ) : (
                    <Button
                      onClick={addPreferito}
                      type="button"
                      className="fs-2"
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        backgroundColor: "transparent",
                        border: "0",
                      }}
                    >
                      <FaRegStar className="stelle" />
                    </Button>
                  )} */}
                </Col>
              </Row>
            </Col>
            <Col md={4} className="order-1 order-md-2 d-flex justify-content-center">
              <img
                src={destination.urlCopertina}
                alt={destination.name}
                width={550}
                height={1200}
                style={{
                  marginRight: 100,
                  objectFit: "cover",
                  boxShadow: "0px 0px 13px 0px #ffffff",
                  maxWidth: "100%",
                }}
              />
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default Itinerary;
