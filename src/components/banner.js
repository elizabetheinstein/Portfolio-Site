import React from "react";
import Image from '../components/image'

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <Image />
                <div className="scroll">
                    <span>Scroll Down</span>
                </div>
            </div>
        </div>
    )
};

export default Banner;