import axios from "axios";

const httpClient = axios.create({
    baseURL : 'https://demo-web.click/api',
    headers : {
        "Content-Type" : 'application/json'
    }
})
export default httpClient