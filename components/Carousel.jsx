import { useState } from "react";
import React from 'react'
import Image from "next/image";
import style from '../styles/carousal.module.css'
const Carousal = ({ images, icon }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const previousImage = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };
    const nextImage = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };
    return (
        <div className="relative w-auto">
            <button className={`carousel-button absolute ${style.absolute1} bg-black text-white text-3xl mx-2 rounded-full p-3`} onClick={previousImage}>
                <Image
                    className="invert rotate-180"
                    src={icon}
                    width={20}
                    height={20}
                    alt='d'
                />
            </button>
            <Image
                className={`${style.height}`}
                src={images[currentIndex]}
                height={683}
                width={960}
                alt='img'
            />
            <button className={`carousel-button absolute ${style.absolute2} bg-black text-white text-3xl mx-2 rounded-full p-3`} onClick={nextImage}>
                <Image
                    className="invert "
                    src={icon}
                    width={20}
                    height={20}
                    alt='d'
                />
            </button>
        </div>
    )
}

export default Carousal