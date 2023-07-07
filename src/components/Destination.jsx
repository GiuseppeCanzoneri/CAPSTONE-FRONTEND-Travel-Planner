import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Destination = ({ destination }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/destinations/${destination.id}`);
  };

  return (
    <motion.div
      className="destination-card"
      onClick={handleCardClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <Card.Img
        width="200px"
        height="400px"
        className="image-fluid rounded-2"
        style={{ objectFit: "cover" }}
        variant="top"
        src={destination.urlCopertina}
      />
      <h5 className="text-center mt-1 text-white">{destination.name}</h5>
    </motion.div>
  );
};

export default Destination;
