import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://amazon-api-deploy-1-5kxb.onrender.com/",
});
export { axiosInstance };
