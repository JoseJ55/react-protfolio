import React from "react";
import "./style.css";

import Navbar from "../components/Navbar/Navbar";
import Head from "../components/Head/Head";
import Code from "../components/Code/Code";

function Project(id) {
    return (
        <div>
            <div className="homeBody">
                <Head id={3}/>
                <Code id={3}/>
            </div>
            <div className="homeNavbar">
                <Navbar />
            </div>
        </div>
    )
}

export default Project;
