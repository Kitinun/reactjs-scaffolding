import axios from 'axios';
import join from 'url-join';
import { requestHandler, successHandler, errorHandler } from "./interceptors";

console.log("window , ", window.location);

const connectInstance = axios.create({
    baseURL: window.location.protocol + process.env.REACT_APP_API_ENDPOINT,
    headers: {
        "Content-Type": "application/json",
    }
});

connectInstance.interceptors.request.use(async (request)=> {
    return requestHandler(request);
});

connectInstance.interceptors.response.use(
    response => successHandler(response),
    error => errorHandler(error)
);


export const httpClient = connectInstance