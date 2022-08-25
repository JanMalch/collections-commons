"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[450],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(r),b=n,u=d["".concat(s,".").concat(b)]||d[b]||m[b]||i;return r?a.createElement(u,l(l({ref:t},c),{},{components:r})):a.createElement(u,l({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9814:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const i={id:"ObservableMapEmits",title:"Interface: ObservableMapEmits<K, V>",sidebar_label:"ObservableMapEmits",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"interfaces/ObservableMapEmits",id:"interfaces/ObservableMapEmits",title:"Interface: ObservableMapEmits<K, V>",description:"Type parameters",source:"@site/docs/interfaces/ObservableMapEmits.md",sourceDirName:"interfaces",slug:"/interfaces/ObservableMapEmits",permalink:"/collections-commons/docs/interfaces/ObservableMapEmits",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ObservableMapEmits",title:"Interface: ObservableMapEmits<K, V>",sidebar_label:"ObservableMapEmits",sidebar_position:0,custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"MapLike",permalink:"/collections-commons/docs/interfaces/MapLike"},next:{title:"ObservableMapEmitsFiltered",permalink:"/collections-commons/docs/interfaces/ObservableMapEmitsFiltered"}},s={},p=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"event",id:"event",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"map",id:"map",level:3},{value:"Defined in",id:"defined-in-1",level:4}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"K"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"V"))))),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"event"},"event"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"event"),": ",(0,n.kt)("a",{parentName:"p",href:"/collections-commons/docs/modules#observablemapevent"},(0,n.kt)("inlineCode",{parentName:"a"},"ObservableMapEvent")),"<",(0,n.kt)("inlineCode",{parentName:"p"},"K"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"V"),">"),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/JanMalch/collections-commons/blob/202bfc0/src/data-structures/maps/observable.ts#L27"},"src/data-structures/maps/observable.ts:27")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"map"},"map"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"map"),": ",(0,n.kt)("a",{parentName:"p",href:"/collections-commons/docs/classes/ObservableMap"},(0,n.kt)("inlineCode",{parentName:"a"},"ObservableMap")),"<",(0,n.kt)("inlineCode",{parentName:"p"},"K"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"V"),">"),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/JanMalch/collections-commons/blob/202bfc0/src/data-structures/maps/observable.ts#L26"},"src/data-structures/maps/observable.ts:26")))}m.isMDXComponent=!0}}]);