import React from "react";
import "./prolist.css";
import img from "./asset/27969_88.jpg";

export default function Cssdesign() {
  return (
    <div className="project-list">
      <ul className="prolist">
        <li className="proitem">
          <div className="item-img">
            <h2 className="projname">Go back to top button</h2>
            <img src={img} alt="proj" />
          </div>
          <div>
            <ul className="project-lang">
              <p>Lang:</p>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Bootstrap</li>
              <li>Ruby</li>
            </ul>
            <div className="view-div">
              <p>Live site</p>
              <p>Source code</p>
            </div>
            <div className="like-views">
              <div className="prolike">
                <i className="fa-solid fa-heart"></i> <p>200</p>
              </div>
              <div>
                <i className="fa fa-eye"></i> <p>210</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
