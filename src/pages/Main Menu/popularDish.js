import MenuComponent from "./components";
import MenuTwo from "./assests/Ellipse 49.png";
function PopularDish() {
  return (
    <>
      <div className="w-full bg-lightWhite dark:bg-green ">
        <div className="max-w-[90%] m-auto pb-20 dark:text-lightWhite">
          <div className="">
            <div className="min-[375px]:w-full lg:w-[50%] xl:w-[40%] m-auto">
              <div className="text-center">
                <h2 className="min-[375px]:text-5xl sm:text-4xl 2xl:text-6xl min-[1920px]:text-7xl font-head">
                  Popular Dishes
                </h2>
                <p className="min-[375px]:text-lg lg:text-2xl 2xl:text-3xl min-[1920px]:text-3xl font-body py-8 min-[375px]:px-8 sm:px-16 lg:px-0">
                  Main menu dolor sit amet consectetur. Sed sodales tortor
                  curabitur maecenas massa ullamcorper lorem ac eget. Pulvinar
                  in imperd
                </p>
              </div>
            </div>
            <div>
              <div>
                <div className="grid min-[375px]:grid-row-2 min-[375px]:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center min-[375px]:gap-12 sm:gap-3 ">
                  <div className="min-[375px]:w-[90%] hover:w-full ease-in duration-300 mb-6">
                    <MenuComponent
                      content={
                        "Mohinga is the most popular and famous breakfast in Myanmar. It is served with the crispy fried bean fritters, boiled eggs, onions, the sliced tender core of banana-steam."
                      }
                      image={MenuTwo}
                      price={"MMK2000"}
                      extra={"With Egg"}
                    />
                  </div>
                  <div className="min-[375px]:w-[90%] hover:w-full ease-in duration-300 min-[375px]:row-span-2 min-[375px]:place-self-center">
                    <MenuComponent
                      content={
                        "Mohinga is the most popular and famous breakfast in Myanmar. It is served with the crispy fried bean fritters, boiled eggs, onions, the sliced tender core of banana-steam."
                      }
                      image={MenuTwo}
                      price={"MMK2000"}
                      extra={"With Egg"}
                    />
                  </div>
                  <div className="min-[375px]:w-[90%] hover:w-full ease-in duration-300 ">
                    <MenuComponent
                      content={
                        "Mohinga is the most popular and famous breakfast in Myanmar. It is served with the crispy fried bean fritters, boiled eggs, onions, the sliced tender core of banana-steam."
                      }
                      image={MenuTwo}
                      price={"MMK2000"}
                      extra={"With Egg"}
                    />
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
export default PopularDish;
