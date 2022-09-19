import axios from "axios";
import apiBaseUrl from "../utils/constants";
import authHeader from "./auth-header";

const API_URL = apiBaseUrl;

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserProfile = () => {
  return axios.get(API_URL + "/user/profile", { headers: authHeader() });
};

const userService = {
  getPublicContent,
  getUserProfile
};

export default userService