import React from "react";

export const Footer = ({ children }) => {
  return (
    <div className="container">
      <div className="align-items-center row">
        <div className="col-md pb-2 pt-2 text-center">{children}</div>
      </div>
    </div>
  );
};
