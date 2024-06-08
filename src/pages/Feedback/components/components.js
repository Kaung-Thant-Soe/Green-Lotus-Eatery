import React from "react";
function Customer({
  customerImg,
  customerFeedback,
  customerName,
  customerAddress,
}) {
  return (
    <>
      <div className="w-full  h-full py-20 min-[375px]:pb-0 sm:pb-6 xl:pt-24 xl:pb-0">
        <div className="w-full m-auto relative h-full z-0 px-1 xl:px-3 ">
          <div className="w-full  absolute min-[375px]:-top-16 sm:-top-14 xl:-top-16">
            <div className="min-[375px]:w-[35%] sm:w-[35%] md:w-[40%]  xl:w-[35%] min-[1920px]:w-[25%] m-auto">
              <img
                src={customerImg}
                alt="customer image"
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="border-[1px] border-black rounded-3xl px-2 w-full text-center min-[375px]:pt-16 sm:pt-12   lg:pt-20 xl:pt-24 2xl:pt-28 lg:pb-8 pb-4 dark:bg-blackLight dark:border-lightWhite/80 dark:text-lightWhite/80">
            <div>
              <div>
                <p className="quote lg:text-lg xl:text-xl 2xl:text-2xl leading-7 lg:px-2 2xl:px-2">
                  {customerFeedback}
                </p>
              </div>
            </div>
            <hr className="w-[90%] m-auto my-4 dark:border-lightWhite/50" />
            <div>
              <div>
                <p className="font-head text-2xl 2xl:text-3xl capitalize">
                  {customerName}
                </p>
                <p className="text-xl 2xl:text-2xl xl:mt-2">
                  {customerAddress}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Customer;
