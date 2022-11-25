import axios from "axios";


const ServerApi = axios.create({
    baseURL: 'http://localhost:3000'
})

export default ServerApi;