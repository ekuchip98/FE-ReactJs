import axios from "../axios";

const handleLoginApi = (email, password) => {
  let data = {
    email: email,
    password: password,
  };
  return axios.post("/api/login", data);
};

export { handleLoginApi };
