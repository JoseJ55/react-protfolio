import React from "react";
import "./style.css";

import Navbar from "../components/Navbar/Navbar";
import Head from "../components/Head/Head";
import Code from "../components/Code/Code";

// need to find out how to make templates for changing html
function Project() {
    return (
        <div>
            <div className="homeBody">
                <Head id={1}/>
                <Code id={1}/>
            </div>
            <div className="homeNavbar">
                <Navbar />
            </div>
        </div>
    )
}

export default Project;
