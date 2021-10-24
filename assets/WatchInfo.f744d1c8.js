import{C as t}from"./ChannelChip.f41fb5ea.js";import{a as e,C as s,c as i,l as a,d as n,i as o,n as r}from"./main.8aa73b2e.js";import{T as l}from"./TruncatedText.1db39923.js";import{bV as h,a3 as c,al as d,av as u,bS as m,az as v,aY as p,ay as f,am as C,aE as g,bW as w,an as _,aw as b}from"./vendor.f7b02bb7.js";const $=/(?:([0-5]?[0-9]):)?([0-5]?[0-9]):([0-5][0-9])/gm,T={name:"WatchInfo",components:{ChannelChip:t,ChannelInfo:e,ChannelSocials:s,ChannelImg:i,TruncatedText:l},props:{video:{type:Object,required:!0,default:null},noChips:{type:Boolean,default:!1},noSubCount:{type:Boolean,default:!1}},data:()=>({timer:null,elapsedTime:0,editMode:!1,showAllMentions:!1,lastViewerCount:-1,mdiAt:h}),computed:{lang(){return this.$store.state.settings.lang},formattedTime(){switch(this.video.status){case"upcoming":return this.formatDistance(this.video.start_scheduled,this.lang,this.$t.bind(this));case"live":return this.$t("component.watch.streamingFor",[this.elapsedTime]);default:return a(this.video.available_at,this.lang).format("LLL")}},liveViewers(){return this.video.live_viewers?(+this.video.live_viewers).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):""},liveViewerChange(){return this.lastViewerCount<0?0:this.video.live_viewers-this.lastViewerCount},mentions(){return this.video.mentions||[]},channelChips(){return this.mentions.length>3&&!this.showAllMentions?this.mentions.slice(0,3):this.mentions},processedMessage(){const t=document.createElement("div");t.innerHTML=this.video.description;const e=t.textContent,s=(this.$store.state.settings.redirectMode?"https://youtu.be/":"/watch/")+this.video.id;return e.replace($,((t,e,i,a)=>{const n=3600*Number(null!=e?e:0)+60*Number(i)+Number(a);return`<a class="comment-chip" href="${s}?t=${n}" data-time="${n}"> ${t} </a>`}))}},watch:{"video.status":function(){this.setTimer()},"video.live_viewers":function(t,e){this.lastViewerCount=e}},mounted(){this.setTimer()},beforeDestroy(){clearInterval(this.timer)},methods:{formatDuration:n,formatDistance:o,setTimer(){this.timer&&clearInterval(this.timer),"live"===this.video.status&&(this.timer=setInterval((()=>{this.elapsedTime=this.formatDuration(c().diff(c(this.video.start_actual)))}),1e3))},handleClick(t){t.target.matches(".comment-chip")&&(this.$emit("timeJump",t.target.getAttribute("data-time")),t.preventDefault())},goToSearchPage(){const t=this.video.topic_id,e=t[0].toUpperCase()+t.slice(1),{org:s}=this.video.channel;let i=`/search?q=type,value,text%0Atopic,${t},${e}`;s&&(i+=`%0Aorg,${s},${s}`),this.$router.push({path:i})}}};var y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s(d,{staticClass:"watch-card rounded-0"},[s(u,{staticClass:"pt-2",staticStyle:{"font-size":"1.125rem","font-weight":"400"}},[t.$route.path.includes("edit")?s("router-link",{staticStyle:{cursor:"pointer"},attrs:{tag:"span",to:"/watch/"+t.video.id}},[t._v(" "+t._s(t.video.title)+" ")]):s("span",[t._v(" "+t._s(t.video.title)+" ")])],1),s(m,[t._v(" "+t._s(t.formattedTime)+" "),"live"===t.video.status?[t._v(" • "+t._s(t.$t("component.videoCard.watching",[t.liveViewers]))+" "),t.liveViewerChange?s("span",{class:t.liveViewerChange>0?"green--text":"red--text"},[t._v(" ("+t._s((t.liveViewerChange>0?"+ ":"")+t.liveViewerChange)+") ")]):t._e()]:t._e()],2),s(v),s("div",{staticClass:"d-flex justify-space-between flex-wrap align-center"},[s(p,{attrs:{cols:"auto"}},[s(f,[s(C,[s(g,{attrs:{size:"80"}},[s("ChannelImg",{attrs:{channel:t.video.channel,size:"80"}})],1),s("ChannelInfo",{staticClass:"uploader-data-list",attrs:{channel:t.video.channel,"no-subscriber-count":t.noSubCount}}),s("ChannelSocials",{attrs:{channel:t.video.channel}})],1)],1)],1),s(p,{attrs:{cols:"auto"}},[t.channelChips&&t.channelChips.length>0?s(w,{attrs:{rounded:"",left:"",size:"40"}},[s(_,{attrs:{size:"25",color:"grey darken-2"}},[t._v(" "+t._s(t.mdiAt)+" ")])],1):t._e(),t._l(t.channelChips,(function(t){return[s("ChannelChip",{key:t.id,attrs:{channel:t,size:60}})]})),t.mentions.length>3?s("a",{staticClass:"text-subtitle-2",staticStyle:{"white-space":"pre"},on:{click:function(e){t.showAllMentions=!t.showAllMentions}}},[t._v(" [ "+t._s(t.showAllMentions?"-":"+")+" "+t._s(t.mentions.length-3)+" ] ")]):t._e()],2)],1),t._t("default",(function(){return[s(b,{staticClass:"text-body-2",on:{click:t.handleClick}},[s("truncated-text",{attrs:{html:t.processedMessage,lines:"4"}})],1)]}))],2)},x=[];y._withStripped=!0;const V={};var S=r(T,y,x,!1,A,null,null,null);function A(t){for(let e in V)this[e]=V[e]}S.options.__file="src/components/watch/WatchInfo.vue";const M=function(){return S.exports}();export{M as W};