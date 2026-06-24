"use client";

import React, {useState} from "react"
import { StaticImageData } from 'next/image';
import Image from "next/image";

function Slideshow ({ images }: { images: StaticImageData[] }) {

    const [nextIndex, setNextIndex] = useState (0);
    const arrayLength = images.length;

    function handleForwardClick (){
        if (nextIndex < arrayLength - 1) {
            setNextIndex(nextIndex + 1);
        } else {
            setNextIndex(0);
        }
    }

    function handleBackClick (){
        if (nextIndex > 0 ){
            setNextIndex(nextIndex - 1);
        } else {
            setNextIndex(arrayLength - 1);
        }
    };
   
    return(
        <div id="slideshow-container" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <span onClick={handleBackClick} style={{fontSize: 50, cursor: 'pointer'}}>&lt;</span>
            <div id="slideshow-image">
                <Image style={{width: 300}} src={images[nextIndex]} alt="Images"/>
            </div>           
            <span onClick={handleForwardClick} style={{fontSize: 50, cursor: 'pointer'}}>&gt;</span>
        </div>
    )
}

export default Slideshow;