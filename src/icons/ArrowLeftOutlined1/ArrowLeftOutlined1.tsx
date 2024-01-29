/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  className: any;
}

export const ArrowLeftOutlined1 = ({ color = "#141719", className }: Props): JSX.Element => {
  return (
    <svg
      className={`arrow-left-outlined-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M9.3 4.3L2.3 11.3C1.9 11.7 1.9 12.3 2.3 12.7L9.3 19.7C9.7 20.1 10.3 20.1 10.7 19.7C11.1 19.3 11.1 18.7 10.7 18.3L5.4 13H21C21.6 13 22 12.6 22 12C22 11.4 21.6 11 21 11H5.4L10.7 5.7C10.9 5.5 11 5.3 11 5C11 4.7 10.9 4.5 10.7 4.3C10.3 3.9 9.7 3.9 9.3 4.3Z"
        fill={color}
      />
    </svg>
  );
};

ArrowLeftOutlined1.propTypes = {
  color: PropTypes.string,
};
