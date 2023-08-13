import { useState } from "react";
import "../../../../css/productsItem.css";
import { Rating } from "../../../Utils/Rating/Rating";
import CartModal from "../../CartModal/CartModal";

export const ProductsItem = ({ product }) => {
    const { title, description, price, thumbnail, rating } = product;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddToCart = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="card">
            <div>
                <img className="img" src={thumbnail} alt="Product" />
            </div>
            <div className="info">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="rating" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Rating rating={rating} />
                    <p style={{ marginLeft: "4px" }}>({rating}/5.00)</p>
                </div>
                <p className="price">Price: {'\u20AC'} {price}</p>
                <button className="button" onClick={handleAddToCart}>Add to Cart</button>
                <CartModal isOpen={isModalOpen} onClose={handleCloseModal} />
            </div>
        </div>
    );
}