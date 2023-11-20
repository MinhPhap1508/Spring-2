import React, { useState } from 'react';
import './productdetail.css'
import { Header } from './Header';
import { Footer } from './Footer';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById } from '../../service/ProductService';
import { useEffect } from 'react';
import { addCart, increase } from '../../service/CartService';
import { toast } from 'react-toastify';
import { infoToken } from '../../service/Account';
import Swal from 'sweetalert2';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import { GetAllByCategory } from '../../service/Home';

const ProductDetail = () => {
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState(null);
    const [list, setList] = useState([]);
    const navigate = useNavigate();
    const param = useParams();
    const vnd = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    })

    const getProduct = async (id) => {
        const res = await getProductById(id);
        console.log("res d", res);
        setProduct(res.data)
    }
    const getAllByCate = async () => {
        const res = await GetAllByCategory(param.id);
        setList(res);
    }

    const tang = async (productId) => {
        const res = infoToken();
        await addCart(1, res.sub, productId);
        getProduct();
    }
    const handleIncrease = async (co) => {
        let quantity = document.getElementById("input-quantity" + co.id)
        quantity.value = parseInt(quantity.value) + 1;
        const res = infoToken();
        // await increase(res.sub, c.id)
        await addCart(1, res.sub, co.id)
        getProduct();
    }
    const buyNow = async (p) => {
        const res = infoToken();
        if(res != null) {
             await addCart(1,res.sub, p.id);
             navigate("/cart")
        } else {
            Swal.fire("Vui lòng đăng nhập")
            navigate("/login");
        }    };

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
             await addCart(quantity,res.sub, p.id);
             toast("Thêm vào giỏ hàng thành công")
        } else {
            Swal.fire("Vui lòng đăng nhập")
            navigate("/login");
        }
    }
    useEffect(() => {
        getProduct(param.id)
        getAllByCate();
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
                                    max="30"
                                    value={quantity}
                                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                                />
                                <div>
                                    <button onClick={increaseQuantity}>+</button>
                                </div>
                            </div>
                            <div className="action-buttons">
                                <button className="btn btn-outline-danger btn-block btn-lg" onClick={() => addToCart(product)}>Thêm vào giỏ hàng</button>
                                <button className='btn btn-dark btn-block btn-lg' onClick={() => buyNow(product)}>Mua ngay</button>
                            </div>
                        </div>
                    </>
                )}

            </div>
                
            
            <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-lg-12">
            <h3>Có lẽ bạn cũng sẽ thích</h3>
              <div className="women-item-carousel">
                <div className="owl-women-item owl-carousel d-flex">
                  <Swiper
                    slidesPerView={4}
                    spaceBetween={10}
                    freeMode={true}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[FreeMode, Pagination, Autoplay]}
                    className="mySwiper"
                  >
                    {list.map((p) => (

                      <SwiperSlide>
                        <div className="item mt-5">
                          <div className="thumb">
                            <img style={{ height: "320px", width: "430px", objectFit:"cover", borderRadius:"20px" }}
                              src={p.image}
                              alt="" />
                          </div>
                          <div className="down-content">
                            <h4>{p.nameProduct}</h4>
                            <span>{p.price}</span>
                            <p>{vnd.format(p.priceProduct)}</p>

                          </div>
                        </div>
                      </SwiperSlide>
                    ))}

                  </Swiper>

                </div>
              </div>
            </div>
          </div>
        </div>

            <Footer />
        </>
    );
};

export default ProductDetail;