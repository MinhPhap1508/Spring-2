import axios from "axios"

export const getProductById = async(id) => {
    const res = await axios.get(`http://localhost:8080/api/v1/auth/product/${id}`)
    console.log("Res service", res);
    return res;
}
export const getProductList = async (page, searchType) => {
    try{
        const res = await axios.get(`http://localhost:8080/api/v1/auth/product/page?page=${page}&searchType=${searchType}`)
       console.log("page", res);
        return res.data;
    }catch(e){
        console.log(e);
    }
}
export const getProductTypeList = async() => {
    try{
        const res = await axios.get("http://localhost:8080/api/v1/auth/product/category");
        console.log("type service", res);
        return res.data;
    }catch(e){
        console.log(e);
    }
}