import axios from "axios"
import { TMDB_API_BASE_URL } from "./utils/apis"
import setURLQueryParam from "./utils/setURLQueryParam";

const axiosTMDB=axios.create({
    baseURL:TMDB_API_BASE_URL
})
axiosTMDB.interceptors.request.use(function (req) {
    return {...req,url:setURLQueryParam(req.url,'api_key',process.env.REACT_APP_TMDB_API_KEY)};
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});
export default axiosTMDB