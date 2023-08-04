import React from "react";
import "./Rating.css";

export const Rating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    const stars = Array.from({ length: 5 }, (_, index) => {
        let starClassName = "star";
        if (index < fullStars) {
            starClassName += " full";
        } else if (hasHalfStar && index === fullStars) {
            starClassName += " half";
        }
        return <span key={index} className={starClassName}></span>;
    });

    return <div className="rating">{stars}</div>;
};