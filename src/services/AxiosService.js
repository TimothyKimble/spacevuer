  
import axios from "axios";

export const imageApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/',
  timeout: 5000
})