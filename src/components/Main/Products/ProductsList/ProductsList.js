import { useEffect, useState } from "react";
import { ProductsItem } from "../ProductsItem/ProductsItem"
import { Sorting } from "../Sorting/Sorting"

export const ProductsList = () => {
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                setAllData(data.products)
            });
    }, []);

    if (!allData || allData.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', flex: '85' }}>
            <Sorting />
            <div style={{ flex: '1', display: 'flex', flexWrap: 'wrap' }}>
                {allData.map((product) => (
                    <ProductsItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}