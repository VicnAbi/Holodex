import axios, { AxiosResponse } from "axios";
import querystring from "querystring";

export const TWITCH_API_BASE_URL = "https://api.twitch.tv";
export const TWITCH_CLIENT_ID = "";
export const TWITCH_TOKEN = "";
export const TWITCH_CHANNEL_ID = "";

export const axiosInstance = (() => {
  const instance = axios.create({
    baseURL: `${TWITCH_API_BASE_URL}/helix`,
    headers: {
      Authorization: `Bearer ${TWITCH_TOKEN}`,
      "Client-Id": TWITCH_CLIENT_ID,
    },
  });
  return instance;
})();

export default {
  videos() {
    const q = querystring.stringify({ user_id: TWITCH_CHANNEL_ID });
    return axiosInstance.get(`/videos?${q}`);
  },
  video(id: string) {
    const q = querystring.stringify({ id });
    return axiosInstance.get(`/videos?${q}`);
  },
  chatHistory() {
    return new Promise((resolve, reject) => {
      const data = [{
        is_moderator: false,
        is_verified: false,
        is_vtuber: false,
        message: "hello",
        name: "chater",
        timestamp: "1630764552228",
      }];
      resolve({ data });
    });
  },
};
