import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getDestination } from "../redux/actions";
import Destination from "./Destination";
import MapComponent from "./MapComponent";

const ListDestination = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const url = `http://localhost:3001/destinations?nome=${query}`;

  useEffect(() => {
    dispatch(getDestination(url));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const destinations = useSelector(state => state.home.destinations);
  const user = useSelector(state => state.home.user);

  const filteredDestinations = destinations.slice(0, 8);

  return (
    <Container className="my-4">
      {user !== null ? (
        <>
          <Form onSubmit={e => e.preventDefault()}>
            <Form.Group className="mb-3">
              <Form.Label className="text-dark fs-3">Cerca tra le nostre Destinazioni:</Form.Label>
              <Form.Control
                className="input-ricerca"
                type="text"
                placeholder="Inserisci il nome di una Destinazione"
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
            </Form.Group>
          </Form>
          <h2 className="fs-3 display-4 mb-3">
            La tua prossima avventura inizia qui. Inserisci il luogo che desideri visitare e scopri il tuo itinerario
            ideale!
          </h2>
          <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4 row-gap-3">
            {filteredDestinations.map(destination => (
              <Col key={destination.id}>
                <Destination destination={destination} />
              </Col>
            ))}
          </Row>
          <div className="mt-3">
            <div>
              <h2 className="display-4 fw-bold fs-2">Esplora il Mondo</h2>
              <p className="fs-4">
                Scopri le meravigliose destinazioni disponibili! Qui troverai solo alcune delle 8 destinazioni
                incredibili che puoi esplorare. Continua a scorrere la mappa per trovare altre avventure!
              </p>
            </div>

            <MapComponent destinations={destinations} />
          </div>
        </>
      ) : (
        <p className="display-3 fs-2 text-center bg-warning">
          Per vedere le nostre mete devi essere registrato al sito!
        </p>
      )}
    </Container>
  );
};

export default ListDestination;
