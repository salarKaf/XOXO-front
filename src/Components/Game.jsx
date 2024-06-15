import { useNavigate } from "react-router-dom";
import "./Board";
import { Board } from "./Board";
import { useState } from "react";

export const Game = ({ formData, setFormData }) => {
  const navigate = useNavigate();
  const { player1, player2 } = formData;
  const Win_situation = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
  ];
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  //   const [statusPlayers, setStatusPlayers] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameover] = useState(false);

  const handleBoxClick = (boxIndex) => {
    const updatedBoard = board.map((value, index) => {
      if (index === boxIndex) {
        return xPlaying === true ? "X" : "O";
      } else {
        return value;
      }
    });
    const winner = CheckWinner(updatedBoard);
    if (winner) {
      if (winner === "O") {
        setFormData({
          player2: { name: player2.name, status: "WIN" },
          player1: { name: player1.name, status: "LOSE" },
        });
        console.log("OWInnnnner");
      } else if (winner === "X") {
        setFormData({
          player1: { name: player1.name, status: "WIN" },
          player2: { name: player2.name, status: "LOSE" },
        });
        console.log("XWInnnnner");
        
      }
      navigate("/ScoreAndSend");
    }

    setBoard(updatedBoard);
    setXPlaying(!xPlaying);
  };
  const CheckWinner = (board) => {
    for (let i = 0; i < Win_situation.length; i++) {
      const [x, y, z] = Win_situation[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameover(true);
        return board[x];
      }
    }
  };

  const resetBoard = () => {
    setGameover(false);
    setBoard(Array(9).fill(null));
  };
  return (
    <div>
      <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} />;
    </div>
  );
};
