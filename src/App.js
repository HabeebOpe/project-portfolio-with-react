import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./main/Home";
import Item from "./submain/Item";
import Subscribe from "./main/Subscribe";
import Footer from "./main/Footer";
import About from "./main/About";
import Cssdesign from "./submain/Cssdesign";
import itemReact from "./submain/React";
import Vanilla from "./submain/Vanilla";
import Game from "./submain/Game";
import Projectcss from "./submain/Projectcss";
import Projectvanilla from "./submain/Projectvanilla";
import Projectgame from "./submain/Projectgame";
import Projectlanding from "./submain/Projectlanding";
import Projectreact from "./submain/Projectreact";
import Header from "./main/Header";


export default function App() {

  return (
    <div className="index-class">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cssdesign" element={<Projectcss />} />
          <Route path="/vanilla" element={<Projectvanilla />} />
          <Route path="/landing" element={<Projectlanding />} />
          <Route path="/game" element={<Projectgame />} />
          <Route path="/react" element={<Projectreact />} />
        </Routes>
      <Header />
      <Routes>
        <Route path="/" element={<Item />} />
        <Route path="/cssdesign" element={<Cssdesign />} />
        <Route path="/vanilla" element={<Vanilla />} />
        <Route path="/landing" element={<Cssdesign />} />
        <Route path="game" element={<Game />} />
        <Route path="react" element={<itemReact />} />
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
