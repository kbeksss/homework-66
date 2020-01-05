import axios from 'axios';

const axiosAPI = axios.create({
    baseURL: 'https://homework-a3501.firebaseio.com/'
});
axiosAPI.interceptors.request.use(req => {
    console.log('request', req);
    return req;
});
axiosAPI.interceptors.response.use(res => {
    console.log('response', res);
    return res;
}, error => {
    console.log('Error has happened', error);
});

export default axiosAPI;
