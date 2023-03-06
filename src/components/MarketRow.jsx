const MarketRow = ({ img, name, volume, transaction }) => {
  return (
    <div className="grid w-full items-center grid-cols-[1.5fr__1fr__1fr]">
      <div className="flex justify-start items-center gap-4">
        <div className="bg-gray-500 text-gray-600 rounded-[8px] w-[62px] aspect-square flex justify-center items-center">
          {img}
        </div>
        <p className="text-black text-xl">{name}</p>
      </div>
      <p className="text-xl text-green font-medium">{volume}</p>
      <p className="text-xl text-green font-medium">{transaction}</p>
    </div>
  );
};

export default MarketRow;
