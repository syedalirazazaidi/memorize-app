import axios from "axios";

// const API_URL = "/api/memorys/";

const url = "http://localhost:5000/posts";

// Get user goals
const getPosts = async (token) => {
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };

  const response = await axios.get(url);

  return response.data;
};

// Create new goal
const createPosts = async (memoryData, token) => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };

  const response = await axios.post(url, memoryData);

  return response.data;
};

const memoryService = {
  getPosts,
  createPosts,
};

export default memoryService;
