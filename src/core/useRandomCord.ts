import { useState } from "react";
import { type BoardCord } from "./types";

const getRandomBoardCord = (): BoardCord => {
  return {
    col: Math.floor(Math.random() * 8),
    row: Math.floor(Math.random() * 8),
  };
};

export const useRandomCord = () => {
  const [actualCord, setActualCord] = useState(getRandomBoardCord());

  const newCord = () => setActualCord(getRandomBoardCord());

  return {
    actualCord,
    newCord,
  };
};
