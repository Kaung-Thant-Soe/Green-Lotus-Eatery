
import Star from "./assests/star-icon.png";
import darkStar from './assests/dark-star.png'
function MenuComponent({content,image,price,extra}) {
  return (
    <>
      <div className="round dark:bg-blackLight dark:text-lightWhite/80  border-black border-[1px] bg-yellowOrange">
        <div className="min-[375px]:px-4 sm:px-4 min-[375px]:py-8 sm:py-8 lg:py-12">
          <div className="sm:w-[90%] m-auto rounded-full ">
            <img src={image} alt="menu" className="w-full" />
          </div>
          <div className="pt-4">
            <h2 className="text-center font-head min-[375px]:text-4xl sm:text-3xl min-[1920px]:text-6xl">Mohinga</h2>
            <div className="flex justify-center min-[375px]:gap-8 sm:gap-6 py-4 min-[1920px]:py-6">
              <div className="min-[1920px]:w-8 h-auto">
                 <img src={darkStar} alt="starIcon" className="w-full dark:block hidden"/>
                <img src={Star} alt="starIcon" className="w-full block dark:hidden"/>
              </div>
              <div className="min-[1920px]:w-8 h-auto">
                <img src={darkStar} alt="starIcon" className="w-full dark:block hidden"/>
                <img src={Star} alt="starIcon" className="w-full block dark:hidden"/>
              </div>
              <div className="min-[1920px]:w-8 h-auto">
                <img src={darkStar} alt="starIcon" className="w-full dark:block hidden"/>
                <img src={Star} alt="starIcon" className="w-full block dark:hidden"/>
              </div>
            </div>
          </div>
          <div className="sm:w-full 2xl:w-[90%] m-auto min-[375px]:pb-12 sm:pb-8 md:pb-12  text-center">
            <p className="min-[375px]:text-lg sm:text-base md:text-lg min-[1920px]:text-3xl font-body capitalize sm:leading-9">
            {content}
            </p>
          </div>
          <div className="flex justify-end min-[375px]:gap-8 sm:gap-4 md:gap-6 lg:gap-3 xl:gap-6 2xl:w-[90%] min-[1920px]:w-full">
            <p className="font-body min-[375px]:text-xl sm:text-xl xl:text-2xl min-[1920px]:text-4xl font-semibold">{extra}</p>
            <p className="font-body min-[375px]:text-xl sm:text-xl xl:text-2xl min-[1920px]:text-4xl font-semibold">{price}</p>
          </div>
        </div>
      </div>
    </>
  );
}


export default MenuComponent;
