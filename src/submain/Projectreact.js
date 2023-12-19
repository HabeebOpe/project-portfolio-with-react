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
          My react projects are not hosted for now, cause I have mainly been using  react for bigger projects example is this project base, and the code are not public. You can kindly subscribe to get notified if i release a new project
        </p>
      </div>
      <div className="design"></div>
    </div>
  );
}
