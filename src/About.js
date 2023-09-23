import React from "react";

export default function About() {
  return (
    <div className="about-section">
      <div className="about-flex">
        <h1>Meet the Developer</h1>
        <div className="about-des">
          <p className="about-dev">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            sapiente tenetur sequi ab nam, architecto quasi nulla minus voluptas
            ipsam repellat ullam molestias laboriosam a fuga autem repellendus
            numquam accusantium!
          </p>
          <ul>
            <li>
              <a href="https://github.com/HabeebOpe">
                <i className="fa-brands fa-github"></i>
                <p>Git-hub</p>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/habeebullaope?t=9baxs9N4-rDfri5OI2EFMA&s=09">
                <i className="fa-brands fa-twitter"></i>
                <p>Twitter</p>
              </a>
            </li>
            <li>
              <a href="https://medium.com/@habeebullahokunlola">
                <i className="fa-brands fa-medium"></i>
                <p>Medium</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
