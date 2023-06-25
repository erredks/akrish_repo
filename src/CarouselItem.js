import React from "react";

export const CarouselItem = (props)=> {
    return <div className="carousel-item">
        <div>Getting</div>
        <div className="carousel-item-text">{props.children}</div>
    </div>;
};