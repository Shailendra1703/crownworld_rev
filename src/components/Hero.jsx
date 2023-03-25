import React from "react";
import demon from "../assets/demon.png";
import posideon from "../assets/hero_video.mp4";

const Hero = () => {
  return (
    <section className="" id="hero">
      <div className="md:hidden relative mt-24">
        <video className="h-[250px] absolute -top-12 right-2 z-0" autoPlay muted="muted" loop playsinline>
          <source src={posideon} type="video/mp4"></source>
        </video>
      </div>
      <div className="grid max-w-7xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:pt-12 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7 z-10">
          <h1 className="max-w-3xl py-8 md:text-[110px] sm:text-[80px] text-[45px] z-10 tracking-tight font-extrabold leading-none bg-gradient-to-r from-[#97ebbe] via-[#df97df] to-[#f1fcaf] inline-block text-transparent bg-clip-text">
            A WORLD <br />
            WITH
            <br /> INNOVATION
          </h1>

          <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 text-sm lg:text-[15px] pr-8 font-poppins">
            A World with a Bounty Platform, Multi-chain Launchpad, and an NFT
            Marketplace. Experience the ultimate incubation hub across
            multichain platforms, providing a comprehensive ecosystem for
            nurturing and launching your innovative ideas.
          </p>
          <a
            href="https://discord.gg/cronosworld"
            className="inline-flex font-poppins hover:bg-slate-800 items-center justify-center md:px-5 md:py-3 px-2 py-1.5 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Join Discord
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="https://contact.crownworld.io/IDO-Application-Form"
            className="inline-flex  font-poppins items-center justify-center md:px-5 py-1.5 md:py-3 px-4 text-base font-medium mt-3 sm:mt-0 ml-2 sm:ml-0
             text-center text-black border border-gray-300 rounded-lg bg-gradient-to-r from-[#BFFFFB] via-[#FFAFBD]  to-[#BFFFFB] hover:bg-gradient-to-l hover:from-[#FFAFBD] hover:via-[#BFFFFB] hover:to-[#BFFFFB]"
          >
            Apply to Launch
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <video className="h-full -translate-y-12 scale-110 z-0" autoPlay muted="muted" loop playsinline>
          <source src={posideon} type="video/mp4"></source>
        </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
