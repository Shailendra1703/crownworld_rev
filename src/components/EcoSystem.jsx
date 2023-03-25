import React from "react";
// import ecoSystem from "../assets/EcoSystem.png";
import ecoSystem from "../assets/Ecosystem_HQ.png";
import ecosystem_mobile from "../assets/ecosystem_mobile.png";

const headings = [
  {
    name: "Earn",
    details:
      "CROWNHOOD is a platform that allows users to take part in task-based bounties in order to earn rewards.",
  },
  {
    name: "NFTs",
    details: "Discover Rare Digital Artworks to Crown your NFT Journey",
  },
  {
    name: "Incubation Hub",
    details: "Nurture & propel your Innovative Project.",
  },
  {
    name: "Community",
    details: "Strong, Supportive & Loyal Community",
  },
  {
    name: "All in one Hub",
    details: "All in one Hub to launch,Build & Earn",
  },
  {
    name: "Chain Agnostic",
    details: "Our platform provides access to all major blockchain networks.",
  },
  {
    name: "100% Trustless",
    details:
      "We have created a platform that ensures a Trustless user experience, where you are the sole custodian of your funds.",
  },
];

const EcoSystem = () => {
  return (
    <section className="bg-black ecoSystem">
      <div className="text-center  max-w-6xl mx-auto pt-10">
        <h2 className="sm:text-4xl text-2xl tracking-tight font-extrabold  bg-gradient-to-r from-[#97ebbe] via-[#df97df] to-[#f1fcaf] inline-block text-transparent bg-clip-text sm:pt-4 pt-2">
          OUR ECOSYSTEM
        </h2>
        <img
          src={ecoSystem}
          alt="ecoSystem"
          className="hidden md:block cursor-pointer"
        />
      </div>
      <div className="flex md:hidden px-4 py-5 items-center flex-col sm:px-5">
        {/* <h1 className="text-white text-center font-extrabold text-3xl font-poppins ">
          OUR ECOSYSTEM
        </h1> */}
        <img src={ecosystem_mobile} alt="eco" />
        <div className="pb-5">
          {headings.map((desc) => {
            return (
              <div key={desc.id} className="text-white text-sm sm:text-md">
                <p className="text-extrabold  pt-2">{desc.name}</p>
                <p className="text-sm opacity-70">{desc.details}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EcoSystem;
