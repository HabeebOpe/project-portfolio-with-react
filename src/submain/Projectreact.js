import React from "react";
import "../prolist.css";
import { Link } from "react-router-dom";

export default function Projectraect() {
  return (
    <div className="header react">
      <div className="project-top-text">
      <Link to="/"><span className="back-to-home">back to home</span></Link>
        <h1 className="project-head-name">React Project</h1>
        <p>
          All projects designed and coded with react alone and CSS for designing.
        </p>
      </div>
      <div className="design"></div>
    </div>
  );
}
