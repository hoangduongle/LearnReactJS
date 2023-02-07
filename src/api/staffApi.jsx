import axiosClient from "./axiosClient";

const staffApi = {
  getAll: (params) => {
    const url = "/staffs";
    return axiosClient.get(url, { params });
  },

  get: (id) => {
    const url = `staffs/${id}`;
    return axiosClient.get(url);
  },
};

export default staffApi;
