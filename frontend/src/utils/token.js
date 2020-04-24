export const TOKEN_KEY = "@erp-token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const config = {
  headers: {
    "content-type": "multipart/form-data",
  },
  auth: {
    username: "erp",
    password: "!cos8D#3nd",
  },
};

export const formData = (username, password) => {
  const formData = new FormData();
  formData.append("grant_type", "password");
  formData.append("username", username);
  formData.append("password", password);
  return formData;
};

export const getHeaders = () => {
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  };
};
