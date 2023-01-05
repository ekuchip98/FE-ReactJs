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

const createNewUser = (data) => {
  return axios.post("/api/create-new-user", data);
};

const deleteUserService = (userId) => {
  return axios.delete("/api/delete-user", { data: { id: userId } });
};

const editUserService = (user) => {
  return axios.put("/api/edit-user", user);
};
export {
  handleLoginApi,
  getAllUsers,
  createNewUser,
  deleteUserService,
  editUserService,
};
