type Props = {
  children: React.ReactNode;
};

const GameCardWrapper = ({ children }: Props) => {
  return (
    <div className="max-w-xl mx-auto rounded-[5px] overflow-hidden shadow-lg bg-[#bfbfbf] dark:bg-dark-secondary dark:text-white hover:scale-105 transition-all cursor-pointer">
      {children}
    </div>
  );
};

export default GameCardWrapper;
