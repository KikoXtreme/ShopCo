import "./productsItem.css";

export const ProductsItem = () => {
    return (
        <div className="card">
            <div className="img">
                <img src="/assets/blazePic.jpg" alt="Product" />
            </div>
            <div className="info">
                <h3>Card Title</h3>
                <p>Short description of what this is all about - crafted to make people interested</p>
                <a className="a" href="www.google.bg">See more</a>
            </div>
        </div>
    )
}