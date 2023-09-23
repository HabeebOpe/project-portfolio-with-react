import React from "react";
import "./index.css";

export default function Nav() {
  return (
    <div className="nav-bar">
      <div className="logo">
        <h1>Zodiac</h1>
      </div>
      <div className="nav-social">
        <a href="https://github.com/HabeebOpe">
          <span>
            <i className="fa-brands fa-github"></i>
          </span>
        </a>
        <a href="https://twitter.com/habeebullaope?t=9baxs9N4-rDfri5OI2EFMA&s=09">
          <span>
            <i className="fa-brands fa-twitter"></i>
          </span>
        </a>
        <a href="https://t.me/OpeHabeeb">
          <span>
            <i className="fa-brands fa-discord"></i>
          </span>
        </a>
      </div>
    </div>
  );
}
