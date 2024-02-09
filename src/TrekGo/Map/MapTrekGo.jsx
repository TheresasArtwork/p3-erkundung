import React, { useRef, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "../Map/MapTrekGo.css";
import "../../../config.js";
import mapboxgl from "mapbox-gl";
import { accessTokenMapbox } from "../../../config.js";

import MarkerTrekGo from "../Marker/MarkerTrekGo.jsx";

mapboxgl.accessToken = accessTokenMapbox;

let lat = 8;
let long = 49;

const MapTrekGo = ({ geoJson, onMarkerClick }) => {
  const mapContainerRef = useRef(null);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/light-v10",
      center: [lat, long],
      zoom: 10,
    });

    geoJson.allMarker.forEach((feature) => {
      if (feature.app === "trekgo") {
        // Überprüfung der Anwendungsbezeichnung
        const ref = React.createRef();
        ref.current = document.createElement("div");

        createRoot(ref.current).render(
          <MarkerTrekGo
            onClick={() => onMarkerClick(feature)}
            feature={feature}
            markerType={feature.markerType}
          />
        );

        new mapboxgl.Marker(ref.current)
          .setLngLat(feature.geometry.coordinates)
          .addTo(map);
      }
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Clean up on unmount
    return () => map.remove();
  }, [onMarkerClick, geoJson.allMarker]);

  return (
    <>
      <div className="map-container" ref={mapContainerRef} />
    </>
  );
};

export default MapTrekGo;
