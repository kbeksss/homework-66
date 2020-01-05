import axios from 'axios';

const axiosAPI = axios.create({
    baseURL: 'https://homework-a3501.firebaseio.com/'
});


export default axiosAPI;
