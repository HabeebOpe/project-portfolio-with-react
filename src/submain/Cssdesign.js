import React from "react";
import "../prolist.css";
import img from "../asset/name.png";
import cssData from "../cssdata"

export default function Cssdesign() {
  const list = cssData.map(cssList => {
    return(
        <li className="proitem">
        <h2 className="projname">{cssList.name}</h2>
        <div className="item-img">
          <img src={img} alt="proj" />
          <div className="view-option">
            <a href={cssList.live}><p>Live site</p></a>
            <a href={cssList.github}><p>Source code</p></a>
          </div>
        </div>
      </li> 
    )
  })
  return (
    <div className="project-list">
      <ul className="prolist">
       {list}
      </ul>
    </div>
  );
}


