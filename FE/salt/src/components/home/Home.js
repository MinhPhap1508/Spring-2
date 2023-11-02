import { Card } from "react-bootstrap";
import { MyCarousel } from "./Carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Footer } from "./Footer";

export function Home() {

  return (
    <>
      <div>
        {/* Navbar section  */}
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
        <div className="filter">
          <button className="btn btn-default" type="button" data-toggle="collapse" data-target="#mobile-filter" aria-expanded="true" aria-controls="mobile-filter">Filters<span className="fa fa-filter pl-1" /></button>
        </div>
      </div>
      <div className="container-fluid">
      <MyCarousel></MyCarousel>
      </div>
      
      <div className="home container mt-5">
        <div className="row">
          <div className="col-4">
            <Card.Img src="img/cardhome.jpg"></Card.Img>
          </div>
          <div className="col-8">
            <Card.Title>Từ đam mê đến thành phẩm tuyệt vời nhất</Card.Title>
            <Card.Text>Xuất phát từ nổi niềm đam về với món bánh ép ở quê hương, mình đã đi khắp đà nẵng nhưng không thấy được quán nào mang cái vị mà mình thật sự ưng ý, vì lí đó mình đã tìm hiểu và cho ra đời món bánh được cho là cực hợp ý mình cũng như mang đến vị ngon đậm chất bánh ép Huế nhất có thể.</Card.Text>
            <Card.Text>Nhà Muối tự hào khi đem đến cho quý khách những món ăn ngon nhất trong tầm giá, với phương châm 3 hợp là:</Card.Text>
            <Card.Text>Hợp khẩu vị mọi nhà <br></br>
              Hợp túi tiền mọi quý khách<br></br>
              Và hợp gu của tất cả các bạn trẻ</Card.Text>
            <Card.Text>Vì vậy còn chần chờ gì nữa mà không chọn cho mình những món ngon dưới đây nào:</Card.Text>
          </div>
        </div>
      </div>
      <div className="menu container mt-5">
        <div className="row">
          <div className="col-7">
            <Card.Title>Menu đa dạng</Card.Title>
            <Card.Text>Với đầy đủ các loại bánh ép hay kể cả các món ăn vặt thân quen với các bạn trẻ chúng tôi đều tự tin có đủ</Card.Text>
            <Card.Title>Bạn có thể tham khảo menu bên dưới</Card.Title>
            <Card.Title>Hoặc có thể koi chính xác nhất trong danh mục của chúng tôi và nhanh tay order cho mình vài món để thưởng thức</Card.Title>
            <Card.Title>Nhà muối bây giờ gồm có các danh mục món ăn chủ yếu như sau</Card.Title>
            <Card.Text>1. Bánh ép</Card.Text>
            <Card.Text>2. Ăn vặt</Card.Text>
            <Card.Text>3. Món khác</Card.Text>
            <Card.Text>4. Nước giải khát</Card.Text>
          </div>
          <div className="col-5">
            <Card.Img src="img/menu.jpg" />
          </div>
        </div>
      </div>
      <div className="container mt-5" style={{backgroundColor:"#f8f9fa", borderRadius:"20px", boxShadow:"4px 8px 9px grey"}}>
        {/* menu */}
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
        </section>
        <div className="row mt-5 pt-5">
          <div className='col-12' id="products"><h4>Bánh ép</h4></div>
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
          <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
            <div className="cad">
              <img className="cad-img-top" src="img/banh.jpg" />
              <div className="cad-body">
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
            <div className="cad">
              <img className="cad-img-top" src="img/banh.jpg" />
              <div className="cad-body">
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
            <div className="cad">
              <img className="cad-img-top" src="img/banh.jpg" />
              <div className="cad-body">
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
            <div className="cad">
              <img className="cad-img-top" src="img/banh.jpg" />
              <div className="cad-body">
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
            <div className="cad d-relative">
              <img className="cad-img-top" src="img/banh.jpg" />
              <div className="cad-body">
                <h5><b>Bánh ép thịt bò</b> </h5>
                {/* <div className="rounded bg-white discount" id="orange">10% off</div> */}
                <div className="d-flex flex-row my-2">
                  <div className="text-muted price">26.000/dĩa 2 cái</div>
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
              <div className="cad">
                <img className="cad-img-top" src="img/fried.jpg" />
                <div className="cad-body">
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
              <div className="cad">
                <img className="cad-img-top" src="img/cakept.jpg" />
                <div className="cad-body">
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
              <div className="cad">
                <img className="cad-img-top" src="img/ram.jpg" />
                <div className="cad-body">
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
              <div className="cad">
                <img className="cad-img-top" src="img/filter.jpg" />
                <div className="cad-body">
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
              <div className="cad">
                <img className="cad-img-top" src="img/chicken.jpg" />
                <div className="cad-body">
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
              <div className="cad d-relative">
                <img className="cad-img-top" src="img/potato.png" />
                <div className="cad-body">
                  <h5><b>Khoai tây chiên</b> </h5>
                  {/* <div className="rounded bg-white discount" id="orange">10% off</div> */}
                  <div className="d-flex flex-row my-2">
                    <div className="text-muted price">25.000/dĩa 2</div>
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
      <Footer></Footer>
    </>
  )
}