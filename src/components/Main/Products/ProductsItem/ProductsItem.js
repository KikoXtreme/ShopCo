import { useEffect, useState } from "react";
import "./productsItem.css";
import { Rating } from "../../../Utils/Rating/Rating";

export const ProductsItem = () => {
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                setAllData(data)
            });
    }, []);

    if (!allData.products || allData.products.length === 0) {
        // Return loading or placeholder content while waiting for the data
        return <div>Loading...</div>;
    }

    const productTitle = allData.products[0].title;
    const productDescription = allData.products[0].description;
    // const productCategory = allData.products[0].category;
    const productPrice = allData.products[0].price;
    const productPic = allData.products[0].thumbnail;
    const productRating = allData.products[0].rating;

    console.log(allData.products);

    return (
        <div className="card">
            <div className="img">
                <img src={productPic} alt="Product" />
            </div>
            <div className="info">
                <h3>{productTitle}</h3>
                {/* <p>{productCategory}</p> */}
                <p>{productDescription}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Rating rating={productRating} />
                    <p style={{ marginLeft: "4px" }}>({productRating}/5.00)</p>
                </div>
                <p>{'\u20AC'} {productPrice}</p>
                <a className="a" href="www.google.bg">Add to Cart</a>
            </div>
        </div>
    )
}