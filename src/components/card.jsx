import React from "react";
import Potential from "../assets/Potential.png";
import element from "../assets/element.png";
import CD from "../assets/CD.png";

const Card = () => {
  return (
    <section className="">
      <div className=" text-white">
        <div className=" items-center rounded-[12px]  max-w-7xl mx-auto relative">
          <div className="relative">
            <img
              src={CD}
              alt="cd"
              className="hidden md:block cursor-pointer max-w-3xl mx-auto translate-y-16"
            />
          </div>

          <div className="grid grid-cols-12 grid-rows-8  place-content-center place-items-center tracking-tight gap-8">
            <div className="col-start-2 col-end-12 row-start-1">
              <img src={Potential} alt="elements" className="hidden md:block" />
            </div>
            <div className="md:col-start-5 md:col-end-12 md:p-10 sm:p-4 p-3 col-start-1 col-end-12 row-start-1">
              <h1 className="font-extrabold lg:text-4xl  text-2xl sm:mt-10 lg:mt-0 mb-4 leading-[30px] md:leading-8  bg-gradient-to-r from-[#97ebbe] via-[#df97df] to-[#f1fcaf] inline-block text-transparent bg-clip-text">
                Maximizing your potential with our comprehensive ecosystem
              </h1>
              <span className="text-sm sm:text-md font-poppins">
                Nurture and launch your ideas on the ultimate multichain
                incubation hub! - Experience the ultimate incubation hub across
                multichain platforms, providing a comprehensive ecosystem for
                nurturing and launching your innovative ideas.
                <br />
              </span>
              <div className="mt-5 font-poppins">
                <a
                  href="https://launch.crownworld.io"
                  className="py-2 col-start-2 col-end-6 border-2  hover:bg-white text-white hover:text-black rounded-3xl px-6 placeholder-opacity-30"
                >
                  Open LaunchPad
                </a>
              </div>
            </div>

            <img
              src={element}
              alt="box"
              className="cursor-pointer hidden md:block col-start-1 col-end-6 row-start-1 row-end-1 h-xl rounded-b-[20px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
