<template>
  <div>
    <v-app-bar
      v-show="!(isMobile && isWatchPage) && !isMultiView"
      id="top-bar"
      :class="{
        'secondary darken-1': darkMode,
        'primary lighten-1': !darkMode,
      }"
      :app="!isWatchPage"
      clipped-left
      clipped-right
      flat
      extension-height="36"
    >
      <!--=============================== Top Bar (Regular View) =============================-->

      <template v-if="!isMobile || (isMobile && !searchBarExpanded)">
        <!--================= Logo & Search Bar (Space permitting) ================-->
        <v-toolbar-title style="overflow: visible" :class="{ 'pa-0': isMobile }">
          <router-link :to="{ name: $store.state.settings.defaultOpen || '/' }">
            <Logo
              v-if="!isMobile"
              width="24"
              height="24"
              style="margin-bottom: -4px"
            />
          </router-link>
          <OrgSelector />
        </v-toolbar-title>
      </template>

      <!--=========================== END OF Regular View ===========================-->

      <!--===================== Expanded Search Bar (Mobile Only) =======================-->
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import SearchBar from "@/components/common/SearchBar.vue";
import Logo from "@/components/common/Logo.vue";
import OrgSelector from "@/components/common/OrgSelector.vue";
import UserCard from "@/components/user/UserCard.vue";
import { mdiInfinity } from "@mdi/js";
import { mapState } from "vuex";
// import InstallPrompt from "@/components/common/InstallPrompt.vue";
import hideExtensionOnScroll from "@/mixins/hideExtensionOnScroll";
import EditPlaylist from "@/components/playlist/EditPlaylist.vue";
import ResponsiveMenu from "@/components/common/ResponsiveMenu.vue";
import NavDrawer from "./NavDrawer.vue";
import BottomNav from "./BottomNav.vue";

export default {
    components: {
        SearchBar,
        NavDrawer,
        BottomNav,
        UserCard,
        Logo,
        // InstallPrompt,
        MusicBar2: () => import("./MusicBar2.vue"),
        OrgSelector,
        EditPlaylist,
        ResponsiveMenu,
    },
    mixins: [hideExtensionOnScroll],
    data() {
        return {
            favoritesExpanded: false,
            searchBarExpanded: false,
        };
    },
    computed: {
        isMobile() {
            return this.$store.state.isMobile;
        },
        darkMode() {
            return this.$store.state.settings.darkMode;
        },
        isWatchPage() {
            return ["watch_id", "watch", "mugen-clips", "edit_video", "multiview"].includes(this.$route.name);
        },
        isMultiView() {
            return this.$route.name === "multiview";
        },
        navDrawer: {
            get() {
                return this.$store.state.navDrawer;
            },
            set(val) {
                return this.$store.commit("setNavDrawer", val);
            },
        },
        pages() {
            return [
                {
                    name: this.$t("component.mainNav.home"),
                    path: "/",
                    icon: this.icons.mdiHome,
                },
                {
                    name: this.$t("component.mainNav.favorites"),
                    path: "/favorites",
                    icon: this.icons.mdiHeart,
                },
                {
                    name: this.$t("component.mainNav.channels"),
                    path: "/channel",
                    icon: this.icons.mdiAccountBoxMultiple,
                },
                {
                    name: this.$t("component.mainNav.playlist"),
                    path: "/playlists",
                    icon: this.icons.mdiPlaylistPlay,
                    divider: true,
                },
                {
                    name: this.$t("component.mainNav.multiview"),
                    path: "/multiview",
                    icon: this.icons.mdiViewDashboard,
                    collapsible: true,
                },
                {
                    name: this.$t("component.mainNav.music"),
                    path: "/music",
                    icon: this.icons.mdiMusic,
                    collapsible: true,
                },
                {
                    name: this.$t("component.mainNav.MugenClips"),
                    path: "/infinite",
                    icon: mdiInfinity,
                    collapsible: true,
                    divider: true,
                },
                {
                    name: this.$t("component.mainNav.about"),
                    path: "/about",
                    icon: this.icons.mdiHelpCircle,
                    collapsible: true,
                },
                {
                    name: this.$t("component.mainNav.settings"),
                    path: "/settings",
                    icon: this.icons.mdiCog,
                    collapsible: true,
                },
            ];
        },
        ...mapState(["firstVisit"]),
    },
    watch: {
        // toggle navdrawer when navigating between watch pages on desktop
        isWatchPage() {
            if (this.isMobile) return;
            this.navDrawer = !this.isWatchPage;
        },
        // if user is flipping between mobile/desktop breakpoints, keep navdrawer closed
        isMobile() {
            this.navDrawer = false;
        },
    },
    created() {
        if (this.$store.state.firstVisit) {
            const vm = this;
            setTimeout(() => {
                vm.$store.commit("setVisited");
            }, 30000);
        }

        // always pop out nav drawer if it's not watch page or collapsed
        if (
            !window.location.pathname.match("^/watch|^/multiview|^/infinite")
            && !this.isMobile
            && !this.$vuetify.breakpoint.md
        ) {
            this.navDrawer = true;
        }
    },
};
</script>

<style scoped>
@keyframes rotation {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(359deg);
    }
}

#top-bar {
    /* background-color: #2b79ad !important; */
    padding-left: min(calc(env(safe-area-inset-left)), 30px);
    padding-right: min(calc(env(safe-area-inset-right)), 30px);
    /* padding-top: min(calc(env(safe-area-inset-top) / 2), 30px); */
    /* height: calc(env(safe-area-inset-top,0px) + 30px); */
    padding-top: 0px;
    margin-top: env(safe-area-inset-top, 0px) !important;
}
#top-bar.v-toolbar--extended {
    height: 56px !important;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.music-bar-open-btn {
    animation-timing-function: ease-in-out;
    animation: fadein 5s;
    animation-iteration-count: 1;
}

.main-playlist-border {
    border: 2px solid var(--v-primary-base);
    border-radius: 8px;
}
.theme--dark .main-playlist-border {
    box-shadow: 0px 6px 12px -7px var(--v-primary-darken2);
}
.theme--light .main-playlist-border {
    box-shadow: 0px 6px 12px -7px var(--v-primary-lighten2);
}
</style>
