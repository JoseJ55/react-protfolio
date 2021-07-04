import React from "react";
import "./style.css";

function Code() {
    return (
        <div className="code">
            <pre>
                <code>
                    var hello = "Hello World";
                    console.log(hello)
                </code>
            </pre>
        </div>
    )
}

export default Code;