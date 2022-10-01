import { React, useState } from "react";
import Logo from "../../icons/logo.svg";
import CartIcon from "../../icons/shoppingbag.svg";
import NavigationList from "./NavigationList";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuOpenHandler = () => {
    setIsOpen((prevState) => setIsOpen(!prevState));
  };
  return (
    <nav className="pt-8 flex items-center justify-around">
      <button
        className={`hidden relative w-8 h-4 md:block`}
        onClick={menuOpenHandler}
      >
        <span
          className={`transition duration-200 hidden md:block w-full h-[2px] bg-white absolute top-0 ${
            isOpen ? "rotate-[135deg] top-1/2" : "top-0 left-0 "
          }`}
        ></span>
        <span
          className={`transition duration-200 hidden md:block w-full h-[2px] bg-white  ${
            isOpen ? "scale-0" : ""
          }`}
        ></span>
        <span
          className={`transition duration-200 hidden md:block w-full h-[2px] bg-white absolute bottom-0 ${
            isOpen ? "rotate-[-135deg] top-1/2" : "bottom-0 left-0 "
          }`}
        ></span>
      </button>
      <a href="#">
        <img src={Logo} alt="Daunku company logo." />
      </a>
      <NavigationList menuState={isOpen} />
      <button className="relative">
        <svg
          width="32"
          height="38"
          viewBox="0 0 32 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 transition hover:scale-125"
        >
          <g clip-path="url(#clip0_5_19)">
            <path
              d="M8 8.71436C8 4.29578 11.5786 0.714355 16 0.714355C20.4214 0.714355 24 4.29578 24 8.71436V12.1429H28.5714C30.4643 12.1429 32 13.6786 32 15.5715V30.4286C32 34.2144 28.9286 37.2858 25.1429 37.2858H6.85714C3.07 37.2858 0 34.2144 0 30.4286V15.5715C0 13.6786 1.535 12.1429 3.42857 12.1429H8V8.71436ZM11.4286 12.1429H20.5714V8.71436C20.5714 6.18936 18.5214 4.14293 16 4.14293C13.4786 4.14293 11.4286 6.18936 11.4286 8.71436V12.1429ZM9.71429 19.0001C10.6643 19.0001 11.4286 18.2358 11.4286 17.2858C11.4286 16.3358 10.6643 15.5715 9.71429 15.5715C8.76429 15.5715 8 16.3358 8 17.2858C8 18.2358 8.76429 19.0001 9.71429 19.0001ZM22.2857 15.5715C21.3357 15.5715 20.5714 16.3358 20.5714 17.2858C20.5714 18.2358 21.3357 19.0001 22.2857 19.0001C23.2357 19.0001 24 18.2358 24 17.2858C24 16.3358 23.2357 15.5715 22.2857 15.5715Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_5_19">
              <rect
                width="32"
                height="36.5714"
                fill="white"
                transform="translate(0 0.714355)"
              />
            </clipPath>
          </defs>
        </svg>

        <span className="flex items-center justify-center absolute top-1 -right-1 w-4 h-4 rounded-full text-[12px] bg-gradient-to-r from-lightGreen to-lightBlue text-darkBlue font-bold">
          1
        </span>
      </button>
    </nav>
  );
};

export default Navigation;
