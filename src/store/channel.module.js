/* eslint-disable no-shadow */
import api from "@/utils/backend-api";

const nabinyaData = {
    banner: "https://yt3.ggpht.com/OydwbsNuv3Kj545ggALTwZQVSPbt9lGaLhXRd-IBXk1d3okkI0pqnJtfgSkTgfuo-RandylpQw",
    clip_count: 0,
    comments_crawled_at: "2021-10-20T10:00:00.000Z",
    crawled_at: "2021-10-20T10:00:00.000Z",
    created_at: "2021-10-20T10:00:00.000Z",
    description: "nabi twitch",
    english_name: "Nabinya",
    id: "UClwpAJOWq7TxZX_H_vOI4Fw",
    inactive: false,
    lang: null,
    name: "Nabinya",
    org: "Independent",
    photo: "https://yt3.ggpht.com/lLKFilrPQlwW9DdT4q72IAzP-OskvhM-qI4t7I2KXTjajonSOPnvLhmsE2XEXNTDrQ5ASjCG=s88-c-k-c0x00ffffff-no-rj",
    published_at: "2021-10-20T10:00:00.000Z",
    suborg: "",
    subscriber_count: "100",
    thumbnail: "https://yt3.ggpht.com/lLKFilrPQlwW9DdT4q72IAzP-OskvhM-qI4t7I2KXTjajonSOPnvLhmsE2XEXNTDrQ5ASjCG=s88-c-k-c0x00ffffff-no-rj",
    top_topics: [],
    twitter: "aoinabi",
    type: "vtuber",
    updated_at: "2021-10-20T10:00:00.000Z",
    video_count: "2",
    view_count: "100",
    yt_uploads_id: "UClwpAJOWq7TxZX_H_vOI4Fw",
};

const initialState = {
    id: null,
    channel: {},
    isLoading: true,
    hasError: false,
};

export const state = { ...initialState };

const getters = {};

const actions = {
    fetchChannel({ state, commit }) {
        if (!state.id) return commit("fetchError");

        commit("fetchStart");
        return api
            .channel(state.id)
            .then(({ data }) => {
                commit("setChannel", data);
                commit("fetchEnd");
            })
            .catch((e) => {
                console.error(e);
                commit("fetchError");
            });
    },
    fetchNabinya({ commit }) {
        commit("fetchStart");
        commit("setChannel", nabinyaData);
        commit("fetchEnd");
        return nabinyaData;
    },
};

const mutations = {
    fetchStart(state) {
        state.isLoading = true;
    },
    fetchEnd(state) {
        state.isLoading = false;
    },
    fetchError(state) {
        state.hasError = true;
        state.isLoading = false;
    },
    setId(state, id) {
        state.id = id;
    },
    setChannel(state, channel) {
        state.channel = channel;
    },
    resetState(state) {
        Object.assign(state, initialState);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
