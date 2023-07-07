import { Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getDestination } from "../redux/actions";
import Destination from "./Destination";

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
  return (
    <Container className="my-4">
      {user !== null ? (
        <>
          <Form onSubmit={e => e.preventDefault()}>
            <Form.Group className="mb-3">
              <Form.Label className="text-dark fs-3 ">Cerca tra le nostre Destinazioni:</Form.Label>
              <Form.Control
                className="input-ricerca"
                type="text"
                placeholder="Inserisci il nome di una Destinazione"
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
            </Form.Group>
          </Form>
          <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4 row-gap-3">
            <>
              {destinations.map(destination => (
                <Col key={destination.id}>
                  <Destination destination={destination} />
                </Col>
              ))}
            </>
          </Row>
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
