import "../../../css/rating.css";

export const Rating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars <= 1;

    const stars = Array.from({ length: rating + 1 }, (_, index) => {
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