import { useEffect, useState } from "react";
import { LeftNav } from "./LeftNav/LeftNav";
import { ProductsList } from "./ProductsList/ProductsList";

export const Products = () => {
    const [allData, setAllData] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [titleFilter, setTitleFilter] = useState("");
    const [minPriceFilter, setMinPriceFilter] = useState("");
    const [maxPriceFilter, setMaxPriceFilter] = useState("");
    const [loading, setLoading] = useState(true); // Add the loading state


    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                setAllData(data.products);
                setFilteredProducts(data.products); // Initialize filtered products with all products
                setLoading(false); // Set loading to false after products are fetched
            });
    }, []);

    const handleTitleFilter = (filterValue) => {
        setTitleFilter(filterValue);
        filterProducts(titleFilter, minPriceFilter, maxPriceFilter);
    };

    const handlePriceFilter = (minPrice, maxPrice) => {
        setMinPriceFilter(minPrice);
        setMaxPriceFilter(maxPrice);
        filterProducts(titleFilter, minPrice, maxPrice);
    };

    const filterProducts = (titleFilter, minPriceFilter, maxPriceFilter) => {
        const filtered = allData.filter(product =>
            product.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
            (minPriceFilter === "" || product.price >= parseFloat(minPriceFilter)) &&
            (maxPriceFilter === "" || product.price <= parseFloat(maxPriceFilter))
        );
        setFilteredProducts(filtered);
    };

    return (
        <div style={{ display: 'flex' }}>
            <LeftNav style={{ flex: '15' }} onTitleFilter={handleTitleFilter} onPriceFilter={handlePriceFilter} />
            <ProductsList style={{ flex: '85' }} products={filteredProducts} loading={loading}/>
        </div>
    );
}