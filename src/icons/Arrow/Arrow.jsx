/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Arrow = ({ color = "white", className }) => {
  return (
    <svg
      className={`arrow ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M11.3 19.3C11.1167 19.1167 11.0207 18.8833 11.012 18.6C11.004 18.3167 11.0917 18.0833 11.275 17.9L16.175 13H5C4.71667 13 4.479 12.904 4.287 12.712C4.09567 12.5207 4 12.2833 4 12C4 11.7167 4.09567 11.479 4.287 11.287C4.479 11.0957 4.71667 11 5 11H16.175L11.275 6.1C11.0917 5.91667 11.004 5.68333 11.012 5.4C11.0207 5.11667 11.1167 4.88333 11.3 4.7C11.4833 4.51667 11.7167 4.425 12 4.425C12.2833 4.425 12.5167 4.51667 12.7 4.7L19.3 11.3C19.4 11.3833 19.471 11.4873 19.513 11.612C19.5543 11.7373 19.575 11.8667 19.575 12C19.575 12.1333 19.5543 12.2583 19.513 12.375C19.471 12.4917 19.4 12.6 19.3 12.7L12.7 19.3C12.5167 19.4833 12.2833 19.575 12 19.575C11.7167 19.575 11.4833 19.4833 11.3 19.3Z"
        fill={color}
      />
    </svg>
  );
};

Arrow.propTypes = {
  color: PropTypes.string,
};
