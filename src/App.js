import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Section from "./Section";
import Nav from "./Nav";
import Item from "./Item";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
import About from "./About";
import Cssdesign from "./Cssdesign";
import Projectcss from "./Projectcss";
import Projectvanilla from "./Projectvanilla";
import Projectgame from "./Projectgame";
import Projectlanding from "./Projectlanding";
import Projectreact from "./Projectreact";
import Header from "./Header";

export default function App() {
  return (
    <div className="index-class">
      <div className="home">
        <Nav />
        <Routes>
          <Route path="/" element={<Section />} />
          <Route path="/cssdesign" element={<Projectcss />} />
          <Route path="/vanilla" element={<Projectvanilla />} />
          <Route path="/landing" element={<Projectlanding />} />
          <Route path="/game" element={<Projectgame />} />
          <Route path="/react" element={<Projectreact />} />
        </Routes>
      </div>
      <Header />
      <Routes>
        <Route path="/" element={<Item />} />
        <Route path="/cssdesign" element={<Cssdesign />} />
      </Routes>
      <div className="design-pattern">
        <About />
        <Subscribe />
        <div className="design-container">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
