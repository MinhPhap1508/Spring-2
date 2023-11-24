import { Card } from "react-bootstrap";
import { MyCarousel } from "./Carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Footer } from "./Footer";
import './cartgt.css';
import { useEffect, useState } from "react";
import { Header } from "./Header";
import { MdOutlineRestaurantMenu, MdRestaurant, MdOutlineAssignment } from "react-icons/md";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GetAllBestseller, GetAllHome } from "../../service/Home";
import { infoToken } from "../../service/Account";
import { addCart } from "../../service/CartService";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

export function Home() {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  const vnd = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  })
  const getAll = async () => {
    const res = await GetAllBestseller();
    console.log("res set", res);
    setProduct(res)
  }
  const addToCart = async (p) => {
    const res = infoToken();
    if (res != null) {
      const result = await addCart(1, res.sub, p.id)
      console.log("res kt ii p", result);
      if (result.status == 200) {
        toast("Thêm vào giỏ hàng thành công")
      } if (result.status == 201) {
        toast("Thêm vào giỏ hàng thành công")
      }
    } else {
      Swal.fire("Vui lòng đăng nhập")
      navigate("/login");
    }
  }
  useEffect(() => {
    getAll();
    document.title = "Nhà Muối"
  }, [])
  return (
    <>
      <div>
        <Header />
        <div className="filter">
          <button className="btn btn-default" type="button" data-toggle="collapse" data-target="#mobile-filter" aria-expanded="true" aria-controls="mobile-filter">Lọc<span className="fa fa-filter pl-1" /></button>
        </div>
      </div>
      <div className="container-fluid mt-5 pt-4">
        <MyCarousel></MyCarousel>
      </div>

      <div className="home mt-5">
        <div className="row">
          <div className="col-4 image-container">
            <div class="text-overlay">
              <h2>Nhà Muối tự hào khi đem đến cho quý khách những trãi nghiệm tuyệt vời nhất trong tầm giá, với phương châm 3 hợp là: Hợp khẩu vị mọi nhà <br></br>
                Hợp túi tiền mọi quý khách<br></br>
                Và hợp gu của tất cả các bạn trẻ</h2>
            </div>
            <Card.Img style={{ borderRadius: "50%", marginLeft: "3rem", marginTop: "5.3rem", height: "400px", width: "400px", objectFit: "cover" }} src="img/boss1.jpg"></Card.Img>

          </div>
          <div className="col-4 mt-5">
            <div class="card-gt">
              <p class="card-gt-p">Từ đam mê đến thành phẩm tuyệt vời nhất</p>
              <div class="card-gt-countent">
                <p>
                  Xuất phát từ nổi niềm đam về với món bánh ép ở quê hương, mình đã đi khắp đà nẵng nhưng không thấy được quán nào mang cái vị mà mình thật sự ưng ý, vì lí đó mình đã tìm hiểu và cho ra đời món bánh được cho là cực hợp ý mình cũng như mang đến vị ngon đậm chất bánh ép Huế nhất có thể.                </p>
              </div>
            </div>
          </div>
          <div className="col-4 image-container">
            <Card.Img style={{ borderRadius: "50%", marginLeft: "3rem", marginTop: "5.3rem", height: "400px", width: "400px", objectFit: "cover" }} src="img/boss2.jpg"></Card.Img>
            <div class="text-overlay">
              <h2>Vì vậy còn chần chờ gì nữa mà không nhanh chân đến quán để trải nghiệm những món ngon của Nhà Muối hoặc có thể dạo 1 vòng trang web của chúng tôi và order cho bản thân mình 1 món ngon</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="menu mt-5">
        <div className="menus row" style={{ paddingLeft: "130px" }}>
          <div className="col-7 mt-5">
            <h2 style={{ fontFamily: "monaco" }}><MdOutlineRestaurantMenu /> Menu đa dạng</h2>
            <h5 style={{ fontFamily: "Bookman" }}>-Với đầy đủ các loại bánh ép hay kể cả các món ăn vặt thân quen với các bạn trẻ chúng tôi đều tự tin có đủ</h5><br></br>
            <h4 style={{ fontFamily: "display" }}> <MdRestaurant /> Bạn có thể tham khảo menu bên cạnh</h4>
            <h4 style={{ fontFamily: "display" }}>Hoặc có thể xem chính xác nhất trong danh mục của chúng tôi và nhanh tay order cho mình vài món để thưởng thức</h4><br></br>
            <h3 style={{ fontFamily: "comic sans" }}><MdOutlineAssignment /> Nhà muối gồm có các danh mục món ăn chủ yếu như sau:</h3><br></br>
            <button class="btn-white" href="#">
              <p>1. Ăn vặt</p>
            </button><br></br>
            <button class="btn-white" href="#">
              <p>2. Bánh ép</p>
            </button><br></br>
            <button class="btn-white" href="#">
              <p>3. Giải khát</p>
            </button><br></br>
            <button class="btn-white" href="#">
              <p>4. Món khác</p>
            </button>

          </div>
          <div className="col-5">
            <Card.Img src="img/menu.jpg" />
          </div>
        </div>
      </div>
      <div>


        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="women-item-carousel">
                <div className="owl-women-item owl-carousel d-flex">
                  <Swiper
                    slidesPerView={3}
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
                    {product.map((p) => (
                      <SwiperSlide>
                        <div className="item mt-5">
                          <div className="thumb">

                            <div className="image-container">
                              <img
                                style={{ height: "320px", width: "430px", objectFit: "cover", borderRadius: "20px" }}
                                src={p.image}
                                alt=""
                              />
                              <div className="hover-content">
                                <div className="button-container">
                                  <Link to={`/product/${p.id}`}>
                                    <button className="btn rounded view-details-btn">
                                      <span className="view-details-label">Xem chi tiết</span>
                                    </button>
                                  </Link>
                                  <button className="btn rounded add-to-cart-btn" onClick={() => addToCart(p)}>
                                    <span className="add-to-cart-label">Thêm vào giỏ hàng</span>
                                  </button>
                                </div>
                              </div>
                            </div>

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



      </div>
      <Footer></Footer>
    </>
  )
}