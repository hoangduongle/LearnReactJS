import axios from "axios";

const axiosClient = axios.create({
  baseURL:
    "http://tfsapiv1-env.eba-aagv3rp5.ap-southeast-1.elasticbeanstalk.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(async (config) => {
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
