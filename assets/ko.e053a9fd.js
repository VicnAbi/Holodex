import{b_ as e,bZ as t}from"./vendor.70269bfe.js";function _(e,t){for(var _=0;_<t.length;_++){const r=t[_];for(const t in r)if("default"!==t&&!(t in e)){const _=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,_.get?_:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(e)}var r={exports:{}};const o=r.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var _=t(e),r={name:"ko",weekdays:"일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),weekdaysShort:"일_월_화_수_목_금_토".split("_"),weekdaysMin:"일_월_화_수_목_금_토".split("_"),months:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),monthsShort:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),ordinal:function(e){return e},formats:{LT:"A h:mm",LTS:"A h:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY년 MMMM D일",LLL:"YYYY년 MMMM D일 A h:mm",LLLL:"YYYY년 MMMM D일 dddd A h:mm",l:"YYYY.MM.DD.",ll:"YYYY년 MMMM D일",lll:"YYYY년 MMMM D일 A h:mm",llll:"YYYY년 MMMM D일 dddd A h:mm"},meridiem:function(e){return e<12?"오전":"오후"},relativeTime:{future:"%s 후",past:"%s 전",s:"몇 초",m:"1분",mm:"%d분",h:"한 시간",hh:"%d시간",d:"하루",dd:"%d일",M:"한 달",MM:"%d달",y:"일 년",yy:"%d년"}};return _.default.locale(r,null,!0),r}(e.exports),n=Object.freeze(_({__proto__:null,[Symbol.toStringTag]:"Module",default:o},[r.exports]));export{n as k};