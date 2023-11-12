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