import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:5001/n-clone-8318b/us-central1/api",
});
export { axiosInstance };
