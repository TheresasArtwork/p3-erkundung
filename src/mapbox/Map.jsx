import { useRef, useEffect, useState } from "react";
import "./Map.css";
import "../../config.js";
import mapboxgl, { accessToken } from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { accessTokenMapbox } from "../../config.js";

mapboxgl.accessToken = accessTokenMapbox;

export function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(8.8445);
  const [lat, setLat] = useState(49.9011);
  const [zoom, setZoom] = useState(15);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });
  return (
    <>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </>
  );
}
