import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = () => {
  return (
    <svg
      width="29"
      height="19"
      viewBox="0 0 29 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 1C0 0.447715 0.447715 0 1 0H28C28.5523 0 29 0.447715 29 1C29 1.55228 28.5523 2 28 2H1C0.447716 2 0 1.55228 0 1Z"
        fill="#D9D9D9"
      />
      <path
        d="M0 9C0 8.44772 0.447715 8 1 8H28C28.5523 8 29 8.44772 29 9V9C29 9.55228 28.5523 10 28 10H1C0.447716 10 0 9.55228 0 9V9Z"
        fill="#D9D9D9"
      />
      <path
        d="M0 18C0 17.4477 0.447715 17 1 17H28C28.5523 17 29 17.4477 29 18C29 18.5523 28.5523 19 28 19H1C0.447716 19 0 18.5523 0 18Z"
        fill="#D9D9D9"
      />
    </svg>
  );
};

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div
        className="flex justify-between items-center h-20 max-w-7xl lg:mx-auto font text-white font-poppins md:mx-2 "
        id="navbar"
      >
        <div className="flex flex-row">
          <a href="https://crownworld.io">
            <img src={logo} class="sm:h-[50px] h-[40px] pl-2" alt="Logo" />
          </a>
          <a
            class="self-center sm:text-xl text-md font-bold whitespace-nowrap "
            href="https://crownworld.io"
          >
            CROWN<span className="text-[#F2B2FF]"> WORLD</span>
          </a>
        </div>
        <ul className="hidden md:flex">
          <a href="https://crownworld.io" className="p-4 text-white">
            <li className="py-4">Home</li>
          </a>
          <a
            href="https://launch.crownworld.io"
            className="py-4 pr-4 text-white"
          >
            <li className="py-4">Launchpad</li>
          </a>
          <a href="https://nft.crownworld.io" className="py-4 pr-4 text-white">
            <li className="py-4">NFT</li>
          </a>
          <a
            href="https://crownworld.crownworld.io"
            className="py-4 text-white "
          >
            <li className="py-4">Earn</li>
          </a>

          <Link
            className="p-4 py-8 cursor-pointer text-white"
            activeClass="active"
            to="footer"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </ul>
        <div className="hidden md:flex">
          <a
            href="https://discord.gg/cronosworld"
            target="_blank"
            className="inline-flex hover:bg-slate-800 items-center justify-center sm:px-5 px-2 py-3 sm:mr-3 mr-1 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Join Discord
          </a>
          <Link
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="portfolio"
            className="inline-flex items-center justify-center sm:px-5 px-2 py-3 text-base font-medium cursor-pointer
             text-center text-black border border-gray-300 rounded-lg bg-gradient-to-r from-[#BFFFFB] via-[#FFAFBD]  to-[#BFFFFB] hover:bg-gradient-to-l hover:from-[#FFAFBD] hover:via-[#BFFFFB] hover:to-[#BFFFFB] "
          >
            Open App
          </Link>
        </div>
        <div onClick={handleNav} className="block text-white md:hidden pr-4">
          {nav ? "X" : <Nav />}
        </div>

        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[45%] h-full border-r  bg-[#000300] ease-in-out duration-500 z-100"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
          style={{ zIndex: "1000" }}
        >
          <h1 className="w-full pr-4 text-3xl font-bold text-white my-4 mx-2 flex items-center justify-between">
            <span class="self-center text-xl font-semibold whitespace-nowrap ">
              <a href="https://crownworld.io">
                <img src={logo} class="sm:h-[50px] h-[40px] " alt="Logo" />
                CROWN<span className="text-[#F2B2FF]"> WORLD</span>
              </a>
            </span>
            <button
              className="relative  text-md right-5 -top-3"
              onClick={handleNav}
            >
              X
            </button>
          </h1>
          <li className="p-4 border-b border-gray-600">
            <a href="https://crownworld.io">Home</a>
          </li>
          <li className="p-4 border-b border-gray-600">
            <a href="https://launchpad.crownworld.io">Launchpad</a>
          </li>
          <li className="p-4 border-b border-gray-600">
            <a href="https://nft.crownworld.io">NFT</a>
          </li>
          <li className="p-4 border-b border-gray-600">
            <a href="https://crownorldcrownworld.io">Earn</a>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link
              className=""
              activeClass="active"
              to="footer"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </li>
          <li className="p-4 border-b text-black border-gray-600 bg-gradient-to-r hover:bg-gradient-to-l from-[#BFFFFB] via-[#FFAFBD]  to-[#BFFFFB]">
            <a href="https://crownworld.io">Open App</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
