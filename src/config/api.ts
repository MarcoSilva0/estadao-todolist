import axios from "axios";
import { envs } from "./env";

const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: envs.API_URL,
});

export default api;
