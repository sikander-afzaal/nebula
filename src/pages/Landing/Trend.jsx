import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import MarketRow from "../../components/MarketRow";

const Trend = () => {
  return (
    <div className="wrapper pb-10 mt-10 lg:mt-0">
      <div className="contain flex-col justify-start items-start">
        {/* //headings ----------- */}
        <div className="flex justify-between items-center w-full">
          <h2 className="sm:p-0 pl-5 text-black text-[26px] sm:text-[33px] font-medium leading-[1] w-full text-left">
            Trending Markets
          </h2>
          <h2 className="text-black xl:block hidden text-[33px] font-medium leading-[1] w-full text-left">
            Explore
          </h2>
        </div>
        {/* //sub headings ------------------------------ */}
        <div className=" justify-between xl:flex hidden px-5 items-center w-full mt-8">
          <div className="grid  w-full grid-cols-[1.5fr__1fr__1fr]">
            <p className="text-gray-600 text-base font-medium">Collection</p>
            <p className="text-gray-600 text-base font-medium">24HR Volume</p>
            <p className="text-gray-600 text-base font-medium">
              24HR Transactions
            </p>
          </div>
          <p className=" text-gray-600 text-base font-medium w-full text-right">
            View More
          </p>
        </div>
        {/* //table --------------------- */}
        <div className="flex xl:flex-row xl:gap-0 gap-10 flex-col justify-between items-start w-full py-5 xl:pl-4 px-4 border border-solid border-[#f1f1f1] rounded-[30px] mt-4">
          <div className="w-full overflow-x-auto  xl:w-1/2 flex justify-start items-start flex-col gap-8">
            <div className="xl:hidden grid min-w-[640px] sm:min-w-0  w-full grid-cols-[1.5fr__1fr__1fr]">
              <p className="text-gray-600 text-base font-medium">Collection</p>
              <p className="text-gray-600 text-base font-medium">24HR Volume</p>
              <p className="text-gray-600 text-base font-medium">
                24HR Transactions
              </p>
            </div>
            <MarketRow
              img={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                    clipRule="evenodd"
                  />
                </svg>
              }
              name="Product Name #1"
              transaction="+17.49"
              volume="+17.49"
            />
            <MarketRow
              img={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                    clipRule="evenodd"
                  />
                </svg>
              }
              name="Product Name #1"
              transaction="+17.49"
              volume="+17.49"
            />
            <MarketRow
              img={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                    clipRule="evenodd"
                  />
                </svg>
              }
              name="Product Name #1"
              transaction="+17.49"
              volume="+17.49"
            />
          </div>

          <div className="flex justify-start items-start flex-col gap-3 w-full xl:w-1/2">
            <h2 className="text-[26px] sm:text-[33px] xl:hidden block text-black pl-5 font-medium">
              Explore
            </h2>
            <p className="xl:hidden block text-gray-600 text-base font-medium w-full pr-5 text-right">
              View More
            </p>
            <div className="w-full">
              <Splide
                options={{
                  width: "100%",
                  autoWidth: "true",
                  arrows: true,
                  pagination: false,
                  gap: "1rem",
                  type: "loop",
                  perMove: 1,
                  drag: true,
                }}
              >
                <SplideSlide>
                  <div className="w-[200px] h-[160px] rounded-[20px] overflow-hidden">
                    <img
                      src="/test-slider.png"
                      className="w-full  object-contain h-full"
                      alt=""
                    />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="w-[200px] h-[160px] rounded-[20px] overflow-hidden">
                    <img
                      src="/test-slider.png"
                      className="w-full  object-contain h-full"
                      alt=""
                    />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="w-[200px] h-[160px] rounded-[20px] overflow-hidden">
                    <img
                      src="/test-slider.png"
                      className="w-full  object-contain h-full"
                      alt=""
                    />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="w-[200px] h-[160px] rounded-[20px] overflow-hidden">
                    <img
                      src="/test-slider.png"
                      className="w-full  object-contain h-full"
                      alt=""
                    />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="w-[200px] h-[160px] rounded-[20px] overflow-hidden">
                    <img
                      src="/test-slider.png"
                      className="w-full  object-contain h-full"
                      alt=""
                    />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="w-[200px] h-[160px] rounded-[20px] overflow-hidden">
                    <img
                      src="/test-slider.png"
                      className="w-full  object-contain h-full"
                      alt=""
                    />
                  </div>
                </SplideSlide>
              </Splide>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trend;
