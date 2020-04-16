import api from "./api";
import { config } from "./utils/auth";

export default class AuthApi {
  static async token(username, password) {
    const formData = new FormData();
    formData.append("grant_type", "password");
    formData.append("username", username);
    formData.append("password", password);

    const response = await api.post("/auth/oauth/token", formData, config);
    return response.data.access_token;
  }
}
