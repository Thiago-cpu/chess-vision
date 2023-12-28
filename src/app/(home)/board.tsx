import type { BoardCord, Game } from "@/core/types";

const getBg = (cord: BoardCord) => {
  const isRowEven = cord.row % 2 === 0;
  const isColEven = cord.col % 2 === 0;
  const shouldFill = (isColEven && !isRowEven) || (isRowEven && !isColEven);

  return shouldFill ? "bg-[#edd6b0]" : "bg-[#b88762]";
};

export function Board({ game }: { game: Game }) {
  const cursor = game.isPlaying ? "cursor-pointer" : "cursor-default";
  return (
    <div className="relative grid grid-cols-8 self-center overflow-hidden rounded-md">
      {game.board.map((cord, i) => (
        <div
          key={i}
          className={`h-[calc(90vw/8)] w-[calc(90vw/8)] lg:h-[calc(40vw/8)] lg:w-[calc(40vw/8)] ${cursor} ${getBg(
            cord
          )}`}
          onClick={() => game.tryCord(cord)}
        />
      ))}
      {game.isPlaying && (
        <div
          key={game.sanitizedActualCord}
          className="animate-disappear pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform select-none text-9xl text-white [text-shadow:_2px_2px_2px_rgb(0_0_0_/_40%)]"
        >
          {game.sanitizedActualCord.toLocaleUpperCase()}
        </div>
      )}
    </div>
  );
}
