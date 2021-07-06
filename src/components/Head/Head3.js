import React from "react";
import "./style.css";

import Description from "./../Description/Description";
import Links from "./../Links/Links";
import Images from "./../Images/Images";

function Head() {
    return(
        <div>
            <h2 className="projectTitle"> Project1</h2>
            <div className="projectInfo">
                <div className="projectText">
                    <Description />
                    <Links />
                </div>
                <Images />
            </div>
        </div>
    )
}

export default Head;