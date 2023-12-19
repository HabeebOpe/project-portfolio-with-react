import React from "react";
import "../prolist.css";
import { Link } from "react-router-dom";

export default function Projectvanilla() {
  return (
    <div className="header vanilla">
      <div className="project-top-text">
      <Link to="/"><span className="back-to-home">back to home</span></Link>
        <h1 className="project-head-name">Vanilla Javascript</h1>
        <p>
          All projects are coded with Javascript and HTML and CSS for structure and designing. Projects in this section are not mainly design projects but are programmed projects.
        </p>
      </div>
      <div className="design"></div>
    </div>
  );
}
