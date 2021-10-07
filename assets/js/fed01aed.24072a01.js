"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[39767],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(i,".").concat(m)]||d[m]||s[m]||p;return r?n.createElement(f,u(u({ref:t},c),{},{components:r})):n.createElement(f,u({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,u=new Array(p);u[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var l=2;l<p;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},60377:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var n=r(87462),a=r(63366),p=(r(67294),r(3905)),u=["components"],o={},i=void 0,l={unversionedId:"puppeteer.registercustomqueryhandler",id:"version-9.1.1/puppeteer.registercustomqueryhandler",isDocsHomePage:!1,title:"puppeteer.registercustomqueryhandler",description:"Home &gt; puppeteer &gt; registerCustomQueryHandler",source:"@site/versioned_docs/version-9.1.1/puppeteer.registercustomqueryhandler.md",sourceDirName:".",slug:"/puppeteer.registercustomqueryhandler",permalink:"/puppeteer/docs/9.1.1/puppeteer.registercustomqueryhandler",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-9.1.1/puppeteer.registercustomqueryhandler.md",version:"9.1.1",frontMatter:{}},c=[{value:"registerCustomQueryHandler() function",id:"registercustomqueryhandler-function",children:[]},{value:"Parameters",id:"parameters",children:[]}],s={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,u);return(0,p.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/index"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer"},"puppeteer")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer.registercustomqueryhandler"},"registerCustomQueryHandler")),(0,p.kt)("h2",{id:"registercustomqueryhandler-function"},"registerCustomQueryHandler() function"),(0,p.kt)("p",null,"Registers a ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer.customqueryhandler"},"custom query handler"),". After registration, the handler can be used everywhere where a selector is expected by prepending the selection string with ",(0,p.kt)("inlineCode",{parentName:"p"},"<name>/"),". The name is only allowed to consist of lower- and upper case latin letters."),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare function registerCustomQueryHandler(name: string, queryHandler: CustomQueryHandler): void;\n")),(0,p.kt)("h2",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"name"),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null},"The name that the custom query handler will be registered under.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"queryHandler"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/9.1.1/puppeteer.customqueryhandler"},"CustomQueryHandler")),(0,p.kt)("td",{parentName:"tr",align:null},"The ",(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/9.1.1/puppeteer.customqueryhandler"},"custom query handler")," to register.")))),(0,p.kt)("b",null,"Returns:"),(0,p.kt)("p",null,"void"))}d.isMDXComponent=!0}}]);