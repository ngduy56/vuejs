import axiosClient from "@/axios/axiosClient";

export default {
  register(credentials) {
    return axiosClient.post("auth/local/register", {
      email: credentials.email,
      username: credentials.username,
      password: credentials.password,
      fullName: credentials.fullName,
    });
  },
  login(credentials) {
    return axiosClient.post("auth/local", {
      identifier: credentials.identifier,
      password: credentials.password,
    });
  },
};
