import React, { useRef } from "react";
import Carousel from "react-elastic-carousel";

import { Anand, Ganesh, sheldon, Pwani } from "../assets/TeamMemeber";

const Images = [
  {
    id: 1,
    name: "Anand Maurya",
    designation: "CEO",
    image: Anand,
    twitter: "",
    linkedIn: "https://in.linkedin.com/in/anand-maurya",
  },

  {
    id: 2,
    name: "Pawani Reddy",
    designation: "COO",
    image: Pwani,
    twitter: "",
    linkedIn: "https://in.linkedin.com/in/pawani-reddy",
  },
  {
    id: 3,
    name: "Sheldon Ivish",
    designation: "CMO",
    image: sheldon,
    twitter: "",
    linkedIn: "https://in.linkedin.com/in/sheldonivish",
  },
  {
    id: 4,
    name: "Ganesh Hegde",
    designation: "CD",
    image: Ganesh,
    twitter: "",
    linkedIn: "https://www.linkedin.com/in/ganesh-hegde-29b4ab19b/",
  },
  {
    id: 5,
    name: "Anand Maurya",
    designation: "CEO",
    image: Anand,
    twitter: "",
    linkedIn: "https://in.linkedin.com/in/anand-maurya",
  },

  {
    id: 6,
    name: "Pawani Reddy",
    designation: "COO",
    image: Pwani,
    twitter: "",
    linkedIn: "https://in.linkedin.com/in/pawani-reddy",
  },
  {
    id: 7,
    name: "Sheldon Ivish",
    designation: "CMO",
    image: sheldon,
    twitter: "",
    linkedIn: "https://in.linkedin.com/in/sheldonivish",
  },
  {
    id: 8,
    name: "Ganesh Hegde",
    designation: "CD",
    image: Ganesh,
    twitter: "",
    linkedIn: "https://www.linkedin.com/in/ganesh-hegde-29b4ab19b/",
  },
];

const OurTeam = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1000, itemsToShow: 4 },
  ];

  const carouselRef = useRef(null);
  const carouselRef_mobile = useRef(null);
  let resetTimeout;
  let resetTimeout_mobile;

  return (
    <section className="bg-black ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 md:text-4xl text-xl tracking-tight font-extrabold  bg-gradient-to-r from-[#97ebbe] via-[#df97df] to-[#f1fcaf] inline-block text-transparent bg-clip-text">
            OUR CORE TEAM
          </h2>
        </div>
        {/* <div className="grid gap-8 lg:gap-16 sm:grid-cols-2  lg:grid-cols-4"> */}
        <div className="md:block hidden font-poppins">
          <Carousel
            breakPoints={breakPoints}
            className="block md:hidden"
            ref={carouselRef}
            enableAutoPlay={true}
            autoPlaySpeed={3000}
            isRTL={false}
            onNextEnd={({ index }) => {
              clearTimeout(resetTimeout);
              resetTimeout = setTimeout(() => {
                carouselRef?.current?.goTo(0);
              }, 3000); // same time
            }}
          >
            {Images.map((data) => {
              return (
                <div key={data.id} className="text-center text-gray-500  ">
                  <img
                    className="mx-auto mb-4 w-36 h-36 rounded-full"
                    src={data.image}
                    alt={data.name}
                  />
                  <h3 className="mb-1 text-xl font-bold tracking-tight text-white">
                    <a href="#">{data.name}</a>
                  </h3>
                  <p>{data.designation}</p>
                  <ul className="flex justify-center mt-4 space-x-4">
                    <li>
                      <a
                        href={data.twitter}
                        target="_blank"
                        className="text-[#00acee] hover:text-white pointer-events-none"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href={data.linkedIn}
                        target="_blank"
                        className="text-[#00acee] hover:text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="w-6 h-6 text-[#00acee] hover:text-white "
                        >
                          <path
                            fill="currentColor"
                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="md:hidden block font-poppins">
          <Carousel
            itemsToShow={2}
            className="block md:hidden"
            ref={carouselRef_mobile}
            enableAutoPlay={true}
            autoPlaySpeed={3000}
            showArrows={false}
            isRTL={false}
            onNextEnd={({ index }) => {
              clearTimeout(resetTimeout_mobile);
              resetTimeout_mobile = setTimeout(() => {
                carouselRef_mobile?.current?.goTo(0);
              }, 3000); // same time
            }}
          >
            {Images.map((data) => {
              return (
                <div key={data.id} className="text-center text-gray-500  ">
                  <div className="h-24 w-24">
                    <img
                      className="h-full w-full rounded-full object-cover "
                      src={data.image}
                      alt={data.name}
                    />
                  </div>
                  <h3 className="mb-1 text-md  tracking-tight text-white pt-1">
                    <a href="#">{data.name}</a>
                  </h3>
                  <p className="text-sm text-slate-400">{data.designation}</p>
                  <ul className="flex justify-center mt-3 space-x-4">
                    <li>
                      <a
                        href={data.twitter}
                        target="_blank"
                        className="pointer-events-none text-[#00acee] hover:hover:text-white"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href={data.linkedIn}
                        target="_blank"
                        className="text-[#00acee] hover:hover:text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="w-4 h-4 text-[#00acee] hover:text-white "
                        >
                          <path
                            fill="currentColor"
                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
