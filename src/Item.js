import React from "react";
import { Link } from "react-router-dom";

export default function Item() {
  return (
    <div className="item-div">
      <ul className="feature">
        <li className="item">
          <Link to="/cssdesign">
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
          </Link>
        </li>
        <li className="item">
          <Link to="/vanilla">
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
          </Link>
        </li>
        <li className="item">
          <Link to="/landing">
            <div className="project-number">
              <span>20</span> Projects
            </div>
            <div className="description">
              <h1>Landing Page</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                maiores ut ducimus necessitatibus, et doloremque
              </p>
              <ul>Frontend lang...</ul>
            </div>
          </Link>
        </li>
        <li className="item">
          <Link to="/react">
            <div className="project-number">
              <span>20</span> Projects
            </div>
            <div className="description">
              <h1>React Proj...</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                maiores ut ducimus necessitatibus, et doloremque
              </p>
              <ul>React Library</ul>
            </div>
          </Link>
        </li>
        <li className="item">
          <Link to="/game">
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
          </Link>
        </li>
      </ul>
    </div>
  );
}
