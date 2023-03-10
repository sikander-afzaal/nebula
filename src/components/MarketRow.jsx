const MarketRow = ({ img, name, volume, transaction }) => {
  return (
    <div className="grid sm:min-w-0 min-w-[640px] w-full items-center grid-cols-[1.5fr__1fr__1fr]">
      <div className="flex justify-start items-center gap-4">
        <div className="bg-gray-500 text-gray-600 rounded-[8px] w-[62px] aspect-square flex justify-center items-center">
          {img}
        </div>
        <p className="text-black text-base 2xl:text-xl">{name}</p>
      </div>
      <p className="text-base 2xl:text-xl text-green font-medium">{volume}</p>
      <p className="text-base 2xl:text-xl text-green font-medium">
        {transaction}
      </p>
    </div>
  );
};

export default MarketRow;
