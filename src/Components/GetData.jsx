import React, { useEffect, useState } from "react";
import "./ShowData.css";
const GetData = () => {
  console.log("getInData");
  const [players, setPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchPlayers = async () => {
      setIsLoading(true);
      const response = await fetch("http://127.0.0.1:8000/Players/ReadScores");
      const players = await response.json();
      setPlayers(players);
      setIsLoading(false);
    };
    fetchPlayers();
  }, []);

  if (isLoading) {
    return <div className="titleScore">Loading...</div>;
  }

  return (
    <div>
      <h1 className="titleScore">SCORE TABLE(TOP 10)</h1>
      <ul className="show">
        {players.map((player, index) => {
          return (
            <li className="rowData" key={index}>
              <h1>{index + 1}</h1>
              <h1>{player.name}</h1>
              <h1>{player.score}</h1>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GetData;
