// MapComponent.js
import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = ({ destinations }) => {
  const mapRef = useRef();

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map("map").setView([0, 0], 2);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);
    }

    const map = mapRef.current;

    // Remove existing markers
    map.eachLayer(layer => {
      if (layer instanceof L.Marker) {
        map.removeLayer(layer);
      }
    });

    if (destinations && destinations.length > 0) {
      destinations.forEach(destination => {
        const url = `https://nominatim.osm.org/search?format=json&limit=1&q=${encodeURIComponent(destination.name)}`;
        fetch(url)
          .then(response => response.json())
          .then(data => {
            if (data.length > 0) {
              const { lat, lon } = data[0];
              L.marker([lat, lon]).bindPopup(destination.name).addTo(map);
            }
          })
          .catch(error => {
            console.error("Error fetching coordinates:", error);
          });
      });
    }

    // Cleanup function
    return () => {
      map.eachLayer(layer => {
        if (layer instanceof L.Marker) {
          map.removeLayer(layer);
        }
      });
    };
  }, [destinations]);

  return <div id="map" style={{ height: "400px" }}></div>;
};

export default MapComponent;
