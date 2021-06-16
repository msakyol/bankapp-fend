import React from "react";
import { Navbar } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <Navbar fixed="bottom" fluid className="justify-content-center bg p-3">
        <p className="text-white mt-2"> Copyright 2021</p>
      </Navbar>
    </div>
  );
};

export default Footer;
