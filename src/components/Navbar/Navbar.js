import React from "react";
import "./style.css";

function Navbar() {
    return (
        <div id="nav">
            <button id="about" className="btn"><a href="/">About</a></button>
            <button id="project" className="btn"><a href="/">Projects</a></button>
            <button id="contact" className="btn"><a href="/">Contact</a></button>
            <button id="resume" className="btn"><a href="/">Resume</a></button>
        </div>
    )
}

export default Navbar;