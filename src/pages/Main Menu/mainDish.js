import React from "react";
import MenuOne from "./assests/Ellipse 48.png";

function Main() {
  return (
    <>
      <div className="w-full bg-lightWhite dark:bg-green">
        <div className="max-w-[90%] m-auto py-12 2xl:py-20">
          <div className="w-[90%] m-auto">
            <div className="text-center md:w-[80%] lg:w-[65%] xl:w-[50%] m-auto mb-12 sm:mb-0 dark:text-lightWhite">
              <h2 className="min-[375px]:text-5xl sm:text-4xl lg:text-5xl 2xl:text-7xl font-head">
                {" "}
                Main Menu
              </h2>
              <p className="min-[375px]:text-lg lg:text-2xl 2xl:text-3xl font-body min-[375px]:pb-8 lg:pb-16 min-[375px]:pt-6 lg:pt-12">
                Main menu dolor sit amet consectetur. Sed sodales tortor
                curabitur maecenas massa ullamcorper lorem ac eget. Pulvinar in
                imperd
              </p>
            </div>
          </div>
          <div className="min-[375px]:w-[90%] sm:w-full  min-[1440px]:w-[90%]  m-auto">
            <div>
              {/* Desktop */}
              <div className="min-[375px]:hidden sm:flex flex-row h-full relative items-center ">
                <div className="z-10 sm:w-[50%] md:w-[45%] 2xl:w-[45%] min-[1920px]:w-[40%] h-auto">
                  <img src={MenuOne} alt="menuOne" className="w-full h-full" />
                </div>
                <div className="sm:ms-52 md:ms-44 lg:ms-60 xl:ms-72 sm:ps-20 md:ps-36 lg:ps-48 xl:ps-56 2xl:ps-72 min-[1920px]:ps-96 sm:pe-4 md:pe-6 lg:pe-16 2xl:pe-12 min-[1920px]:p-16 my-auto text-center border-[1px] border-black dark:border-lightWhite/80 absolute sm:py-4 lg:py-6 xl:py-8 rounded-3xl bg-yellowOrange dark:bg-blackLight dark:text-lightWhite/80">
                  <h2 className="sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl min-[1920px]:text-6xl font-bold font-head">
                    Fried Noodle
                  </h2>
                  <p className="sm:text-xs md:text-base lg:text-lg xl:text-xl 2xl:text-2xl min-[1920px]:text-3xl sm:py-3 lg:py-6 xl:py-8 font-body">
                    Lorem ipsum dolor sit amet consectetur. Sed sodales tortor
                    curabitur maecenas massa ullamcorper lorem ac eget. Pulvinar
                    in imperdiet nulla scelerisque in sem adipiscing amet. Ac
                    semper eu integer et. Ut aliquam nunc at nunc semper eu
                    integer et. Ut aliquam nunc at nunc..
                  </p>
                  <div className="flex items-center justify-center gap-12">
                    <p className="sm:text-lg lg:text-3xl xl:text-3xl 2xl:text-4xl min-[1920px]:text-5xl capitalize font-semibold">
                      big set
                    </p>
                    <p className="sm:text-lg lg:text-3xl 2xl:text-4xl min-[1920px]:text-5xl font-semibold">
                      1000MMK
                    </p>
                  </div>
                </div>
              </div>
              {/* Mobile */}
              <div className="min-[375px]:flex sm:hidden flex-col h-full relative items-center mt-8">
                <div className="z-10 w-1/2 -top-16 absolute ">
                  <img src={MenuOne} alt="menuOne" />
                </div>
                <div className="pt-24 px-4 pb-6 my-auto text-center border-[1px] border-black rounded-3xl dark:border-lightWhite/80 bg-yellowOrange ">
                  <h2 className="text-4xl font-head">Fried Noodle</h2>
                  <p className="text-sm py-4 font-body">
                    Lorem ipsum dolor sit amet consectetur. Sed sodales tortor
                    curabitur maecenas massa ullamcorper lorem ac eget. Pulvinar
                    in imperdiet nulla scelerisque in sem adipiscing amet. Ac
                    semper eu integer et. Ut aliquam nunc at nunc semper eu
                    integer et. Ut aliquam nunc at nunc..
                  </p>
                  <div className="flex items-center justify-center gap-12">
                    <p className="text-lg capitalize font-bold">big set</p>
                    <p className="text-lg font-bold">1000MMK</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Main;
