import React from "react";
import "./style.css";

import Description from "./../Description/Description";
import Links from "./../Links/Links";
import Images from "./../Images/Images";

function Head({ id }) {
    const projects = [
        "one",
        "two",
        "third"
    ]

    return(
        <div>
            <h2 className="projectTitle"> {projects[id - 1]} </h2>
            <div className="projectInfo">
                <div className="projectText">
                    <Description id={id-1} />
                    <Links id={id-1}/>
                </div>
                <Images id={id-1}/>
            </div>
        </div>
    )
}

export default Head;