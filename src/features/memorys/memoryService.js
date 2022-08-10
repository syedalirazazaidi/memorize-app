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

const updatePost = async (memoryData, token, id) => {
  console.log(id, "bbbbbbbbbbbbbb");
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };

  const response = await axios.update(`{url}/${id}`, memoryData);

  return response.data;
};

const memoryService = {
  getPosts,
  createPosts,
  updatePost,
};

export default memoryService;
