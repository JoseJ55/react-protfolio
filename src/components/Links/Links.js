import React from "react";
import "./style.css";

function Links({id}) {
    const projectLinks = [
        "randomlink",
        "links",
        "nolinks"
    ]
    return(
        <div className="Links">
            <p>GitHub: <a href={projectLinks[id]}>{projectLinks[id]}</a></p>
        </div>
    )
}

export default Links;