import { useEffect, useState } from "react";
import { LeftNav } from "./LeftNav/LeftNav"
import { ProductsList } from "./ProductsList/ProductsList"

export const Products = () => {
    const [allData, setAllData] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                setAllData(data.products);
                setFilteredProducts(data.products); // Initialize filtered products with all products
            });
    }, []);

    const handleFilter = (filterValue) => {
        const filtered = allData.filter(product => product.title.toLowerCase().includes(filterValue.toLowerCase()));
        setFilteredProducts(filtered);
        console.log('TEST Filter', filterValue);
    };

    return (
        <div style={{ display: 'flex' }}>
            <LeftNav style={{ flex: '15' }} onFilter={handleFilter} />
            <ProductsList style={{ flex: '85' }} products={filteredProducts} />
        </div>
    );
}