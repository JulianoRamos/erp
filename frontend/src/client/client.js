import axios from "axios";

const url = "http://localhost:5555";

export const client = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});
