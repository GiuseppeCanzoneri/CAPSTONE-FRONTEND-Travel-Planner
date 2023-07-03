import { Container } from "react-bootstrap";

const Jumbo = () => {
  return (
    <Container fluid className="px-0 d-flex justify-content-center sfondo1">
      <div className="text-center mt-4 mx-2">
        <h1 className="display-1 text-dark mt-5">TRAVEL PLANNER</h1>
        <p className="display-6 text-dark align-bottom mt-5">
          Travel Planner è l'app di viaggio che ti fornisce un itinerario personalizzato di 7 giorni. Semplice, veloce
          ed efficiente, ti guiderà attraverso le migliori attrazioni, ristoranti e luoghi da visitare durante il tuo
          viaggio. Pianifica con facilità e crea ricordi indimenticabili con Travel Planner.
        </p>
      </div>
    </Container>
  );
};

export default Jumbo;
