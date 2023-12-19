import React from "react";
import "../prolist.css";
import { Link } from "react-router-dom";

export default function Projectcss() {
  return (
    <div className="header cssdesign">
      <div className="project-top-text">
        <Link to="/"><span className="back-to-home">back to home</span></Link>
        <h1 className="project-head-name">CSS Design</h1>
        <p>
          All projects are designed in HTML CSS and other CSS frameworks only.
        </p>
      </div>
      <div className="design"></div>
    </div>
  );
}
