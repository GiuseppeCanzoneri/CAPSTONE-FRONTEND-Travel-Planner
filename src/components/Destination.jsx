import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Destination = ({ destination }) => {
  const navigate = useNavigate();
  return (
    <Card
      className="destination-card"
      onClick={() => {
        navigate(`/destinations/${destination.id}`);
      }}
      style={{ cursor: "pointer" }}
    >
      <Card.Img
        width="200px"
        height="400px"
        className="image-fluid rounded-2"
        style={{ objectFit: "cover" }}
        variant="top"
        src={destination.urlCopertina}
      />{" "}
      <h5 className="text-center mt-1 text-white">{destination.name}</h5>
    </Card>
  );
};
export default Destination;
