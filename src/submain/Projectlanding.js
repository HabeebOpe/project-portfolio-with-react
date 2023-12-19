import React from "react";
import "../prolist.css";
import { Link } from "react-router-dom";

export default function Projectlanding() {
  return (
    <div className="header landing">
      <div className="project-top-text">
        <Link to="/"><span className="back-to-home">back to home</span></Link>
        <h1 className="project-head-name">Landing Page</h1>
        <p>
          All projects are designed and coded in HTML, CSS and javascript for some
        </p>
      </div>
      <div className="design"></div>
    </div>
  );
}
