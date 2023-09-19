import React from "react";
import cssLogo from "./asset/item.png";

export default function Item() {
  return (
    <div className="item-div">
      <ul className="feature">
        <li className="item">
          <a href="#">
            <div className="project-number">
              <span>20</span> Projects
            </div>
            <div className="description">
              <h1>CSS Design</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                maiores ut ducimus necessitatibus, et doloremque
              </p>
              <ul className="languages">
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
          </a>
        </li>
        <li className="item">
          <a href="#">
            <div className="project-number">
              <span>20</span> Projects
            </div>
            <div className="description">
              <h1>Vanilla Js</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                maiores ut ducimus necessitatibus, et doloremque
              </p>
              <ul className="languages">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
              </ul>
            </div>
          </a>
        </li>
        <li className="item">
          <a href="#">
            <div className="project-number">
              <span>20</span> Projects
            </div>
            <div className="description">
              <h1>Landing Page</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                maiores ut ducimus necessitatibus, et doloremque
              </p>
              <ul>Frontend lang/Frameworks</ul>
            </div>
          </a>
        </li>
        <li className="item">
          <a href="#">
            <div className="project-number">
              <span>20</span> Projects
            </div>
            <div className="description">
              <h1>React Projects</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                maiores ut ducimus necessitatibus, et doloremque
              </p>
              <ul>React Library</ul>
            </div>
          </a>
        </li>
        <li className="item">
          <a href="#">
            <div className="project-number">
              <span>20</span> Projects
            </div>
            <div className="description">
              <h1>Js Games</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                maiores ut ducimus necessitatibus, et doloremque
              </p>
              <ul>HTML CSS Javascript</ul>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}
