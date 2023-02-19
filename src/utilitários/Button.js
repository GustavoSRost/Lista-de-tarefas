import React from "react";
import { add } from "../store/listSlice";
import { useDispatch } from "react-redux";
const Button = ({ children, handleModal, type, ...rest }) => {
  return (
    <button
      type={type === "submit" ? "submit" : "button"}
      onClick={() => {
        if (rest.name === "close" || rest.name === "open") {
          handleModal();
        }
      }}
      className={`bg-transparent max-w-fit text-stone-800 rounded-md hover:underline underline-offset-4 transition-all ${rest.className}`}
    >
      {children}
    </button>
  );
};

export default Button;
