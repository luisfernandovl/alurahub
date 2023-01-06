import axios from 'axios';

const api = axios.create({
    baseURL: "http://192.168.15.43:3000" //substitua pelo ip da sua máquina para acessar com o celular através do App do Expo
});

export default api;