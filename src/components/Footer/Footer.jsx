import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "300%", height: "500%" }} />
      <div className="f-content">
        <section class="ft-main">
          <div class="ft-main-item">
            <h2 class="ft-title">About</h2>
            <ul>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Customers</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div class="ft-main-item">
            <h2 class="ft-title">Resources</h2>
            <ul>
              <li>
                <a href="#">Docs</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">eBooks</a>
              </li>
              <li>
                <a href="#">Webinars</a>
              </li>
            </ul>
          </div>
          <div class="ft-main-item">
            <h2 class="ft-title">Contact</h2>
            <ul>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Sales</a>
              </li>
              <li>
                <a href="#">Advertise</a>
              </li>
            </ul>
          </div>
          <div class="ft-main-item">
            <h2 class="ft-title">Stay Updated</h2>
            <p>Subscribe to our newsletter to get our latest news.</p>
            <form>
              <input type="email" name="email" placeholder="Enter email address" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
        </section>
        <div style={{ textAlign: "center" }}>
          <div className="f-icons">
            <a href={"https://www.instagram.com/cockroach2901/"} target="_blank">
              {" "}
              <Insta color="white" size={"3rem"} />
            </a>
            <a href={"https://www.facebook.com/100007766716871/"} target="_blank">
              {" "}
              <Facebook color="white" size={"3rem"} />
            </a>
            <a href={"https://github.com/huycuong291"} target="_blank">
              {" "}
              <Gitub color="white" size={"3rem"} />
            </a>
          </div>
          <h5>© Copyright by 3-in-1</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
