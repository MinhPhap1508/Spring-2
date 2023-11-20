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