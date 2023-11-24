import { useEffect, useState } from "react";
import { GetAllHome, listSearch } from "../../service/Home";
import { Footer } from "../home/Footer";
import { Header } from "../home/Header";
import { infoToken } from "../../service/Account";
import { addCart } from "../../service/CartService";
import Swal from "sweetalert2";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getProductList, getProductTypeList } from "../../service/ProductService";
import {
    AiOutlineDoubleLeft,
    AiOutlineDoubleRight,
} from "react-icons/ai";

function ListSearch() {
    const [product, setProduct] = useState([]);
    const [productTypeList, setProductTypeList] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(1);
    const [searchType, setSearchType] = useState("");
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState();
    const [foundProducts, setFoundProducts] = useState(true);
    const param = useParams();
    const vnd = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    })
    const [quantity, setQuantity] = useState(1);
    // const loadTypeList = async() => {
    //     const res= await getProductTypeList();
    //     console.log("res type list", res);
    //     setProductTypeList(res);
    // }
    useEffect(() => {
        document.title = "Nhà Muối"
        // loadTypeList()
    }, [])
    const loadProductList = async () => {
        const res = await getProductList(page, searchType);
        setProduct(res.content);
        setTotalPage(res.totalPages)
    };
    const loadListSearch = async () => {
        const res = await listSearch(page, param.keywork);
        if (res.data && res.data.content && res.data.content.length > 0) {
            setProduct(res.data.content);
            setTotalPage(res.data.totalPages);
            setFoundProducts(true);
        } else {
            setFoundProducts(false);
        }
    };
    const handleSearch = async () => {
        setSearchInput(document.getElementById("search").value);
        setPage(0);
    }
    useEffect(() => {
        loadProductList()
        loadListSearch();
    }, [page, param.keywork, searchInput]);

    const nextPage = () => {
        if (page < totalPage - 1) {
            setPage((Prev) => Prev + 1);
        }
    };
    const previousPage = () => {
        if (page > 0) {
            setPage((Prev) => Prev - 1);
        }
    };
    //search
    const searchTypeProduct = (values) => {
        console.log("type", values);
        setSearchType(values);
        setPage(0);
    };

    const addToCart = async (p) => {
        const res = infoToken();
        if (res != null) {
            const result = await addCart(1, res.sub, p.id)
            console.log("res kt ii p", result);
            if (result.status == 200) {
                toast("Thêm 1 sản phẩm nữa")
            } if (result.status == 201) {
                toast("Thêm vào giỏ hàng thành công")
            }
        } else {
            Swal.fire("Vui lòng đăng nhập")
            navigate("/login");
        }
    }

    return (
        <>
            <Header />
            <div className="container" style={{ marginTop: "8rem", backgroundColor: "#f8f9fa", borderRadius: "20px", boxShadow: "4px 8px 9px grey" }}>
                {/* menu */}
                {/* <section id="sidebar">
                    <p> Nhà Muối | <b>Thực đơn</b></p>
                    <div className="border-bottom pb-2 ml-2" onClick={() => searchTypeProduct("")}>
                        <h4 id="burgundy">Lọc</h4>
                    </div>
                    <div className="py-2 border-bottom ml-3">
                        <h6 className="font-weight-bold">Thực đơn</h6>
                        <div id="orange"><span className="fa fa-minus" /></div>
                        <div>
                            {productTypeList.map((pt) =>(
                            
                            <li className="form-group"
                            key={pt.idCate}
                            onClick={() => searchTypeProduct(pt.nameCategory)}
                            style={{cursor:"pointer"}}
                            >
                             {pt.nameCategory}   
                            </li>
                            
                            ))}
                        </div>
                    </div>
                </section> */}
                {/* Kiểm tra giá trị của foundProducts */}
                {/* Thông báo không tìm thấy sản phẩm */}
                {!foundProducts && (
                    <div className="d-flex align-items-center justify-content-center text-danger" style={{ height: "400px" }}>
                        <h2 className="text-items-center">Không tìm thấy sản phẩm</h2>
                    </div>
                )}

                {/* Danh sách sản phẩm và nút phân trang */}
                {foundProducts && (
                    <div>
                        <div className="row mt-5 pt-5" style={{ marginLeft: "5rem" }}>
                            <div className='col-12' style={{ fontFamily: "display" }} id="products">
                                <h4>Thực đơn nhà Muối</h4>
                            </div>
                            {/* Hiển thị danh sách sản phẩm */}
                            {product.map((p) => (
                                <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                                    <div className="cad">
                                        <Link to={`/product/${p.id}`}>
                                            <img className="cad-img-top" src={p.image} style={{ objectFit: "cover" }} />
                                        </Link>
                                        <div className="cad-body">
                                            <h5><b>{p.nameProduct}</b> </h5>
                                            <div className="d-flex flex-row my-2">
                                                <div className="text-muted">{vnd.format(p.priceProduct)}</div>
                                            </div>
                                            <button className="btn w-100 rounded my-2" onClick={() => addToCart(p)}>Thêm vào giỏ hàng</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Nút phân trang */}
                        <div className="row pb-3">
                            <div className="row">
                                <div className="col-sm-5 text-center">
                                    <button className="btn btn-outline-primary" style={{ marginLeft: "13rem" }} onClick={() => previousPage()}>
                                        <AiOutlineDoubleLeft />
                                    </button>
                                </div>
                                <div className="col-sm-2 text-center">
                                    <p className="btn btn-outline-primary" style={{ marginLeft: "1rem" }} >
                                        {page + 1}/{totalPage}
                                    </p>
                                </div>
                                <div className="col-sm-5 text-center">
                                    <button className="btn btn-outline-primary" onClick={() => nextPage()}>
                                        <AiOutlineDoubleRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}



            </div>
            <Footer />
        </>
    )
}
export default ListSearch;