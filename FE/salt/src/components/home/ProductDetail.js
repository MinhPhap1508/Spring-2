import React, { useState } from 'react';
import './productdetail.css'
import { Header } from './Header';
import { Footer } from './Footer';

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
            <Header/>
            <div className="product-container">
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
                        <button className="btn btn-outline-danger btn-block btn-lg" onClick={addToCart}>Thêm vào giỏ hàng</button>
                        <button className='btn btn-dark btn-block btn-lg' onClick={buyNow}>Mua ngay</button>
                    </div>
                </div>

            </div>
            <div className="description-section mt-5" style={{ marginLeft: "5rem" }}>
                <h3>Giới thiệu thêm</h3>
                <p>
                    Bánh ép thịt là món ăn best seller của Nhà Muối
                </p>
            </div>
        <Footer/>
        </>
    );
};

export default ProductDetail;