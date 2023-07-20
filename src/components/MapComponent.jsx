import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import { Button } from "react-bootstrap";
import L from "leaflet";

const MapComponent = ({ destinations }) => {
  const [markers, setMarkers] = useState([]);
  const navigate = useNavigate();

  const getCoordinates = async destination => {
    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          destination.name
        )}.json?access_token=pk.eyJ1IjoiZ2l1c2VwcGUwMTgiLCJhIjoiY2xrMTZkYjJqMDNobjNobzc4aTZjbnhodyJ9.xVoIhY5gb-aY9P-2fQ52Ug`
      );
      const data = await response.json();
      const coordinates = data.features[0].geometry.coordinates;
      return coordinates;
    } catch (error) {
      console.error("Error fetching coordinates:", error);
      return null;
    }
  };

  const handleMarkerClick = destination => {
    navigate(`/destinations/${destination.id}`);
  };

  useEffect(() => {
    const renderMarkers = async () => {
      const resolvedMarkers = [];
      for (const destination of destinations) {
        const coordinates = await getCoordinates(destination);
        if (coordinates && destination.urlCopertina) {
          resolvedMarkers.push(
            <Marker
              key={destination.id}
              position={[coordinates[1], coordinates[0]]}
              icon={createCustomIcon(destination.urlCopertina)}
              onClick={() => handleMarkerClick(destination)}
            >
              <CustomPopup destination={destination} />
            </Marker>
          );
        }
      }
      setMarkers(resolvedMarkers);
    };

    if (destinations && destinations.length > 0) {
      renderMarkers();
    }
  }, [destinations, navigate]);

  // Funzione per creare un'icona personalizzata utilizzando l'URL della copertina
  const createCustomIcon = urlCopertina => {
    return new L.divIcon({
      html: `<img src="${urlCopertina}" alt="Marker Icon" style="width: 25px; height: 41px;" />`,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
    });
  };

  return (
    <div id="map" style={{ height: "400px" }}>
      <MapContainer center={[0, 0]} zoom={2} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        {markers}
      </MapContainer>
    </div>
  );
};

const CustomPopup = ({ destination }) => {
  const navigate = useNavigate();

  const handlePopupClick = () => {
    navigate(`/destinations/${destination.id}`);
  };

  return (
    <Popup>
      <div>
        <h3>{destination.name}</h3>
        <img src={destination.urlCopertina} alt={destination.name} style={{ width: "100px", height: "100px" }} />
      </div>
      <Button className="mt-3" onClick={handlePopupClick}>
        Vai all'itinerario
      </Button>
    </Popup>
  );
};

export default MapComponent;
