import { Game } from "@/core/types";
import type { History as THistory } from "@/core/types";
import { boardCordToChessCord } from "@/core/useGame";

const History = ({ history }: { history: THistory[] }) => {
  return (
    <div className="flex flex-wrap gap-4 px-6">
      {history.map((h, i) => (
        <HistoryCell key={i} cell={h} />
      ))}
    </div>
  );
};

const HistoryCell = ({ cell: { cord, success } }: { cell: THistory }) => {
  const bg = success ? "bg-[#85a94e]" : "bg-[#c93430]";
  const text = success ? "text-[#85a94e]" : "text-[#c93430]";
  return (
    <div className="flex flex-col gap-2">
      <div className={`h-4 w-4 rounded-sm ${bg}`} />
      <p className={`${text}`}>{boardCordToChessCord(cord)}</p>
    </div>
  );
};

export const Clock = ({ position }: { position: number }) => {
  const rotates: Record<number, string> = {
    0: "rotate-[270deg]",
    1: "rotate-[180deg]",
    2: "rotate-[90deg]",
  };
  return (
    <div
      className={`relative h-7 w-7 ${rotates[position]} rounded-full border-2 border-[#939291] before:absolute before:left-[50%] before:top-[calc(50%-1.5px)] before:h-[3px] before:w-[7px] before:bg-[#939291]`}
    />
  );
};

interface PanelProps {
  game: Game;
}

export function Panel({ game }: PanelProps) {
  if (!game.isPlaying) {
    return (
      <div className="flex flex-1 flex-col justify-between rounded-md bg-[#262522] font-bold text-white">
        <div className="flex flex-col items-center gap-12 bg-vision-curve pt-6">
          <div className="flex flex-col gap-6 text-center text-3xl ">
            <h1 className="">Vision</h1>
            <div className="h-24 w-24 bg-vision-logo bg-contain bg-no-repeat"></div>
          </div>
          <History history={game.history} />
        </div>

        <div className="bg-[#21201e] px-6 py-4">
          <button
            onClick={game.start}
            className="flex w-full justify-center rounded-lg bg-[#81b64c] py-4 text-2xl hover:bg-[#a3d160] "
          >
            Start
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col gap-6 overflow-hidden rounded-md bg-[#262522] font-bold text-white">
      <div className="flex h-24 flex-row items-center  justify-center gap-6 bg-[#f1f1f1]  text-black">
        <div className="h-8 w-8 border border-[#dad8d6] bg-white"></div>
        <p className="text-lg font-semibold">{game.sanitizedActualCord}</p>
      </div>
      <div className="flex items-center justify-between px-6 ">
        <p className="text-3xl">{game.points}</p>
        <div className="flex items-center gap-2">
          <Clock position={game.time % 4} />
          <p className="text-2xl w-[2ch]">{game.time}</p>
        </div>
      </div>
      <History history={game.history} />
    </div>
  );
}
