import axios from "axios";

const instance = axios.create();

instance.defaults.baseURL = "http://123.207.32.32:9001/";
instance.defaults.timeout = 3000;

export default instance;
