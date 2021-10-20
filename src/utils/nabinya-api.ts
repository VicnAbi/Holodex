import axios, { AxiosResponse } from "axios";
import querystring from "querystring";
import { dayjs } from "@/utils/time";
import { CHANNEL_URL_REGEX, VIDEO_URL_REGEX } from "./consts";
import type { Playlist, PlaylistList } from "./types";

// Need full domain for socket.io to work!!
export const API_BASE_URL = `${window.location.origin}/api`;
export const SITE_BASE_URL = `${window.location.origin}`;

export const axiosInstance = (() => {
    const instance = axios.create({ baseURL: `${API_BASE_URL}/v2` });
    return instance;
})();

const data = {
    total: "264",
    items: [
        {
            id: "l3DGmXpTixY",
            title: "카레조지기 cooking curry",
            type: "stream",
            topic_id: "cooking",
            published_at: "2021-10-19T20:00:00.000Z",
            available_at: "2021-10-19T20:00:00.000Z",
            duration: 10000,
            status: "past",
            start_scheduled: "2021-10-19T20:00:00.000Z",
            start_actual: "2021-10-19T20:00:00.000Z",
            end_actual: "2021-10-19T22:00:00.000Z",
            live_viewers: 0,
            clips: [],
            channel: {},
        },
        {
            id: "l3DGmXpTixY",
            title: "카레조지기 cooking curry",
            type: "stream",
            topic_id: "cooking",
            published_at: "2021-10-19T20:00:00.000Z",
            available_at: "2021-10-19T20:00:00.000Z",
            duration: 10000,
            status: "past",
            start_scheduled: "2021-10-19T20:00:00.000Z",
            start_actual: "2021-10-19T20:00:00.000Z",
            end_actual: "2021-10-19T22:00:00.000Z",
            live_viewers: 0,
            clips: [],
            channel: {},
        },
    ],
};

export default {
    channelVideos(channelId, { type = "videos", query }) {
        return new Promise((resolve, reject) => {
            resolve({ data });
        });
    },
};
