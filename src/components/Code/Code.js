import React from "react";
import "./style.css";

function Code({id}) {
    const projectCode = [
        `var hello = "Hello World";
        console.log(hello);`,
        `onvvoetrob random`,
        `onert more random`
    ]

    return (
        <div className="code">
            <pre>
                <code>
                    {projectCode[id-1]}
                </code>
            </pre>
        </div>
    )
}

export default Code;