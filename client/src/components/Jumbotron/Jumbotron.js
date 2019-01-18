import React from "react";

const Jumbotron = ({ children, imageurl }) => (
  <div style={{height: 400,
    backgroundImage: 'url(' + imageurl + ')', 
    backgroundSize: "cover",
    clear: "both",
    paddingTop: 120,
    textAlign: "center"}}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;
