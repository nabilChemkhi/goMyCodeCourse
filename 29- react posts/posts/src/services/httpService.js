// eslint-disable-next-line no-unused-vars
import axios from "axios";

const httpClient = axios.create({
  baseURL:  "http://localhost:3000",
 
});
export default httpClient;
