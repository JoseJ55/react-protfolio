import React from "react";
import "./style.css";

import homeIcon from "./../../assets/Images/home-icon48px.png";
import personIcon from "./../../assets/Images/person-icon48px.png";
import websiteIcon from "./../../assets/Images/website-icon50px.png";
import contactIcon from "./../../assets/Images/contact-icon50px.png";
import resumeIcon from "./../../assets/Images/resume-icon48px.png";

function Navbar() {
    return (
        <div id="nav">
            <button className="btn"><img src={homeIcon} alt="https://icons8.com"/><a href="/">Home</a></button>
            <button className="btn"><img src={personIcon} alt="https://icons8.com/icon/86363/person"/><a href="#about">About</a></button>
            <button className="btn"><img src={websiteIcon} alt="https://icons8.com/icon/87836/resume-website"/><a href="#projects">Projects</a></button>
            <button className="btn"><img src={contactIcon} alt="https://icons8.com/icon/7863/contact"/><a href="#contact">Contact</a></button>
            <button className="btn"><img src={resumeIcon} alt="https://icons8.com"/><a href="#resume">Resume</a></button>
        </div>
    )
}

export default Navbar;