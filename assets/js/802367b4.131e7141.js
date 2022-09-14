"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[982],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,k=m["".concat(o,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={id:"data_structures.Queue",title:"Class: Queue<T>",sidebar_label:"Queue",custom_edit_url:null},i=void 0,s={unversionedId:"classes/data_structures.Queue",id:"classes/data_structures.Queue",title:"Class: Queue<T>",description:"data-structures.Queue",source:"@site/docs/classes/data_structures.Queue.md",sourceDirName:"classes",slug:"/classes/data_structures.Queue",permalink:"/collections-commons/docs/classes/data_structures.Queue",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"data_structures.Queue",title:"Class: Queue<T>",sidebar_label:"Queue",custom_edit_url:null},sidebar:"defaultSidebar",previous:{title:"ObservableMap",permalink:"/collections-commons/docs/classes/data_structures.ObservableMap"},next:{title:"ReadonlyMapByDelegation",permalink:"/collections-commons/docs/classes/data_structures.ReadonlyMapByDelegation"}},o={},p=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Implements",id:"implements",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"toStringTag",id:"tostringtag",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"items",id:"items",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"Accessors",id:"accessors",level:2},{value:"isEmpty",id:"isempty",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"size",id:"size",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"Methods",id:"methods",level:2},{value:"iterator",id:"iterator",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Implementation of",id:"implementation-of",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"add",id:"add",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"addAll",id:"addall",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"peek",id:"peek",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"poll",id:"poll",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"toJSON",id:"tojson",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"Defined in",id:"defined-in-10",level:4}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/collections-commons/docs/modules/data_structures"},"data-structures"),".Queue"),(0,r.kt)("p",null,"An interface that marks implementing classes and objects as serializable with ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON.stringify"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"See"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#tojson_behavior"},"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#tojson_behavior")),(0,r.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T")),(0,r.kt)("td",{parentName:"tr",align:"left"},"the type of the value to serialize via ",(0,r.kt)("inlineCode",{parentName:"td"},"JSON.stringify"),".")))),(0,r.kt)("h2",{id:"implements"},"Implements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Iterable"),"<",(0,r.kt)("inlineCode",{parentName:"li"},"T"),">"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/collections-commons/docs/interfaces/types.JsonSerializable"},(0,r.kt)("inlineCode",{parentName:"a"},"JsonSerializable")),"<",(0,r.kt)("inlineCode",{parentName:"li"},"T"),"[]",">")),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new Queue"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"items?"),")"),(0,r.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T"))))),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"items")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T"),"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"[]"))))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/JanMalch/collections-commons/blob/9d9613c/src/data-structures/queue.ts#L13"},"src/data-structures/queue.ts:13")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"tostringtag"},"[toStringTag]"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"[toStringTag]"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"Queue"')),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/JanMalch/collections-commons/blob/9d9613c/src/data-structures/queue.ts#L4"},"src/data-structures/queue.ts:4")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"items"},"items"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"items"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"T"),"[] = ",(0,r.kt)("inlineCode",{parentName:"p"},"[]")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/JanMalch/collections-commons/blob/9d9613c/src/data-structures/queue.ts#L13"},"src/data-structures/queue.ts:13")),(0,r.kt)("h2",{id:"accessors"},"Accessors"),(0,r.kt)("h3",{id:"isempty"},"isEmpty"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"isEmpty"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/JanMalch/collections-commons/blob/9d9613c/src/data-structures/queue.ts#L9"},"src/data-structures/queue.ts:9")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"size"},"size"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"size"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/JanMalch/collections-commons/blob/9d9613c/src/data-structures/queue.ts#L5"},"src/data-structures/queue.ts:5")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"iterator"},"[iterator]"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"[iterator]"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Iterator"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),">"),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Iterator"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),">"),(0,r.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,r.kt)("p",null,"Iterable.","_","_","@iterator@14"),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/JanMalch/collections-commons/blob/9d9613c/src/data-structures/queue.ts#L35"},"src/data-structures/queue.ts:35")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"add"},"add"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"add"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"item"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"item")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T"))))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/JanMalch/collections-commons/blob/9d9613c/src/data-structures/queue.ts#L23"},"src/data-structures/queue.ts:23")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"addall"},"addAll"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"addAll"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"items"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"items")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T"),"[]")))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/JanMalch/collections-commons/blob/9d9613c/src/data-structures/queue.ts#L27"},"src/data-structures/queue.ts:27")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"peek"},"peek"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"peek"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"T")),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"T")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/JanMalch/collections-commons/blob/9d9613c/src/data-structures/queue.ts#L15"},"src/data-structures/queue.ts:15")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"poll"},"poll"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"poll"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"T")),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"T")),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/JanMalch/collections-commons/blob/9d9613c/src/data-structures/queue.ts#L19"},"src/data-structures/queue.ts:19")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tojson"},"toJSON"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"toJSON"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"T"),"[]"),(0,r.kt)("p",null,"Returns a value that represents this object and is also serializable with ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON.stringify"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"See"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#tojson_behavior"},"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#tojson_behavior")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class Queue<T> implements JsonSerializable<T[]> {\n  private readonly items: T[];\n  toJSON(): T[] {\n    return this.items.slice(0);\n  }\n}\n")),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"T"),"[]"),(0,r.kt)("p",null,"the value to serialize"),(0,r.kt)("h4",{id:"implementation-of-1"},"Implementation of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/collections-commons/docs/interfaces/types.JsonSerializable"},"JsonSerializable"),".",(0,r.kt)("a",{parentName:"p",href:"/collections-commons/docs/interfaces/types.JsonSerializable#tojson"},"toJSON")),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/JanMalch/collections-commons/blob/9d9613c/src/data-structures/queue.ts#L31"},"src/data-structures/queue.ts:31")))}u.isMDXComponent=!0}}]);