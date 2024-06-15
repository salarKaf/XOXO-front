import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Start = ({ setFormData, formData }) => {
  const { player1, player2 } = formData;
  const navigate = useNavigate();

  const handleChange = (event, player) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [player]: {
        ...prevFormData[player],
        [name]: value,
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (player1.name.trim() === "" || player2.name.trim() === "") {
      alert("Please fill in all the fields.");
    } else {
      navigate("/game");
      console.log(player1.name, player2.name);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.player1.name}
          onChange={(event) => handleChange(event, "player1")}
          placeholder="Enter Player one"
          required
        />
        <input
          type="text"
          name="name"
          value={formData.player2.name}
          onChange={(event) => handleChange(event, "player2")}
          placeholder="Enter Player two"
          required
        />
        <button type="submit">START</button>
      </form>
    </div>
  );
};
