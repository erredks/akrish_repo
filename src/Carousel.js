import React from "react";
import './App.css';
import { CarouselItem } from "./CarouselItem";

export const Carousel = ()=> {
    const items = [
        {
            title: "base1",
            discription: "Getting the description"
        },
        {
            title: "base2",
            discription: "Getting the description"
        },
        {
            title: "base3",
            discription: "Getting the description"
        }
    ]
    return(
        
        <div className="carousel">
            <div className="inner">
                <div>getting data</div>
                 <CarouselItem />
            </div>
        </div>
        );
}

export default Carousel;