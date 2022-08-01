import React from "react";
import { Link } from "react-router-dom";
import { FiInstagram,FiLinkedin,FiTwitter,FiGithub} from "react-icons/fi";
const Footer = () => {
  return (
    <div className="footer">
      <div className="ethiopia">
        <h1>logo</h1>
        <p>ethiopia land of origin</p>
      </div>
      <div className="nav">
        <Link to="/">home</Link>
        <Link to="/tours">tourist_sites</Link>
        <Link to="">about us</Link>
        <Link to="/contact">contact</Link>
      </div>
      <div className="location">
        <span>East Arfica </span>
        <span>Addis Ababa, Ethiopia</span> 
        <span>phone: +251961439185</span>
        <span>email: addisumotora3@gmail.com</span>
      </div>
      <div className="contact1">
        <button className="btn">Contact us</button>
        <div className="footer_links">
          <a href="facebook"><FiInstagram /></a>
          <a href="instagram"><FiLinkedin /></a>
          <a href="instagram"><FiTwitter/></a>
          <a href="instagram"><FiGithub/></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
