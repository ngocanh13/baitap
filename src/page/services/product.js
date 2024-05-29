import httpClient from "../auth/httpClient"

export const productService = {
    getAllProduct(){
        return httpClient.get('/products');
    },
    getDetailProduct(id){
        return httpClient.get(`/products/${id}`)
    }
   
} 