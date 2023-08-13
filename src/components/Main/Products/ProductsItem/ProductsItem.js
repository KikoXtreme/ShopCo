import "./productsItem.css";
import { Rating } from "../../../Utils/Rating/Rating";

export const ProductsItem = ({ product }) => {
    const { title, description, price, thumbnail, rating } = product;

    return (
        <div className="card">
            <div>
                <img   className="img" src={thumbnail} alt="Product" />
            </div>
            <div className="info">
                <h3>{title}</h3>
                <p>{description}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Rating rating={rating} />
                    <p style={{ marginLeft: "4px" }}>({rating}/5.00)</p>
                </div>
                <p>Price: {'\u20AC'} {price}</p>
                <button className="button">Add to Cart</button>
            </div>
        </div>
    );
}