import { useState } from "react";
import { useTimer } from "./useTimer";
import { useRandomCord } from "./useRandomCord";
import type { BoardCord, History } from "./types";

export const boardCordToChessCord = (cord: BoardCord) => {
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

  return `${letters[cord.col]}${8 - cord.row}`;
};

const board = new Array(8 * 8)
  .fill(0)
  .map<BoardCord>((v, i) => ({ col: i % 8, row: Math.floor(i / 8) }));

export const useGame = () => {
  const timer = useTimer();
  const { actualCord, newCord } = useRandomCord();
  const sanitizedActualCord = boardCordToChessCord(actualCord);
  const [history, setHistory] = useState<History[]>([]);
  const points = history.reduce((prev, curr) => prev + Number(curr.success), 0);
  const isPlaying = timer.isRunning;

  const start = () => {
    newCord();
    setHistory([]);
    timer.start();
  };

  const tryCord = (intent: BoardCord) => {
    if (!isPlaying) return;
    const success =
      intent.row === actualCord.row && intent.col === actualCord.col;
    const newIntent = {
      cord: actualCord,
      success,
    };
    setHistory([...history, newIntent]);
    newCord();
  };

  return {
    isPlaying,
    start,
    time: timer.seconds,
    tryCord,
    points,
    history,
    actualCord,
    sanitizedActualCord,
    board,
  };
};
