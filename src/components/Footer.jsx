import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <section id="footer">
      <footer className="bg-black font-poppins">
        <hr className="opacity-40" />
        <div className="mx-auto  container py-4 sm:py-6 max-w-full">
          <div className=" md:flex md:justify-evenly ">
            <div className="mb-6 sm:pl-16 ml-5 md:ml-0">
              <h1 className="text-white font-bold">Get latest updates</h1>
              <div className=" my-3 mr-4 md:bg-[#1c1c1c] rounded-lg flex mx-auto">
                {/* <form
                  method="POST"
                  action="https://formsubmit.co/crownworld2023@gmail.com>"
                > */}
                <input
                  type="email"
                  name="email"
                  required
                  className="py-2 sm:px-4 px-2  bg-[#1c1c1c] border-1-blue text-white rounded-lg focus:outline-none"
                  placeholder="your email"
                />
                <button
                  type="submit"
                  className="text-white whitespace-nowrap bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-3 md:px-6 py-2.5  "
                >
                  Get Notified
                </button>
                {/* </form> */}
              </div>
            </div>
            <div className="grid grid-cols-2 ">
              <div className="md:px-16 px-4">
                <h2 className=" mb-6 text-sm font-semibold  uppercase text-white">
                  Crown World
                </h2>
                <ul className="text-gray-600 ">
                  <li className="mb-4">
                    <Link
                      to="navbar"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="hover:underline cursor-pointer"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://docs.crownworld.io"
                      className="hover:underline"
                    >
                      Docs
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://docs.crownworld.io"
                      className="hover:underline"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="md:px-10 lg:px-16 px-4">
                <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                  Contact
                </h2>
                <ul className="text-gray-600 ">
                  <li className="mb-4">
                    <a
                      href="https://contact.crownworld.io/IDO-Application-Form"
                      className="hover:underline "
                    >
                      Apply for IDO
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://contact.crownworld.io/Networking-Partnerships"
                      className="hover:underline"
                    >
                      Networking & Partnerships
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://contact.crownworld.io/Business-Proposals"
                      className="hover:underline"
                    >
                      Business Proposals
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://contact.crownworld.io/Influencers-Communities"
                      className="hover:underline"
                    >
                      Influencers & Communities
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center max-w-6xl sm:mx-auto justify-between px-4 sm:px-0">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://crownworld.io" className="hover:underline">
                CrownWorld™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a
                href=" https://instagram.com/cronos.world"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_14_58)">
                    <path
                      d="M27.0751 8.1028C27.0134 6.70328 26.7871 5.74112 26.4629 4.90739C26.1285 4.02241 25.6139 3.23009 24.9398 2.57143C24.2811 1.90252 23.4836 1.38275 22.6089 1.05352C21.7703 0.729319 20.8132 0.503 19.4136 0.441294C18.0037 0.374363 17.5561 0.358887 13.98 0.358887C10.4039 0.358887 9.95627 0.374363 8.55152 0.436069C7.152 0.497774 6.18984 0.724295 5.35632 1.0483C4.47114 1.38275 3.67882 1.8973 3.02016 2.57143C2.35125 3.23009 1.83168 4.02764 1.50225 4.90237C1.17805 5.74112 0.95173 6.69805 0.890025 8.09757C0.823094 9.50755 0.807617 9.95516 0.807617 13.5313C0.807617 17.1073 0.823094 17.555 0.884799 18.9597C0.946504 20.3592 1.17302 21.3214 1.49723 22.1551C1.83168 23.0401 2.35125 23.8324 3.02016 24.4911C3.67882 25.16 4.47636 25.6798 5.35109 26.009C6.18984 26.3332 7.14677 26.5595 8.5465 26.6212C9.95104 26.6831 10.3989 26.6984 13.9749 26.6984C17.551 26.6984 17.9986 26.6831 19.4034 26.6212C20.8029 26.5595 21.7651 26.3332 22.5986 26.009C24.3688 25.3246 25.7683 23.9251 26.4527 22.1551C26.7767 21.3164 27.0032 20.3592 27.0649 18.9597C27.1266 17.555 27.1421 17.1073 27.1421 13.5313C27.1421 9.95516 27.1369 9.50755 27.0751 8.1028ZM24.7032 18.8568C24.6465 20.1432 24.4305 20.8378 24.2504 21.3009C23.8078 22.4484 22.8971 23.3591 21.7496 23.8017C21.2865 23.9818 20.5869 24.1978 19.3055 24.2543C17.9162 24.3162 17.4996 24.3315 13.9852 24.3315C10.4708 24.3315 10.0489 24.3162 8.66468 24.2543C7.37832 24.1978 6.68368 23.9818 6.22059 23.8017C5.64957 23.5906 5.1298 23.2562 4.70791 22.8188C4.27055 22.3917 3.93609 21.8771 3.72505 21.3061C3.54496 20.843 3.32889 20.1432 3.27241 18.862C3.2105 17.4728 3.19523 17.0559 3.19523 13.5415C3.19523 10.0271 3.2105 9.60523 3.27241 8.22119C3.32889 6.93482 3.54496 6.24018 3.72505 5.77709C3.93609 5.20587 4.27055 4.6863 4.71314 4.26421C5.14005 3.82684 5.65459 3.49239 6.22582 3.28155C6.68891 3.10146 7.38877 2.88539 8.66991 2.82871C10.0592 2.767 10.476 2.75152 13.9902 2.75152C17.5098 2.75152 17.9265 2.767 19.3107 2.82871C20.5971 2.88539 21.2917 3.10146 21.7548 3.28155C22.3259 3.49239 22.8456 3.82684 23.2675 4.26421C23.7049 4.69132 24.0393 5.20587 24.2504 5.77709C24.4305 6.24018 24.6465 6.93985 24.7032 8.22119C24.7649 9.61046 24.7804 10.0271 24.7804 13.5415C24.7804 17.0559 24.7649 17.4675 24.7032 18.8568Z"
                      fill="white"
                    />
                    <path
                      d="M13.9797 6.76538C10.2442 6.76538 7.21338 9.79598 7.21338 13.5317C7.21338 17.2674 10.2442 20.2979 13.9797 20.2979C17.7153 20.2979 20.7459 17.2674 20.7459 13.5317C20.7459 9.79598 17.7153 6.76538 13.9797 6.76538ZM13.9797 17.9208C11.5563 17.9208 9.59054 15.9553 9.59054 13.5317C9.59054 11.1081 11.5563 9.14254 13.9797 9.14254C16.4032 9.14254 18.3688 11.1081 18.3688 13.5317C18.3688 15.9553 16.4032 17.9208 13.9797 17.9208V17.9208Z"
                      fill="white"
                    />
                    <path
                      d="M22.5935 6.49783C22.5935 7.37015 21.8862 8.07745 21.0137 8.07745C20.1414 8.07745 19.4341 7.37015 19.4341 6.49783C19.4341 5.62531 20.1414 4.91821 21.0137 4.91821C21.8862 4.91821 22.5935 5.62531 22.5935 6.49783V6.49783Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_14_58">
                      <rect
                        width="26.3396"
                        height="26.3396"
                        fill="white"
                        transform="translate(0.76123 0.359131)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <span className="sr-only">Instagram page</span>
              </a>
              <a
                href="https://twitter.com/cronos_world"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_14_64)">
                    <path
                      d="M26.512 5.36191C25.5325 5.79157 24.4887 6.07637 23.4006 6.21465C24.52 5.54629 25.3744 4.49599 25.7761 3.23005C24.7324 3.85232 23.58 4.29186 22.3519 4.53715C21.3609 3.48192 19.9485 2.82837 18.4076 2.82837C15.418 2.82837 13.0113 5.2549 13.0113 8.22963C13.0113 8.65765 13.0475 9.06921 13.1364 9.46101C8.64713 9.24206 4.67479 7.09045 2.00626 3.81281C1.54038 4.62111 1.2671 5.54629 1.2671 6.54225C1.2671 8.41236 2.23014 10.0701 3.66565 11.0299C2.79809 11.0134 1.94699 10.7615 1.22595 10.3648C1.22595 10.3812 1.22595 10.4026 1.22595 10.424C1.22595 13.0481 3.0977 15.2277 5.55223 15.7298C5.11268 15.85 4.63363 15.9076 4.13647 15.9076C3.79077 15.9076 3.44177 15.8879 3.11417 15.8154C3.81381 17.9539 5.79916 19.526 8.15985 19.5771C6.32266 21.0142 3.98996 21.8801 1.46465 21.8801C1.02182 21.8801 0.597089 21.8604 0.172363 21.806C2.56433 23.3486 5.39913 24.2293 8.45617 24.2293C18.3928 24.2293 23.8253 15.9982 23.8253 8.86343C23.8253 8.62473 23.8171 8.39426 23.8056 8.16543C24.8773 7.40487 25.7777 6.455 26.512 5.36191Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_14_64">
                      <rect
                        width="26.3396"
                        height="26.3396"
                        fill="white"
                        transform="translate(0.172363 0.359131)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <span className="sr-only">Twitter page</span>
              </a>
              <a
                href="https://t.me/Cronosworld"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <g clip-path="url(#clip0_14_69)">
                    <path
                      d="M10.9187 17.0201L10.483 23.1484C11.1064 23.1484 11.3763 22.8806 11.7001 22.5591L14.6227 19.766L20.6786 24.2009C21.7893 24.8199 22.5718 24.4939 22.8714 23.1792L26.8465 4.55267L26.8476 4.55158C27.1999 2.90974 26.2538 2.26771 25.1717 2.67049L1.80629 11.6161C0.211645 12.2351 0.235789 13.124 1.53521 13.5268L7.50881 15.3848L21.3843 6.70264C22.0373 6.27023 22.631 6.50949 22.1426 6.94189L10.9187 17.0201Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_14_69">
                      <rect
                        width="26.3396"
                        height="26.3396"
                        fill="white"
                        transform="translate(0.583496 0.359131)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <span className="sr-only">Telegram</span>
              </a>
              <a
                href="https://discord.gg/cronosworld"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_14_71)">
                    <path
                      d="M4.92379 23.6211H20.5728L19.8254 21.2012L21.6132 22.7355L23.2518 24.2039L26.2369 26.6985V3.07516C26.1623 1.60672 24.898 0.358887 23.3308 0.358887L4.92928 0.362179C3.36317 0.362179 2.09229 1.61221 2.09229 3.08064V20.9038C2.09229 22.4523 3.36098 23.6211 4.92379 23.6211ZM16.5 6.59588L16.4638 6.60905L16.477 6.59588H16.5ZM8.12515 7.98859C10.1368 6.52455 12.0015 6.59479 12.0015 6.59479L12.1518 6.74295C9.69016 7.3301 8.57402 8.42978 8.57402 8.42978C8.57402 8.42978 8.87254 8.28381 9.39384 8.06102C12.7093 6.75721 16.3299 6.8516 19.6817 8.50221C19.6817 8.50221 18.5633 7.47387 16.2531 6.81538L16.4572 6.61454C16.7766 6.61564 18.4667 6.6749 20.2754 7.99737C20.2754 7.99737 22.2991 11.4544 22.2991 15.7017C22.2322 15.6205 21.0436 17.5301 17.9849 17.596C17.9849 17.596 17.4669 17.0099 17.0982 16.4985C18.8871 15.9849 19.5565 14.9576 19.5565 14.9576C18.9694 15.3275 18.4338 15.547 17.9992 15.7665C17.3308 16.0606 16.6614 16.2054 15.993 16.3536C12.8279 16.8672 11.051 16.0079 9.37189 15.3264L8.79791 15.0344C8.79791 15.0344 9.46628 16.0617 11.1838 16.5753C10.7328 17.09 10.2861 17.675 10.2861 17.675C7.22851 17.6025 6.11346 15.6929 6.11346 15.6929C6.11346 11.4391 8.12515 7.98859 8.12515 7.98859Z"
                      fill="white"
                    />
                    <path
                      d="M16.698 14.3755C17.4783 14.3755 18.1137 13.717 18.1137 12.9048C18.1137 12.0982 17.4816 11.4397 16.698 11.4397V11.443C15.921 11.443 15.2844 12.0993 15.2822 12.9114C15.2822 13.717 15.9177 14.3755 16.698 14.3755Z"
                      fill="white"
                    />
                    <path
                      d="M11.6296 14.3755C12.4099 14.3755 13.0454 13.717 13.0454 12.9048C13.0454 12.0982 12.4143 11.4397 11.634 11.4397L11.6296 11.443C10.8493 11.443 10.2139 12.0993 10.2139 12.9114C10.2139 13.717 10.8493 14.3755 11.6296 14.3755Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_14_71">
                      <rect
                        width="26.3396"
                        height="26.3396"
                        fill="white"
                        transform="translate(0.995117 0.359131)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};
export default Footer;
