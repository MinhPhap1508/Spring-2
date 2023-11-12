import './header.css'
export function Menu() {
    
    return (
        <>
            <div>
                {/* Navbar section */}
                <nav className="navbar navbar-expand-sm navbar-light bg-white border-bottom">
                    <a className="navbar-brand ml-2 font-weight-bold" href="/"><span id="burgundy">Bánh ép Huế</span><span id="orange">Nhà Muối</span></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor" aria-controls="navbarColor" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor">
                        <ul className="navbar-nav">
                            <li className="nav-item rounded bg-light search-nav-item"><input type="text" id="search" className="bg-light" placeholder="Search bread, cakes, desserts" /><span className="fa fa-search text-muted" /></li>
                            <li className="nav-item"><a className="nav-link" href="#"><span className="fa fa-user-o" /><span className="text">Login</span></a> </li>
                            <li className="nav-item "><a className="nav-link" href="#"><span className="fa fa-shopping-cart" /><span className="text">Cart</span></a> </li>
                        </ul>
                    </div>
                </nav>
                <div className="filter">
                    <button className="btn btn-default" type="button" data-toggle="collapse" data-target="#mobile-filter" aria-expanded="true" aria-controls="mobile-filter">Filters<span className="fa fa-filter pl-1" /></button>
                </div>
                {/* <div id="mobile-filter">
    <p className="pl-sm-0 pl-2"> Home | <b>All Breads</b></p>
    <div className="border-bottom pb-2 ml-2">
      <h4 id="burgundy">Filters</h4>
    </div>
    <div className="py-2 border-bottom ml-3">
      <h6 className="font-weight-bold">Categories</h6>
      <div id="orange"><span className="fa fa-minus" /></div>
      <form>
        <div className="form-group">
          <input type="checkbox" id="artisan" />
          <label htmlFor="artisan">Fresh Artisan Breads</label>
        </div>
        <div className="form-group">
          <input type="checkbox" id="breakfast" />
          <label htmlFor="breakfast">Breakfast Breads</label>
        </div>
        <div className="form-group">
          <input type="checkbox" id="healthy" />
          <label htmlFor="healthy">Healthy Breads</label>
        </div>                                
      </form>
    </div>
    <div className="py-2 border-bottom ml-3">
      <h6 className="font-weight-bold">Accompainments</h6>
      <div id="orange"><span className="fa fa-minus" /></div>
      <form>
        <div className="form-group">
          <input type="checkbox" id="tea" />
          <label htmlFor="tea">Tea Cakes</label>
        </div>
        <div className="form-group">
          <input type="checkbox" id="cookies" />
          <label htmlFor="cookies">Cookies</label>
        </div>
        <div className="form-group">
          <input type="checkbox" id="pastries" />
          <label htmlFor="pastries">Pastries</label>
        </div>                                
        <div className="form-group">
          <input type="checkbox" id="dough" />
          <label htmlFor="dough">Cookie Dough</label>
        </div>                                
        <div className="form-group">
          <input type="checkbox" id="choco" />
          <label htmlFor="choco">Chocolates</label>
        </div>                                
      </form>
    </div>
    <div className="py-2 ml-3">
      <h6 className="font-weight-bold">Top Offers</h6>
      <div id="orange"><span className="fa fa-minus" /></div>
      <form>
        <div className="form-group">
          <input type="checkbox" id="25off" />
          <label htmlFor={25}>25% off</label>
        </div>
        <div className="form-group">
          <input type="checkbox" id="5off" />
          <label htmlFor="5off" id="off">5% off on artisan breads</label>
        </div>                                           
      </form>
    </div>
  </div> */}
                {/* Sidebar filter section */}
                <section id="sidebar">
                    <p> Home | <b>All Breads</b></p>
                    <div className="border-bottom pb-2 ml-2">
                        <h4 id="burgundy">Filters</h4>
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
                    {/* <div className="py-2 border-bottom ml-3">
      <h6 className="font-weight-bold">Accompainments</h6>
      <div id="orange"><span className="fa fa-minus" /></div>
      <form>
        <div className="form-group">
          <input type="checkbox" id="tea" />
          <label htmlFor="tea">Tea Cakes</label>
        </div>
        <div className="form-group">
          <input type="checkbox" id="cookies" />
          <label htmlFor="cookies">Cookies</label>
        </div>
        <div className="form-group">
          <input type="checkbox" id="pastries" />
          <label htmlFor="pastries">Pastries</label>
        </div>                                
        <div className="form-group">
          <input type="checkbox" id="dough" />
          <label htmlFor="dough">Cookie Dough</label>
        </div>                                
        <div className="form-group">
          <input type="checkbox" id="choco" />
          <label htmlFor="choco">Chocolates</label>
        </div>                                
      </form>
    </div> */}
                    {/* <div className="py-2 ml-3">
      <h6 className="font-weight-bold">Top Offers</h6>
      <div id="orange"><span className="fa fa-minus" /></div>
      <form>
        <div className="form-group">
          <input type="checkbox" id="25off" />
          <label htmlFor={25}>25% off</label>
        </div>
        <div className="form-group">
          <input type="checkbox" id="5off" />
          <label htmlFor="5off" id="off">5% off on artisan breads</label>
        </div>                                           
      </form>
    </div> */}
                </section>
                {/* products section */}
                <section id="products">
                    <div className="container">
                        <div className="d-flex flex-row">
                            <div className="text-muted m-2" id="res">Showing 44 results</div>
                            <div className="ml-auto mr-lg-4">
                                <div id="sorting" className="border rounded p-1 m-1">
                                    <span className="text-muted">Sáp xếp theo</span>
                                    <select name="sort" id="sort">
                                        <option value="popularity">Tên</option>
                                        <option value="prcie">Giá</option>
                                        <option value="rating">Yêu thích</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-12'><h4>Bánh ép</h4></div>
                            <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                                <div className="card">
                                    <img className="card-img-top" src="img/shirmpmeat.jpg" />
                                    <div className="card-body">
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
                            <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                                <div className="card">
                                    <img className="card-img-top" src="img/meat.jpg" />
                                    <div className="card-body">
                                        <h5><b>Bánh ép thịt</b> </h5>
                                        <div className="d-flex flex-row my-2">
                                            <div className="text-muted">26.000/dĩa</div>
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
                            <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                                <div className="card">
                                    <img className="card-img-top" src="img/meategg.jpg" />
                                    <div className="card-body">
                                        <h5><b>Bánh ép thịt - trúng</b> </h5>
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
                            <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                                <div className="card">
                                    <img className="card-img-top" src="img/dry.png" />
                                    <div className="card-body">
                                        <h5><b>Bánh ép khô</b> </h5>
                                        <div className="d-flex flex-row my-2">
                                            <div className="text-muted">7.000/cái</div>
                                            <div className="ml-auto">
                                                <button className="border rounded bg-white sign"><span className="fa fa-plus" id="orange" /></button>
                                                <span className="px-sm-1">1 cái</span>
                                                <button className="border rounded bg-white sign"><span className="fa fa-minus" id="orange" /></button>
                                            </div>
                                        </div>
                                        <button className="btn w-100 rounded my-2">Thêm vào giỏ hàng</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                                <div className="card">
                                    <img className="card-img-top" src="img/spiecal.jpg" />
                                    <div className="card-body">
                                        <h5><b>Bánh ép đặt biệt</b> </h5>
                                        <div className="d-flex flex-row my-2">
                                            <div className="text-muted">17.000/cái</div>
                                            <div className="ml-auto">
                                                <button className="border rounded bg-white sign"><span className="fa fa-plus" id="orange" /></button>
                                                <span className="px-sm-1">1 cái</span>
                                                <button className="border rounded bg-white sign"><span className="fa fa-minus" id="orange" /></button>
                                            </div>
                                        </div>
                                        <button className="btn w-100 rounded my-2">Thêm vào giỏ hàng</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                                <div className="card d-relative">
                                    <img className="card-img-top" src="img/beaf.jpg" />
                                    <div className="card-body">
                                        <h5><b>Bánh ép thịt bò</b> </h5>
                                        <div className="rounded bg-white discount" id="orange">10% off</div>
                                        <div className="d-flex flex-row my-2">
                                            <div className="text-muted price"><del>29.000</del>26.000/dĩa 2 cái</div>
                                            <div className="ml-auto">
                                                <button className="border rounded bg-white sign"><span className="fa fa-plus" id="orange" /></button>
                                                <span>1 dĩa</span>
                                                <button className="border rounded bg-white sign"><span className="fa fa-minus" id="orange" /></button>
                                            </div>
                                        </div>
                                        <button className="btn w-100 rounded my-2">Thêm vào giỏ hàng</button>
                                    </div>
                                </div>
                            </div>

                            <div className="row" id="cake">
                                <div className='col-12'><h4>Ăn vặt</h4></div>
                                <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                                    <div className="card">
                                        <img className="card-img-top" src="img/fried.jpg" />
                                        <div className="card-body">
                                            <h5><b>Bánh lọc chiên</b> </h5>
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
                                <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                                    <div className="card">
                                        <img className="card-img-top" src="img/cakept.jpg" />
                                        <div className="card-body">
                                            <h5><b>Tré trộn - bánh phồng tôm</b> </h5>
                                            <div className="d-flex flex-row my-2">
                                                <div className="text-muted">52.000/phần</div>
                                                <div className="ml-auto">
                                                    <button className="border rounded bg-white sign"><span className="fa fa-plus" id="orange" /></button>
                                                    <span className="px-sm-1">1 phần</span>
                                                    <button className="border rounded bg-white sign"><span className="fa fa-minus" id="orange" /></button>
                                                </div>
                                            </div>
                                            <button className="btn w-100 rounded my-2">Thêm vào giỏ hàng</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                                    <div className="card">
                                        <img className="card-img-top" src="img/ram.jpg" />
                                        <div className="card-body">
                                            <h5><b>Ram cuốn cải</b> </h5>
                                            <div className="d-flex flex-row my-2">
                                                <div className="text-muted">45.000/dĩa</div>
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
                                <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                                    <div className="card">
                                        <img className="card-img-top" src="img/filter.jpg" />
                                        <div className="card-body">
                                            <h5><b>Bánh lọc gói</b> </h5>
                                            <div className="d-flex flex-row my-2">
                                                <div className="text-muted">50.000/phần</div>
                                                <div className="ml-auto">
                                                    <button className="border rounded bg-white sign"><span className="fa fa-plus" id="orange" /></button>
                                                    <span className="px-sm-1">1 phần</span>
                                                    <button className="border rounded bg-white sign"><span className="fa fa-minus" id="orange" /></button>
                                                </div>
                                            </div>
                                            <button className="btn w-100 rounded my-2">Thêm vào giỏ hàng</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                                    <div className="card">
                                        <img className="card-img-top" src="img/chicken.jpg" />
                                        <div className="card-body">
                                            <h5><b>Chân gà rút xương sốt Thái</b> </h5>
                                            <div className="d-flex flex-row my-2">
                                                <div className="text-muted">35.000/dĩa</div>
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
                                <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                                    <div className="card d-relative">
                                        <img className="card-img-top" src="img/potato.png" />
                                        <div className="card-body">
                                            <h5><b>Khoai tây chiên</b> </h5>
                                            <div className="rounded bg-white discount" id="orange">10% off</div>
                                            <div className="d-flex flex-row my-2">
                                                <div className="text-muted price"><del>29.000</del>25.000/dĩa 2</div>
                                                <div className="ml-auto">
                                                    <button className="border rounded bg-white sign"><span className="fa fa-plus" id="orange" /></button>
                                                    <span>1 dĩa</span>
                                                    <button className="border rounded bg-white sign"><span className="fa fa-minus" id="orange" /></button>
                                                </div>
                                            </div>
                                            <button className="btn w-100 rounded my-2">Thêm vào giỏ hàng</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row' id="products">
                                <h4>Món khác</h4>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}