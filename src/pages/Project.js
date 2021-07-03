import React from "react";
import "./style.css";

import Navbar from "./../components/Navbar/Navbar";
import Head from "./../components/Head/Head"

function Project() {
    return (
        <div>
            <div className="homeBody">
                <Head />
            </div>
            <div className="homeNavbar">
                <Navbar />
            </div>
        </div>
    )
}

export default Project;
