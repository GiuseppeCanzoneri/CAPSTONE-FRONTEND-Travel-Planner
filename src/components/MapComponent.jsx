import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = ({ destinations }) => {
  const [markers, setMarkers] = useState([]);

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

  useEffect(() => {
    const renderMarkers = async () => {
      const resolvedMarkers = [];
      for (const destination of destinations) {
        const coordinates = await getCoordinates(destination);
        if (coordinates && destination.urlCopertina) {
          resolvedMarkers.push(
            <Marker key={destination.id} position={[coordinates[1], coordinates[0]]}>
              <Popup>{destination.name}</Popup>
            </Marker>
          );
        }
      }
      setMarkers(resolvedMarkers);
    };

    if (destinations && destinations.length > 0) {
      renderMarkers();
    }
  }, [destinations]);

  return (
    <div id="map" style={{ height: "400px", width: "100%" }}>
      <MapContainer center={[0, 0]} zoom={2}>
        <TileLayer
          url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
          maxZoom={18}
          id="mapbox/streets-v11"
          tileSize={512}
          zoomOffset={-1}
          accessToken="pk.eyJ1IjoiZ2l1c2VwcGUwMTgiLCJhIjoiY2xrMTZkYjJqMDNobjNobzc4aTZjbnhodyJ9.xVoIhY5gb-aY9P-2fQ52Ug"
        />
        {markers}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
