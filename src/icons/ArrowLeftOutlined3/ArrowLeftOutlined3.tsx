/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const ArrowLeftOutlined3 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`arrow-left-outlined-3 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M14.7 19.7L21.7 12.7C22.1 12.3 22.1 11.7 21.7 11.3L14.7 4.3C14.3 3.9 13.7 3.9 13.3 4.3C12.9 4.7 12.9 5.3 13.3 5.7L18.6 11L3 11C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13L18.6 13L13.3 18.3C13.1 18.5 13 18.7 13 19C13 19.3 13.1 19.5 13.3 19.7C13.7 20.1 14.3 20.1 14.7 19.7Z"
        fill="white"
      />
    </svg>
  );
};
