import React from "react";
import { createRoot } from "react-dom/client";
import RestAPI from "./RestAPI";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RestAPI />
  </React.StrictMode>
);