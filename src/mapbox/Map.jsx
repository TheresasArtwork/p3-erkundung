import React, { useRef, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./Map.css";
import "../../config.js";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { accessTokenMapbox } from "../../config.js";
import geoJson from "../mapbox-marker/GeoJSON.json";
import MarkerTrekGo from "../TrekGo/MarkerTrekGo.jsx";
import MarkerCinetrail from "../CineTrail/MarkerCinetrail.jsx";

mapboxgl.accessToken = accessTokenMapbox;

let lat = 8;
let long = 49;

const Map = () => {
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
      const ref = React.createRef();
      ref.current = document.createElement("div");

      let CustomMarkerComponent;

      switch (feature.markerType) {
        case "Type1":
          CustomMarkerComponent = MarkerTrekGo;
          break;
        case "Type2":
          CustomMarkerComponent = MarkerCinetrail;
          break;
        // case "Type3":
        //   CustomMarkerComponent = MarkerKidQuest;
        //   break;
        // case "Type4":
        //   CustomMarkerComponent = MarkerCultivate;
        //   break;
        default:
          CustomMarkerComponent = MarkerTrekGo; // Fallback, wenn kein passender Typ gefunden wurde
      }

      createRoot(ref.current).render(
        <CustomMarkerComponent
          onClick={markerClicked}
          feature={feature}
          markerType={feature.markerType}
        />
      );

      new mapboxgl.Marker(ref.current)
        .setLngLat(feature.geometry.coordinates)
        .addTo(map);
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Clean up on unmount
    return () => map.remove();
  }, []);

  const markerClicked = (title) => {
    window.alert(title);
  };

  return <div className="map-container" ref={mapContainerRef} />;
};

export default Map;
