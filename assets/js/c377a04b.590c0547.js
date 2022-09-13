"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[971],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={id:"index",title:"collections-commons",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},s=void 0,i={unversionedId:"index",id:"index",title:"collections-commons",description:"\u26a0 THIS PROJECT IS STILL IN DEVELOPMENT. WHILE IT'S DESIGNED AS A LIBRARY IT IS NOT RELEASED YET AND THERE'S NO GUARANTEE THAT IT WILL BE IN THE FUTURE.",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/collections-commons/docs/",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"index",title:"collections-commons",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},sidebar:"defaultSidebar",next:{title:"Table of contents",permalink:"/collections-commons/docs/modules"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"What&#39;s in this library?",id:"whats-in-this-library",level:2},{value:"Usage",id:"usage",level:2},{value:"Namespacing",id:"namespacing",level:3}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u26a0 THIS PROJECT IS STILL IN DEVELOPMENT. WHILE IT'S DESIGNED AS A LIBRARY IT IS NOT RELEASED YET AND THERE'S NO GUARANTEE THAT IT WILL BE IN THE FUTURE.\nALSO, IMPLEMENTATION STYLE AND DETAILS MAY STILL CHANGE.")),(0,o.kt)("h1",{id:"collections-commons-"},"collections-commons ",(0,o.kt)("a",{href:"https://www.github.com/JanMalch/collections-commons"},(0,o.kt)("img",{src:"https://raw.githubusercontent.com/JanMalch/collections-commons/master/.github/assets/logo.png",width:"90",height:"90",align:"right"}))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/collections-commons"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/collections-commons",alt:"npm"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://janmalch.github.io/collections-commons/"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/docs-available-success",alt:"documentation"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://bundlephobia.com/result?p=collections-commons"},(0,o.kt)("img",{parentName:"a",src:"https://badgen.net/bundlephobia/minzip/collections-commons",alt:"minified + gzip"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/JanMalch/collections-commons/actions?query=workflow%3ABuild"},(0,o.kt)("img",{parentName:"a",src:"https://github.com/JanMalch/collections-commons/workflows/Build/badge.svg",alt:"Build"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://codecov.io/gh/JanMalch/collections-commons"},(0,o.kt)("img",{parentName:"a",src:"https://codecov.io/gh/JanMalch/collections-commons/branch/master/graph/badge.svg",alt:"codecov"}))),(0,o.kt)("i",null,"Extensions, data structures, and utilities built on top of them, for your every-day needs."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install collections-commons\n")),(0,o.kt)("p",null,"Some classes extend ",(0,o.kt)("inlineCode",{parentName:"p"},"Map"),", which requires the browser to support es6 features."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://caniuse.com/es6"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Can%20I%20use...-~96%25-brightgreen",alt:"Can I use - 96%"}))),(0,o.kt)("h2",{id:"whats-in-this-library"},"What's in this library?"),(0,o.kt)("p",null,"This library main goal is to provide a toolbox for your every-day needs.\nAs such it provides a lot of different extensions to the data structures you already know and use\nlike Maps and Arrays. Beyond that, there a few custom data structures like ",(0,o.kt)("inlineCode",{parentName:"p"},"Queue")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Bag"),",\nand also utilities like ",(0,o.kt)("inlineCode",{parentName:"p"},"lazy")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"lateInit")," that built on top of these structures."),(0,o.kt)("p",null,"It is strongly recommended to enable strict TypeScript rules, especially null checks.\nFor example ",(0,o.kt)("inlineCode",{parentName:"p"},"getOrElse"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"getOrDefault"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"getOrThrow")," will make your life easier by explicitly handling missing keys in Maps,\ninstead of (not) doing ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," checks."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { getOrThrow, getInBounds } from 'collections-commons';\n\nconst map = new Map<number, string>();\nconst value: string = getOrThrow(map, 5); // throws because map has no value for 5\n\nconst array = ['0', '1', '2'];\nconst item: string = getInBounds(array, 5); // throws because index 5 is out of bounds\n")),(0,o.kt)("h3",{id:"namespacing"},"Namespacing"),(0,o.kt)("p",null,"If you prefer, you can create namespaces by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"import * as identifier")," syntax,\nwhich is still tree-shakable by all modern bundlers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import * as Extensions from 'collections-commons/extensions';\n\n// values are arrays, so this is considered a multi-value Map (no need for extra classes)\nconst map = new Map<string, number[]>([\n  ['a', [0, 1, 2]],\n  ['b', []],\n]);\nExtensions.addAll(map, 'a', [3, 4]); // addAll is an extension for multi-value Maps\nExtensions.setAll(map, [ // setAll works for any Map\n  ['b', [5, 6]],\n  ['c', [7, 8]],\n]);\nexpect(map.get('a')).toEqual([0, 1, 2, 3, 4]);\nexpect(map.get('b')).toEqual([5, 6]);\nexpect(map.get('c')).toEqual([7, 8]);\n")))}m.isMDXComponent=!0}}]);