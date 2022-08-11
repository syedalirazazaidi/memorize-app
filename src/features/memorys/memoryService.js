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

// const updatePosted = async (memoryData, token, id) => {
//   const { currentId, postData } = memoryData;
//   console.log(currentId, "lllllllllllllllllllll", postData);
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   const response = await axios.patch(`{url}/${id}`, memoryData);

//   return response.data;
// };

const memoryService = {
  getPosts,
  createPosts,
  updatePosted,
};

export default memoryService;
