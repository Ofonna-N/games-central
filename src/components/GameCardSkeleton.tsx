import GameCardWrapper from "./GameCardWrapper";

const GameCardSkeleton = () => {
  return (
    <GameCardWrapper>
      <div className="animate-pulse">
        <div className="bg-slate-600 w-[60rem] h-[25rem]"></div>
        <div className="px-6 py-4">
          <div className="bg-slate-600 font-bold text-[2.5rem] mb-2 py-[1rem] w-[70%] rounded-md"></div>
          <div className="flex justify-between items-center">
            <div className="bg-slate-600 w-[10rem] py-[1rem] rounded-md"></div>
            <div className="bg-slate-600 w-[2.5rem] aspect-square"></div>
          </div>
        </div>
      </div>
    </GameCardWrapper>
  );
};

export default GameCardSkeleton;
