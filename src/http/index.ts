import axios from 'axios';

const $api = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_SERVER_API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

// $api.interceptors.response.use(
//   (config) => {
//     return config;
//   },
//   async (error) => {
//     const originRequest = error.config;
//     if (error.response.status == 401) {
//       try {
//         const response = await axios.get(`${process.env.REACT_APP_SERVER_API_URL}/refresh`, {
//           withCredentials: true,
//         });
//         localStorage.setItem('token', response.data.accessToken);
//         console.log('refreshed token');
//         return $api.request(originRequest);
//       } catch {
//         console.log('Користувач не авторизований.');
//       }
//     }
//   },
// );

export default $api;
