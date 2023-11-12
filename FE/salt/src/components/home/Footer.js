export function Footer () {
    return(
        <>
        {/* Remove the container if you want to extend the Footer to full width. */}
<div>
  <footer className="bg-dark text-center text-lg-start text-white mt-5">
    {/* Grid container */}
    <div className="container p-4">
      {/*Grid row*/}
      <div className="row my-4">
        {/*Grid column*/}
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <div className="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto" style={{width: 150, height: 150}}>
            <img src="img/logosalt.jpg" height={70} alt loading="lazy" />
          </div>
          <p className="text-center">Bánh ép Huế Nhà Muối bánh ép chuẩn vị Huế</p>
          <ul className="list-unstyled d-flex flex-row justify-content-center">
            <li>
              <a className="text-white px-2" href="#!">
                <i className="fab fa-facebook-square" />
              </a>
            </li>
            <li>
              <a className="text-white px-2" href="#!">
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li>
              <a className="text-white ps-2" href="#!">
                <i className="fab fa-youtube" />
              </a>
            </li>
          </ul>
        </div>
        {/*Grid column*/}
        {/*Grid column*/}
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">Phục vụ</h5>
          <ul className="list-unstyled">
            <li className="mb-2">
              <a href="#!" className="text-white"><i className="fas fa-paw pe-3" />Tận tình</a>
            </li>
            <li className="mb-2">
              <a href="#!" className="text-white"><i className="fas fa-paw pe-3" />Chu đáo</a>
            </li>
            <li className="mb-2">
              <a href="#!" className="text-white"><i className="fas fa-paw pe-3" />Sạch sẽ</a>
            </li>
            <li className="mb-2">
              <a href="#!" className="text-white"><i className="fas fa-paw pe-3" />Nhanh gọn</a>
            </li>
            <li className="mb-2">
              <a href="#!" className="text-white"><i className="fas fa-paw pe-3" />Vui vẻ</a>
            </li>
            <li className="mb-2">
              <a href="#!" className="text-white"><i className="fas fa-paw pe-3" />Lắng nghe mọi ý kiến</a>
            </li>
            <li className="mb-2">
              <a href="#!" className="text-white"><i className="fas fa-paw pe-3" />Chủ quán xinh gái</a>
            </li>
          </ul>
        </div>
        {/*Grid column*/}
        {/*Grid column*/}
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">Phương châm</h5>
          <ul className="list-unstyled">
            <li className="mb-2">
              <a href="#!" className="text-white"><i className="fas fa-paw pe-3" />Sạch</a>
            </li>
            <li className="mb-2">
              <a href="#!" className="text-white"><i className="fas fa-paw pe-3" />Ngon</a>
            </li>
            <li className="mb-2">
              <a href="#!" className="text-white"><i className="fas fa-paw pe-3" />Giá cả hợp lý</a>
            </li>
            <li className="mb-2">
              <a href="#!" className="text-white"><i className="fas fa-paw pe-3" />Chuẩn vị</a>
            </li>
            <li className="mb-2">
              <a href="#!" className="text-white"><i className="fas fa-paw pe-3" />Đầy đủ</a>
            </li>
            <li className="mb-2">
              <a href="#!" className="text-white"><i className="fas fa-paw pe-3" />Vệ sinh</a>
            </li>
          </ul>
        </div>
        {/*Grid column*/}
        {/*Grid column*/}
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">Liên hệ</h5>
          <ul className="list-unstyled">
            <li>
              <p><i className="fas fa-map-marker-alt pe-2" />104 Lê Thanh Nghị, Hải Châu, TP Đà Nẵng</p>
            </li>
            <li>
              <p><i className="fas fa-phone pe-2" />0936375910</p>
            </li>
            <li>
              <p><i className="fas fa-envelope pe-2 mb-0" />thuynguyen@gmail.com</p>
            </li>
          </ul>
        </div>
        {/*Grid column*/}
      </div>
      {/*Grid row*/}
    </div>
    {/* Grid container */}
  </footer>
</div>
{/* End of .container */}

        </>
    )
}