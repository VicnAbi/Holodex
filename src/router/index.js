import Vue from "vue";
import VueRouter from "vue-router";
import { loadLanguageAsync } from "@/plugins/vuetify";
import HomeFave from "../views/HomeFave.vue";
import store from "../store";

const Channel = () => import("../views/twitch/Channel.vue");
const ChannelVideos = () => import("../views/twitch/ChannelVideos.vue");
const Watch = () => import("../views/twitch/Watch.vue");
const NotFound = () => import("../views/NotFound.vue");

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeFave,
        props: { isFavPage: false },
        redirect() {
            return "twitch/UCzKkwB84Y0ql0EvyOWRSkEw/";
        },
    },
    {
        path: "/twitch/:id",
        component: Channel,
        children: [
            {
                path: "",
                name: "channel",
                component: ChannelVideos,
            },
        ],
    },
    {
        name: "watch",
        path: "/watch/:id?",
        component: Watch,
    },
    {
        path: "/404",
        component: NotFound,
    },
    {
        path: "*",
        component: NotFound,
    },
];

const router = new VueRouter({
    mode: "history",
    base: import.meta.env.BASE_URL,
    routes,
    // eslint-disable-next-line no-unused-vars
    scrollBehavior(to, from, savedPosition) {
        // try reload when entering new page, if not on Mobile
        if (!store.state.isMobile && !savedPosition) {
            store.dispatch("reloadCurrentPage", { source: "scrollBehavior", consumed: false });
        }
        if (to.path === from.path) {
            return savedPosition;
        }
        return savedPosition || { x: 0, y: 0 };
    },
});

router.beforeEach((to, from, next) => {
    if (!from.path.match("^/watch")) to.meta.prevPath = from.fullPath;

    const { lang } = store.state.settings;
    if (lang !== "en") {
        Promise.all([loadLanguageAsync(lang)]).then(() => next());
    } else next();
});

export default router;
