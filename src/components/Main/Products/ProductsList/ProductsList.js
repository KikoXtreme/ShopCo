import React, { useEffect, useState } from "react";
import { ProductsItem } from "../ProductsItem/ProductsItem"
import { Sorting } from "../Sorting/Sorting"

export const ProductsList = () => {
    const [allData, setAllData] = useState([]);

    const [sortBy, setSortBy] = useState("price");
    const [sortOrder, setSortOrder] = useState("asc");

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                setAllData(data.products)
            });
    }, []);

    const handleSortChange = (event) => {
        const { id, value } = event.target;
        if (id === "sort-by") {
            setSortBy(value);
        } else if (id === "sort-order") {
            setSortOrder(value);
        }
    };

    const sortedProducts = allData.slice().sort((a, b) => {
        if (sortBy === "price") {
            return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
        } else if (sortBy === "rating") {
            return sortOrder === "asc" ? a.rating - b.rating : b.rating - a.rating;
        }
        // Add more cases for other sorting criteria if needed
        return 0;
    });

    if (!allData || allData.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', flex: '85' }}>
            <Sorting sortBy={sortBy} sortOrder={sortOrder} onSortChange={handleSortChange} />
            <div style={{ flex: '1', display: 'flex', flexWrap: 'wrap' }}>
                {sortedProducts.map((product) => (
                    <ProductsItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}