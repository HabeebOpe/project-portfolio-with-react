import React from "react";
import "./prolist.css";
import { Link } from "react-router-dom";

export default function Projectvanilla() {
  return (
    <div className="header vanilla">
      <div className="project-top-text">
        <h1 className="project-head-name">Vanilla Javascript</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          eaque esse, dignissimos dicta delectus. Reprehenderit labore esse
          porro dolor enim sed harum. Rerum, vero perspiciatis porro recusandae
          doloremque consequatur quas.
        </p>
        <Link to="/">back to home</Link>
      </div>
      <div className="design"></div>
    </div>
  );
}
