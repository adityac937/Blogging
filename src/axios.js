import axios from "axios";
const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

instance.defaults.headers.common["Authorization"] = "Auth Token from instance";
//instance.defaults.headers.post["Content-Type"] = "applications/json";

export default instance;
