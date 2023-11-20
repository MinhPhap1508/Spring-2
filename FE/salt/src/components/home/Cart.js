import { useEffect, useState } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import './cart.css'
import "bootstrap/dist/css/bootstrap.css"
import { addCart, decrease, deleteCart, getAllDelivery, getCartDetail, increase } from '../../service/CartService'
import { infoToken } from '../../service/Account'
import Swal from 'sweetalert2'
import { Paypal } from '../Paypal'
import { Field } from 'formik'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export function Cart() {
    const [checkout, setCheckout] = useState(false);
    const vnd = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    })

    const [cart, setCart] = useState([])
    const [customer, setCustomer] = useState();
    const [delivery, setDelivery] = useState([]);
    const [selectedDelivery, setSelectedDelivery] = useState(null);
    const [selectedDeliveryPrice, setSelectedDeliveryPrice] = useState(0);
    const navigate = useNavigate();
    // const [quantity, setQuantity] = useState(1);

    const getDelivery = async () => {
        const res = await getAllDelivery();
        console.log("deli", res);
        setDelivery(res);
    }
     const totalPriceProduct = cart.reduce((acc, item) => {
        return acc + (item.price * item.quantity)
     }, 0);
     const totalPrice = selectedDeliveryPrice + totalPriceProduct;
     const handleDeliveryChange = (event) => {
        const selectedDeliveryName = event.target.value;
        const selectedDelivery = delivery.find(item => item.nameDelivery === selectedDeliveryName);
        
        if (selectedDelivery) {
          setSelectedDeliveryPrice(selectedDelivery.priceDelivery);
        } else {
          setSelectedDeliveryPrice(0);
        }
      };
    //   const getCustomer = async() => {
    //     const res = infoToken();
    //     if(res != null) {
    //         const response = await axios.get(``)
    //     }
    //   }
    const addToOrder = async () => {

    }

    const handleIncrease = async (co) => {
        let quantity = document.getElementById("input-quantity" + co.id)
        quantity.value = parseInt(quantity.value) + 1;
        const res = infoToken();
        // await increase(res.sub, c.id)
        await addCart(2, res.sub, co.id)
        getCart();
    }
    const tang = async (productId) => {
        const res = infoToken();
        await addCart(1, res.sub, productId)
        getCart();
    }
    const giam = async (productId) => {
        const res = infoToken();
        await addCart(-1, res.sub, productId);
        getCart();
    }

    const handleDecrease = async (c) => {
        let quantity = document.getElementById("input-quantity" + c.id)
        try {
            if (quantity.value <= 1) {
                Swal.fire({
                    title: "Bạn có muốn xóa sản phẩm này khỏi giỏ hàng không?",
                    text: c.name,
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Đồng ý",
                    cancelButtonText: "Huỷ",
                })
                    .then(async (confirm) => {
                        if (confirm.isConfirmed) {
                            const res = infoToken();
                            await deleteCart(res.sub, c.id)
                            Swal.fire("Xóa sản phẩm thành công!", "", "success");
                            getCart();
                        }
                    })
            }
            if (quantity.value > 1) {
                // setQuantity(quantity - 1);
                quantity.value = parseInt(quantity.value) - 1;
                const res = infoToken();
                await decrease(res.sub, c.id)
                getCart();
            }

        } catch (e) {
            console.log(e);
        }

    };

    const getCart = async () => {
        const res = infoToken();
        console.log("sub", res);
        if (res != null) {
            const ress = await getCartDetail(res.sub);
            console.log("ress", ress);
            setCart(ress.data);
        }
    }

    const handleDelete = async (c) => {
        try {
            Swal.fire({
                title: "Bạn có muốn xóa sản phẩm này khỏi giỏ hàng không?",
                text: c.name,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Đồng ý",
                cancelButtonText: "Huỷ",
            })
                .then(async (confirm) => {
                    if (confirm.isConfirmed) {
                        const res = infoToken();
                        await deleteCart(res.sub, c.id)
                        Swal.fire("Xóa sản phẩm thành công!", "", "success");
                        getCart();
                    }
                })
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        getCart();
        getDelivery();
    }, [])
    

    return (
        <>
            <Header />
            <section className="h-100 h-custom mt-5 pt-3" style={{ backgroundColor: '#d2c9ff' }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12">
                            <div className="card card-registration card-registration-2" style={{ borderRadius: 15 }}>
                                <div className="card-body p-0">
                                    <div className="row g-0">
                                        <div className="col-lg-8">
                                            <div className="p-5">
                                                <div className="d-flex justify-content-between align-items-center mb-5">
                                                    <h1 className="fw-bold mb-0 text-black">Giỏ hàng của bạn</h1>
                                                    <h6 className="mb-0 text-muted">3 sản phẩm</h6>
                                                </div>
                                                {cart.map((c) => (
                                                    <>
                                                        <hr className="my-4" />
                                                        <div className="row mb-4 d-flex justify-content-between align-items-center">

                                                            <div className="col-md-2 col-lg-2 col-xl-2">
                                                                <img src={c.image} className="img-fluid rounded-3" alt="Cotton T-shirt" />
                                                            </div>
                                                            <div className="col-md-3 col-lg-3 col-xl-3">
                                                                <h6 className="text-muted">{c.name}</h6>
                                                                {/* <h6 className="text-black mb-0">Bánh ép</h6> */}
                                                            </div>
                                                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                                <button className="btn btn-link px-2" onClick={() => handleDecrease(c)}>
                                                                    <i className="fas fa-minus" />
                                                                </button>
                                                                <input style={{ textAlign: "center" }}
                                                                    id={`input-quantity${c.id}`}
                                                                    min="1"
                                                                    max="20" name="quantity"
                                                                    value={c.quantity}
                                                                    defaultValue={c.quantity} disabled
                                                                    className="form-control form-control-sm" />
                                                                <button className="btn btn-link px-2" onClick={() => tang(c.id)}>
                                                                    <i className="fas fa-plus" />
                                                                </button>
                                                            </div>
                                                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                                <h6 className="mb-0">{vnd.format(c.price * c.quantity)}</h6>
                                                            </div>
                                                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                                <span onClick={() => handleDelete(c, c.name)} className="text-muted"><i className="fas fa-times" /></span>
                                                            </div>


                                                        </div>
                                                    </>
                                                ))}

                                                <hr className="my-4" />
                                                <div className="pt-5">
                                                    <h5 className="mb-0"><a href="/list" className="text-body" style={{ fontFamily: "monaco" }}><i className="fas fa-long-arrow-alt-left me-2" />Quay về</a></h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 bg-grey">
                                            <div className="p-5">
                                                <h3 className="fw-bold mb-5 mt-2 pt-1">Thông tin cá nhân</h3>

                                                <hr className="my-4" />
                                                <div className="d-flex justify-content-between mb-4">
                                                    <h5 className="text-uppercase" style={{ fontFamily: "monaco" }}>3 sản phẩm</h5>
                                                    <h5>{vnd.format(totalPriceProduct)}</h5>
                                                </div>
                                                <h5 className="text-uppercase mb-3">Chọn đơn vị vận chuyển</h5>
                                                <div className="mb-4 pb-2">

                                                    <select onChange={handleDeliveryChange}>
                                                        <option value="">Chọn đơn vị vận chuyển</option>
                                                        {delivery.map(item => (
                                                            <option key={item.name} value={item.nameDelivery}>{item.nameDelivery}</option>
                                                        ))}
                                                    </select>
                                                    {selectedDeliveryPrice && (
                                                        <div className='mt-5 d-flex' style={{fontFamily:"display"}}>
                                                            <h4>Phí vận chuyển:</h4>
                                                            <span style={{marginLeft:"6.2rem", fontSize:"22px"}}>{vnd.format(selectedDeliveryPrice)}</span>
                                                        </div>
                                                    )}
                                                
                                                </div>

                                                <hr className="my-4" />
                                                <div className="d-flex justify-content-between mb-5">
                                                    <h5 className="text-uppercase">Tổng tiền</h5>
                                                    <h5>{vnd.format(totalPrice)}</h5>
                                                </div>
                                                <div>
                                                    {checkout ? (
                                                        <Paypal props1 = {totalPrice} props2 = {cart} />
                                                    ) : (
                                                        <button onClick={() => { setCheckout(true) }} type="button" className="btn btn-dark btn-block btn-lg" data-mdb-ripple-color="dark">Thanh toán</button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}