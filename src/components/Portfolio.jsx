import React from "react";
import Rocket from "../assets/rocket.svg";
import radio from "../assets/radio.svg";
import vector from "../assets/Vector.svg";

const Portfolio = () => {
  return (
    <div
      className="portFolio bg-black  py-7 md:py-0 md:mx-2 lg:mx-0 md:mt-7"
      id="portfolio"
    >
      <div className="max-w-6xl md:mx-auto">
        <h2 className="md:mb-4  md:text-4xl text-2xl tracking-tight font-extrabold  bg-gradient-to-r from-[#97ebbe] via-[#df97df] to-[#f1fcaf] inline-block text-transparent bg-clip-text text-start px-4 md:px-2 lg:px-0 pt-2">
          OUR PRODUCT PORTFOLIO
        </h2>
      </div>
      <p className="text-sm sm:text-md text-white  opacity-80 mx-auto max-w-6xl py-2 mb-5 px-4 md:pr-20 md:pl-2 font-poppins relative z-10">
        At Crown World, we are developing a diverse range of products and an
        ultimate incubation hub across Multichain platforms. Our goal is to
        provide a comprehensive ecosystem that nurtures and launches innovative
        ideas, while also providing opportunities for earning. We are dedicated
        to building an ecosystem for the entire Web3 community, supported by our
        native token $CROWN
      </p>
      <div class="max-w-6xl md:mx-auto mx-2 ">
        <div class="grid md:grid-cols-3 grid-cols-1">
          <div class="mx-2 h-[300px] col-span-1 rounded-md bg-gradient-to-r from-white via-[#F9DCFF] to-[#F9DCFF] shadow-lg md:row-span-3 md:h-[500px]">
            <div className="p-5">
              <p
                clasName="font-extrabold"
                style={{ fontWeight: "900", fontSize: "18px" }}
              >
                LaunchPad
              </p>
              <p className="text-slate-500 py-2 text-sm sm:text-md">
                Our platform is a cutting-edge solution that enables direct
                project launch on multiple blockchain networks. We provide
                greater access and control to our users. Access the best IDO
                projects with a user-friendly experience.
              </p>
              <a
                href="https://launchpad.crownworld.io"
                className="font-bold text-sm text-slate-500 hover:text-blue-500"
              >
                click here &rarr;
              </a>
              <img
                src={Rocket}
                alt="rocket"
                className="cursor-pointer  w-[180px] md:w-full relative -top-14 left-36 md:top-0 md:left-0"
              />
            </div>
          </div>
          <div class="col-span-1 m-2 h-[300px] rounded-md bg-gradient-to-r from-[#FFF2BD] to-[#FCF1E9] shadow-lg md:col-span-2 md:mx-0 md:mb-2 md:mt-0 md:h-[246px]">
            <div className="p-5">
              <p
                clasName="font-extrabold"
                style={{ fontWeight: "900", fontSize: "18px" }}
              >
                NFT
              </p>
              <p className="text-slate-500 py-2 md:pr-20 text-sm sm:text-md">
                A Bounty platform for Rookies to explore the Opportunities and
                incentivize their skills. Crownhood is the platform for people
                to learn and earn while they take part in the bounties posted by
                projects.
              </p>
              <a
                href="https://nft.crownworld.io"
                className="font-bold text-slate-500 text-sm hover:text-blue-500"
              >
                Open NFT Marketplace &rarr;
              </a>
              <img
                src={vector}
                alt="rocket"
                className="cursor-pointer relative  md:left-24 w-[200px] md:w-[190px] lg:w-[245px]  md:-top-6 lg:-top-4 left-24"
              />
            </div>
          </div>
          <div class="col-span-1 md:m-2 mx-2 h-[300px] rounded-md bg-gradient-to-r from-[#EFF0FD] to-[#F9F2FA] shadow-lg md:col-span-2 md:mx-0 md:mb-2 md:mt-0 md:h-[246px]">
            <div className="p-5">
              <p
                clasName="text-blue"
                style={{ fontWeight: "900", fontSize: "18px" }}
              >
                Earn/CROWNHOOD
              </p>
              <div className="flex md:flex-row flex-col justify-between">
                <p className="text-slate-500 py-2 md:pr-15 text-sm sm:text-md">
                  A Bounty platform for Rookies to explore the Opportunities and
                  incentivize their skills. Crownhood is the platform for people
                  to learn and earn while they take part in the bounties posted
                  by projects.
                  <a
                    href="https://crownworld.crownworld.io"
                    className="block py-2 text-sm font-bold hover:text-blue-500"
                  >
                    Enter CrownHOOD &rarr;
                  </a>
                </p>
                <img
                  src={radio}
                  alt="radio"
                  className="cursor-pointer md:w-full w-[200px] md:h-[200px] h-[100px] relative -right-20 -top-5 md:right-0 md:top-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
