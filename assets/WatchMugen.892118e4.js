import{V as t,l as e,b as i,n as s}from"./main.e72b2d96.js";import{al as n,bV as o,cc as a}from"./vendor.70269bfe.js";const r={name:"WatchMugen",components:{VideoCardList:t},props:{},data:()=>({currentTime:0,nextCheck:0,timer:null,playlist:[],timeOffset:0,video:{},countdownProgress:0,isLoading:!0}),computed:{videos(){return this.playlist.map((t=>t.video))},nextUpTime(){if(!this.nextCheck||!this.currentTime)return"";return this.nextCheck-this.currentTime<0?"Loading...":e(new Date(1e3*this.nextCheck),this.$store.state.settings.lang).fromNow()}},watch:{currentTime(){this.currentTime>this.nextCheck&&(this.calculateVideo(),this.countdownPercentage=0),this.countdownProgress=100*(1-(this.nextCheck-this.currentTime)/this.video.duration)},playlist(){this.playlist&&(0===this.playlist.length||this.playlist[this.playlist.length-1].timestamp+this.playlist[this.playlist.length-1].video.duration<(new Date).getTime()/1e3+1800)&&this.init()}},mounted(){const t=this;this.timer=setInterval((()=>{t.currentTime=Math.floor((new Date).getTime()/1e3)}),1e3),this.init()},beforeDestroy(){clearInterval(this.timer)},methods:{init(){i.rotation().then((t=>{this.playlist=t.data.sort(((t,e)=>+t.timestamp-e.timestamp)),this.calculateVideo()}))},calculateVideo(){const t=(new Date).getTime()/1e3;this.playlist=this.playlist.filter((e=>+e.timestamp+e.video.duration>t));const e=this.playlist[0];this.nextCheck=this.playlist[1].timestamp,i.video(e.video.id).then((i=>{this.timeOffset=Math.floor(t-e.timestamp),this.video=i.data,this.$emit("playNext",{video:this.video,timeOffset:this.timeOffset})}))}}};var l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i(n,{staticClass:"mb-2",attrs:{tile:""}},[i(o,[t._v(t._s(t.$t("component.watch.nextUpInMugen"))+" "+t._s(t.nextUpTime))]),i(a,{attrs:{color:t.countdownProgress>0?"primary":"grey",value:t.countdownProgress}}),t.playlist.length>0?i("VideoCardList",{attrs:{videos:t.videos,"limit-rows":2,"active-id":t.video.id,"include-channel":"",horizontal:"",cols:{xs:1,sm:2,md:3,lg:5,xl:5},dense:"","ignore-block":""}}):t._e()],1)},h=[];l._withStripped=!0;const c={};var m=s(r,l,h,!1,d,null,null,null);function d(t){for(let e in c)this[e]=c[e]}m.options.__file="src/components/watch/WatchMugen.vue";const p=function(){return m.exports}();export{p as default};