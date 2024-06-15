import React, { useEffect, useState } from "react";
import axios from "axios";

const SendDataAPI = ({ player }) => {
  const { name, status } = player;

  console.log("Send Data");
  console.log(`${player.name}:${player.status}`);
  const [data, setData] = useState({
    name: player.name,
    status: player.status,
  });

  useEffect(() => {
    const sendDataToAPI = async () => {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/Players/AddScores",
          {
            name: data.name,
            status: data.status,
          }
        );

        console.log("Response:", response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    sendDataToAPI();
  }, [data]); // Adding data as a dependency to the useEffect hook
};

export default SendDataAPI;
