import React from "react";
import ReactDOM from "react-dom/client";
import "mapbox-gl/dist/mapbox-gl.css";
import App from "./App.jsx";
import "./index.css";
import { Menu } from "./Menu/Menu";
import TrekGo from "./TrekGo/TrekGo";
import  Cultuvate  from "./Cultuvate/Cultuvate";
import { CineTrail } from "./CineTrail/CineTrail";
import KidQuest from "./KidQuest/KidQuest";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
        <Menu />
      </>
    ),
    children: [
      { path: "/trekgo", element: <TrekGo /> },
      { path: "/cultuvate", element: <Cultuvate /> },
      { path: "/cinetrail", element: <CineTrail /> },
      { path: "/kidquest", element: <KidQuest /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
