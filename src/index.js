import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Section from "./Section";
import Nav from "./Nav";
import Item from "./Item";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="home">
      <Nav />
      <Section />
    </div>
    <Item />
  </React.StrictMode>
);
