import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import furniture from "../../img/furniture.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Group: 3in1 </span>
          <span>Detect all your furniture style</span>
          <span>“Predicting the future isn’t magic, It’s artificial intelligence.”</span>
        </div>
        <Link to="main-upload" offset={-400} smooth={true} spy={true}>
          <button className="button i-button">Try now!</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href={"https://www.instagram.com/cockroach2901/"} target="_blank">
            {" "}
            <img src={Instagram} alt="" />
          </a>
          <a href={"https://www.linkedin.com/in/huy-c%C6%B0%E1%BB%9Dng-1982a21a3/"} target="_blank">
            {" "}
            <img src={LinkedIn} alt="" />
          </a>
          <a href={"https://github.com/huycuong291"} target="_blank">
            {" "}
            <img src={Github} alt="" />
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={furniture} alt="" />
        {/* animation */}

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        ></motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
