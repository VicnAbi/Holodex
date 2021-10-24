import{bO as e,b7 as t,am as a,aE as r,aP as n,b5 as o,ar as s,an as i,ao as l,ap as u}from"./vendor.f7b02bb7.js";import{n as c,i as d,j as p}from"./main.8aa73b2e.js";var f={exports:{}},y=function(){var e={},t={};return e.on=function(e,a){var r={name:e,handler:a};return t[e]=t[e]||[],t[e].unshift(r),r},e.off=function(e){var a=t[e.name].indexOf(e);-1!==a&&t[e.name].splice(a,1)},e.trigger=function(e,a){var r,n=t[e];if(n)for(r=n.length;r--;)n[r].handler(a)},e},h={exports:{}},m=function(e,t,a){var r=document.head||document.getElementsByTagName("head")[0],n=document.createElement("script");"function"==typeof t&&(a=t,t={}),t=t||{},a=a||function(){},n.type=t.type||"text/javascript",n.charset=t.charset||"utf8",n.async=!("async"in t)||!!t.async,n.src=e,t.attrs&&function(e,t){for(var a in t)e.setAttribute(a,t[a])}(n,t.attrs),t.text&&(n.text=""+t.text),("onload"in n?g:v)(n,a),n.onload||g(n,a),r.appendChild(n)};function g(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function v(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}!function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var a,r=(a=m)&&a.__esModule?a:{default:a};t.default=function(e){return new Promise((function(t){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function)t(window.YT);else{var a="http:"===window.location.protocol?"http:":"https:";(0,r.default)(a+"//www.youtube.com/iframe_api",(function(t){t&&e.trigger("error",t)}));var n=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){n&&n(),t(window.YT)}}}))},e.exports=t.default}(h,h.exports);var b={exports:{}},w={exports:{}},x={exports:{}},_=1e3,S=60*_,P=60*S,C=24*P,E=365.25*C,k=function(e,t){t=t||{};var a,r=typeof e;if("string"===r&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var a=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return a*E;case"days":case"day":case"d":return a*C;case"hours":case"hour":case"hrs":case"hr":case"h":return a*P;case"minutes":case"minute":case"mins":case"min":case"m":return a*S;case"seconds":case"second":case"secs":case"sec":case"s":return a*_;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return a;default:return}}(e);if("number"===r&&!1===isNaN(e))return t.long?I(a=e,C,"day")||I(a,P,"hour")||I(a,S,"minute")||I(a,_,"second")||a+" ms":function(e){if(e>=C)return Math.round(e/C)+"d";if(e>=P)return Math.round(e/P)+"h";if(e>=S)return Math.round(e/S)+"m";if(e>=_)return Math.round(e/_)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))};function I(e,t,a){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+a:Math.ceil(e/t)+" "+a+"s"}!function(e,t){var a;function r(e){function r(){if(r.enabled){var e=r,n=+new Date,o=n-(a||n);e.diff=o,e.prev=a,e.curr=n,a=n;for(var s=new Array(arguments.length),i=0;i<s.length;i++)s[i]=arguments[i];s[0]=t.coerce(s[0]),"string"!=typeof s[0]&&s.unshift("%O");var l=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,(function(a,r){if("%%"===a)return a;l++;var n=t.formatters[r];if("function"==typeof n){var o=s[l];a=n.call(e,o),s.splice(l,1),l--}return a})),t.formatArgs.call(e,s);var u=r.log||t.log||console.log.bind(console);u.apply(e,s)}}return r.namespace=e,r.enabled=t.enabled(e),r.useColors=t.useColors(),r.color=function(e){var a,r=0;for(a in e)r=(r<<5)-r+e.charCodeAt(a),r|=0;return t.colors[Math.abs(r)%t.colors.length]}(e),"function"==typeof t.init&&t.init(r),r}(t=x.exports=r.debug=r.default=r).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var a=("string"==typeof e?e:"").split(/[\s,]+/),r=a.length,n=0;n<r;n++)a[n]&&("-"===(e=a[n].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var a,r;for(a=0,r=t.skips.length;a<r;a++)if(t.skips[a].test(e))return!1;for(a=0,r=t.names.length;a<r;a++)if(t.names[a].test(e))return!0;return!1},t.humanize=k,t.names=[],t.skips=[],t.formatters={}}(0,x.exports),function(e,t){function a(){var e;try{e=t.storage.debug}catch(a){}return!e&&"undefined"!=typeof process&&"env"in process&&(e={}.DEBUG),e}(t=w.exports=x.exports).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var a=this.useColors;if(e[0]=(a?"%c":"")+this.namespace+(a?" %c":" ")+e[0]+(a?"%c ":" ")+"+"+t.humanize(this.diff),!a)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var n=0,o=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(n++,"%c"===e&&(o=n))})),e.splice(o,0,r)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(a){}},t.load=a,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(a())}(0,w.exports);var V,T,A={exports:{}};V=A,T=A.exports,Object.defineProperty(T,"__esModule",{value:!0}),T.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],V.exports=T.default;var M={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=t.default}(M,M.exports);var $={exports:{}},R={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default}(R,R.exports),function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var a,r=(a=R.exports)&&a.__esModule?a:{default:a};t.default={pauseVideo:{acceptableStates:[r.default.ENDED,r.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[r.default.ENDED,r.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[r.default.ENDED,r.default.PLAYING,r.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=t.default}($,$.exports),function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var a=s(w.exports),r=s(A.exports),n=s(M.exports),o=s($.exports);function s(e){return e&&e.__esModule?e:{default:e}}var i=(0,a.default)("youtube-player"),l={proxyEvents:function(e){var t={},a=function(a){var r="on"+a.slice(0,1).toUpperCase()+a.slice(1);t[r]=function(t){i('event "%s"',r,t),e.trigger(a,t)}},r=!0,o=!1,s=void 0;try{for(var l,u=n.default[Symbol.iterator]();!(r=(l=u.next()).done);r=!0){a(l.value)}}catch(c){o=!0,s=c}finally{try{!r&&u.return&&u.return()}finally{if(o)throw s}}return t},promisifyPlayer:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a={},n=function(r){t&&o.default[r]?a[r]=function(){for(var t=arguments.length,a=Array(t),n=0;n<t;n++)a[n]=arguments[n];return e.then((function(e){var t=o.default[r],n=e.getPlayerState(),s=e[r].apply(e,a);return t.stateChangeRequired||Array.isArray(t.acceptableStates)&&-1===t.acceptableStates.indexOf(n)?new Promise((function(a){e.addEventListener("onStateChange",(function r(){var n=e.getPlayerState(),o=void 0;"number"==typeof t.timeout&&(o=setTimeout((function(){e.removeEventListener("onStateChange",r),a()}),t.timeout)),Array.isArray(t.acceptableStates)&&-1!==t.acceptableStates.indexOf(n)&&(e.removeEventListener("onStateChange",r),clearTimeout(o),a())}))})).then((function(){return s})):s}))}:a[r]=function(){for(var t=arguments.length,a=Array(t),n=0;n<t;n++)a[n]=arguments[n];return e.then((function(e){return e[r].apply(e,a)}))}},s=!0,i=!1,l=void 0;try{for(var u,c=r.default[Symbol.iterator]();!(s=(u=c.next()).done);s=!0){var d=u.value;n(d)}}catch(p){i=!0,l=p}finally{try{!s&&c.return&&c.return()}finally{if(i)throw l}}return a}};t.default=l,e.exports=t.default}(b,b.exports),function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=s(y),n=s(h.exports),o=s(b.exports);function s(e){return e&&e.__esModule?e:{default:e}}var i=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2&&void 0!==arguments[2]&&arguments[2],l=(0,r.default)();if(i||(i=(0,n.default)(l)),t.events)throw new Error("Event handlers cannot be overwritten.");if("string"==typeof e&&!document.getElementById(e))throw new Error('Element "'+e+'" does not exist.');t.events=o.default.proxyEvents(l);var u=new Promise((function(r){"object"===(void 0===e?"undefined":a(e))&&e.playVideo instanceof Function?r(e):i.then((function(a){var n=new a.Player(e,t);return l.on("ready",(function(){r(n)})),null}))})),c=o.default.promisifyPlayer(u,s);return c.on=l.on,c.off=l.off,c},e.exports=t.default}(f,f.exports);const D=e(f.exports),O={props:{height:{type:[Number,String],default:720},width:{type:[Number,String],default:1280},mute:{type:Boolean,default:!1},refreshRate:{type:Number,default:500},manualUpdate:{type:Boolean}},data:()=>({player:{},updateTimer:null}),beforeDestroy(){this.updateTimer&&(clearInterval(this.updateTimer),this.updateTimer=null)},methods:{playerReady(e){this.setMute(this.mute),this.initListeners(),this.$emit("ready",e)},playerError(e){console.log(`[PLAYER ERROR] - ${this.elementId}`),console.error(e),this.$emit("error",e)},getCurrentTime(){},getPlaybackRate(){},getVolume(){},isMuted(){},initListeners(){if(this.manualUpdate)return;const e=this.$listeners.currentTime,t=this.$listeners.playbackRate,a=this.$listeners.mute;(this.$listeners.volume||e||t||a)&&(this.updateTimer=setInterval(this.updateListeners,this.refreshRate))},async updateListeners(){const e=this.$listeners;e.mute&&this.$emit("mute",await this.isMuted()),e.playbackRate&&this.$emit("playbackRate",await this.getPlaybackRate()),e.currentTime&&this.$emit("currentTime",await this.getCurrentTime()),e.volume&&this.$emit("volume",await this.getVolume())}}};var L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{attrs:{id:e.elementId}})])},N=[];L._withStripped=!0;let B=1;const j={};var Y=c({name:"Youtube",mixins:[O],props:{videoId:String,playerVars:{type:Object,default:()=>({})}},data:()=>(B+=1,{events:{[-1]:"unstarted",1:"playing",2:"paused",0:"ended",3:"buffering",5:"cued"},elementId:`youtube-player-${B}`}),computed:{},watch:{videoId:"updatePlayer",mute:"setMute"},beforeDestroy(){null!==this.player&&this.player.destroy&&(this.player.destroy(),delete this.player)},async mounted(){window.YTConfig={host:"https://www.youtube.com/iframe_api"};this.player=D(this.elementId,{host:"https://www.youtube.com",width:this.width,height:this.height,videoId:this.videoId,playerVars:this.playerVars}),this.player.on("ready",(e=>this.playerReady(e.target))),this.player.on("stateChange",this.playerStateChange),this.player.on("error",this.playerError)},methods:{playerStateChange(e){null!==e.data&&-1!==e.data&&this.$emit(this.events[e.data],e.target)},updatePlayer(e){if(!e)return void this.player.stopVideo();const t={videoId:e};"number"==typeof this.playerVars.start&&(t.startSeconds=this.playerVars.start),"number"==typeof this.playerVars.end&&(t.endSeconds=this.playerVars.end),console.log("LoadVideoByID in Vue-Youtube",t),1!==this.playerVars.autoplay?this.player.cueVideoById(t):this.player.loadVideoById(t)},setMute(e){this.player&&(e?this.player.mute():this.player.unMute())},getCurrentTime(){return this.player.getCurrentTime()},getPlaybackRate(){return this.player.getPlaybackRate()},getVolume(){return this.player.getVolume()},isMuted(){return this.player.isMuted()},async sendLikeEvent(){(await this.player.getIframe()).contentWindow.postMessage({event:"likeVideo"},"*")}}},L,N,!1,U,null,null,null);function U(e){for(let t in j)this[t]=j[t]}Y.options.__file="src/components/player/YoutubePlayer.vue";const F=function(){return Y.exports}(),z={name:"SongItem",props:{song:{type:Object,required:!0},showArtist:{type:Boolean,default:!0},showSongArt:{type:Boolean,default:!0},verticalList:{type:Boolean,default:!0},detailed:{type:Boolean,default:!1},alwaysShowDeletion:{type:Boolean,default:!1},showTime:{type:Boolean,default:!1},hoverIcon:{type:String,default:null},artworkHoverIcon:{type:String,default:null},color:{type:String,default:null}},data:()=>({albumArt:null}),computed:{userCanDelete(){const e=this.$store.state.userdata;return e&&e.user&&e.user.role&&e.user.id&&("user"!==e.user.role||+e.user.id==+this.song.creator_id)},formattedTime(){return d(this.song.available_at,this.$store.state.settings.lang,this.$t.bind(this))},nameProperty(){return this.$store.state.settings.nameProperty}},methods:{secondsToHuman:p}};var q=function(){var e=this,c=e.$createElement,d=e._self._c||c;return d(t,{scopedSlots:e._u([{key:"default",fn:function(c){var p=c.hover;return[d(a,{on:{click:function(t){return t.stopPropagation(),e.$emit("play",e.song)}}},[d(t,{scopedSlots:e._u([{key:"default",fn:function(t){var a=t.hover;return[d(r,{attrs:{tile:""}},[e.song.art?d(n,{attrs:{"lazy-src":"",src:e.song.art}}):d(o,{staticClass:"d-flex pa-1",attrs:{width:"100%",height:"100%",color:"grey darken-1"}},[d(s,{staticClass:"ma-auto",attrs:{small:"",icon:"",outlined:"",disabled:""}},[d(i,{attrs:{small:""}},[e._v(" "+e._s(e.icons.mdiMusic)+" ")])],1)],1),p&&!a?d(o,{staticClass:"d-flex pa-1 hover-item",staticStyle:{position:"absolute",left:"0px"},attrs:{width:"100%",height:"100%",color:"transparent"}},[d(s,{staticClass:"ma-auto",attrs:{"x-small":"",fab:"",color:"blue lighten-3",elevation:"2"}},[d(i,{attrs:{small:""}},[e._v(" "+e._s(e.hoverIcon)+" ")])],1)],1):e._e(),e.$listeners.playNow&&a?d(o,{staticClass:"d-flex pa-1 hover-art",staticStyle:{position:"absolute",left:"0px"},attrs:{width:"100%",height:"100%",color:"transparent"}},[d(s,{staticClass:"ma-auto",attrs:{"x-small":"",fab:"",color:"blue lighten-3",elevation:"2"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.$emit("playNow",e.song)}}},[d(i,{attrs:{small:""}},[e._v(" "+e._s(e.artworkHoverIcon)+" ")])],1)],1):e._e()],1)]}}],null,!0)}),d(l,{staticClass:"py-1 pt-1"},[d(u,{staticClass:"text-subtitle-1",class:e.color},[e.alwaysShowDeletion||e.detailed&&e.$listeners.remove&&e.userCanDelete?d("a",{staticClass:"text-caption error--text float-right ml-1 song-clickable",on:{click:function(t){return t.stopPropagation(),e.$emit("remove",e.song)}}},[e._v(" "+e._s(e.$t("component.media.remove"))+" ")]):e._e(),e.detailed?d("div",{staticClass:"float-right text-caption"},[e._v(" ["+e._s(e.secondsToHuman(e.song.start))+" - "+e._s(e.secondsToHuman(e.song.end))+"] ")]):e._e(),d("span",{staticClass:"limit-width"},[e._v(" "+e._s(e.song.name)+" / "),d("span",{staticClass:"primary--text"},[e._v(e._s(e.song.original_artist))])])]),d(u,{staticClass:"text--caption",class:e.color},[d("div",{staticClass:"float-right"},[e.showTime?d("span",{staticClass:"muted"},[e._v(e._s(e.formattedTime))]):e._e(),e._v(" "+e._s(Math.floor((e.song.end-e.song.start)/60))+":"+e._s((Math.round(e.song.end-e.song.start)%60).toString().padStart(2,"0"))+" ")]),e.$listeners.channel?d("span",{staticClass:"song-clickable",on:{click:function(t){return t.stopPropagation(),e.$emit("channel",e.song)}}},[e._v(" "+e._s(e.song.channel[e.nameProperty]||e.song.channel.name)+" ")]):d("span",[e._v(" "+e._s(e.song.channel[e.nameProperty]||e.song.channel.name)+" ")])])],1)],1)]}}])})},G=[];q._withStripped=!0;const H={};var Q=c(z,q,G,!1,J,"5f5fef7a",null,null);function J(e){for(let t in H)this[t]=H[t]}Q.options.__file="src/components/media/SongItem.vue";const W=function(){return Q.exports}(),Z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:W});export{W as S,F as Y,Z as a};