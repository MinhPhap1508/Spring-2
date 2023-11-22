import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { VscLayoutMenubar } from "react-icons/vsc";
import { useEffect, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { infoToken } from "../../service/Account";
import { BsInfoSquare } from "react-icons/bs";
import { BiLogOut, BiHistory } from "react-icons/bi";
import Swal from "sweetalert2";
export function Header() {

    const navigate = useNavigate()
    const [JwtToken, setJwtToken] = useState(localStorage.getItem("JWT"));
    const [userName, setUserName] = useState("");

    const getUserName = async () => {
        const result = await infoToken();
        if (result != null) {
            setUserName(result.sub)
        }
    }

    

    useEffect(() => {
        getUserName();
    }, []);


    const handleLogout = () => {
        localStorage.removeItem("JWT");
        setJwtToken(undefined);
        setUserName(undefined);
        navigate("/");
        Swal.fire({
            title: "Đăng xuất thành công!",
            icon: "success",
            showConfirmButton: false,
            timer: 1500
        });
        // navigate("/");
        window.location.reload();
    }
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light bg-white border-bottom">
                <a className="navbar-brand ml-2 font-weight-bold" href="/" style={{fontFamily:"ubuntu"}}><span id="burgundy">Bánh ép Huế</span><span id="orange">Nhà Muối</span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor" aria-controls="navbarColor" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarColor">
                    {!JwtToken ? (
                        <ul className="navbar-nav">
                            <li className="nav-item rounded bg-light search-nav-item"><input type="text" id="search" className="bg-light" placeholder="Bánh ép, đồ ăn vặt" /><span className="fa fa-search text-muted" /></li>
                            <li className="nav-item "><a className="nav-link" href="/cart"><span><AiOutlineShoppingCart /></span></a> </li>
                            <li className="nav-item "><a className="nav-link" href="/list"><span><VscLayoutMenubar /></span></a></li>
                            <li className="nav-item "><a className="nav-link" href="/login"><span><AiOutlineUser />Đăng nhập</span></a> </li>
                        </ul>) : (
                        <ul className="navbar-nav">
                        <li className="nav-item rounded bg-light search-nav-item">
                          <input type="text" id="search" className="bg-light" placeholder="Bánh ép, đồ ăn vặt" />
                          <span className="fa fa-search text-muted" />
                        </li>
                        <li className="nav-item "><a className="nav-link" href="/cart"><span><AiOutlineShoppingCart />Giỏ hàng</span></a> </li>
                        <li className="nav-item "><a className="nav-link" href="/list"><span><VscLayoutMenubar />Thực đơn</span></a></li>
                        <li className="nav-item" style={{ fontSize: "25px" }}>
                          <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic" style={{border:"none", backgroundColor:"transparent", color:"black"}}>
                              <span><AiOutlineUser />{userName}</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="/history">
                                <span><BiHistory /> Lịch sử đặt hàng</span>
                              </Dropdown.Item>
                              <Dropdown.Item href="/#">
                                <span><BsInfoSquare /> Thông tin</span>
                              </Dropdown.Item>
                              <Dropdown.Item>
                                <span onClick={()=> handleLogout()}><BiLogOut /> Đăng xuất</span>
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </li>
                      </ul>

                    )}
                </div>
            </nav>
        </>
    )
}