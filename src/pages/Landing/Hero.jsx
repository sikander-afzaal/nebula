const Hero = () => {
  return (
    <div className="wrapper pb-[60px] pt-[50px] lg:py-[120px]">
      <div className="contain lg:flex-row gap-8 lg:gap-0 flex-col justify-center items-center ">
        <div className="flex justify-start items-center text-center lg:text-left lg:items-start flex-col sm:gap-8 gap-5 lg:max-w-[650px]">
          <h2 className="text-[25px] sm:text-[36px] xl:text-[45px] text-black font-semibold leading-[1.3]">
            The <span className="purple-text-gr">Nebula</span> marketplace is
            here for you!
          </h2>
          <p className="text-gray-600 text-base sm:text-xl font-medium leading-[1]">
            Professionalism, Speed, Quality.
          </p>
          <div className="flex justify-start sm:flex-row flex-col w-full sm:w-auto items-center gap-5">
            <button className="cta-btn sm:w-auto w-full">Get Started</button>
            <button className="cta-btn-white sm:w-auto w-full">Explore</button>
          </div>
        </div>
        <div className="relative max-w-[650px] w-full">
          <img
            src="/hero.png"
            className="w-full max-w-[600px] object-contain"
            alt=""
          />
          <div className="w-full max-w-[400px]  sm:w-[400px] flex justify-start items-start bg-gray-400 bg-opacity-20 flex-col gap-10 absolute right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-0 top-1/2  backdrop-blur drop-shadow-heroBox p-5 rounded-[13px]">
            <div className="flex justify-between items-center w-full">
              <div className="flex justify-start items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-8 h-8"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="flex justify-start items-start flex-col gap-1">
                  <p className="leading-[1] text-white text-base font-medium">
                    Evolot
                  </p>
                  <p className="leading-[1] text-[#cccccc] text-xs font-normal">
                    Verified User
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-end flex-col gap-1">
                <p className="purple-text-gr text-base font-medium leading-[1]">
                  Centurion
                </p>
                <p className="leading-[1] text-black text-xs font-normal">
                  Rank
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-[auto__auto__auto] self-center sm:w-auto w-full gap-6">
              <div className="flex justify-start flex-col items-center gap-2">
                <p className="text-pink leading-[1] text-base font-medium">
                  17
                </p>
                <p className="text-white leading-[1] text-xs font-medium">
                  Messages
                </p>
              </div>
              <div className="flex justify-start flex-col items-center gap-2">
                <p className="text-pink leading-[1] text-base font-medium">
                  302
                </p>
                <p className="text-white leading-[1] text-xs font-medium">
                  Reputatuon
                </p>
              </div>
              <button className="bg-black text-white text-xs font-medium rounded-[5px] self-end h-[30px] px-5 hover:bg-transparent hover:text-black border-2 border-solid border-black transition-all duration-300 col-span-2 sm:col-auto">
                View Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
