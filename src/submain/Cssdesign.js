import React from "react";
import "../prolist.css";
import img from "../asset/name.png";
import cssData from "../cssdata"

export default function Cssdesign() {
  const handleClick = (event) => {
    const li = event.currentTarget;
    li.classList.add("appear")
    setTimeout(() => {
      li.classList.remove("appear")
    }, 2000)
  }
  const list = cssData.map(cssList => {
    return(
        <li className="proitem" onClick={handleClick}>
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


