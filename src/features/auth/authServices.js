import axios from "axios";

const API_URL = axios.create({ baseURL: "http://localhost:5000" });
// Register user
const register = async (userData, navigate) => {
  const response = await API_URL.post("/users/signup", userData);
  console.log(response.data, "RESP##");

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await API_URL.post("/users/signin", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
