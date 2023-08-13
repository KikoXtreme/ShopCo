import React from "react";
import "../../../css/cartModal.css";

const CartModal = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Product Added to Cart</h2>
                <p>Your selected product has been added to the cart.</p>
                <button className="close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default CartModal;