import React from "react";
import "./style.css";

function Navbar() {
    return (
        <div id="nav">
            <button className="btn"><a href="/">About</a></button>
            <button className="btn"><a href="/">Projects</a></button>
            <button className="btn"><a href="/">Contact</a></button>
            <button className="btn"><a href="/">Resume</a></button>
        </div>
    )
}

export default Navbar;