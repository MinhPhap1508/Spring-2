import axios from "axios"
import { jwtDecode } from "jwt-decode"

export const login = async(request) => {
    const res = await axios.post("http://localhost:8080/api/v1/auth/authenticate", request)
    return res
}

export const register = async(registerRequest) => {
    const res = await axios.post("http://localhost:8080/api/v1/auth/register", registerRequest)
    return res
}

export const infoToken = async() => {
    const jwtToken = localStorage.getItem("JWT")
    if(jwtToken != null) {
        const decodedToken = jwtDecode(jwtToken);
        return decodedToken;
    }else{
        return null;
    }
}

export const getFullnameById = async (id) => {
    const res = await axios.get(`http://localhost:8080/api/v1/auth/${id}`)
    return res;
}