import React from "react";
import "./style.css";

import Navbar from "./../components/Navbar/Navbar";
import Head from "./../components/Head/Head";
import Code from "./../components/Code/Code";

function Project() {
    return (
        <div>
            <div className="homeBody">
                <Head />
                <Code />
            </div>
            <div className="homeNavbar">
                <Navbar />
            </div>
        </div>
    )
}

export default Project;
