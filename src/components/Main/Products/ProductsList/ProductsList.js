import { useState } from "react";
import { ProductsItem } from "../ProductsItem/ProductsItem";
import { Sorting } from "../Sorting/Sorting";
import "../../../../css/spinner.css";
import "../../../../css/productsList.css";

export const ProductsList = ({ products, loading }) => {
    const [sortBy, setSortBy] = useState("price");
    const [sortOrder, setSortOrder] = useState("asc");

    const [displayedItems, setDisplayedItems] = useState(20);
    const itemsPerPage = 20;

    const handleSortChange = (event) => {
        const { id, value } = event.target;
        if (id === "sort-by") {
            setSortBy(value);
        } else if (id === "sort-order") {
            setSortOrder(value);
        }
    };

    const sortedProducts = products.slice().sort((a, b) => {
        if (sortBy === "price") {
            return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
        } else if (sortBy === "rating") {
            return sortOrder === "asc" ? a.rating - b.rating : b.rating - a.rating;
        } else if (sortBy === "title") {
            return sortOrder === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
        }

        return 0;
    });

    const loadMoreItems = () => {
        setDisplayedItems(displayedItems + itemsPerPage);
    };

    const itemsToDisplay = sortedProducts.slice(0, displayedItems);

    if (loading) {
        return (
            <div
                className="loading"
                style={{ display: 'flex', flexDirection: 'column', flex: '85', alignItems: 'center', justifyContent: 'center' }}
            >
                <div className="spinner"></div>
                <div>Loading...</div>
            </div>
        );
    }

    if (!products || products.length === 0) {
        return (
            <div
                className="no-products"
                style={{ display: 'flex', flexDirection: 'column', flex: '85', alignItems: 'center', justifyContent: 'center' }}
            >
                No Products Found!
                <p className="no-products-p" >Please check your filters again.</p>
            </div>
        );
    }

    return (
        <div className="product-page" style={{ display: 'flex', flexDirection: 'column', flex: '85' }}>
            <Sorting sortBy={sortBy} sortOrder={sortOrder} onSortChange={handleSortChange} />
            <div style={{ flex: '1', display: 'flex', flexWrap: 'wrap' }}>
                {itemsToDisplay.map((product) => (
                    <ProductsItem key={product.id} product={product} />
                ))}
            </div >
            <div className="load-more-container">
                {displayedItems < products.length && (
                    <button onClick={loadMoreItems} className="load-more-button">
                        Load More
                    </button>
                )}
            </div>
        </div>
    );
}