import { Footer } from "../home/Footer";
import { Header } from "../home/Header";

export function List() {

    return (
        <>
            <Header />
            <div className="container" style={{ marginTop: "8rem", backgroundColor: "#f8f9fa", borderRadius: "20px", boxShadow: "4px 8px 9px grey" }}>
                {/* menu */}
                <section id="sidebar">
                    <p> Trang chủ | <b>Thực đơn</b></p>
                    <div className="border-bottom pb-2 ml-2">
                        <h4 id="burgundy">Lọc</h4>
                    </div>
                    <div className="py-2 border-bottom ml-3">
                        <h6 className="font-weight-bold">Thực đơn</h6>
                        <div id="orange"><span className="fa fa-minus" /></div>
                        <form>
                            <div className="form-group">
                                {/* <input type="checkbox" id="artisan" /> */}
                                <a href='#products'>Bánh Ép</a>
                            </div>
                            <div className="form-group">
                                {/* <input type="checkbox" id="breakfast" /> */}
                                <a href="#cake">Ăn Vặt</a>
                            </div>
                            <div className="form-group">
                                {/* <input type="checkbox" id="healthy" /> */}
                                <label htmlFor="healthy">Món Khác</label>
                            </div>
                            <div className="form-group">
                                {/* <input type="checkbox" id="healthy" /> */}
                                <label htmlFor="healthy">Giải Khát</label>
                            </div>
                        </form>
                    </div>
                </section>
                <div className="row mt-5 pt-5">
                    <div className='col-12' style={{fontFamily:"display"}} id="products"><h4>BÁNH ÉP</h4></div>
                    <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                        <div className="cad">
                            <img className="cad-img-top" src="img/banh.jpg" />
                            <div className="cad-body">
                                <h5><b>Bánh ép tôm - thịt</b> </h5>
                                <div className="d-flex flex-row my-2">
                                    <div className="text-muted">29.000/dĩa</div>
                                    <div className="ml-auto">
                                        <button className="border rounded bg-white sign"><span className="fa fa-plus" id="orange" /></button>
                                        <span className="px-sm-1">1 dĩa</span>
                                        <button className="border rounded bg-white sign"><span className="fa fa-minus" id="orange" /></button>
                                    </div>
                                </div>
                                <button className="btn w-100 rounded my-2">Thêm vào giỏ hàng</button>
                            </div>
                        </div>
                    </div>



                    <div className="row" id="cake">
                        <div className='col-12'><h4>ĂN VẶT</h4></div>
                        <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                            <div className="cad">
                                <img className="cad-img-top" src="img/potato.png" />
                                <div className="cad-body">
                                    <h5><b>Khoai tây chiên</b> </h5>
                                    <div className="d-flex flex-row my-2">
                                        <div className="text-muted">30.000/dĩa</div>
                                        <div className="ml-auto">
                                            <button className="border rounded bg-white sign"><span className="fa fa-plus" id="orange" /></button>
                                            <span className="px-sm-1">1 dĩa</span>
                                            <button className="border rounded bg-white sign"><span className="fa fa-minus" id="orange" /></button>
                                        </div>
                                    </div>
                                    <button className="btn w-100 rounded my-2">Thêm vào giỏ hàng</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='row' id="products">
                        <div className='col-12'><h4>MÓN KHÁC</h4></div>
                        <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                            <div className="cad">
                                <img className="cad-img-top" src="img/fish.jpg" />
                                <div className="cad-body">
                                    <h5><b>Cá viên chiên</b> </h5>
                                    <div className="d-flex flex-row my-2">
                                        <div className="text-muted">30.000/dĩa</div>
                                        <div className="ml-auto">
                                            <button className="border rounded bg-white sign"><span className="fa fa-plus" id="orange" /></button>
                                            <span className="px-sm-1">1 dĩa</span>
                                            <button className="border rounded bg-white sign"><span className="fa fa-minus" id="orange" /></button>
                                        </div>
                                    </div>
                                    <button className="btn w-100 rounded my-2">Thêm vào giỏ hàng</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row' id="products">
                        <div className='col-12'><h4>GIẢI KHÁT</h4></div>
                        <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                            <div className="cad">
                                <img className="cad-img-top" style={{objectFit:"cover"}} src="https://tea-3.lozi.vn/v1/ship/resized/losupply-quan-tan-phu-quan-tan-phu-ho-chi-minh-1618467447167540212-nuoc-ngot-coca-cola-lon-320ml-0-1626403242?w=480&type=o" />
                                <div className="cad-body">
                                    <h5><b>Coca Cola</b> </h5>
                                    <div className="d-flex flex-row my-2">
                                        <div className="text-muted">30.000/Lon</div>
                                        <div className="ml-auto">
                                            <button className="border rounded bg-white sign"><span className="fa fa-plus" id="orange" /></button>
                                            <span className="px-sm-1">Lon</span>
                                            <button className="border rounded bg-white sign"><span className="fa fa-minus" id="orange" /></button>
                                        </div>
                                    </div>
                                    <button className="btn w-100 rounded my-2">Thêm vào giỏ hàng</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}