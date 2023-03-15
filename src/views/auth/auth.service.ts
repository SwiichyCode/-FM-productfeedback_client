import axios from "axios";

const login = async (email: string, password: string) => {
  return axios
    .post("http://localhost:8080/api/auth/signin", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
    });
};

const register = (username: string, email: string, password: string) => {
  return axios.post("http://localhost:8080/api/auth/signup", {
    username,
    email,
    password,
  });
};

const logout = async () => {
  localStorage.removeItem("user");
};

export default {
  login,
  register,
  logout,
};
