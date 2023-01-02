import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import logo from "../../img/3in1logo.png";
import { Link } from "react-scroll";
const navbar = () => {
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
          <ul style={{ listStyleType: "none" }}>
            <li style={{}}>
              <Link to="services" offset={-300} spy={true} smooth={true}>
                Our Serivces
              </Link>
            </li>
            <li>
              <Link to="main-upload" offset={-400} spy={true} smooth={true}>
                Try our product now!
              </Link>
            </li>
            <li>
              <Link to="portfolio" offset={-690} spy={true} smooth={true}>
                Our Teams
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default navbar;
