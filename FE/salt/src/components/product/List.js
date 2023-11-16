import { useEffect, useState } from "react";
import { GetAllHome } from "../../service/Home";
import { Footer } from "../home/Footer";
import { Header } from "../home/Header";
import { infoToken } from "../../service/Account";
import { addCart } from "../../service/CartService";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getProductList, getProductTypeList } from "../../service/ProductService";

export function List() {
    const [product, setProduct] = useState([]);
    const [productTypeList, setProductTypeList] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(1);
    const [searchType, setSearchType] = useState("");
    const [sort, setSort] = useState("id");
    const navigate = useNavigate();
    const vnd = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    })
    const [quantity, setQuantity] = useState(1);
    const loadTypeList = async() => {
        const res= await getProductTypeList();
        console.log("res type list", res);
        setProductTypeList(res);
    }
    useEffect(() => {
      document.title = "Nhà Muối"
        loadTypeList()
    },[])
    const loadProductList = async () => {
        const res = await getProductList(page, searchType);
        setProduct(res.content);
        setTotalPage(res.totalPages)
    };
    useEffect(() => {
        loadProductList()
    },[page, searchType]);

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
        console.log("type",values);
        setSearchType(values);
        setPage(0);
      };
      //sort
    //   const sortProduct = (values) =>{
    //     console.log(values);
    //     setSort(values);
    //   }

    // const increaseQuantity = () => {
    //     setQuantity(quantity + 1);
    // };

    // const decreaseQuantity = () => {
    //     if (quantity > 1) {
    //         setQuantity(quantity - 1);
    //     }
    // };
    const addToCart = async (p) => {
        const res = infoToken();
        if (res != null) {
            const result = await addCart(1, res.sub, p.id)
            console.log("res kt ii p", result);
            if (result.status == 204) {
                toast("Sản phẩm đã có trong giỏ hàng!")
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
                <section id="sidebar">
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
                </section>
                <div className="row mt-5 pt-5">
                    <div className='col-12' style={{ fontFamily: "display" }} id="products"><h4>Thực đơn nhà Muối</h4></div>
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
                                        {/* <div className="ml-auto" style={{ marginLeft: "4rem" }}>
                                            <div className="d-flex">
                                                <button className="border rounded bg-white sign" onClick={decreaseQuantity}><span className="fa fa-minus" id="orange" /></button>
                                                <input
                                                    id={`input-quantity${p.id}`}
                                                    type="number"
                                                    min="1"
                                                    max="20"
                                                    name=""
                                                    value={p.quantity}
                                                    onChange={(e) => setQuantity(parseInt(e.target.value))} style={{borderRadius:"10px",border:"1px solid gray",textAlign:"center", width:"40px"}}
                                                />
                                                <button className="border rounded bg-white sign" onClick={increaseQuantity}><span className="fa fa-plus" id="orange" /></button>
                                            </div>
                                        </div> */}
                                    </div>
                                    <button className="btn w-100 rounded my-2" onClick={() => addToCart(p)}>Thêm vào giỏ hàng</button>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
                <div className="row pb-3">
            <div className="col-lg-12 text-center">
              <div className="pagination-wrap d-flex justify-content-center text-center">
                
                  <div className="d-inline-block">
                    <button
                      className="btn button-shop"
                      onClick={() => {
                        previousPage();
                      }}
                    >
                      Prev
                    </button>
                  </div>
                  
                  {/* <span>
                    <a>
                      {page + 1}/{totalPage}
                    </a>
                  </span> */}
                 
                  <div>
                    <button
                      className="btn button-shop"
                      onClick={() => {
                        nextPage();
                      }}
                    >
                      Next
                    </button>
                  </div>
               
              </div>
            </div>
          </div>
            </div>
            <Footer />
        </>
    )
}