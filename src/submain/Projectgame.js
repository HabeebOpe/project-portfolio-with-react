import React from "react";
import "../prolist.css";
import { Link } from "react-router-dom";

export default function Projectgame() {
  return (
    <div className="header game">
      <div className="project-top-text">
      <Link to="/"><span className="back-to-home">back to home</span></Link>
        <h1 className="project-head-name">Vanilla Js Game</h1>
        <p>
          All project designed and coded with HTML, CSS, Javascript and other Javascript frameworks 
        </p>
      </div>
      <div className="design"></div>
    </div>
  );
}
