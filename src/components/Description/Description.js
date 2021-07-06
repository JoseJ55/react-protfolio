import React from "react";
import "./style.css";

function Description({id}) {
    const projectDescription = [
        `this it random for now going to fill this with description of
        the projects and exlapin things about themf etgonrotgnorb
        ebovnrtb
         rotongborogtbnornson`,
         `oebboertun nortno sfibeov n   rngo e p  jojegonor 12434t5`,
         `obnfeobtonvkwperje 2 ovnrogtnboj third`
    ]

    return (
        <div className="desc">
            <p>
                {projectDescription[id]}
            </p>
        </div>
    )
}

export default Description;