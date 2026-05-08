import React from "react";
import "./Title.css";

const Title = ({ children, size }) => {
  return <h1 className={size}>{children}</h1>;
};

export default Title;
