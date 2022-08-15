import axios from "axios";

// const url = "http://localhost:5000/posts";
const API_URL = axios.create({ baseURL: "http://localhost:5000" });

// API_URL.interceptors.request.use((req) => {
//   if (localStorage.getItem("user")) {
//     req.headers.Authorization = `Bearer ${
//       JSON.parse(localStorage.getItem("user")).token
//     }`;
//   }
//   return req;
// });
// Get user goals

// if (localStorage.getItem("user")) {
//   const token = JSON.parse(localStorage.getItem("user"));
// }
const getPosts = async (token) => {
  const response = await API_URL.get("/posts");
  // await axios.get(url);

  return response.data;
};

// Create new goal
const createPosts = async (memoryData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await API_URL.post("/posts", memoryData, config);
  // await axios.post(url, memoryData);
  console.log(response, "RTR");
  return response.data;
};

const updatePosted = async (id, memoryData) => {
  const { currentId, postData } = memoryData;
  const response = await API_URL.patch(`/posts/${currentId}`, postData);

  //  await axios.patch(`${url}/${currentId}`, postData);

  return response.data;
};

// Delete user memory
const deletePosted = async (id, token) => {
  const response = await API_URL.delete(`/posts/${id}`);

  // await axios.delete(`${url}/${id}`);

  return response.data;
};

// liked the post
const likedPosted = async (id, token) => {
  const response = await axios.patch(`/posts/${id}/likePost`);
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
