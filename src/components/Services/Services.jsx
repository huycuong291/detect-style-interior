import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import artdecor from "../../img/artdecor.png";
import hitech from "../../img/hitech.png";
import Indochine from "../../img/Indochine.png";
import industrial from "../../img/industrial.png";
import Scandinavian from "../../img/Scandinavian.png";

import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Our Awesome</span>
        <span>Detect Services</span>
        <spane>Don’t waste your time, give it to the best source of interior design</spane>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}

      <div className="cards">
        {/* first card */}

        <motion.div initial={{ left: "14rem" }} whileInView={{ left: "25rem" }} transition={transition}>
          <a href="https://en.wikipedia.org/wiki/Art_Deco" target="_blank">
            <Card darkmode={darkMode} emoji={artdecor} heading={"Art Decor"} />
          </a>
        </motion.div>

        {/* second card */}
        <motion.div initial={{ left: "25rem", top: "17rem" }} whileInView={{ left: "14rem" }} transition={transition}>
          <a href="https://blog.zeelproject.com/62-high-tech-style-in-interiors.html" target="_blank">
            <Card darkmode={darkMode} emoji={hitech} heading={"Hitech"} />
          </a>
        </motion.div>
        {/* 3rd */}
        <motion.div initial={{ left: "25rem" }} whileInView={{ left: "45rem" }} transition={transition}>
          <a href="https://noithatvsc.vn/indochine-style-interior-design/" target="_blank">
            <Card darkmode={darkMode} emoji={Indochine} heading={"Indochine"} color="rgba(252, 166, 31, 0.45)" />{" "}
          </a>
        </motion.div>
        {/* 4rd */}
        <motion.div initial={{ top: "17rem", left: "35rem" }} whileInView={{ left: "35rem" }} transition={transition}>
          <a href="https://www.masterclass.com/articles/industrial-interior-design-explained" target="_blank">
            <Card
              darkmode={darkMode}
              emoji={industrial}
              heading={"Industrial"}
              detail={"Lorem ispum dummy text are usually use in section where we need some random text"}
              color="rgba(252, 166, 31, 0.45)"
            />{" "}
          </a>
        </motion.div>
        {/* 5rd */}
        <motion.div initial={{ top: "17rem", left: "45rem" }} whileInView={{ left: "55rem" }} transition={transition}>
          <a href="https://www.apartmenttherapy.com/scandinavian-design-262722" target="_blank">
            <Card
              darkmode={darkMode}
              emoji={Scandinavian}
              heading={"Scandinavian"}
              detail={"Lorem ispum dummy text are usually use in section where we need some random text"}
              color="rgba(252, 166, 31, 0.45)"
            />{" "}
          </a>
        </motion.div>
        <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
      </div>
    </div>
  );
};

export default Services;
