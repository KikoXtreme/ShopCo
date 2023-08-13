import '../../css/header.css'
import { Link } from 'react-router-dom';

export const Header = () => {

    return (
        <header className="header">
            <h1>ShopCo</h1>
            <h2>Best Prices, Best Goods</h2>
            <div className="header-lists">
                <ul className="header-lists-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                </ul>
            </div>
        </header>
    );
}