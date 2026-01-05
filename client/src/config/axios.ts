import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL || (import.meta.env.DEV ? "https://ai-website-builder-backend-psi.vercel.app" : "/api"),
    withCredentials: true,
});

export default api;
