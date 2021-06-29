import React from "react";
import "./style.css";

function Navbar() {
    return (
        <div id="navbarArea">
            <ul id="navbar">
                <li id="navAbout"><a href="/">About Me</a></li>
                <li id="navProjects"><a href="/">Projects</a></li>
                <li id="navContact"><a href="/">Contact Me</a></li>
                <li id="navResume"><a href="/">Resume</a></li>
            </ul>
        </div>
    )
}

export default Navbar;