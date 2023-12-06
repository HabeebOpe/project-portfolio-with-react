import React from "react";
import { Link } from "react-router-dom";
import cssImage from "../asset/28167_88.jpg";
import vanillaImg from "../asset/20653_18.jpg";
import landingImg from "../asset/28263_88.jpg";
import reactImg from "../asset/27969_88.jpg";
import gameImg from "../asset/26170_73.jpg";

export default function Item() {
  // const handleClick = (event) => {
  //   const li = event.currentTarget;
  //   li.classList.add("appear")
  //   setTimeout(() => {
  //     li.classList.remove("appear")
  //   }, 5000)
  // }
  return (
    <div className="item-div">
      <ul className="feature">
        <li id="it" className="item">
        <Link to="/cssdesign">
            <img src={cssImage} />
            <div className="project-number">
              <h3>20</h3>
              <p>Project</p>
            </div>
            <h1 className="display-name">CSS Design</h1>
        </Link>
        </li>
        <li className="item">
        <Link to="/vanilla">
          <img src={vanillaImg} />
            <div className="project-number">
              <h3>20</h3>
              <p>Project</p>
            </div>
            <h1 className="display-name">Vanilla Js</h1>
        </Link>
        </li>
        <li className="item">
        <Link to="/landing">
          <img src={landingImg} />
            <div className="project-number">
              <h3>20</h3>
              <p>Project</p>
            </div>
            <h1 className="display-name">Landing Page</h1>
          </Link>
        </li>
        <li className="item">
        <Link to="/react">
        <img src={reactImg} />
            <div className="project-number">
              <h3>20</h3>
              <p>Project</p>
            </div>
            <h1 className="display-name">Reactjs Project</h1>
          </Link>
        </li>
        <li className="item">
        <Link to="/game">
          <img src={gameImg} />
            <div className="project-number">
              <h3>20</h3>
              <p>Project</p>
            </div>
            <h1 className="display-name">Javascript Game</h1>
          </Link>
        </li>
      </ul>
    </div>
  );
}
