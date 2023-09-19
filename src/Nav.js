import React from "react";
import "./index.css";

export default function Nav() {
  return (
    <div class="nav-bar">
      <div class="logo">
        <h1>Zodiac</h1>
      </div>
      <div class="nav-social">
        <a href="https://github.com/HabeebOpe">
          <span>
            <i class="fa-brands fa-github"></i>
          </span>
        </a>
        <a href="https://twitter.com/habeebullaope?t=9baxs9N4-rDfri5OI2EFMA&s=09">
          <span>
            <i class="fa-brands fa-twitter"></i>
          </span>
        </a>
        <a href="https://t.me/OpeHabeeb">
          <span>
            <i class="fa-brands fa-telegram"></i>
          </span>
        </a>
      </div>
    </div>
  );
}
