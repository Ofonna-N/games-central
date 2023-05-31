type Props = {
  imgSrc: string;
  title: string;
};

const GameCard: React.FC<Props> = ({ imgSrc, title }) => {
  return (
    <div className="max-w-md mx-auto rounded-[5px] overflow-hidden shadow-lg bg-gray-400 text-black dark:bg-dark-secondary dark:text-white">
      <img className="w-full" src={imgSrc} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <h3 className="font-bold text-[2rem] mb-2">{title}</h3>
      </div>
      {/* <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div> */}
    </div>
  );
};

export default GameCard;
