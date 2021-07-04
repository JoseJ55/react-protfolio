import React, { useState } from "react";
import "./style.css";

const projectImages = [
    "./../../assets/Images/sunset.jpg", 
    "./../../assets/Images/sunset.jpg",
    "./../../assets/Images/sunset.jpg"
]

function Images() { // add things to make a slide show of images
    const [image, setImage] = useState(projectImages);
    const [currentImage, setCurrentImage] = useState(image[0])

    return (
        <>
            <div className="images">
                <div className="btnChange">
                    <button className="prev change">Prev</button>
                    <button className="next change">Next</button>
                </div>
            </div>
        </>
    )
}

export default Images;