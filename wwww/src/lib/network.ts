import axios from "axios"

export const network = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})
