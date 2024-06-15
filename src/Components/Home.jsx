// import { useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="buttons">
      <Link to="/start">
        <button>START</button>
      </Link>
      <Link to="/score">
        <button>SCORES</button>
      </Link>
    </div>
  );
};
