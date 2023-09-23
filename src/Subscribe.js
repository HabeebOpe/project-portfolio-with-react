import React from "react";
import "./index";

export default function Subscribe() {
  return (
    <div className="subscription">
      <form action="#" method="POST">
        <h1>Subscribe for New Project</h1>
        <p>Get Email notification when I release a new project.</p>
        <p>No spam you can unsubscribe anytime</p>
        <div className="input-field">
          <input
            type="text"
            name="Name"
            placeholder="Name"
            id="name"
            required
          />
          <input
            type="email"
            name="Email"
            placeholder="Email"
            id="email"
            required
          />
          <button type="submit" id="btn">
            Subscribe
          </button>
        </div>
        <p>You are subscribing to receive emails from Habeebullah Okunlola.</p>
      </form>
    </div>
  );
}
