import axios from "../axios";

const handleLoginApi = (email, password) => {
  let data = {
    email: email,
    password: password,
  };
  return axios.post("/api/login", data);
};

const getAllUsers = (id) => {
  return axios.post("/api/get-all-users", { id: id });
};

export { handleLoginApi, getAllUsers };
