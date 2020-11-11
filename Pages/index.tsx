import React from "react";

const Hello = () => {
  return <h1>Hello {process.env.customKey}</h1>;
};

export default Hello;
