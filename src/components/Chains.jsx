import React from "react";
import Marquee from "react-fast-marquee";
import {
  cronos,
  ether,
  aptos,
  avalan,
  polygon,
  fantom,
  arbitrum,
  bnb,
  optimis,
} from "../assets/blockchain";

const Chains = () => {
  return (
    <section className="py-5">
      <h2 className="block md:mb-8 mb-4  sm:text-sm text-xs capitalize font-semibold  text-center text-white opacity-60  ">
        RAISE CAPITAL SEAMLESSLY ACROSS ALL MAJOR BLOCKCHAIN NETWORKS
      </h2>
      <Marquee
        gradient={false}
        pauseOnHover
        className="cursor-pointer"
        speed={100}
      >
        <img src={ether} alt="xxx" className="h-6 md:h-8 lg:h-10 mx-2" />
        <img src={bnb} alt="xxx" className="h-6 md:h-8 lg:h-10 mx-2" />
        <img src={polygon} alt="xxx" className="h-6 md:h-8 lg:h-10 mx-2" />
        <img src={fantom} alt="xxx" className="h-6 md:h-8 lg:h-10 mx-2" />
        <img src={avalan} alt="xxx" className="h-6 md:h-8 lg:h-10 mx-2" />
        <img
          src={cronos}
          alt="xxx"
          className="h-6 md:h-8 lg:h-10 mx-2 opacity-75"
        />
        <img src={aptos} alt="xxx" className="h-6 md:h-8 lg:h-10 mx-2" />
        <img src={arbitrum} alt="xxx" className="h-6 md:h-8 lg:h-10 mx-2" />
      </Marquee>
    </section>
  );
};

export default Chains;
