import axios from "axios"

export const getCartDetail = async(username) => {
    const res = await axios.get(`http://localhost:8080/cart/cart-detail?username=${username}`)
    console.log("res servuce", res);
    return res;
}
export const addCart = async (quantity, username, productId) => {

 const res = await axios.post(`http://localhost:8080/cart/add-cart?quantity=${quantity}&username=${username}&productId=${productId}`)
 return res;
}
export const deleteCart = async(username, id) => {
    await axios.delete(`http://localhost:8080/cart/delete-cart?username=${username}&id=${id}`)
}
export const increase = async(username, id) => {
   const res= await axios.post(`http://localhost:8080/cart/increase-quantity?username=${username}&id=${id}`)
   console.log("in", res);
}
export const decrease = async(username, id) => {
    await axios.post(`http://localhost:8080/cart/decrease-quantity?username=${username}&id=${id}`)
}
export const getAllDelivery = async () => {
    const res = await axios.get("http://localhost:8080/cart/delivery")
    return res.data
}