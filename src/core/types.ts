import { type useGame } from "./useGame";

export interface BoardCord {
  col: number;
  row: number;
}

export interface History {
  cord: BoardCord;
  success: boolean;
}

export type Game = ReturnType<typeof useGame>;
