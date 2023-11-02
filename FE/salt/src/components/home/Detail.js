import { Card } from "react-bootstrap";

export function Detail() {

    return (
        <>
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
            <div>
                <div className="container mt-5" style={{backgroundColor:"#f8f9fa", borderRadius:"20px", boxShadow:"1px 1px 1px grey", padding:"15px"}}>
                    <div className="row">
                        {/* Bánh ép | <span>Bánh ép thịt</span> */}
                        <div className="col-6">
                            <Card.Img src="img/banh.jpg" style={{ border: "2px solid grey", marginLeft: "4rem", borderRadius: "10px", padding: "10px" }}></Card.Img>
                        </div>
                        <div className="col-6 mt-5">
                            <Card.Title style={{ marginLeft: "8rem" }}>Bánh ép thịt</Card.Title>
                            <Card.Title style={{ marginLeft: "8rem" }}>29.000</Card.Title>
                            <div style={{ margin: "1rem 5rem 1rem" }}>
                                <button type="button" className="btn btn-outline-danger btn-block btn-lg">Thêm vào giỏ hàng</button>
                                <button type="button" className="btn btn-dark btn-block btn-lg" data-mdb-ripple-color="dark">Mua ngay</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}