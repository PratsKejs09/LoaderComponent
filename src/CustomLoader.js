import React from "react";
import "./styles.css";

const CustomLoader = () => {
  return (
    <div>
      <span className="skeleton-loader-background"></span>
      <span className="skeleton-loader-gradient"></span>
      <span className="skeleton-loader"></span>
    </div>
  );
};
export default CustomLoader;
