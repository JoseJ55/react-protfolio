import React, { useState } from "react";
import "./style.css";

import sun from "./../../assets/Images/sunset.jpg";

const projectImages = [
    sun,
    sun,
    sun,
]

function Images() { // add things to make a slide show of images
    const [image, setImage] = useState(projectImages);
    const [currentImage, setCurrentImage] = useState(sun)
    console.log(image)
    console.log(sun)
    console.log(currentImage)
    const [prevImage, setPrevImage] = useState();
    const [nextImage, setNextImage] = useState();

    const backImage = {backgroundImage: `url(${sun})`}

    const changeNext = () => {
        if(nextImage){
            console.log("next")
        }
    }

    const changePrev = () => {
        if(prevImage){
            console.log("Prev")
        }
    }

    return (
        <>
            <div className="images" style={backImage}>
                <div className="btnChange">
                    <button onClick={changePrev} className="prev change">Prev</button>
                    <button onClick={changeNext} className="next change">Next</button>
                </div>
            </div>
        </>
    )
}

export default Images;