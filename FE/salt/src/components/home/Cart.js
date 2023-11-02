import './cart.css'
import "bootstrap/dist/css/bootstrap.css" 
export function Cart() {

    return (
        <>
            <section className="h-100 h-custom" style={{ backgroundColor: '#d2c9ff' }}>
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
                                                <hr className="my-4" />
                                                <div className="row mb-4 d-flex justify-content-between align-items-center">
                                                    <div className="col-md-2 col-lg-2 col-xl-2">
                                                        <img src="img/potato.png" className="img-fluid rounded-3" alt="Cotton T-shirt" />
                                                    </div>
                                                    <div className="col-md-3 col-lg-3 col-xl-3">
                                                        <h6 className="text-muted">Bánh ép thịt</h6>
                                                        <h6 className="text-black mb-0">Bánh ép</h6>
                                                    </div>
                                                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                        <button className="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                                            <i className="fas fa-minus" />
                                                        </button>
                                                        <input id="form1" min={0} name="quantity" defaultValue={1} type="number" className="form-control form-control-sm" />
                                                        <button className="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                                            <i className="fas fa-plus" />
                                                        </button>
                                                    </div>
                                                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                        <h6 className="mb-0">29.000</h6>
                                                    </div>
                                                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                        <a href="#!" className="text-muted"><i className="fas fa-times" /></a>
                                                    </div>
                                                </div>
                                                <hr className="my-4" />
                                                <div className="row mb-4 d-flex justify-content-between align-items-center">
                                                    <div className="col-md-2 col-lg-2 col-xl-2">
                                                        <img src="img/potato.png" className="img-fluid rounded-3" alt="Cotton T-shirt" />
                                                    </div>
                                                    <div className="col-md-3 col-lg-3 col-xl-3">
                                                        <h6 className="text-muted">Khoai tây chiên</h6>
                                                        <h6 className="text-black mb-0">Ăn vặt</h6>
                                                    </div>
                                                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                        <button className="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                                            <i className="fas fa-minus" />
                                                        </button>
                                                        <input id="form1" min={0} name="quantity" defaultValue={1} type="number" className="form-control form-control-sm" />
                                                        <button className="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                                            <i className="fas fa-plus" />
                                                        </button>
                                                    </div>
                                                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                        <h6 className="mb-0">20.000</h6>
                                                    </div>
                                                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                        <a href="#!" className="text-muted"><i className="fas fa-times" /></a>
                                                    </div>
                                                </div>
                                                <hr className="my-4" />
                                                <div className="row mb-4 d-flex justify-content-between align-items-center">
                                                    <div className="col-md-2 col-lg-2 col-xl-2">
                                                        <img src="img/potato.png" className="img-fluid rounded-3" alt="Cotton T-shirt" />
                                                    </div>
                                                    <div className="col-md-3 col-lg-3 col-xl-3">
                                                        <h6 className="text-muted">Bánh ép khô</h6>
                                                        <h6 className="text-black mb-0">Bánh ép</h6>
                                                    </div>
                                                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                        <button className="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                                            <i className="fas fa-minus" />
                                                        </button>
                                                        <input id="form1" min={0} name="quantity" defaultValue={1} type="number" className="form-control form-control-sm" />
                                                        <button className="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                                            <i className="fas fa-plus" />
                                                        </button>
                                                    </div>
                                                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                        <h6 className="mb-0">7.000</h6>
                                                    </div>
                                                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                        <a href="#!" className="text-muted"><i className="fas fa-times" /></a>
                                                    </div>
                                                </div>
                                                <hr className="my-4" />
                                                <div className="pt-5">
                                                    <h6 className="mb-0"><a href="/" className="text-body"><i className="fas fa-long-arrow-alt-left me-2" />Back to shop</a></h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 bg-grey">
                                            <div className="p-5">
                                                <h3 className="fw-bold mb-5 mt-2 pt-1">VN PAY</h3>
                                                <hr className="my-4" />
                                                <div className="d-flex justify-content-between mb-4">
                                                    <h5 className="text-uppercase">3 sản phẩm</h5>
                                                    <h5>100.000</h5>
                                                </div>
                                                <h5 className="text-uppercase mb-3">Phí ship</h5>
                                                <div className="mb-4 pb-2">
                                                    <select className="select">
                                                        <option value={1}>Giao hàng tiết kiệm</option>
                                                        <option value={2}>Giao hàng nhanh</option>
                                                        <option value={3}>Giao hàng cấp tốc</option>

                                                    </select>
                                                </div>
                                                <h5 className="text-uppercase mb-3">Mã giảm giá</h5>
                                                <div className="mb-5">
                                                    <div className="form-outline">
                                                        <input type="text" id="form3Examplea2" className="form-control form-control-lg" />
                                                        <label className="form-label" htmlFor="form3Examplea2">Nhập mã giảm giá của bạn</label>
                                                    </div>
                                                </div>
                                                <hr className="my-4" />
                                                <div className="d-flex justify-content-between mb-5">
                                                    <h5 className="text-uppercase">Tổng tiền</h5>
                                                    <h5>125.000</h5>
                                                </div>
                                                <button type="button" className="btn btn-dark btn-block btn-lg" data-mdb-ripple-color="dark">Thanh toán</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}