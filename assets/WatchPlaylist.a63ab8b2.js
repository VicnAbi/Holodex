var t=Object.defineProperty,e=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(e,i,s)=>i in e?t(e,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[i]=s,l=(t,e)=>{for(var i in e||(e={}))a.call(e,i)&&o(t,i,e[i]);if(s)for(var i of s(e))r.call(e,i)&&o(t,i,e[i]);return t};import{q as n,b as d,n as h}from"./main.e72b2d96.js";import{aE as p,al as u,ay as c,bV as v,ar as y,an as m,aB as f}from"./vendor.70269bfe.js";const b={name:"WatchPlaylist",components:{VirtualVideoCardList:n},props:{value:{type:Number,default:0},currentTime:{type:Number,default:0}},data:()=>({isLoading:!1,hasError:!1,playlist:void 0}),computed:(g=l(l({},p("watch",["video"])),p("playlist",["active","isSaved"])),x={videos(){return this.playlist&&this.playlist.videos||[]}},e(g,i(x))),watch:{value(t){this.videos.length&&this.videos.length!==t&&-1!==t&&this.$route.params.id!==this.videos[t].id&&this.$emit("playNext",{video:this.videos[t]})},video(){this.updateCurrentIndex()}},beforeDestroy(){},mounted(){this.$route.query.playlist&&(this.updateCurrentIndex(),this.loadPlaylist(this.$route.query.playlist))},methods:{updateCurrentIndex(){const t=this.video.id,e=this.videos.findIndex((({id:e})=>e===t));this.$emit("input",e)},nextVideo(){this.videos[this.value+1]&&this.$emit("input",this.value+1)},loadPlaylist(t){if(t===this.active.id||"local"===t)return this.playlist=this.active,void this.updateCurrentIndex();this.isLoading=!0,d.getPlaylist(t).then((({data:t})=>{this.playlist=t,this.updateCurrentIndex()})).catch((t=>{console.error(t),this.hasError=!0})).finally((()=>{this.isLoading=!1}))}}};var g,x,_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mb-2",attrs:{elevation:"0"}},[i(u,[t.playlist?[i(c,[t._v(" "+t._s(t.playlist.name)+" ")]),i(v,{staticClass:"pb-2"},[t._v(" "+t._s(t.value+1)+"/"+t._s(t.videos.length)+" ")]),i(y,{staticStyle:{"margin-top":"-30px"},attrs:{fab:"",absolute:"",right:"",color:"primary darken-1",elevation:"5"},on:{click:t.nextVideo}},[i(m,{staticStyle:{transform:"rotate(180deg)"}},[t._v(" "+t._s(t.icons.mdiArrowLeft)+" ")])],1),i(f,{staticClass:"elevation-3"}),i("VirtualVideoCardList",{style:{height:102*Math.min(t.videos.length,6)+"px"},attrs:{videos:t.videos,playlist:t.playlist,"include-channel":"",horizontal:"","ignore-block":"","active-index":t.value}})]:t._e(),t.hasError?i(c,[t._v(" Error loading playlist, does it exist? ")]):t._e()],2)],1)},C=[];_._withStripped=!0;const P={};var w=h(b,_,C,!1,O,null,null,null);function O(t){for(let e in P)this[e]=P[e]}w.options.__file="src/components/watch/WatchPlaylist.vue";const j=function(){return w.exports}();export{j as default};