import React, { useEffect, useState } from "react";

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
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Data Players:</h1>
      <ul>
        {players.map((player, index) => {
          return (
            <li key={index}>
              {player.name},{player.score}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GetData;
