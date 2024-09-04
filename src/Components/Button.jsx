import React from "react";

function Button({
  text = "button",
  button = "button-white",
  hide = "display",
  handleclick
}) {
  const buttons = {
    "button-white": "bg-Neutral/50  text-Neutral/1000 w-full ",
    "button-outline":
      "text-blue-default border-signborder border-2 w-full flex justify-center  items-center self-stretch rounded-borderr ",
    "button-post":
      "flex  py-2 px-6 bg-blue-default text-Neutral/50 justify-center items-center gap-10px rounded-full text-center font-inter text-base not-italic font-bold leading-normal hover:bg-blue-hover disabled:bg-blue-default disabled:opacity-50",
  };

  let base = `text-base ${buttons[button]} rounded-full ${hide}   px-6 py-2 font-bold leading-normal  backdrop-blur-xl hover:bg-Neutral/200 disabled:pointer-events-none disabled:opacity-25 text-center`;

  return (
    <>
      <button onClick={handleclick}  className={base}>{text}</button>
    </>
  );
}

export default Button;