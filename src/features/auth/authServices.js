import axios from "axios";

const API_URL = axios.create({ baseURL: "http://localhost:5000" });
// Register user
const register = async (userData) => {
  const response = await API_URL.post("/user/signup", userData);
  console.log(response.data, "LL");
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await API_URL.post("/user/signin", userData);

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
