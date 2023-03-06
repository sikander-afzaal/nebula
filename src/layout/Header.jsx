import { useState } from "react";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  return (
    <header className="wrapper mt-[25px]">
      {headerToggle && (
        <div
          onClick={() => setHeaderToggle(false)}
          className="fixed lg:hidden block top-0 left-0 w-full h-full bg-black opacity-60 z-[88] cursor-pointer"
        ></div>
      )}
      <div className="contain justify-between items-center">
        <nav className="flex justify-start items-center gap-6">
          <img src="/logo.png" className="w-[180px] object-contain" alt="" />
          <div className="hidden sm:flex justify-start items-center w-[220px] xl:w-[400px] bg-gray-400 h-[45px] rounded-[13px] overflow-hidden gap-3 px-2">
            <input
              type="text"
              placeholder="Search Nebula..."
              className="w-full pl-2 bg-transparent outline-none border-none h-full"
            />
            <div className="bg-gray-500 w-[37px] text-gray-600 aspect-square flex justify-center items-center rounded-[8px] cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </div>
          <div
            className={`${
              headerToggle ? "right-0" : "-right-[600px]"
            } flex justify-start items-center sm:items-start lg:items-center gap-6 lg:flex-row flex-col lg:static w-full max-w-[450px] h-full lg:w-auto lg:max-w-none lg:h-auto fixed top-0 pt-[6rem] px-[2rem] pb-[2rem] lg:p-0 transition-all duration-1000 z-[89] bg-white lg:bg-transparent`}
          >
            <svg
              onClick={() => setHeaderToggle(false)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#9a9a9d"
              className="w-6 h-6 lg:hidden block absolute top-5 left-5 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <a
              onClick={() => setHeaderToggle(false)}
              href="#"
              className="text-gray-600 text-base font-medium"
            >
              Home
            </a>
            <a
              onClick={() => setHeaderToggle(false)}
              href="#"
              className="text-gray-600 text-base font-medium"
            >
              Explore
            </a>
            <a
              onClick={() => setHeaderToggle(false)}
              href="#"
              className="text-gray-600 text-base font-medium"
            >
              Trending
            </a>
            <div className="lg:hidden flex flex-col justify-center items-center sm:items-start gap-6">
              <a href="#" className="purple-text-gr font-medium text-base">
                Create
              </a>
              <button className="cta-btn">Login</button>
            </div>
          </div>
        </nav>
        <div className="hidden lg:flex justify-center items-center gap-6">
          <a href="#" className="purple-text-gr font-medium text-base">
            Create
          </a>
          <button className="cta-btn">Login</button>
        </div>

        <svg
          onClick={() => setHeaderToggle(true)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#9a9a9d"
          className="w-6 h-6 lg:hidden block cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
