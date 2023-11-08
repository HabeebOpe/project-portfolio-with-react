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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          eaque esse, dignissimos dicta delectus. Reprehenderit labore esse
          porro dolor enim sed harum. Rerum, vero perspiciatis porro recusandae
          doloremque consequatur quas.
        </p>
      </div>
      <div className="design"></div>
    </div>
  );
}
