import axios from "axios"

export const GetAllHome = async () => {
    try{
        const res = await axios.get(`http://localhost:8080/api/v1/auth/product/home`)
        console.log("res",res);
        return res.data;
    }catch(e){
        console.log(e);
    }
}
export const GetAllBestseller = async () => {
    try{
        const res = await axios.get(`http://localhost:8080/api/v1/auth/product/bestsellers`)
        console.log("res",res);
        return res.data;
    }catch(e){
        console.log(e);
    }
}
export const GetAllByCategory = async (id) => {
    try{
        const res = await axios.get(`http://localhost:8080/api/v1/auth/product/thesame?id=${id}`)
        console.log("res",res);
        return res.data;
    }catch(e){
        console.log(e);
    }
}
export const searchHeader = async (page, nameSearch, searchType, sort, sortBy) => {
    const res = await axios.get(`http://localhost:8080/home/search?page=${page}&nameSearch=${nameSearch}&searchType=${searchType}&sort=${sort}&sortBy=${sortBy}`)
    return res;
}
export const listSearch = async(page, searchName) => {
    const res = await axios.get(`http://localhost:8080/home/listSearch?page=${page}&searchName=${searchName}`)
    return res;
}