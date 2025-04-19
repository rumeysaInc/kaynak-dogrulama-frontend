import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/api",
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    response => response,
    error => {
        console.log("İstek hatası:", error.response?.status, error.response?.data);

        if (error.response && error.response.status === 401) {
            console.log("401 Hatası - Token geçersiz ya da süresi dolmuş olabilir");

            // localStorage.removeItem("token");
            // window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);




export default api;
