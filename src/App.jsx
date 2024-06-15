// import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Style.css";

import { Home } from "./Components/Home";
import { Start } from "./Components/Start";
import { Score } from "./Components/Score";
import { Game } from "./Components/Game";
import { useState } from "react";
import GetData from "./Components/GetData";

function App() {
  const [formData, setFormData] = useState({
    player1: {
      name: "",
      status: "LOSE",
    },
    player2: {
      name: "",
      status: "LOSE",
    },
  });
  return (
    <div className="Style">
      <Router>
        <h1 className="title">Tic-Tac-Toe</h1>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/start"
            element={<Start formData={formData} setFormData={setFormData} />}
          ></Route>
          <Route
            path="/game"
            element={<Game formData={formData} setFormData={setFormData} />}
          ></Route>
          <Route path="/score" element={<GetData />}></Route>
          <Route
            path="/ScoreAndSend"
            element={<Score formData={formData} />}
          ></Route>
        </Routes>
  
      </Router>
    </div>
  );
}

export default App;
