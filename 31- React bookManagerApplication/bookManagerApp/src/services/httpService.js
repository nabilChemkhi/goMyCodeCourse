// eslint-disable-next-line no-unused-vars
import axios from "axios";

const httpClient = axios.create({
  baseURL:  "http://localhost:3001",
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 10000 // 10 seconds timeout
});
export default httpClient;
