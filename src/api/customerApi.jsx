import axiosClient from "./axiosClient";

const customerApi = {
  getAll: (params) => {
    const url = "/customers";
    return axiosClient.get(url, { params });
  },

  get: (id) => {
    const url = `customers/${id}`;
    return axiosClient.get(url);
  },
};

export default customerApi;
