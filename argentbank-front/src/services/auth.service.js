import axios from "axios";
import apiBaseUrl from "../utils/constants";

const API_URL = apiBaseUrl;

const login = async (email, password) => {
  const response = await axios
        .post(API_URL + "/user/login", {
            email,
            password,
        });
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  login,
  logout,
};

export default authService;