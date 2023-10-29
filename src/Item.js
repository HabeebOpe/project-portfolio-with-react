import React from "react";
import { Link } from "react-router-dom";
import cssImage from "./asset/28167_88.jpg";
import vanillaImg from "./asset/20653_18.jpg";
import landingImg from "./asset/28263_88.jpg";
import reactImg from "./asset/27969_88.jpg";
import gameImg from "./asset/26170_73.jpg";

export default function Item() {
  return (
    <div className="item-div">
      <ul className="feature">
        <li className="item">
          <Link to="/cssdesign">
            <img src={cssImage} />
            <div className="project-number">
              <h3>20</h3>
              <p>Project</p>
            </div>
            <h1 className="display-name">CSS Design</h1>
            <div className="description">
              <div>
              <h1>CSS Design</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                maiores ut ducimus necessitatibus, et doloremque
              </p>
              <ul className="languages">
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>Tailwind CSS</li>
              </ul>
              </div>
            </div>
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
            <div className="description">
              <div>
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
            </div>
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
            <div className="description">
              <div>
              <h1>Landing Page</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                maiores ut ducimus necessitatibus, et doloremque
              </p>
              <ul className="languages">
              <li>Frontend languages</li>
              </ul>
              </div>
            </div>
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
            <div className="description">
              <div>
              <h1>React Proj...</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                maiores ut ducimus necessitatibus, et doloremque
              </p>
              <ul className="languages">
              <li>React Library</li>
              </ul>
              </div>
            </div>
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
            <div className="description">
              <div>
              <h1>Js Games</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                maiores ut ducimus necessitatibus, et doloremque
              </p>
              <ul className="languages">
              <li>Javascript</li>
              <li>CSS</li>
              <li>HTML</li>
              </ul>
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
