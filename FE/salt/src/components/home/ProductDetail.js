import React, { useState } from 'react';
import './productdetail.css'

const ProductDetail = () => {
    const [quantity, setQuantity] = useState(1);

    const addToCart = () => {
        alert('The product has been added to the cart.');
    };

    const buyNow = () => {
        alert('You have successfully purchased the product.');
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light bg-white border-bottom">
                <a className="navbar-brand ml-2 font-weight-bold" href="#"><span id="burgundy">Bánh ép Huế</span><span id="orange">Nhà Muối</span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor" aria-controls="navbarColor" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarColor">
                    <ul className="navbar-nav">
                        <li className="nav-item rounded bg-light search-nav-item"><input type="text" id="search" className="bg-light" placeholder="Bánh ép, đồ ăn vặt" /><span className="fa fa-search text-muted" /></li>
                        <li className="nav-item"><a className="nav-link" href="/login"><span className="fa fa-user-o" /><span className="text">Login</span></a> </li>
                        <li className="nav-item "><a className="nav-link" href="/cart"><span className="fa fa-shopping-cart" /><span className="text">Cart</span></a> </li>
                        <li className="nav-item "><a className="nav-link" href="/header"><span className="fa fa-shopping">Thực đơn</span></a></li>
                    </ul>
                </div>
            </nav>
            <div className="product-container mt-5">
                <div className="image-section">
                    <img src="img/banh.jpg" alt="Example Product" />
                </div>
                <div className="details-section">
                    <h2>Bánh ép đặt biệt</h2>
                    <p>Giá: 29.000</p>
                    <div className="quantity-section">
                        <div style={{marginRight:"15px"}}>
                            <button onClick={decreaseQuantity}>-</button>
                        </div>
                        <input
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                        />
                        <div>
                            <button onClick={increaseQuantity}>+</button>
                        </div>
                    </div>
                    <div className="action-buttons">
                        <button onClick={addToCart}>Thêm vào giỏ hàng</button>
                        <button onClick={buyNow}>Mua ngay</button>
                    </div>
                </div>

            </div>
            <div className="description-section mt-5" style={{ marginLeft: "5rem" }}>
                <h3>Giới thiệu thêm</h3>
                <p>
                    Bánh ép thịt là món ăn best seller của Nhà Muối
                </p>
            </div>
        </>
    );
};

export default ProductDetail;