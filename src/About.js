import React from "react";

export default function About() {
  return (
    <div className="about-section">
      <div className="about-flex">
        <h1>Meet the Developer</h1>
        <div className="about-des">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            sapiente tenetur sequi ab nam, architecto quasi nulla minus voluptas
            ipsam repellat ullam molestias laboriosam a fuga autem repellendus
            numquam accusantium!
          </p>
          <ul>
            <li>
              <i className="fa-brands fa-twitter"></i> <p>Twitter</p>
            </li>
            <li>
              <i className="fa-brands fa-github"></i> <p>Git-hub</p>
            </li>
            <li>
              <i className="fa-brands fa-discord"></i> <p>Discord</p>
            </li>
          </ul>
          <p className="view-portfolio">
            <span>View portfolio</span> <i className="fa-brands fa-twitter"></i>
          </p>
        </div>
      </div>
    </div>
  );
}
