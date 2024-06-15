// import { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <div className="buttons">
        <Link to="/start">
          <button className="btnHome">START</button>
        </Link>
        <Link to="/score">
          <button>SCORES</button>
        </Link>
      </div>
      <h1 className="textBottomHome">Proved By Your Name 2012</h1>
    </div>
  );
};
