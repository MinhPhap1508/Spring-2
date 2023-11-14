import React, { useState } from 'react';
import './productdetail.css'
import { Header } from './Header';
import { Footer } from './Footer';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById } from '../../service/ProductService';
import { useEffect } from 'react';
import { addCart } from '../../service/CartService';
import { toast } from 'react-toastify';
import { infoToken } from '../../service/Account';
import Swal from 'sweetalert2';

const ProductDetail = () => {
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();
    const param = useParams();

    const getProduct = async (id) => {
        const res = await getProductById(id);
        console.log("res d", res);
        setProduct(res.data)
    }

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
    const addToCart = async (p) => {
        const res = infoToken();
        if(res != null) {
             await addCart(1,res.sub, p.id);
             toast("Thêm vào giỏ hàng thành công")
        } else {
            Swal.fire("Vui lòng đăng nhập")
            navigate("/login");
        }
    }
    useEffect(() => {
        getProduct(param.id)
    }, param.id)

    return (
        <>
            <Header />
            <div className="product-container">
                {product && (
                    <>
                        <div className="image-section">
                            <img src={product.image} alt="Example Product" />
                        </div>
                        <div className="details-section">
                            <h2>{product.nameProduct}</h2>
                            <p>{product.priceProduct}</p>
                            <div className="quantity-section">
                                <div style={{ marginRight: "15px" }}>
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
                                <button className="btn btn-outline-danger btn-block btn-lg" onClick={() => addToCart(product)}>Thêm vào giỏ hàng</button>
                                <button className='btn btn-dark btn-block btn-lg' onClick={buyNow}>Mua ngay</button>
                            </div>
                        </div>
                    </>
                )}

            </div>
            <div className="description-section mt-5" style={{ marginLeft: "5rem" }}>
                <h3>Giới thiệu thêm</h3>
                <p>
                    Bánh ép thịt là món ăn best seller của Nhà Muối
                </p>
            </div>
            <Footer />
        </>
    );
};

export default ProductDetail;