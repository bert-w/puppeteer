"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3568],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=i(r),d=a,f=s["".concat(u,".").concat(d)]||s[d]||c[d]||p;return r?n.createElement(f,l(l({ref:t},m),{},{components:r})):n.createElement(f,l({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,l=new Array(p);l[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var i=2;i<p;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},4459:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return i},toc:function(){return m},default:function(){return s}});var n=r(87462),a=r(63366),p=(r(67294),r(3905)),l=["components"],o={},u=void 0,i={unversionedId:"puppeteer.frame.__eval",id:"puppeteer.frame.__eval",isDocsHomePage:!1,title:"puppeteer.frame.__eval",description:"Home &gt; puppeteer &gt; Frame &gt; $$eval",source:"@site/docs/puppeteer.frame.__eval.md",sourceDirName:".",slug:"/puppeteer.frame.__eval",permalink:"/puppeteer/docs/next/puppeteer.frame.__eval",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/docs/puppeteer.frame.__eval.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"puppeteer.frame.__",permalink:"/puppeteer/docs/next/puppeteer.frame.__"},next:{title:"puppeteer.frame._eval",permalink:"/puppeteer/docs/next/puppeteer.frame._eval"}},m=[{value:"Frame.$$eval() method",id:"frameeval-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]}],c={toc:m};function s(e){var t=e.components,r=(0,a.Z)(e,l);return(0,p.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.frame"},"Frame")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.frame.__eval"},"$$eval")),(0,p.kt)("h2",{id:"frameeval-method"},"Frame.$$eval() method"),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"$$eval<ReturnType>(selector: string, pageFunction: (elements: Element[], ...args: unknown[]) => ReturnType | Promise<ReturnType>, ...args: SerializableOrJSHandle[]): Promise<WrapElementHandle<ReturnType>>;\n")),(0,p.kt)("h2",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"selector"),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null},"the selector to query for")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"pageFunction"),(0,p.kt)("td",{parentName:"tr",align:null},"(elements: Element","[","]",", ...args: unknown","[","]",") =",">"," ReturnType ","|"," Promise","<","ReturnType",">"),(0,p.kt)("td",{parentName:"tr",align:null},"the function to be evaluated in the frame's context")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"args"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.serializableorjshandle"},"SerializableOrJSHandle"),"[","]"),(0,p.kt)("td",{parentName:"tr",align:null},"additional arguments to pass to ",(0,p.kt)("code",null,"pageFuncton"))))),(0,p.kt)("b",null,"Returns:"),(0,p.kt)("p",null,"Promise","<",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.wrapelementhandle"},"WrapElementHandle"),"<","ReturnType",">",">"),(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,"This method runs ",(0,p.kt)("inlineCode",{parentName:"p"},"Array.from(document.querySelectorAll(selector))")," within the frame and passes it as the first argument to ",(0,p.kt)("inlineCode",{parentName:"p"},"pageFunction"),"."),(0,p.kt)("p",null,"If ",(0,p.kt)("inlineCode",{parentName:"p"},"pageFunction")," returns a Promise, then ",(0,p.kt)("inlineCode",{parentName:"p"},"frame.$$eval")," would wait for the promise to resolve and return its value."),(0,p.kt)("h2",{id:"example"},"Example"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"const divsCounts = await frame.$$eval('div', divs => divs.length);\n")))}s.isMDXComponent=!0}}]);