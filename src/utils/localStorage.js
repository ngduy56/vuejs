export const setAccessToken = (value) =>
  localStorage.setItem("accessToken", value);

export const setUser = (value) => {
  localStorage.setItem("user", JSON.stringify(value));
};
export const removeUser = () => {
  localStorage.removeItem("user");
};
export const getUser = () => {
  let user = localStorage.getItem("user");
  return JSON.parse(user);
};
export const getAccessToken = () => localStorage.getItem("accessToken");
export const removeAccessToken = () => localStorage.removeItem("accessToken");
