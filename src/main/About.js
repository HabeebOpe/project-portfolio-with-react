import React from "react";

export default function About() {
  return (
    <div className="about-section">
      <div className="about-flex">
        <h1>Meet the Developer</h1>
        <div className="about-des">
          <p className="about-dev">
          Hi, I'm Habeebullah Okunlola, a web developer and designer passionate about bringing creativity and innovation to projects. The project base was essentially created to store my projects for easy preview by devs, friends, clients and potential managers. Through this, I discovered it should be a site for aspiring frontend developers like me to get project ideas for their next endeavor. I love building and designing projects, as well as solving problems, which is why this project base was created. Click the portfolio link below to learn more about me.
          </p>
          <ul>
            <li>
              <a target="_blank" href="https://github.com/HabeebOpe">
                <i className="fa-brands fa-github"></i>
                <p>Git-hub</p>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://twitter.com/habeebullaope?t=9baxs9N4-rDfri5OI2EFMA&s=09">
                <i className="fa-brands fa-twitter"></i>
                <p>Twitter</p>
              </a>
            </li>
            <li>
              <a href="https://habeebullah-okunlola.netlify.app/" target="_blank">
                <i className="fas fa-briefcase"></i>
                <p>Portfolio</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
