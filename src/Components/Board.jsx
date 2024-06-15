/* eslint-disable react/prop-types */
import { Box } from "./Box";
// import React from "react";
import "./board.css";

export const Board = ({ board, onClick }) => {
  return (
    <div className="board">
      {board.map((value, index) => {
        return (
          <Box
            value={value}
            onClick={() => value === null && onClick(index)}
            key={`_${index}`}
          ></Box>
        );
      })}
    </div>
  );
};
