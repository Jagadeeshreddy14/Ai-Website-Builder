import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL || "https://ai-website-builder-tzsv.vercel.app",
    withCredentials: true,
});

export default api;
