import axios from "axios";

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

const updatePosted = async (id, memoryData) => {
  const { currentId, postData } = memoryData;
  const response = await axios.patch(`${url}/${currentId}`, postData);

  return response.data;
};

// Delete user memory
const deletePosted = async (id, token) => {
  const response = await axios.delete(`${url}/${id}`);

  return response.data;
};

// liked the post
const likedPosted = async (id, token) => {
  const response = await axios.patch(`${url}/${id}/likePost`);
  return response.data;
};

const memoryService = {
  getPosts,
  createPosts,
  updatePosted,
  deletePosted,
  likedPosted,
};

export default memoryService;
