import React from "react";
import Box from "../Box/Box";
import Button from "../Button/Button";
import FormInput from "./FormInput";
const Form = (props) => {
  return (
    <Box
      className={`transition-[width] duration-300 ${
        props.buttonSearch
          ? "w-[40%] xl:w-3/4 md:w-[90%] hover:w-[42%] xl:hover:w-[80%] md:hover:w-[95%]"
          : "w-full"
      } py-2 px-2 rounded-border-base backdrop-blur-[10px] text-sm text-white font-normal `}
    >
      <form action="#" className="flex gap-3 ">
        <FormInput />
        {props.buttonSearch && (
          <Button className="flex items-center justify-center w-10 h-10 rounded-full ml-auto hover:from-lightBlue hover:to-lightGreen group">
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition duration-200 group-hover:rotate-90"
            >
              <path
                d="M23.7953 23.9182L19.0585 19.1814L23.7953 23.9182ZM19.0585 19.1814C19.8188 18.4211 20.4219 17.5185 20.8333 16.5251C21.2448 15.5318 21.4566 14.4671 21.4566 13.3919C21.4566 12.3167 21.2448 11.252 20.8333 10.2587C20.4219 9.2653 19.8188 8.36271 19.0585 7.60242C18.2982 6.84214 17.3956 6.23905 16.4022 5.82759C15.4089 5.41612 14.3442 5.20435 13.269 5.20435C12.1938 5.20435 11.1291 5.41612 10.1358 5.82759C9.1424 6.23905 8.23981 6.84214 7.47953 7.60242C5.94407 9.13789 5.08145 11.2204 5.08145 13.3919C5.08145 15.5634 5.94407 17.6459 7.47953 19.1814C9.01499 20.7168 11.0975 21.5794 13.269 21.5794C15.4405 21.5794 17.523 20.7168 19.0585 19.1814V19.1814Z"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Button>
        )}
        {!props.buttonSearch && (
          <Button className="px-6 py-2 rounded-border-base">Subscribe</Button>
        )}
      </form>
    </Box>
  );
};

export default Form;
