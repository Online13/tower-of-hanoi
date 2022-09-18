function t(t,e,i){if(!e.has(t))throw new TypeError("attempted to "+i+" private field on non-instance");return e.get(t)}function e(t,e){return e.get?e.get.call(t):e.value}function i(i,n){return e(i,t(i,n,"get"))}function n(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function s(t,e,i){n(t,e),e.set(t,i)}function o(t,e,i){if(e.set)e.set.call(t,i);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=i}}function l(e,i,n){return o(e,t(e,i,"set"),n),n}function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}class a{async moveTo(t,e,i){this.object.style.transition=`transform ${a.DURATION}ms`;const n=-1*(a.global.parentHeight-a.global.intermediateHeight+20);await new Promise((e=>{const i=setTimeout((()=>{this.object.style.transform=`translate(\n                        calc(${this.current_stack} * var(--max-size-zone) + (var(--max-size-zone) / 2 - 50%)),\n                       ${n}px\n                    )`,e(null)}),a.DURATION);t.addEventListener("abort",(t=>{clearTimeout(i)}))})),await new Promise((i=>{const n=setTimeout((()=>{this.current_stack=e,i(null)}),a.DELAY);t.addEventListener("abort",(t=>{clearTimeout(n)}))})),await new Promise((i=>{const s=setTimeout((()=>{this.object.style.transform=`translate(\n                        calc(${e} * var(--max-size-zone) + (var(--max-size-zone) / 2 - 50%)),\n                        ${n}px\n                    )`,i(null)}),a.DURATION);t.addEventListener("abort",(t=>{clearTimeout(s)}))})),await new Promise((e=>{const i=setTimeout((()=>{e(null)}),a.DELAY);t.addEventListener("abort",(t=>{clearTimeout(i)}))})),await new Promise((n=>{const s=setTimeout((()=>{this.object.style.transform=`translate(\n                        calc(${e} * var(--max-size-zone) + (var(--max-size-zone) / 2 - 50%)),\n                        calc(var(--tuil-height) * ${-1*(i-1)})\n                    )`,n(null)}),a.DURATION);t.addEventListener("abort",(t=>{clearTimeout(s)}))}))}initPosition(t){this.object.style.transition=`transform ${a.DURATION}ms`,this.object.style.transform=`translate(\n                calc(${this.current_stack} * var(--max-size-zone) + (var(--max-size-zone) / 2 - 50%)),\n                calc(${-t} * var(--tuil-height))\n            )`}render(){const t=document.createElement("div");t.dataset.index=(this.id+1).toString(),t.dataset.stack=this.current_stack.toString(),t.classList.add("tuil");const e=a.COLORS[this.id%a.COLORS.length];return Object.assign(t.style,{backgroundColor:e,width:`calc(var(--max-size-zone) * ${(this.id+1)/(a.MAX+2)})`}),this.object=t,this.object}getHTMLElement(){return this.object}constructor(t,e){this.id=t,this.current_stack=e,this.object=void 0}}r(a,"global",{}),r(a,"COLORS",["rgb(244, 70, 70)","rgb(249, 255, 59)","rgb(19, 240, 136)","rgb(57, 134, 255)","rgb(255, 154, 23)"]),r(a,"DURATION",200),r(a,"DELAY",200),r(a,"MAX",0);var c=a,u=new WeakMap,h=new WeakMap,d=new WeakMap,m=new WeakMap,v=new WeakMap,g=new WeakMap;var b=class{display(){const t=i(this,u);var e,n,s,o,l,r;for(let o=0;o<t-1;o++)console.log(`${null!==(e=i(this,d)[0][t-1-o])&&void 0!==e?e:" "}    ${null!==(n=i(this,d)[1][t-1-o])&&void 0!==n?n:" "}    ${null!==(s=i(this,d)[2][t-1-o])&&void 0!==s?s:" "}`);console.log(`${null!==(o=i(this,d)[0][0])&&void 0!==o?o:"."}    ${null!==(l=i(this,d)[1][0])&&void 0!==l?l:"."}    ${null!==(r=i(this,d)[2][0])&&void 0!==r?r:"."}`),console.log("-----------")}async move(t,e){if(!i(this,v).aborted&&i(this,d)[t].length>0){let n=i(this,d)[t].pop();i(this,d)[e].push(n),await i(this,h)[n-1].moveTo(i(this,v),e,i(this,d)[e].length)}}async hanoi(t,e,n,s){i(this,v).aborted||0===t||(await this.hanoi(t-1,e,s,n),await this.move(e,n),await this.hanoi(t-1,s,n,e))}handleEvents(){const t=document.querySelector(".portal"),e=document.querySelector(".modal"),n=document.querySelector(".sidebar-setting"),s=document.querySelectorAll(".zone-item"),o=document.querySelector(".btn-info"),l=document.querySelector(".btn-close-about"),r=document.querySelector(".btn-solve"),a=document.querySelector(".btn-setting"),h=document.querySelector("#nbDiscInput"),v=document.querySelector("#nbDiscOutput"),b=document.querySelector("#durationInput"),y=document.querySelector("#durationOutput"),S=document.querySelector("#delayInput"),A=document.querySelector("#delayOutput");null==o||o.addEventListener("click",(e=>{null==t||t.classList.add("show")})),null==e||e.addEventListener("click",(t=>{t.stopPropagation()})),null==l||l.addEventListener("click",(e=>{null==t||t.classList.remove("show")})),null==t||t.addEventListener("click",(e=>{null==t||t.classList.remove("show")})),null==r||r.addEventListener("click",(t=>{this.init(),this.hanoi(i(this,u),0,2,1).then((()=>this.display))})),null==a||a.addEventListener("click",(t=>{null==n||n.classList.toggle("show")})),h.value=i(this,u).toString(),v.innerHTML=i(this,u).toString(),b.value=c.DURATION.toString(),y.innerHTML=c.DURATION.toString(),S.value=c.DELAY.toString(),A.innerHTML=c.DELAY.toString(),null==h||h.addEventListener("input",(t=>{i(this,m).abort();const e=h.value;v.innerHTML=e,c.MAX=+e,this.init(),this.storageService.set("@HANOI_MAX",c.MAX.toString())})),null==b||b.addEventListener("input",(t=>{const e=b.value;y.innerHTML=e,c.DURATION=+e,this.storageService.set("@HANOI_DURATION",c.DURATION.toString())})),null==S||S.addEventListener("input",(t=>{const e=S.value;A.innerHTML=e,c.DELAY=+e,this.storageService.set("@HANOI_DELAY",c.DELAY.toString())})),s.forEach(((t,e)=>{t.addEventListener("click",(t=>{if(console.log(e),null===i(this,g).from){var n;if(i(this,d)[e].length>0)i(this,g).from=e,null===(n=document.querySelector(`.zone-item.zone-${e+1}`))||void 0===n||n.classList.add("from")}else{const t=i(this,d)[i(this,g).from],n=i(this,d)[e];var s;if(0===n.length||t[t.length-1]<n[n.length-1])i(this,g).to=e,null===(s=document.querySelector(`.zone-item.zone-${e+1}`))||void 0===s||s.classList.add("to"),this.move(i(this,g).from,i(this,g).to).then((()=>{var t,e;null===(t=document.querySelector(`.zone-item.zone-${i(this,g).from+1}`))||void 0===t||t.classList.remove("from"),null===(e=document.querySelector(`.zone-item.zone-${i(this,g).to+1}`))||void 0===e||e.classList.remove("to"),i(this,g).from=null,i(this,g).to=null}))}}))}))}init(){l(this,u,c.MAX),l(this,m,new AbortController),l(this,v,i(this,m).signal);const t=document.querySelector(".content");t.style.height=`calc(var(--tuil-height) * ${i(this,u)+5} + ${c.global.intermediateHeight}px )`;const e=document.querySelector(".zone-list"),n=document.querySelector(".zone-to-select");e.style.height=`calc(var(--tuil-height) * ${i(this,u)+5})`,n.style.height=`calc(var(--tuil-height) * ${i(this,u)+5})`,n.style.top=`${c.global.intermediateHeight}px`,c.global.parentHeight=t.getBoundingClientRect().height;for(const e of i(this,h))t.removeChild(e.getHTMLElement());l(this,d,[]),l(this,h,[]);for(let t=0;t<3;t++)i(this,d)[t]=[];for(let t=0;t<i(this,u);t++)i(this,d)[0][t]=i(this,u)-t;for(let e=0;e<i(this,u);e++)i(this,h).push(new c(e,0)),t.appendChild(i(this,h)[e].render()),i(this,h)[e].initPosition(i(this,u)-e-1)}constructor(t){s(this,u,{writable:!0,value:void 0}),s(this,h,{writable:!0,value:void 0}),s(this,d,{writable:!0,value:void 0}),s(this,m,{writable:!0,value:void 0}),s(this,v,{writable:!0,value:void 0}),s(this,g,{writable:!0,value:void 0}),this.storageService=t,l(this,d,[]),l(this,h,[]),c.global.intermediateHeight=80,c.MAX=+this.storageService.get("@HANOI_MAX")||5,c.DURATION=+this.storageService.get("@HANOI_DURATION"),c.DELAY=+this.storageService.get("@HANOI_DELAY"),l(this,u,c.MAX),l(this,m,new AbortController),l(this,v,i(this,m).signal),l(this,g,{from:null,to:null})}};var y=Object.freeze(new class{set(t,e){let i=null;i=t in this.sessionKey?sessionStorage:localStorage,i.setItem(t,e)}get(t){let e=null;return e=t in this.sessionKey?sessionStorage:localStorage,null===e.getItem(t)?"":e.getItem(t)}constructor(){r(this,"sessionKey",{"@HANOI_SEEN":null}),r(this,"localKey",{"@HANOI_DURATION":null,"@HANOI_DELAY":null,"@HANOI_MAX":null})}});window.addEventListener("load",(t=>{if(y.get("@HANOI_SEEN").length>0)setTimeout((()=>{var t;null===(t=document.querySelector(".loader"))||void 0===t||t.classList.add("hidden"),y.set("@HANOI_SEEN","1")}),2e3);else{const t=document.querySelector(".loader");t.style.transition="none",t.classList.add("hidden")}const e=new b(y);e.init(),e.handleEvents()}));
//# sourceMappingURL=index.47d0ff16.js.map
