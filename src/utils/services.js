import { API_KEY } from "./config";
import axios from "axios";

const get = (url, params={} ) => {
    const aParams = Object.entries({ ...params, api_key: API_KEY});
    const uPram = aParams.map((params) = `${params[0]} = ${params[1]}`);
    
    return axios
    .get(`${url}?${uPram.join('&')}`).then((response) => response?.data)
    .catch((error) =>({error}));
};

const post = (
    url,
    params = {},
    headers = { 'Content Type': 'application/json'},
) =>{
    return axios
    .post(url, {params, api_key:API_KEY})
    .then((response)=>{response.data})
    .catch((error)=>{error});
}


export { get, post}