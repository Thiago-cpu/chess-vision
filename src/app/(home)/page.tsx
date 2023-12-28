"use client";
import { BoardCord } from "@/core/types";
import { useGame } from "@/core/useGame";
import { Board } from "./board";
import { Panel } from "./panel";

export default function Home() {
  const game = useGame();

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#302e2b]">
      <div className="flex flex-1 flex-col flex-wrap gap-6 md:flex-row md:px-16">
        <Board game={game} />
        <Panel game={game} />
      </div>
    </main>
  );
}
