import React from "react";
import "./style.css";

function Navbar() {
    return (
        <div id="nav">
            <button className="btn"><a href="/">Home</a></button>
            <button className="btn"><a href="#about">About</a></button>
            <button className="btn"><a href="#projects">Projects</a></button>
            <button className="btn"><a href="#contact">Contact</a></button>
            <button className="btn"><a href="#resume">Resume</a></button>
        </div>
    )
}

export default Navbar;