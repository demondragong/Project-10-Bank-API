import axios from "axios";
import apiBaseUrl from "../utils/constants";

const API_URL = apiBaseUrl;
const user = JSON.parse(localStorage.getItem("user"));
if (user && user.token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
}

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserProfile = async () => {
  const response = await axios.post(API_URL + "/user/profile");
  console.log(response.data);
  return response.data;
};

const userService = {
  getPublicContent,
  getUserProfile,
};

export default userService;
