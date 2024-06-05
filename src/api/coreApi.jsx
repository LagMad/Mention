import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.mention.nathakusuma.com/v1",
});

export { axiosInstance };
