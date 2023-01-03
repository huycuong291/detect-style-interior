import React, { useContext } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import logo from "../../img/3in1logo.png";
import { Link } from "react-scroll";
import { themeContext } from "../../Context";

const navbar = (props) => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">
          <img src={logo} style={{ width: "100px" }} />
        </div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none", color: props.darkmode ? "white" : "black" }}>
            <li style={{}}>
              <Link to="services" offset={-300} spy={true} smooth={true}>
                <p style={{ color: props.darkmode ? "white" : "black" }}>Our Serivces</p>
              </Link>
            </li>
            <li>
              <Link to="main-upload" offset={-400} spy={true} smooth={true}>
                <p style={{ color: props.darkmode ? "white" : "black" }}>Try our product now! </p>
              </Link>
            </li>
            <li>
              <Link to="portfolio" offset={-690} spy={true} smooth={true}>
                <p style={{ color: props.darkmode ? "white" : "black" }}> Our Teams </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default navbar;
