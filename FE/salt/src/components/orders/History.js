import { useEffect } from "react";
import { useState } from "react"
import { getListOrder } from "../../service/CartService";
import { infoToken } from "../../service/Account";
import { Footer } from "../home/Footer";
import { Header } from "../home/Header";
import {
    AiOutlineDoubleLeft,
    AiOutlineDoubleRight,
} from "react-icons/ai";

export function History() {
    const [history, setHistory] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);

    const historyOrder = async () => {
        const res = infoToken();
        const response = await getListOrder(res.sub, page)
        setHistory(response.data.content);
        setTotalPage(response.data.totalPages)
    }

    const nextPage = () => {
        if (page < totalPage - 1) {
            setPage((Prev) => Prev + 1);
        }
    };
    const previousPage = () => {
        if (page > 0) {
            setPage((Prev) => Prev - 1);
        }
    }
    useEffect(() => {
        historyOrder();
    }, [page])
    return (
        <>
            <Header />
            <div className="mt-5 pt-5">
                <h1 className="text-center">Lịch sử đặt hàng</h1>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Ngày đặt hàng</th>
                            <th>Tổng tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            history.map((h, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{h.orderDate}</td>
                                    <td>{h.total}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div className="row">
                    <div className="col-sm-5 text-center" >
                        <button className="btn btn-outline-primary" style={{ marginLeft: "13rem" }} onClick={() => previousPage()}>
                            <AiOutlineDoubleLeft />
                        </button>
                    </div>
                    <div className="col-sm-2 text-center" >
                        <p className="btn btn-outline-primary" style={{ marginLeft: "1rem" }} >
                            {page + 1}/{totalPage}

                        </p>
                    </div>
                    <div className="col-sm-5 text-center" >
                        <button className="btn btn-outline-primary" onClick={() => nextPage()}>
                            <AiOutlineDoubleRight />
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}