import React from "react";
import './shop-header.css';
import {Link} from 'react-router-dom';

const ShopHeader = ({numItems, total}) => {
    return (
        <header className="shop-header row">
            <Link to="/" className="home-link">
                <div className="logo text-dark">ReStore</div>
            </Link>
            <Link to="/cart" className="cart-link">
                <div className="shopping-cart">
                    <i className="bi bi-basket-fill shopping-cart-text"/>
                    {numItems} items (${total})
                </div>
            </Link>
        </header>
    );
};

export default ShopHeader;